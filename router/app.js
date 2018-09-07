const Express = require('express');
const mongoose = require('mongoose');
var Router = Express.Router();
const App = Express();

/*******************************
*   Import our Custom Model
********************************/
require('../dbModel/product.model');

/*******************************
*   Define our Custom Model
********************************/
const Product = mongoose.model('Product'); 
var pastDate = new Date("December 17, 1995 03:24:00");
var pastRandomProduct = [];
//define our just define pages like graphite, and charcoal
Router.get('/db/get/feature', function(req, res)
{
   Product.find({},function(err, data)
    {
        if(err)
        {
            console.log(err);
            res.send(null);
            res.statusCode(500);
        }
        else
        {
           let currentTime = new Date();
           let randomSelectionProduct = [];
           if(currentTime > pastDate)
           {   
                //set for one Day for new set of feature product item
                pastDate = new Date() + 86400000;    
                Product.find({},function(err, data)
                {
                    for(let i = 0; i < 13; i++)
                    {
                        let x = false;
                        let lastNumber = 0;

                        while(x != true)
                        {
                            let randomIndex = Math.floor(Math.random() * data.length);
                            if(lastNumber !== randomIndex)
                            {
                                randomSelectionProduct[i] = data[randomIndex];
                                break;
                            }
                        }
                        
                        
                    }
                    pastRandomProduct = randomSelectionProduct;
                    res.send(randomSelectionProduct);
                }); 
                
           }
           else
           {
               res.send(pastRandomProduct)
           }
        }
    })
   
});
Router.get('/db/get/graphite', function(req, res)
{
   Product.find({category: "graphite"},function(err, data)
    {
        if(err)
        {
            console.log(err);
            res.send(null);
            res.statusCode(500);
        }
        else
        {
            res.json(data);
        }
    })
   
});
Router.get('/db/get/charcoal', function(req, res)
{
   Product.find({category: "charcoal"},function(err, data)
    {
        if(err)
        {
            console.log(err);
            res.send(null);
            res.statusCode(500);
        }
        else
        {
            res.json(data);
        }
    })
   
});
Router.get('/db/get/colored', function(req, res)
{
   Product.find({category: "colored"},function(err, data)
    {
        if(err)
        {
            console.log(err);
            res.send(null);
            res.statusCode(500);
        }
        else
        {
            res.json(data);
        }
    })
   
});
Router.get('/db/get/water', function(req, res)
{
   Product.find({category: "water"},function(err, data)
    {
        if(err)
        {
            console.log(err);
            res.send(null);
            res.statusCode(500);
        }
        else
        {
            res.json(data);
        }
    })
   
});
Router.get('/db/get/accessory', function(req, res)
{
   Product.find({category: "accessory"},function(err, data)
    {
        if(err)
        {
            console.log(err);
            res.send(null);
            res.statusCode(500);
        }
        else
        {
            res.json(data);
        }
    })
   
});

Router.get('/db/filter/:json', function(req,res)
{    
    var data = JSON.parse(req.params.json);

    Product.find
    (
        {
            $and: 
            [
                {
                    category: 
                    {
                        $in: data[0]['category']
                    }
                },
                {
                    price:
                    {
                        $lte: data[0]['maxPriceLimit']
                    }
                },
                {
                    collectionSize: 
                    {
                        $lte: data[0]['maxSetRange']
                    }
                },
                {
                    company:
                    {
                       $in: data[0]['brands'] 
                    }
                }
            ]
        },
        function(err, data)
        {
            if(err)
            {
                console.log(err);
            }
            res.json(data);
        }
    )
});


module.exports = Router;