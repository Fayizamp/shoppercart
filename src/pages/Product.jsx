import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Productcol from '../components/Productcol';
import { useSelector } from 'react-redux';

function Product({ getCount}) {
    // console.log(product); 
    const product = useSelector((state)  => state.products.data)

  return (
    <div>
        <Container>
            <Row>
                {product.map((pro) => (
                    <Productcol product = {pro} getCount = {getCount} />
                ))}      
            </Row>
        </Container>
     
    </div>
  )
}

export default Product