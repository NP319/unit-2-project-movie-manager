// Import Link to navigate to the Movie List page
import { Link } from 'react-router'

// Import the vintage movie image
import vintageFilm from '../assets/vintage-film.png'

// Home page component
function Home() {
  return (
    <main>

      {/* Welcome section */}
      <section className="home-section">

        {/* Vintage movie background image */}
        <img
          className="home-image"
          src={vintageFilm}
          alt="Vintage movie film reel, film cans, and popcorn"
        />

      {/* Home page content */}
      <div className="home-content">

        <h1>Movie Manager</h1>

        <p>
          Manage your favorite movies and share your reviews.
        </p>

      {/* Link to the Movie List page */}
      <Link className="view-movies-link" to="/movies">
        View Movies
      </Link>

      </div>

      </section>

    </main>
  )
}

// Export Home component
export default Home