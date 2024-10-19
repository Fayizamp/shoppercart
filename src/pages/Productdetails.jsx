import React from 'react'
import { Carousel, Table } from 'react-bootstrap'
import "./Productdetails.css"
import { useParams } from 'react-router-dom'

function Productdetails({getcount}) {

    const param = useParams();
    const {id} = param

    //  const {id} = useParams();
     console.log(id);
     
  return (
    
    <div className='container'>
        <div className='w-30 m-10 img-cont' >
        <Carousel>
      <Carousel.Item>
        <img src="https://sourcing-media.hktdc.com/product-original//e9aa4dc1f9fe4587a56c9a3f6a61b588.webp?background=white&width=450&height=450&mode=cover&background=white" alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://sourcing-media.hktdc.com/product-original//f401678e70b844a2824c9b468dd91e78.webp?background=white&width=450&height=450&mode=cover&background=white" alt="" />
      </Carousel.Item>
    </Carousel>
        </div>

        <div className="det-cont">
            <h2>Mobicr.Com Mobicr Screen Protector Compatible For Apple Iphone 16 Pro [ Pack Of 2 ] With Easy Installation Kit - Thermoplastic Elastomers</h2>
            {/* <a href="#">Brand: </a> */}
            <div className="line mt-3 mb-3"></div>
            <div className="table">
              <table >
                <tbody>
                 <tr>
                    <td className='span'>Brand</td>
                    <td>Jacob</td>
                </tr>
                
                <tr>
                    <td className='span'>Compatible Devices</td>
                    <td>Cellphone</td>
                </tr>
                <tr>
                    <td className='span'>Material</td>
                    <td>Thermoplastic Elastomers</td>
                </tr>
                <tr>
                    <td className='span'>Item Hardness</td>
                    <td>9H</td>
                </tr>
                <tr>
                    <td className='span'>Compatible Phone Models</td>
                    <td>iPhone 16 Pro</td>
                </tr>
                <tr>
                    <td className='span'>Item Hardness</td>
                    <td>9H Surface Hardness</td>
                </tr>
                <tr>
                    <td className='span'>Item Hardness</td>
                    <td>Glossy</td>
                </tr>
                </tbody>
                </table>
                <div className="line mt-3 mb-3"></div>
                <div className="details">
                    <h5>About this item</h5>
                    <ul>
                        <li>9H Hardness & Shatterproof</li>
                        <li>Phone Case Friendly</li>
                        <li>Easy to Install:</li>
                        <li>Additional features: Anti dust protection, Anti-Glare, Touch sensitive</li>
                    </ul>
                    <button onClick={getcount}>ADD CART</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productdetails