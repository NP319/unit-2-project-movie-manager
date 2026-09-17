// Import Link to navigate to the Movie List page
import { Link } from 'react-router'

// Import the movie image
import hero from '../assets/hero.png'

// Home page component
function Home() {
  return (
    <main>

      {/* Welcome section */}
      <section className="home-section">
        <img
          src={hero}
          alt="Movies"
        />

        <h1>Movie Manager</h1>

        <p>
          Manage your favorite movies and share your reviews.
        </p>

        {/* Link to the Movie List page */}
        <Link className="view-movies-link" to="/movies">
          View Movies
        </Link>
      </section>

    </main>
  )
}

// Export Home component
export default Home