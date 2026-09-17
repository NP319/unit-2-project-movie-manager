// Import the Header component
import Header from './components/Header'

import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import MovieDetail from './pages/MovieDetail'

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

    </BrowserRouter>
  )
}

export default App