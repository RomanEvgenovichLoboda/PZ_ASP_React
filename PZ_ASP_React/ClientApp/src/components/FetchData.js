import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.populateWeatherData();
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
            <div className='card m-2 p-4 font-monospace shadow'  key={forecast.id}>
              <img className='card-img-top'  style={{width: '150px',height: '200px'}} src={forecast.imageUrl}></img>
              <p>{forecast.name}</p>
              <p>{forecast.price} hrn</p>
              <p>{forecast.header}</p>
              <p>{forecast.description}</p>
              <button onClick={this.update} className='btn btn-outline-warning w-100'>Buy</button>
            </div>
          )}
      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1>Products</h1>
        <div className='w-100 d-flex s justify-content-center m-3'>
          <input onChange={this.search} id='srch' className=' form-control w-75 shadow' placeholder='Search By Name'></input>
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
