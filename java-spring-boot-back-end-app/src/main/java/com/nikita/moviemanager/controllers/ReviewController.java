package com.nikita.moviemanager.controllers;

import com.nikita.moviemanager.models.Review;
import com.nikita.moviemanager.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Review> findById(@PathVariable int id) {
        return reviewRepository.findById(id);
    }

    @PostMapping
    public Review addReview(@RequestBody Review review) {
        reviewRepository.save(review);
        return review;
    }

    @PutMapping("{id}")
    public Review updateReview(@PathVariable int id, @RequestBody Review review) {
        review.setId(id);
        reviewRepository.save(review);
        return review;
    }

    @DeleteMapping("{id}")
    public void deleteReview(@PathVariable int id) {
        reviewRepository.deleteById(id);
    }
}