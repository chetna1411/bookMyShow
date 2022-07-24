const User = require('../models/user_Schema');
const util = require('../utils/helper');
const bcrypt = util.bcrypt;
const jwt = util.jwt;
const key = util.key

// Handler for signup
exports.signUp = async(req, res)=>{

    const userBody = {
        username : req.body.username,
        phone : req.body.phone,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password,8)  // 8 level of hashing security
    };

    try{

        const users = await User.create(userBody);
        res.status(201).send({
            message : "Registration Successful",
            username : users.username,
            email : users.email
        });

    }catch(err){
        res.status(500).send({
            message : "internal error !"
        });
    }
}

// Handler for signin
exports.signIn = async(req, res)=>{
    const Email = req.body.email;
    const Phone = req.body.phone;

    let users;
    try{
        // login with email
        if(Email){
            users = await User.findOne({ email : Email });
        }
        // Or login with phone
        else if(Phone){
            users = await User.findOne({ phone : Phone});
        }
    
        if(!users){
            res.status(404).send({
                message : 'invalid email or phone !'
            });
            return;
        }
        let pass = bcrypt.compareSync(req.body.password, users.password);
        if(!pass){
            res.status(401).send({
                message : "password is not valid"
            })
            return;
        }
        // JWT :                header         key     valid time
        let token = jwt.sign({_id : users._id},key,{expiresIn : 200});

        res.status(200).send({
            message : "welcome "+users.username +" </>",
            accessToken : token
        });
    }catch(err){
        res.status(500).send({
            message : " Oops something is wrong "
        });
    }
}