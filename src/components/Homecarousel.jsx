import React from 'react'
import { Carousel } from 'react-bootstrap'

function Homecarousel() {
  return (
    <div>
        <Carousel>
    <Carousel.Item>
      <img src="https://c.pxhere.com/images/dd/fb/32f6e4c9eff8c290ca3466946ce7-1595236.jpg!d" className='w-100' alt="" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://img3.goodfon.com/wallpaper/nbig/4/2a/electronic-circuits.jpg" className='w-100' alt="" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://www.epicvibesng.com/wp-content/uploads/2017/06/fut.jpg" className='w-100' alt="" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Homecarousel