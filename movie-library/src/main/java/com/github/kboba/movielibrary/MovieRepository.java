package com.github.kboba.movielibrary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class MovieRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

}
