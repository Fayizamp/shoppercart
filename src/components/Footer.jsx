import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Footer.css"

function Footer() {
  return (
    <Container fluid className='bgColor'>
        <Row>
            <Col className='text-center align' >
              copyright @ 2024
            </Col>
        </Row>
    </Container>
  )
}

export default Footer