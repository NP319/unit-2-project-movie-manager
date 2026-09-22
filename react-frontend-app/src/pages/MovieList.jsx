// Import React hooks for managing state and running code when the component loads
import React, { useEffect, useState } from 'react'

// Import Link to navigate to the Movie Detail page
import { Link } from 'react-router'

// Import the movie ticket image
import movieTicket from '../assets/movie ticket.png'

// State to show the popcorn animation
const [showPopcorn, setShowPopcorn] = useState(false)

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

  // State to store the movie being edited
  const [editingMovie, setEditingMovie] = useState(null)

  // Function to update the movie state when an input changes
  function handleChange(event) {

    // Update the field that was changed
    setMovie({
      ...movie,
      [event.target.name]: event.target.value
    })
  }

  // Function to update the movie being edited when an input changes
  function handleEditChange(event) {

    // Update the field that was changed
    setEditingMovie({
      ...editingMovie,
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

    // Show the popcorn animation
      setShowPopcorn(true)

    // Hide the popcorn animation after it finishes
      setTimeout(() => {
      setShowPopcorn(false)
    }, 2000)

    // Get the updated movie list after adding the movie
    getMovies()

    // Clear the Add Movie form
    setMovie({
      title: '',
      genre: '',
      director: '',
      releaseYear: ''
    })
  }

  // Function to update an existing movie
  async function updateMovie(event) {

    // Prevent the form from refreshing the page
    event.preventDefault()

    // Send the updated movie to the Spring Boot API
    await fetch(`http://localhost:8080/movies/${editingMovie.id}`, {

      // Use PUT to update the movie
      method: 'PUT',

      // Tell the API that the data is JSON
      headers: {
        'Content-Type': 'application/json'
      },

      // Convert the edited movie into JSON
      body: JSON.stringify(editingMovie)
    })

    // Get the updated movie list
    getMovies()

    // Close the Edit Movie form
    setEditingMovie(null)
  }

  // Function to delete an existing movie
  async function deleteMovie(id) {

    // Send a DELETE request to the Movie API
    await fetch(`http://localhost:8080/movies/${id}`, {

      // Use DELETE to remove the movie
      method: 'DELETE'
    })

    // Get the updated movie list after deleting the movie
    getMovies()
  }

    // Display the Movie List page
  return (
    <main className="movies-page">

       {/* Movie page title */}
      <div className="movie-ticket">
      <img
        src={movieTicket}
        alt="Movies"
        />
      </div>

      {/* Add or update movie form */}
      <section className="movie-form-section">

        {editingMovie ? (

          <form className="movie-form" onSubmit={updateMovie}>

            {/* Edit movie heading */}
            <h2>Edit Movie</h2>

            {/* Movie title input */}
            <input
              name="title"
              value={editingMovie.title}
              onChange={handleEditChange}
              placeholder="Title"
            />

            {/* Movie genre input */}
            <input
              name="genre"
              value={editingMovie.genre}
              onChange={handleEditChange}
              placeholder="Genre"
            />

            {/* Movie director input */}
            <input
              name="director"
              value={editingMovie.director}
              onChange={handleEditChange}
              placeholder="Director"
            />

            {/* Movie release year input */}
            <input
              name="releaseYear"
              value={editingMovie.releaseYear}
              onChange={handleEditChange}
              placeholder="Release Year"
            />

            {/* Update movie button */}
            <button type="submit">
              Update Movie
            </button>

          </form>

        ) : (

          <form className="movie-form" onSubmit={addMovie}>

            {/* Add movie heading */}
            <h2>Add a Movie</h2>

            {/* Add movie title input */}
            <input
              name="title"
              value={movie.title}
              onChange={handleChange}
              placeholder="Title"
            />

            {/* Add movie genre input */}
            <input
              name="genre"
              value={movie.genre}
              onChange={handleChange}
              placeholder="Genre"
            />

            {/* Add movie director input */}
            <input
              name="director"
              value={movie.director}
              onChange={handleChange}
              placeholder="Director"
            />

            {/* Add movie release year input */}
            <input
              name="releaseYear"
              value={movie.releaseYear}
              onChange={handleChange}
              placeholder="Release Year"
            />

            {/* Add movie button */}
            <button type="submit">
              Add Movie
            </button>

          </form>

        )}

      </section>

      {/* Display each movie from the movies array */}
      <section className="movie-list">

        {movies.map(movie => (

          // Container for one movie
          <article className="movie-card" key={movie.id}>

            {/* Movie information */}
            <div className="movie-info">

              {/* Display movie title */}
              <h2>{movie.title}</h2>

              {/* Display movie genre */}
              <p>Genre: {movie.genre}</p>

              {/* Display movie director */}
              <p>Director: {movie.director}</p>

              {/* Display movie release year */}
              <p>Release Year: {movie.releaseYear}</p>

            </div>

            {/* Movie actions */}
            <div className="movie-actions">

              {/* Link to the Movie Detail page */}
              <Link
                className="view-details-link"
                to={`/movies/${movie.id}`}
              >
                View Details
              </Link>

              {/* Edit button */}
              <button onClick={() => setEditingMovie(movie)}>
                Edit
              </button>

              {/* Delete button */}
              <button
                className="delete-button"
                onClick={() => deleteMovie(movie.id)}
              >
                Delete
              </button>

            </div>

          </article>

        ))}

      </section>

    </main>
  )
}

// Export MovieList component
export default MovieList