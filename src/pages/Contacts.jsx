import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Contact.css'

function Contacts() {

  const [fullname,setFullname]=useState('');
  const [mobile,setMobile] = useState('');
  const [message,setMessage] =useState('');

  const handleformsubmit = (e)=>{
    e.preventDefault();

    const formData = {
      fullname,
      mobile,
      message
    }
    console.log(formData);
  }
  return (
   <Container className=''>
      <Row>
        <Col md ={6}>
            Google Map
        </Col>
        <Col md={6} >
          <h4>
            Get in touch with us
          </h4>
          <form onSubmit={handleformsubmit}>
            <label htmlFor='fullname'>Fullname:</label><br/>
            
            <input
              type="text" 
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <label htmlFor='message'>phone :</label><br />
            <input
              type='text'
              id='mobile'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            /><br />
            <label htmlFor='message'>Message:</label><br />
            <input
              type='text'
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            /><br />

            {/*
            <input type = "text" id='fullname' onKeyUp={(event)=>setFullname(event.target.value)} /><br/> 
            <label htmlFor='mobile'>Mobile:</label><br/>
            <input type = "text" id='mobile' onKeyUp={(event)=>setMobile(event.target.value)}/><br/>
            <label htmlFor='mobile'>Message:</label><br/>
            <input type="text"id ="message " onKeyUp={(event)=>setMessage(event.target.value)}/><br/> */}
           
            <input type="submit" />
          </form>
        </Col>
      </Row>
   </Container>
  )
}

export default Contacts