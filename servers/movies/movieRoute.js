const Router = require('express-promise-router');
const controller = require('../../controller/movieController');

module.exports = () => {
    const router = Router({ mergeParams: true });
    router.route('/create').post(controller.createNewMovie);
    router.route('/list').get(controller.listMovies);
    router.route('/searchTitle/:title').get(controller.searchMovieTitle);
    router.route('/update/:movieId').put(controller.updateMovie);
    router.route('/delete/:movieId').delete(controller.deleteMovie);
    return router;
}