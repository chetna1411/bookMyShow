const controller = require('../controllers/movie_C');
const middle = require('../middlewares/validateMovie');
const JWTverify = require('../middlewares/verifyToken');

module.exports = (ap)=>{

    ap.post('/bookMyShow/v1/movies/createShow',[middle.valid,JWTverify.token],controller.createShow);

    ap.get('/bookMyShow/v1/movies/getShow/:id',controller.getShow);

    ap.put('/bookMyShow/v1/movies/updateShow/:id',[middle.valid,JWTverify.token],controller.updateShow);

    ap.delete('/bookMyShow/v1/movies/deleteShow/:id',[JWTverify.token],controller.deleteShow);

}