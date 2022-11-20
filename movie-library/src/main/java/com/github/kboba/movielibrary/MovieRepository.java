package com.github.kboba.movielibrary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MovieRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Movie> getAll(){
        return jdbcTemplate.query("SELECT id, title, director, rating FROM movie",
                BeanPropertyRowMapper.newInstance(Movie.class));
    }

    public Movie getById(int id){
        return jdbcTemplate.queryForObject(
                "SELECT id, title, director, rating FROM movie WHERE id = ?",
                BeanPropertyRowMapper.newInstance(Movie.class), id);
    }

    public int add(List<Movie> movies) {
        movies.forEach(movie -> jdbcTemplate.update(
                "INSERT INTO movie(title, director, rating) VALUES(?, ?, ?) ",
                movie.getTitle(), movie.getDirector(), movie.getRating()
                ));

        return 1;
    }

}
