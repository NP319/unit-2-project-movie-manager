package com.nikita.moviemanager.controllers;

import com.nikita.moviemanager.models.Movie;
import com.nikita.moviemanager.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//controller for movie API endpoints
@RestController
@RequestMapping("movies")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    //get all movies
    @GetMapping
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    //get a movie by ID
    @GetMapping("{id}")
    public Optional<Movie> findById(@PathVariable int id) {
        return movieRepository.findById(id);
    }

    //add a new movie
    @PostMapping
    public Movie addMovie(@RequestBody Movie movie) {
        movieRepository.save(movie);
        return movie;
    }

    //update an existing movie
    @PutMapping("{id}")
    public Movie updateMovie(@PathVariable int id, @RequestBody Movie movie) {
        movie.setId(id);
        movieRepository.save(movie);
        return movie;
    }

    //delete a movie
    @DeleteMapping("{id}")
    public void deleteMovie(@PathVariable int id) {
        movieRepository.deleteById(id);
    }
}