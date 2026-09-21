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

        <h1>Your Movies. Your collection.</h1>

        <p>
          Keep track of the movies you love, discover your favorites,and share your thoughts.
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