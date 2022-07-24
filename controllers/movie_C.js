const Movie = require('../models/movie_Schema');

// handler for create movies show
exports.createShow = async(req, res)=>{
    const movieObj = {
        movieName : req.body.movieName,
        city : req.body.city,
        date : req.body.date,
        time : req.body.time,
        language : req.body.language,
        cinemaHoll : req.body.cinemaHoll
    };
    try{

        const movies = await Movie.create(movieObj);
        res.status(201).send(movies);

    }catch(err){
        res.status(500).send({
            message : 'Internal error !'
        });
    }
};

// handler for get movies show
exports.getShow = async(req, res)=>{
    const byId = req.params.id;
    try{
        const movies = await Movie.find({_id : byId});
        if(!movies){
            res.status(404).send({
                message : "movies id not valid"
            });
            return;
        }
        res.status(200).send(movies);
    }catch(err){
        res.status(500).send({
            message : 'fetching error !'
        });
    }
};

// handler for update movies show
exports.updateShow = async(req, res)=>{
    const byId = req.params.id;
    const movieObj = {
        movieName : req.body.movieName,
        city : req.body.city,
        date : req.body.date,
        time : req.body.time,
        language : req.body.language,
        cinemaHoll : req.body.cinemaHoll
    };
    try{
        const movies = await Movie.find({_id : byId});
        if(!movies){
            res.status(404).send({
                message : "movies id not valid"
            });
            return;
        }
        await Movie.updateOne({_id : byId},{$set : movieObj});
        res.status(201).send({
            message : 'Movie show updated'
        });

    }catch(err){
        console.log("while Updating",err.message);
        res.status(500).send({
            message : 'Oops error !'
        });
    }
}

// handler for delete movies show
exports.deleteShow = async(req, res)=>{
    const byId = req.params.id;
    try{
        const movies = await Movie.find({_id : byId});
        if(!movies){
            res.status(404).send({
                message : "movies id not valid"
            });
            return;
        }
        await Movie.deleteOne({_id : byId});
        res.status(200).send({
            message : 'Movie show Deleted'
        });
    }catch(err){
        res.status(500).send({
            message : 'fetching error !'
        });
    }
};