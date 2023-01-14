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
      <div className='bg-dark'>
        {forecasts.map(forecast =>
            <div className='card d-inline-block m-2 p-2 font-monospace'  key={forecast.id}>
              {/* <td>{forecast.id}</td> */}
              {/* <div className='card d-inline-flex m-1 p-2 font-monospace'> */}
              <img className='card-img-top'  style={{width: '150px',height: '200px'}} src={forecast.imageUrl}></img>
              <p>{forecast.name}</p>
              <p>{forecast.price}</p>
              <p>{forecast.header}</p>
              <p>{forecast.description}</p>
              {/* <p>{forecast.imageUrl}</p> */}
              {/* <button className='btn btn-outline-primary'>Edit</button> */}

              {/* </div> */}
              
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
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tableLabel">Weather forecast</h1>
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
