const validate = (req, res, next)=>{

    if(!req.body.movieName){
        res.status(401).send({
            message : 'Enter movieName !'
        });
        return;
    }
    if(!req.body.city){
        res.status(401).send({
            message : 'Enter city !'
        });
        return;
    }
    if(!req.body.date){
        res.status(401).send({
            message : 'Enter date !'
        });
        return;
    }
    if(!req.body.time){
        res.status(401).send({
            message : 'Enter show time !'
        });
        return;
    }
    if(!req.body.language){
        res.status(401).send({
            message : 'enter movies language !'
        });
        return;
    }
    if(!req.body.cinemaHoll){
        res.status(401).send({
            message : 'enter cinema name !'
        });
        return;
    }
    next();

}

module.exports = {
    valid : validate
}