import axios from 'axios'
import React, { Component } from 'react'
import Allproducts from './Allproducts'


export class Products extends Component {
    state = {
         products : []
    }
    constructor(props) {
        super(props)
    
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            this.setState({
                products : res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <Allproducts products = {this.state.products} />
            </div>
        )
    }
}

export default Products;
