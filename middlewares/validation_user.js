const User = require('../models/user_Schema');

const validUser = async(req, res, next)=>{
    try{
        if(!req.body.username){
            res.status(401).send({
                message : "invalid field username !"
            });
        }
        if(!req.body.phone){
            res.status(401).send({
                message : "invalid field phone !"
            });
        }
        if(req.body.phone){
            let users = await User.findOne({phone : req.body.phone});
            if(users){
                res.status(200).send({
                    message : users.phone+" phone already exist !"
                });
                return;
            }
        }
        if(!req.body.email){
            res.status(401).send({
                message : "invalid field email !"
            });
        }
        if(req.body.email){
            let users = await User.findOne({email : req.body.email});
            if(users){
                res.status(200).send({
                    message : users.email+" email already exist !"
                });
                return;
            }
        }
        if(!req.body.password){
            res.status(401).send({
                message : "invalid field password !"
            });
        }
        next();
    }catch(err){
        res.status(400).send({
            message : " Internal error in middleware !"
        });
    }
}

module.exports = {
    valid : validUser
}