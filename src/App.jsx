import Form from "./components/Form"
import MovieDisplay from "./components/MovieDisplay"
import {useState, useEffect} from 'react'
import { styled } from "styled-components"

function App() {

  const apiKey = '98e3fb1f'
  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const data = await response.json();
      // console.log(data)
      setMovie(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovie('')
  }, [])
  return (
    <Container>
     <Form movieSearch={getMovie}/>
     <MovieDisplay movie={movie}/>

    </Container>
  )
}

export default App