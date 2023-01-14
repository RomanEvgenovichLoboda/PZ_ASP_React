import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <div >
        {forecasts.map(forecast =>
            <div className='card d-inline-block m-2 p-2 font-monospace text-bg-dark bg-opacity-75'  key={forecast.id}>
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
        <p>This component demonstrates fetching data from the server.</p>
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
