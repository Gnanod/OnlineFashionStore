

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = 4000;
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://admin:admin@cluster0-v1gj6.mongodb.net/fashionStore?retryWrites=true&w=majority", {useNewUrlParser: true});
const connection = mongoose.connection;


connection.once('open', function () {
    console.log('mongoDB database Connections extablished Successfully')
});

//start the server using express
app.listen(PORT, function () {
    console.log("Server is running on PORT: " + PORT);
});


///////making router instance from express
const testRoute = require('./routes/test.server.routes');
const brandRoute = require('./routes/Item/brand.serve.routes');
const categoryRoute = require('./routes/Item/category.serve.routes');
const brandCategoryRoute = require('./routes/Item/brandcategory.serve.routes');
const itemRoute = require('./routes/Item/item.serve.routes');
const itemSizeRoute = require('./routes/Item/ItemSize.serve.routes');
const itemColor = require('./routes/Item/itemcolors.serve.routes');
const supplier = require('./routes/Supplier/supplier.serve.routes');
const stockDetails = require('./routes/Stock/stock.serve.routes');
const stockPrice = require('./routes/Stock/stockprices.serve.routes');
const cart = require('./routes/Cart/cart.serve.routes');

//////creating url and adding router to the server.Every http end point extend this url

app.use('/api/test', testRoute);
app.use('/api/brand', brandRoute);
app.use('/api/category', categoryRoute);
app.use('/api/brandcategory', brandCategoryRoute);
app.use('/api/item',itemRoute);
app.use('/api/itemsize',itemSizeRoute);
app.use('/api/itemcolor',itemColor);
app.use('/api/supplier',supplier);
app.use('/api/stockdetails',stockDetails);
app.use('/api/stockprice',stockPrice);
app.use('/api/cart',cart);


