import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TopHeader from '../components/TopHeader';




export const Homepage = () => {

    const [number, setNumber] = useState(4);


  return (
    <div>
    <TopHeader />
    <Row className='justify-content-center'>
    <Col xs={12} md={4}>
<Image width={400} className='img-fluid' src="https://detailmd.com/images/buy-now.webp"  />  
</Col>
<Col xs={12} md={4}>
<Image width={400} className='img-fluid' src="https://detailmd.com/images/buy-now.webp"  />  
</Col>
<Col xs={12} md={4}>
<Image width={400} className='img-fluid'src="https://detailmd.com/images/buy-now.webp"  />  
</Col>

<Col lg={4}>
<button onClick={()=> setNumber(number + 1)}>Click to add</button>
<button onClick={()=> setNumber(number - 1)}>Click to subtract</button>
<h2>You clicked {number} times</h2>
</Col>
</Row>
</div>

)
}


export default Homepage;