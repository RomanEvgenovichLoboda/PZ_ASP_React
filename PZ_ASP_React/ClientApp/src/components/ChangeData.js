import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import { Product } from './Product';

export class ChangeData extends Component {
  static displayName = ChangeData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], product:{id:0,name:"",price:0,header:"",description:"",imageUrl:""}, loading: true };
    this.addProduct = this.addProduct.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changeHeader = this.changeHeader.bind(this);
    this.changeDescript = this.changeDescript.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.populateData();
  }
  async addProduct(){
    // alert(this.state.product.imageUrl);
    const data = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
      //   id:0,
      //   name: this.state.product.name,
      //   price: this.state.product.price,
      //   header: this.state.product.header,
      //   description: this.state.product.descript,
      // })

       body: JSON.stringify(this.state.product)
    };
    console.log(data);
    await fetch('product/PostProduct',data);
    window.location.reload();
    
  }
  changeName(event){
    // this.setState({...this.state.product,mame: event.target.value});
    this.setState(prevState => ({
      product: {                   // object that we want to update
          ...prevState.product,    // keep all other key-value pairs
          name: event.target.value       // update the value of specific key
      }
  }))
  }
  changePrice(event){
    // this.setState({...this.state.product,mame: event.target.value});
    this.setState(prevState => ({
      product: {                   // object that we want to update
          ...prevState.product,    // keep all other key-value pairs
          price: event.target.value       // update the value of specific key
      }
  }))
  }
  changeHeader(event){
    // this.setState({...this.state.product,mame: event.target.value});
    this.setState(prevState => ({
      product: {                   // object that we want to update
          ...prevState.product,    // keep all other key-value pairs
          header: event.target.value       // update the value of specific key
      }
  }))
  }
  changeDescript(event){
    // this.setState({...this.state.product,mame: event.target.value});
    this.setState(prevState => ({
      product: {                   // object that we want to update
          ...prevState.product,    // keep all other key-value pairs
          description: event.target.value       // update the value of specific key
      }
  }))
  }
  changeUrl(event){
    // this.setState({...this.state.product,mame: event.target.value});
    this.setState(prevState => ({
      product: {                   // object that we want to update
          ...prevState.product,    // keep all other key-value pairs
          imageUrl: event.target.value       // update the value of specific key
      }
  }))
  }

  async search(){
    let name = document.getElementById('srch').value;
    let response= null;
    // alert(name);
    if(name!=""){
      response = await fetch('product/GetByName?name=' + name,{method: 'GET'});
    }
    else{
      response = await fetch('product/GetAll');
    }
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }

  static renderForecastsTable(forecasts) {
    return (
      <div className=' d-flex flex-wrap justify-content-center'>
        
        {forecasts.map(forecast =>
            <Product product={forecast} key={forecast.id}></Product>
          )}
      </div>
     
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ChangeData.renderForecastsTable(this.state.forecasts);

    return (
      <div className='row'>
        <h1>Add and Change Products</h1>
        <p>This component demonstrates fetching data from the server.</p>
        <div className='card m-1 p-2 shadow font-monospace'>
          <label>Name</label>
          <input className='form-control' onChange={this.changeName} value={this.state.product.name} name='name'></input>
          <label>Price</label>
          <input className='form-control' type='number' onChange={this.changePrice} value={this.state.product.price} name ='price' ></input>
          <label>Header</label>
          <input className='form-control' onChange={this.changeHeader} value={this.state.product.header} name ='hdr'></input>
          <label>Descript</label>
          <input className='form-control' onChange={this.changeDescript} value={this.state.product.description} name ='dscr'></input>
          <label>ImgUrl</label>
          <input className='form-control' onChange={this.changeUrl} value={this.state.product.imageUrl} name ='url'></input>
          <div className='w-100 d-flex justify-content-center'>
          <button className='btn btn-outline-primary m-3 w-50' onClick={this.addProduct}>Add</button>
          </div>
          
        </div>
        <div className='w-100 d-flex justify-content-center m-3'>
            <input onChange={this.search} id='srch' className=' shadow form-control w-75' placeholder='Search By Name'></input>
          </div>
        {contents}
      </div>
    );
  }

 

  async populateData() {
    const response = await fetch('product/GetAll');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
