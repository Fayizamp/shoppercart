import React from 'react'
import Homecarousel from '../components/Homecarousel'
import Product from './Product'
import { useSelector } from 'react-redux'
// import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function Home({getCount}) {

    const product = useSelector((state)  => state.products.data)

  return (
    <div>
        <Homecarousel />
        <Product product = {product}  getCount= {getCount} />
       
    </div>
  )
}

export default Home