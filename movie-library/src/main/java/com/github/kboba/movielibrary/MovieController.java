package com.github.kboba.movielibrary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @GetMapping("/movies")
    public List<Movie> getAll() {
        return movieRepository.getAll();
    }

    @GetMapping("/movies/{id}")
    public Movie getById(@PathVariable("id") int id) {
        return movieRepository.getById(id);
    }

    @PostMapping("/movies")
    public int add (@RequestBody List<Movie> movies) {
        return movieRepository.add(movies);
    }
}
