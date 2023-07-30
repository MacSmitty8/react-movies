import Form from "./components/Form"
import MovieDisplay from "./components/MovieDisplay"
import {useState, useEffect} from 'react'



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
    // <Container>
    <div>
     <Form movieSearch={getMovie}/>
     <MovieDisplay movie={movie}/>
     </div>
    // </Container>
  )
}

export default App