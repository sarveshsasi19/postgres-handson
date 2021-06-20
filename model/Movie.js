const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'sarvesh', {
    host: 'localhost',
    dialect: 'postgres'
});

const Movie = sequelize.define('Movie', {
    movieId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    actor: {
        type: DataTypes.STRING

    },
    year: {
        type: DataTypes.INTEGER
    },
    length: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: "movies",
    underscored: true,
    timestamps: false
});


module.exports = Movie;