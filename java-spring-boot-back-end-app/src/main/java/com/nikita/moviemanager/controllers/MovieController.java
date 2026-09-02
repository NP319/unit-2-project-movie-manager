package com.nikita.moviemanager.controllers;

import com.nikita.moviemanager.models.Movie;
import com.nikita.moviemanager.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("movies")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @GetMapping
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Movie> findById(@PathVariable int id) {
        return movieRepository.findById(id);
    }

    @PostMapping
    public Movie addMovie(@RequestBody Movie movie) {
        movieRepository.save(movie);
        return movie;
    }

    @PutMapping("{id}")
    public Movie updateMovie(@PathVariable int id, @RequestBody Movie movie) {
        movie.setId(id);
        movieRepository.save(movie);
        return movie;
    }

    @DeleteMapping("{id}")
    public void deleteMovie(@PathVariable int id) {
        movieRepository.deleteById(id);
    }
}