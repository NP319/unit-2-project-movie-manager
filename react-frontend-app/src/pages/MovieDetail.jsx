// Import React hooks for managing state and running code when the component loads
import React, { useEffect, useState } from 'react'

// Import useParams to get the movie ID from the URL
import { useParams } from 'react-router'

// Import the reusable ReviewItem component
import ReviewItem from '../components/ReviewItem'

// Import the ReviewForm component
import ReviewForm from '../components/ReviewForm'

// Movie Detail page component
function MovieDetail() {

  // Get the movie ID from the URL
  const { id } = useParams()

  // State to store the movie information
  const [movie, setMovie] = useState(null)

  // State to store reviews for the movie
  const [reviews, setReviews] = useState([])

  // Function to get one movie from the Spring Boot API
  async function getMovie() {

    // Send a GET request for the movie ID
    let response = await fetch(`http://localhost:8080/movies/${id}`)

    // Convert the response into JSON data
    let data = await response.json()

    // Store the movie data in state
    setMovie(data)
  }

  // Function to get reviews for the movie
  async function getReviews() {

    // Send a GET request for all reviews
    let response = await fetch('http://localhost:8080/reviews')

    // Convert the response into JSON data
    let data = await response.json()

    // Get only the reviews for this movie
    let movieReviews = data.filter(review => review.movie?.id === Number(id))

    // Store the reviews in state
    setReviews(movieReviews)
}

    // Function to add a new review
    async function addReview(review) {

      // Send the new review to the Review API
      await fetch('http://localhost:8080/reviews', {

      // Use POST to create the review
      method: 'POST',

      // Tell the API that the data is JSON
      headers: {
        'Content-Type': 'application/json'
      },

      // Convert the review object into JSON
      body: JSON.stringify(review)
    })

    // Get the updated reviews after adding the review
    getReviews()
  }
  // Get the movie and reviews when the component loads
  useEffect(() => {
    getMovie()
    getReviews()
  }, [id])

  // Display a message while the movie is loading
  if (!movie) {
    return <p>Loading movie...</p>
  }

  // Display the movie details
  return (
    <div>

      {/* Page title */}
      <h1>{movie.title}</h1>

      {/* Movie genre */}
      <p>Genre: {movie.genre}</p>

      {/* Movie director */}
      <p>Director: {movie.director}</p>

      {/* Movie release year */}
      <p>Release Year: {movie.releaseYear}</p>

            {/* Display reviews for this movie */}
      <h2>Reviews</h2>

      {reviews.map(review => (
        <ReviewItem
          key={review.id}
          review={review}
        />
      ))}

    </div>
  )
}

// Export MovieDetail component
export default MovieDetail