import React, { Component } from 'react';

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
  }

  componentDidMount() {
    this.populateWeatherData();
  }
  addProduct(){
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
    fetch('product/PostProduct',data);

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
  static renderForecastsTable(forecasts) {
    return (
      <div>
        {forecasts.map(forecast =>
            <div key={forecast.id}>
              {/* <td>{forecast.id}</td> */}
              <input value={forecast.name}></input>
              <input value={forecast.price}></input>
              <input value={forecast.header}></input>
              <input value={forecast.description}></input>
              <input value={forecast.imageUrl}></input>
            </div>
          )}



      </div>
      // <table className="table table-striped" aria-labelledby="tableLabel">
      //   <thead>
      //     <tr>
      //     <th>Id</th>
      //       <th>Name</th>
      //       <th>Price</th>
      //       <th>Header</th>
      //       <th>Discript</th>
      //       <th>ImageUrl</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {forecasts.map(forecast =>
      //       <tr key={forecast.id}>
      //         <td>{forecast.id}</td>
      //         <td>{forecast.name}</td>
      //         <td>{forecast.price}</td>
      //         <td>{forecast.header}</td>
      //         <td>{forecast.description}</td>
      //         <td>{forecast.imageUrl}</td>
      //       </tr>
      //     )}
      //   </tbody>
      // </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ChangeData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <div>
          <label>Name</label>
          <input onChange={this.changeName} value={this.state.product.name} name='name'></input>
          <label>Price</label>
          <input type='number' onChange={this.changePrice} value={this.state.product.price} name ='price' ></input>
          <label>Header</label>
          <input onChange={this.changeHeader} value={this.state.product.header} name ='hdr'></input>
          <label>Descript</label>
          <input onChange={this.changeDescript} value={this.state.product.description} name ='dscr'></input>
          <label>ImgUrl</label>
          <input onChange={this.changeUrl} value={this.state.product.imageUrl} name ='url'></input>
          <button onClick={this.addProduct}>Add</button>
        </div>
        {contents}
      </div>
    );
  }

 

  async populateWeatherData() {
    const response = await fetch('product/GetAll');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
