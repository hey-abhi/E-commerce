import React, { Component } from 'react'
import { Row} from 'antd'
import Productdesign from './Productdesign'
import './productdesign.css'

export class Allproducts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            
                <Row gutter={24,24}>
                       { this.props.products.map(product => <Productdesign product={product} key={product.id} className="c2" />) }
                </Row>
                
            
        )
    }
}

export default Allproducts
