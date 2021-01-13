import { Col, Card } from 'antd'
import React, { Component } from 'react'
import './productdesign.css'

export class Productdesign extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { Meta } = Card;
        return (
            <Col span={4} >
                    <Card className="c2" hoverable>
                        <img alt="example" src={this.props.product.image} className="c1" />
                        <p><b>{this.props.product.title}</b></p>
                        <p className="c3"><b>price : {this.props.product.price}$</b></p>

                    </Card>
            </Col>

        )
    }
}

export default Productdesign
