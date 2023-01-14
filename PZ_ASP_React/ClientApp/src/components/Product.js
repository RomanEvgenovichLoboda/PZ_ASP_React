import React, { Component } from 'react';
import '../css/bootstrap.min.css';

export class Product extends Component{
    static displayName = Product.name;

    constructor(props) {
        super(props);
        this.state = { product: props.product};
        this.update = this.update.bind(this);
        this.dellete = this.dellete.bind(this);
    }

    update(){
        this.state = { product: {     
            id: this.state.product.id,
            name: document.getElementById('nm').value, // update the value of specific key
            price: document.getElementById('pc').value,
            header: document.getElementById('hr').value,
            description: document.getElementById('dn').value,
            imageUrl: document.getElementById('url').value
        }};
        console.log(this.state.product);
        const data = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.product)
        };

        fetch('product/UpdateProduct',data);
    }

    dellete(){
        fetch('product/DelleteProduct?id=' + this.state.product.id,{method: 'DELETE'});
        window.location.reload();
    }

    render(){
        return(
            <div className='card d-inline-flex m-1 p-2 font-monospace'>
                <input id='nm' className='form-control m-1' defaultValue={this.state.product.name}></input>
                <input id='pc' className='form-control m-1' type='number' defaultValue={this.state.product.price}></input>
                <input id='hr' className='form-control m-1'  onChange={this.changeHeader} defaultValue={this.state.product.header}></input>
                <input id='dn' className='form-control m-1' defaultValue={this.state.product.description}></input>
                <input id='url' className='form-control m-1' defaultValue={this.state.product.imageUrl}></input>
                <button onClick={this.update} className='btn btn-outline-primary mt-2'>Edit</button>
                <button onClick={this.dellete} className='btn btn-outline-danger mt-2'>Dell</button>

            </div>
        );
    }




}