// Import React hooks for managing form state
import React, { useState } from 'react'

// About page component
function About() {

  // Store the feedback form information
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    comment: ''
  })

  // Store form messages
  const [message, setMessage] = useState('')

  // Update the form when the user types
  function handleChange(event) {
    setFeedback({
      ...feedback,
      [event.target.name]: event.target.value
    })

    setMessage('')
  }

  // Handle feedback form submission
  function handleSubmit(event) {
    event.preventDefault()

    // Check that required fields have information
    if (
      feedback.name.trim() === '' ||
      feedback.comment.trim() === ''
    ) {
      setMessage('Please complete your name and feedback.')
      return
    }

    // Display a success message
    setMessage('Thank you for your feedback!')

    // Clear the form
    setFeedback({
      name: '',
      email: '',
      comment: ''
    })
  }

  return (
    <main>

      {/* About page content */}
      <section className="about-card">

        <h1>About Movie Manager</h1>

        <p>
          Movie Manager is a simple application for managing a personal
          movie collection and sharing reviews.
        </p>

        <p>
          Users can view movies, add new movies, update movie information,
          delete movies, and share reviews for their favorite films.
        </p>

        {/* Movie Manager features */}
        <div className="about-features">

          <div className="feature-box">
            <h2>Manage Movies</h2>
            <p>
              Add, view, update, and delete movies.
            </p>
          </div>

          <div className="feature-box">
            <h2>Share Reviews</h2>
            <p>
              Add ratings and reviews to movies.
            </p>
          </div>

          <div className="feature-box">
            <h2>Explore Movies</h2>
            <p>
              Browse your movie collection and view movie details.
            </p>
          </div>

        </div>

        {/* Feedback form */}
        <form onSubmit={handleSubmit}>

          <h2>Give Us Your Feedback</h2>

          <label>
            Name:
            <input
              type="text"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>

          <label>
            Feedback:
            <textarea
              name="comment"
              value={feedback.comment}
              onChange={handleChange}
              placeholder="Tell us what you think..."
            />
          </label>

          <button type="submit">
            Submit Feedback
          </button>

          {/* Display form feedback */}
          {message && (
            <p>{message}</p>
          )}

        </form>

      </section>

    </main>
  )
}

// Export About component
export default About