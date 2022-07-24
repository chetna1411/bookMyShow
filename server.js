const express = require('express');
const app = express();

const mongoose = require('mongoose');

const bodyParse = require('body-parser');

const dbConfig = require('./configs/db.config');

app.use(bodyParse.json());  // its convert json to javaScript object

mongoose.connect(dbConfig.DB_URl, ()=>{
    console.log('mongoDB connected');
});


require('./routes/user_API')(app);
require('./routes/movie_API')(app);

app.listen(8080, ()=>{
    console.log("server connected ");
});
