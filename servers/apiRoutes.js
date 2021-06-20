const express = require('express');

const movieRoutes = require('./movies/movieRoute');

const apiRouter = express.Router();

module.exports = () =>
    apiRouter
        .use('/movies', movieRoutes())