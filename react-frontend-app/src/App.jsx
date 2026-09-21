import Header from './components/Header'  // Import the Header component
import { BrowserRouter, Routes, Route } from 'react-router' // Import React Router components for page navigation
// Import the pages used by the application
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import MovieDetail from './pages/MovieDetail'
// Import the About page
import About from './pages/About'
import Footer from './components/Footer'  // Import the Footer component

function App() {  // Main App component
  return (
    <BrowserRouter>

      {/* Website navigation */}
      <Header />

      <Routes>   {/* Set up the routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Website footer */}
      <Footer />

    </BrowserRouter>
  )
}
// Export App component
export default App