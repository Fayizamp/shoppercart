import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Productcol({product , getCount}) {
    //  console.log(product);
     
    
    
     
  return (
    <Col md={6} lg={4}className='ml-3 mt-4 cont'>
                <Card style={{ width: '18rem' }}>
                    
                    <Card.Img variant="top" src= {product.image} className='image'/>
                   
                    <Card.Body>
                        <Card.Title>
                            {product.title}
                        </Card.Title>
                        <h4>
                            $ {product.price}
                        </h4>
                        <Button variant="primary" as = {Link} to={`/productdetails/${product.id}`}> Detail</Button>
                        <Button variant="primary" onClick={getCount}> Add Cart</Button>
                    </Card.Body>
                </Card>               
    </Col>
  )
}

export default Productcol