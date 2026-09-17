// Import Link to navigate between pages
import { Link } from 'react-router'

// Header component
function Header() {
  return (
    <header>

      {/* Navigation for the website */}
      <nav>
        <Link to="/">
          Home
        </Link>

        <Link to="/movies">
          Movies
        </Link>
      </nav>

    </header>
  )
}

// Export Header component
export default Header