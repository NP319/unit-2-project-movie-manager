// Review item component
function ReviewItem({ review, deleteReview }) {

  // Display one review
  return (
    <div className="review-card">

      {/* Display the review rating */}
      <p>Rating: {review.rating}</p>

      {/* Display the review comment */}
      <p>Comment: {review.comment}</p>

      {/* Button for deleting the review */}
      <button onClick={() => deleteReview(review.id)}>
        Delete Review
      </button>

    </div>
  )
}

// Export ReviewItem component
export default ReviewItem
