/***********************
 *  Author Sean O'Brien
 *  Create Date: 08/29/2018
 *  Modifcation Date: 08/29/2018
 *  Discription: this run our connection to the database using express and mongo DB
 ************************/

const Express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const App = Express();
if(mongoose.connect('mongodb://localhost:27017/bleistift'))
{
    console.log('error');
}
const AppRoutes = require('./router/app');
/*******************************
*   Import our Custom Model
********************************/
require('./dbModel/product.model.js');

/*******************************
*   Define our Custom Model
********************************/
const Product = mongoose.model('Product'); 

App.set('views',path.join(__dirname + '/views'));
App.set('view engine', 'hbs');
App.use(bodyParser.urlencoded({extended: false}));
App.use(bodyParser.json());
App.use(function (req, res, next) {
    
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plan');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    
    next();
}); 
App.use('/', AppRoutes);

App.listen(4201, ()=>
{
    console.log('Express Online!');
});





