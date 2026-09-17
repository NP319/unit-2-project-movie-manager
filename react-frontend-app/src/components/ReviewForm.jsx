// Import React hooks for managing form state
import React, { useState } from 'react'

// Review form component
function ReviewForm({ movie, addReview }) {

  // State to store the review information
  const [review, setReview] = useState({
    rating: '',
    comment: ''
  })

  // State to store validation messages
  const [error, setError] = useState('')

  // State to store the success message
  const [success, setSuccess] = useState('')

  // Function to update the review state when an input changes
  function handleChange(event) {

    // Update the field that was changed
    setReview({
      ...review,
      [event.target.name]: event.target.value
    })

    // Clear old messages when the user changes an input
    setError('')
    setSuccess('')
  }

  // Function to submit a new review
  async function handleSubmit(event) {

    // Prevent the form from refreshing the page
    event.preventDefault()

    // Convert the rating from text to a number
    let rating = Number(review.rating)

    // Check that the rating is between 1 and 5
    if (rating < 1 || rating > 5 || review.rating === '') {
      setError('Rating must be between 1 and 5.')
      return
    }

    // Check that the comment is not empty
    if (review.comment.trim() === '') {
      setError('Please enter a comment.')
      return
    }

    // Clear any previous error message
    setError('')

    // Send the review information to the parent component
    await addReview({
      rating: rating,
      comment: review.comment,
      movie: movie   
    })

    // Show a success message after the review is submitted
    setSuccess('Review added successfully!')

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
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          value={review.rating}
          onChange={handleChange}
          placeholder="Enter rating"
          min="1"
          max="5"
        />
      </label>

      {/* Show rating or form validation error */}
      {error && (
        <p>{error}</p>
      )}

      {/* Comment input */}
      <label>
        Comment:
        <textarea
          name="comment"
          value={review.comment}
          onChange={handleChange}
          placeholder="Write your review"
        />
      </label>

      {/* Submit button */}
      <button type="submit">
        Add Review
      </button>

      {/* Show success message after a review is added */}
      {success && (
        <p>{success}</p>
      )}

    </form>
  )
}

// Export ReviewForm component
export default ReviewForm