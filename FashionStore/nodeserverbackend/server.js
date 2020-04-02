const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = 4000;
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://admin:admin@cluster0-v1gj6.mongodb.net/fashionStore?retryWrites=true&w=majority", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open',function () {
    console.log('mongoDB database Connections extablished Successfully')
});

//start the server using express
app.listen(PORT,function(){
    console.log("Server is running on PORT: "+PORT);
});




///////making router instance from express
 const testRoute = require('./routes/test.server.routes');


//////creating url and adding router to the server.Every http end point extend this url
 app.use('/api/test',testRoute);


