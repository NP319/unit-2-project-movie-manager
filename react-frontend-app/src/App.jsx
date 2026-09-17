import Header from './components/Header'  // Import the Header component
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import MovieDetail from './pages/MovieDetail'
import Footer from './components/Footer'  // Import the Footer component

function App() {
  return (
    <BrowserRouter>

      {/* Website navigation */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>

      {/* Website footer */}
      <Footer />

    </BrowserRouter>
  )
}

export default App