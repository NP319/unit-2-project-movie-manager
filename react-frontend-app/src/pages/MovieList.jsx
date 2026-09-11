// Import React hooks for managing state and running code when the component loads
import React, { useEffect, useState } from 'react'

// Movie List page component
function MovieList() {

  // State to store all movies from the database
  const [movies, setMovies] = useState([])

  // Function to get all movies from the Spring Boot API
  async function getMovies() {

    // Send a GET request to the Movie API
    let response = await fetch('http://localhost:8080/movies')

    // Convert the response into JSON data
    let data = await response.json()

    // Store the movie data in state
    setMovies(data)
  }

  // Get the movies when the component loads
  useEffect(() => {
    getMovies()
  }, [])

  // State to store the information for a new movie
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    director: '',
    releaseYear: ''
  })

  // Function to update the movie state when an input changes
  function handleChange(event) {

    // Update the field that was changed
    setMovie({
      ...movie,
      [event.target.name]: event.target.value
    })
  }

  // Function to add a new movie
  async function addMovie(event) {

    // Prevent the form from refreshing the page
    event.preventDefault()

    // Send the new movie to the Spring Boot API
    await fetch('http://localhost:8080/movies', {
      // Use POST to create a new movie
      method: 'POST',

      // Tell the API that the data is JSON
      headers: {
        'Content-Type': 'application/json'
      },

      // Convert the movie object into JSON
      body: JSON.stringify(movie)
    })

    // Get the updated movie list after adding the movie
    getMovies()
  }

  // Display the Movie List page
  return (
    <div>

      {/* Page title */}
      <h1>Movies</h1>

      {/* Form for adding a new movie */}
      <form onSubmit={addMovie}>

        {/* Movie title input */}
        <input
          name="title"
          value={movie.title}
          onChange={handleChange}
          placeholder="Title"
        />

        {/* Movie genre input */}
        <input
          name="genre"
          value={movie.genre}
          onChange={handleChange}
          placeholder="Genre"
        />

        {/* Movie director input */}
        <input
          name="director"
          value={movie.director}
          onChange={handleChange}
          placeholder="Director"
        />

        {/* Movie release year input */}
        <input
          name="releaseYear"
          value={movie.releaseYear}
          onChange={handleChange}
          placeholder="Release Year"
        />

        {/* Submit button for adding the movie */}
        <button type="submit">Add Movie</button>
      </form>

      {/* Display each movie from the movies array */}
      {movies.map(movie => (

        // Container for one movie
        <div key={movie.id}>

          {/* Display movie title */}
          <h2>{movie.title}</h2>

          {/* Display movie genre */}
          <p>Genre: {movie.genre}</p>

          {/* Display movie director */}
          <p>Director: {movie.director}</p>

          {/* Display movie release year */}
          <p>Release Year: {movie.releaseYear}</p>

        </div>
      ))}
    </div>
  )
}

// Export MovieList component
export default MovieList