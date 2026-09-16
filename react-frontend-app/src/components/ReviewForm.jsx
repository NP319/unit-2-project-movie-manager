// Import React hooks for managing form state
import React, { useState } from 'react'

// Review form component
function ReviewForm({ movieId, addReview }) {

  // State to store the review information
  const [review, setReview] = useState({
    rating: '',
    comment: ''
  })

  // Function to update the review state when an input changes
  function handleChange(event) {

    // Update the field that was changed
    setReview({
      ...review,
      [event.target.name]: event.target.value
    })
  }

  // Function to submit a new review
  async function handleSubmit(event) {

    // Prevent the form from refreshing the page
    event.preventDefault()

    // Send the review information to the parent component
    addReview({
      rating: review.rating,
      comment: review.comment,
      movie: {
        id: movieId
      }
    })

    // Clear the form after submitting
    setReview({
      rating: '',
      comment: ''
    })
  }

  // Display the Review form
  return (
    <form onSubmit={handleSubmit}>

      {/* Form title */}
      <h2>Add a Review</h2>

      {/* Rating input */}
      <input
        type="number"
        name="rating"
        value={review.rating}
        onChange={handleChange}
        placeholder="Rating (1-5)"
        min="1"
        max="5"
      />

      {/* Comment input */}
      <textarea
        name="comment"
        value={review.comment}
        onChange={handleChange}
        placeholder="Write your review"
      />

      {/* Submit button */}
      <button type="submit">
        Add Review
      </button>

    </form>
  )
}

// Export ReviewForm component
export default ReviewForm