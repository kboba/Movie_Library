package com.github.kboba.movielibrary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/movies")
    public List<Movie> getAll() {
        return movieRepository.getAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/movies/{id}")
    public Movie getById(@PathVariable("id") int id) {
        return movieRepository.getById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/movies")
    public int add (@RequestBody List<Movie> movies) {
        return movieRepository.add(movies);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/movies/{id}")
    public int update(@PathVariable("id") int id, @RequestBody Movie updatedMovie) {
        Movie movie = movieRepository.getById(id);

        if(movie != null) {
            movie.setTitle(updatedMovie.getTitle());
            movie.setDirector(updatedMovie.getDirector());
            movie.setRating(updatedMovie.getRating());
            return movieRepository.update(movie);
        } else
            return -1;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PatchMapping("/movies/{id}")
    public int partiallyUpdate(@PathVariable("id") int id, @RequestBody Movie updatedMovie) {
        Movie movie = movieRepository.getById(id);

        if(movie != null) {
            if(updatedMovie.getTitle() != null) movie.setTitle(updatedMovie.getTitle());
            if(updatedMovie.getDirector() != null) movie.setDirector(updatedMovie.getDirector());
            if(updatedMovie.getRating() > 0) movie.setRating(updatedMovie.getRating());
            return movieRepository.update(movie);
        } else
            return -1;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/movies/{id}")
    public int delete(@PathVariable("id") int id) {
        return movieRepository.delete(id);
    }

}
