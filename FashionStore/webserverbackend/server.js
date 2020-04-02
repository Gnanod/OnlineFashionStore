const express = require('express');
const  app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//get access to the router
const routes = express.Router();

const PORT = 4000;
const mongoose = require('mongoose');


app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0-v1gj6.mongodb.net/test?retryWrites=true&w=majority/fashionStore", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open',function () {
    console.log('mongoDB database Connections extablished Successfully')
});

const itemRoutes = require('./routes/item.server.routes')

//
app.use('/api/item',itemRoutes);


//start the server using express
app.listen(PORT,function(){
    console.log("Server is running on PORT: "+PORT);
});



