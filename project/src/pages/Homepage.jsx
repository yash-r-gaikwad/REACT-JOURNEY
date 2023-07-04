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
    <Col xs={3} md={3}>
<Image style={{width:400}} src="https://detailmd.com/images/buy-now.webp"  />  
</Col>
<Col xs={4} md={3}>
<Image style={{width:400}} src="https://detailmd.com/images/buy-now.webp"  />  
</Col>
<Col xs={4} md={3}>
<Image style={{width:400}} src="https://detailmd.com/images/buy-now.webp"  />  
</Col>

<Col>
<button onClick={()=> setNumber(number + 1)}>Click to add</button>
<button onClick={()=> setNumber(number - 1)}>Click to subtract</button>
<h2>You clicked {number} times</h2>
</Col>
</Row>
</div>

)
}


export default Homepage;