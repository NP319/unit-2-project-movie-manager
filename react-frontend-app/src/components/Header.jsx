// Import Link to navigate between pages
import { Link } from 'react-router'

// Header component
function Header() {
  return (
    <header className="header">

      {/* Website title */}
      <h1>Movie Manager</h1>

      {/* Navigation for the website */}
      <nav className="navigation">
        <Link to="/">
          Home
        </Link>

        <Link to="/movies">
          Movies
        </Link>

        <Link to="/about">
            About
        </Link>
      </nav>

    </header>
  )
}

// Export Header component
export default Header