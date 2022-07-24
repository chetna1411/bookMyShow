const utils = require('../utils/helper');
const jwt = utils.jwt;
const Key = utils.key;
const verifyToken = (req, res, next) =>{
    const header = req.headers['x-access-token'];
    if(!header){
        res.status(401).send({
            message : ' enter accessToken '
        });
        return;
    }
    if(header){
        jwt.verify(header,Key,(err, decodeToken)=>{
            if(err){
                res.status(401).send({
                    message : ' Token is not valid, Enter valid accessToken'
                });
                return;
            }
            req._id = decodeToken._id;
            next();
        });
    }
}

module.exports = {
    token : verifyToken
}