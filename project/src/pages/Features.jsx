import React, { useState, useEffect } from 'react';
import TopHeader from '../components/TopHeader';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



export const Features = () => {
  const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=8fe22d19';

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies)
  }

  useEffect (()=>{
searchMovies('Batman');
  }, [])


  return (
    <>
      <TopHeader />
      <Container>
      <Row className='justify-content-center m-lg-2'>

        <Col lg={4} md={12} xs={10}>
        <input className='m-3' placeholder='Enter movie name' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" />

        <Button className='' onClick={()=>searchMovies(searchTerm)}>Enter</Button>
        </Col>
      </Row>

      {/* <div>
        {movies.map((movie)=> {
          
          return <>  <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt="" />
          </>
        })}
      </div> */}

      <Row className='justify-content-center'>
     
      { movies ? movies.map((movie)=> {
          
          return  <>  
           <Col xs={10} lg={2} md={4}>
          <Card className='m-2'>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>
              {movie.Plot}
              </Card.Text>
            </Card.Body>
          </Card>


          </Col>

          </>
        }) : <h1 className='text-center'>Movies not found</h1>
      }
        
      </Row>
      </Container>

    </>
  )
}

export default Features;
