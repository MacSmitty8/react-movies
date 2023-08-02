import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  background-color: black;
  color: white;
`

const Title = styled.h1`
  font-size: 3em;
  color: red;`



function MovieDisplay ({movie}) {

  const loaded = () => {
    return (
      <>
      <Container className='div'>
        <Title>{movie.Title}</Title>
      <h2>{movie.Genre}</h2>
      <img src={movie.Poster} alt ={movie.Title}/>
      <h2>{movie.Year}</h2>
      </Container>
      </>
    );
  };

  const loading = () => {
    return <h1>No Movie to Display.</h1>
  }
  return movie? loaded() : loading()
}
  

export default MovieDisplay
