package com.nikita.moviemanager.controllers;

import com.nikita.moviemanager.models.Review;
import com.nikita.moviemanager.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// Controller for Review API endpoints
@RestController
@RequestMapping("reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    // Get all reviews
    @GetMapping
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    // Get a review by ID
    @GetMapping("{id}")
    public Optional<Review> findById(@PathVariable int id) {
        return reviewRepository.findById(id);
    }

    // Add a new review
    @PostMapping
    public Review addReview(@RequestBody Review review) {
        reviewRepository.save(review);
        return review;
    }
}