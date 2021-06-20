const moment = require("moment");
const { Movie } = require("../model");
const lodash = require("lodash");
const { Op } = require('sequelize');
const createNewMovie = async (req, res) => {
    const movieId = `MV-${moment().unix()}`;
    const { title, actor, year, length } = req.body;
    const movieRecord = {
        movieId,
        title,
        actor,
        year,
        length
    }

    const result = await Movie.create(movieRecord);

    console.log(result.toJSON());
    return res.json({ message: result.toJSON() });
}


const listMovies = async (req, res) => {
    const movies = await Movie.findAll();
    
    console.log("Function called");
    const formattedMovie = movies.map(r => r.get({ plain: true }));

    if (!lodash.isEmpty(formattedMovie)) {
        
        res.send(formattedMovie);
    } else {
        res.send({ error: "Movie creations Failed" });
    }
}

const searchMovieTitle = async (req, res) => {
    const { title } = req.params;

    const searchResult = await Movie.findAll({
        where: {
            title: {
                [Op.like]: `%${title}%`,
            }
        },
        raw: true
    });

    console.log(searchResult);

    if (lodash.isEmpty(searchResult)) {
        res.send({ message: 'No Records Found' });
    } else if (!lodash.isEmpty(searchResult)) {
        res.send(searchResult);
    }
}


const updateMovie = async (req, res) => {
    const { movieId } = req.params;
    const data = req.body;
    const result = await Movie.update(data, {
        where: {
            movieId: movieId
        }
    });
    if (result) {
        return res.json({ message: "Movie updated successfully" });
    }
    else {
        return res.json({ message: "Movie not updated" });
    }

};

const deleteMovie = async (req, res) => {
    const { movieId } = req.params;
    const result = await Movie.destroy({
        where: {
            movieId: movieId
        }
    });
    if (result) {
        return res.json({ message: "Movie deleted successfully" });
    }
    else {
        return res.json({ message: "Movie not deleted" });
    }

};

module.exports = { createNewMovie, listMovies, searchMovieTitle, updateMovie, deleteMovie };