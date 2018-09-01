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

//if we visit "localhost:4201/db/create"
// this will generate new product database
App.route('/db/create').get((req, res) =>
{
    //JSON of each product from Amazon Store
    var products = 
    [
        {
            "category": "graphite",
            "name" : "Mars Lumograph Set",
            "company": "Staedtler",
            "image": "../../assets/images/pencil/graphite/staedtlerMarsLumographSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Mixed",
            "price": 14.47,
            "discription": 
            [ 
                "Premium quality drawing pencil with unbelievably break-resistant lead!",
                "Particularly suitable for writing, drawing, sketching and hatching, as well as for professional graphic and artistic applications on paper and matte drawing film",
                "Design set of 12 finely graded consistent degrees in portable metal storage tin: 6B, 5B, 4B, 3B, 2B, B, HB, F, H, 2H, 3H, 4H",
                "The super-bonded lead wears evenly and is easy to erase and sharpen",
                "First-class materials and manufacturing processes guarantee outstanding and unbeatable product quality"
            ]
        },
        {
            "category": "graphite",
            "name" : "Premier Turquoise Medium Lead",
            "company": "Prismacolor",
            "image": "../../assets/images/pencil/graphite/premierTurquoiseMediumSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Medium",
            "price": 9.00,
            "discription": 
            [ 
                "Premium drawing pencils designed for advanced artists, architects and other professionals",
                "Medium, high-quality leads in a range of grades from hard 6H to versatile HB and soft 4B",
                "Intense, velvety smooth laydown",
                "Cores resist cracking and breakage",
                "Includes: 4B, 3B, 2B, B, HB, F, H, 2H, 3H, 4H, 5H and 6H graphite pencils"
            ]
        },
        {
            "category": "graphite",
            "name" : "Premier Turquoise Soft Lead",
            "company": "Prismacolor",
            "image": "../../assets/images/pencil/graphite/premierTurquoiseSoftSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Soft",
            "price": 16.19,
            "discription": 
            [ 
                "Premium drawing pencils designed for advanced artists, architects and other professionals",
                "Soft, high-quality leads in a range of grades from ultra-rich 9B to versatile HB, F and H",
                "Intense, velvety smooth laydown",
                "Cores resist cracking and breakage",
                "Includes: 9B, 8B, 7B, 6B, 5B, 4B, 3B, 2B, B, HB, F and H graphite pencils"
            ]
        },
        {
            "category": "graphite",
            "name" : "Derwent Graphic Drawing Pencils Medium Set",
            "company": "Derwent",
            "image": "../../assets/images/pencil/graphite/derwentGraphicMediumSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Medium",
            "price": 10.43,
            "discription": 
            [ 
                "STURDY PRECISION – With a hexagonal barrel, you gain greater precision for drawings. Hard (H) degrees have a 2.2 mm core for sharp lines. Black (B) soft degrees use a 3.5mm core for softer lines",
                "BROAD RANGE – Choose the pencil that works for you. Derwent offers a comprehensive range of 20 degrees to help achieve your vision. This set contains 6B, 5B, 4B, 3B, 2B, B, HB, F, H, 2H, 3H and 4H",
                "VERSATILE EXECUTION – Our wide range lets you choose the pencil that fits your artistic concept. Whether used for blending, illustrations or shading, our pencils will help express your vision",
                "STRONG CORE – The core sharpens to a fine, long-lasting point, great for emphasizing even the smallest details. The fine point allows for professional-level precision on your most intricate images",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Canvas Pencil Wrap, Derwent Sketching Paper Pads, Derwent Pencil Sharpener and Derwent Battery Operated Eraser"
            ]
        },
        {
            "category": "graphite",
            "name" : "Derwent Graphic Pencils Hard Set",
            "company": "Derwent",
            "image": "../../assets/images/pencil/graphite/derwentGraphicHardSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Mixed",
            "price": 14.63,
            "discription": 
            [ 
                "STURDY PRECISION – With a hexagonal barrel, you gain greater precision for drawings. Hard (H) degrees have a 2.2 mm core for sharp lines. Black (B) soft degrees use a 3.5mm core for softer lines.",
                "BROAD RANGE – Choose the pencil that works for you. Derwent offers a comprehensive range of 20 degrees to help achieve your vision. This set contains B, HB, F, H, 2H, 3H, 4H, 5H, 6H, 7H, 8H and 9H.",
                "VERSATILE EXECUTION – Our wide range lets you choose the pencil that fits your artistic concept. Whether used for blending, illustrations or shading, our pencils will help express your vision.",
                "STRONG CORE – The core sharpens to a fine, long-lasting point, great for emphasizing even the smallest details. The fine point allows for professional-level precision on your most intricate images.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Canvas Pencil Wrap, Derwent Sketching Paper Pads, Derwent Pencil Sharpener and Derwent Battery Operated Eraser."
            ]
        },
        {
            "category": "graphite",
            "name" : "Derwent Graphic Drawing Pencils Soft Set",
            "company": "Derwent",
            "image": "../../assets/images/pencil/graphite/derwentGraphicSoftSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Soft",
            "price": 11.40,
            "discription": 
            [ 
                "STURDY PRECISION – With a hexagonal barrel, you gain greater precision for drawings. Hard (H) degrees have a 2.2 mm core for sharp lines. Black (B) soft degrees use a 3.5mm core for softer lines.",
                "BROAD RANGE – Choose the pencil that works for you. Derwent offers a comprehensive range of 20 degrees to help achieve your vision. This set contains 6B, 5B, 4B, 3B, 2B, B, HB, F, H, 9B, 8B and 7B.",
                "VERSATILE EXECUTION – Our wide range lets you choose the pencil that fits your artistic concept. Whether used for blending, illustrations or shading, our pencils will help express your vision.",
                "STRONG CORE – The core sharpens to a fine, long-lasting point, great for emphasizing even the smallest details. The fine point allows for professional-level precision on your most intricate images.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Canvas Pencil Wrap, Derwent Sketching Paper Pads, Derwent Pencil Sharpener and Derwent Battery Operated Eraser.",
                "12 count set produced in a full range of 20 degrees contains 6B, 5B, 4B, 3B, 2B, B, HB, F, H, 9B, 8B and 7B.",
                "Pencils are sturdy, and the graphite is even; strips sharpen to a good long-lasting point; superb blending and smudging",
                "A good graphite drawing starts with a good graphite pencil! With Derwent Graphic you’ve got a wide choice of degrees from fine to soft and smudgy, perfect for whether you are doing fine detailed illustrations or adding shading and texture to your drawing!"
            ]
        },
        {
            "category": "graphite",
            "company": "Derwent",
            "image": "../../assets/images/pencil/graphite/derwentGraphicFullRangeSet.jpg",
            "collectionSize": 24,
            "coreMaterial": "Mixed",
            "price": 29.47,
            "discription": 
            [ 
                "STURDY PRECISION – With a hexagonal barrel, you gain greater precision for drawings. Hard (H) degrees have a 2.2 mm core for sharp lines. Black (B) soft degrees use a 3.5mm core for softer lines.",
                "BROAD RANGE – Derwent offers a comprehensive range of 20 degrees to help you achieve your vision. Choose from the popular HB pencil, the fine and crisp 9H, or soft and smudgy 9B.",
                "VERSATILE EXECUTION – Our wide range lets you choose the pencil that fits your artistic concept. Whether used for blending, illustrations or shading, our pencils will help express your vision.",
                "STRONG CORE – The core sharpens to a fine, long-lasting point, great for emphasizing even the smallest details. The fine point allows for professional-level precision on your most intricate images.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Canvas Pencil Wrap, Derwent Sketching Paper Pads, Derwent Pencil Sharpener and Derwent Battery Operated Eraser."
            ]
        },
        {
            "category": "graphite",
            "name" : "Sketching Pencils 24 Drawing Pencils Set",
            "company": "Sketching Pencils",
            "image": "../../assets/images/pencil/graphite/sketchingPencilsSoftSet.jpg",
            "collectionSize": 24,
            "coreMaterial": "Mixed",
            "price": 10.59,
            "discription": 
            [ 
                "24 Graphite drawing pencils for artists kit include every color you need: 14B,12B,11B,10B,9B,8B,7B,6B,5B,4B,3B,2B,B,F,HB,H,2H,3H,4H,5H,6H,7H,8H,9H.",
                "Complete Archival Quality Artist Sketching Set, Perfect gift for the Beginning Artist and artists looking to take their Shading & Sketching to a PROFESSIONAL LEVEL.",
                "A smooth writing feeling,Top-quality graphite pencil for writing,a hexagonal shape that prevents rolling off the table, this multipurpose artists set will keep you crafting fine, detailed illustrations & textured shading like a pro.",
                "Crafted from the finest basswood, these artist pencils for sketching contain Evenly Distibuted Graphite resulting in a Longer Lasting Point, A lightweight Balance that Feels Good in You Hand, Enhances Your Control & creates Richly Pigmented, Ultra-Smooth & Even Color laydown every time.",
                "100% SATISFACTION GUARANTEE: We set out to create the perfect art supplies for drawing, We guarantee you'll love how they layer down richly pigmented color that blends flawlessly & resist cracking, chipping & breaking - or we'll refund your money 100% - no questions asked! Best Art Supplies for Drawing"
            ]
        },
        {
            "category": "graphite",
            "name" : "Professional Sketch and Drawing pencils Set",
            "company": "USLON",
            "image": "../../assets/images/pencil/graphite/uslonSketchandDrawingPencilSoftSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Soft",
            "price": 19.98,
            "discription": 
            [ 
                "INCLUDES 12 GRAPHITE PENCILS:8B，7B,6B,5B,4B,3B,2B,B,HB,F,H,2H.",
                "HIGH QUALITY:Made of high quality wood and graphite,Make sure to use for a longer period of time is not easily damaged,Drawing the best works.",
                "FOR EVERYONE:For Beginners,Professional artists,Students and office workers,are the best choice,Suitable for all Paintings,Artistic creations,Drawings,Classroom,Work,Writing,You will love them.",
                "CUSTOMIZED IRON BOX:Hard iron box for protecting your painting tools,At the same time easy to carry and store.",
                "SATISFACTION GUARANTEE:If you are not satisfied with our products, you are welcome to simply return it to us for a full refund at any time."
            ]
        },
        {
            "category": "graphite",
            "name" : "12 Piece Graphite Drawing Pencil Set",
            "company": "Sargent Art",
            "image": "../../assets/images/pencil/graphite/sargentArt12PieceDrawingPencilMediumSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Medium",
            "price": 7.98,
            "discription": 
            [ 
                "12 different Graphite core hardness",
                "Metal tin pencil case",
                "Pre-sharpened pencils"
            ]
        },
        {
            "category": "graphite",
            "name" : "Bellofy Art Pencils Sketch Kit",
            "company": "Bellofy",
            "image": "../../assets/images/pencil/graphite/bellofyArtPencilSketchkitHardSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Hard",
            "price": 10.99,
            "discription": 
            [ 
                "COMPLETE ARCHIVAL QUALITY ARTIST SKETCHING SET with TRAVEL TIN - 12 Graphite drawing pencils for artists kit include every color you need - 9B, 8B, 7B, 6B, 5B, 4B, 3B, 2B, B, HB, F, H - Revolutionary STRAIGHT-N- CENTERED LEAD TECHNOLOGY ensure your gray & black colored pencils SHARPEN EASILY WITHOUT BREAKING making this drawing pencil set the PERFECT GIFT for the BEGGINER ARTIST and artists looking to take their SHADING & SKETCHING to a PROFESSIONAL LEVEL.",
                "UNMATCHED BLENDING CAPABILITY, EVEN COLOR LAYDOWN & ENHANCED CONTROL - ERASES CLEAN: Crafted from the finest basswood, these artist pencils for sketching contain EVENLY DISTRIBUTED GRAPHITE resulting in a LONGER LASTING POINT that RESISTS CRACKING & CHIPPING while offering UNRIVALED TEXTURED SHADING & BLENDING capability. The results? A lightweight BALANCE that FEELS GOOD IN YOUR HAND, ENHANCES YOUR CONTROL & creates Richly Pigmented, Ultra-Smooth & Even Color laydown every time.",
                "ACHIEVE THOSE 'HARD TO GET' DARKEST DARKS Without Mass Layering or Depth-Destroying Silver Tarnish: Testimonials say it all, and our customers love our graphic artist pencils, \" I was able to get those DARK DARKS that are so hard to achieve with drawing pencils\" , and without massive layering or the blasé shiny silver you find so common among cheaply made knock offs or convenience store pencils - making them perfect for adult coloring books or your passion planner!",
                "VERSATILE, CONVENIENT, COMFORTABLE & ULTRA-DURABLE: With a 0.7 cm ComfortGrip that allows you to comfortably draw for hours without chaffing or finger calluses, a hexagonal shape that prevents rolling off the table, and a convenient carrying tin that makes it easy for artists on the go to create anywhere - this multipurpose artists set will keep you crafting fine, detailed illustrations & textured shading like a pro.",
                "100% SATISFACTION GUARANTEED - Or Your Money Back: We set out to create the perfect art supplies for drawing - and customer say we've achieved it. So you can feel confident adding these 12 sketching pencils with perfectly balanced graphite colored pencils to your cart today. We guarantee you'll love how they layer down richly pigmented color that blends flawlessly & resist cracking, chipping & breaking - or we'll refund your money 100% - no questions asked! Best Art Supplies for Drawing"
            ]
        },
        {
            "category": "graphite",
            "name" : "Arteza Professional Drawing Sketch Pencils Set",
            "company": "Arteza",
            "image": "../../assets/images/pencil/graphite/artezaProfessionalDrawingSketchMediumSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Medium",
            "price": 11.99,
            "discription": 
            [ 
                "This kit of 12 pre sharpened professional quality sketch pencils is an essential addition to your collection of art supplies and comes in a special protective metal tin gift box",
                "The graphite hardness varies in degrees and includes 6B, 5B, 4B, 3B, 2B, B, HB, F, H, 2H, 3H, and 4H. This range is ideal for fine detail illustrations, journaling, photorealistic drawings, sketching, blending, shading, smudging, and adding texture",
                "Special bonding makes the graphite leads extra break resistant, and gives them superior long lasting point strength. They are easy to sharpen and erase",
                "Exceptional tools allow designers, illustrators, and artists to create their best work on paper, sketchbooks, sketch pads, and any other medium",
                "Non-toxic and eco-friendly friendly pencils conform to strict ASTM D-4236 and EN71 standards. FSC certified wood is sourced from sustainably managed forests that provide economic and social benefits to communities"
            ]
        },
        {
            "category": "charcoal",
            "name": "Derwnet Charcoal Pencils",
            "company": "Derwent",
            "image": "../../assets/images/pencil/charcoal/derwentCharcoal4set.jpg",
            "collectionSize": 4,
            "coreMaterial": "Mixed",
            "price": 6.83,
            "discription":
            [
                "Easier to sharpen than traditional charcoal sticks",
                "Tone is similar to graphite",
                "A combination of natural charcoal particles with the finest clays",
                "Smooth lay down and blends easily",
                "4 pencils per pack"
            ]
        },
        {
            "category": "charcoal",
            "name": "Derwnet Charcoal Pencils, Metal Set",
            "company":"Derwent",
            "image":"../../assets/images/pencil/charcoal/derwentCharcoalMetal6set.jpg",
            "collectionSize": 6,
            "coreMaterial": "Mixed",
            "price": 8.67,
            "discription":
            [
                "Easier to sharpen than traditional charcoal sticks",
                "Tone is similar to graphite",
                "A combination of natural charcoal particles with the finest clays",
                "Smooth lay down and blends easily",
                "Metal tin includes 6 pencils and a pencil sharpener"  
            ]
        },
        {
            "category": "charcoal",
            "name": "General Pencil Charcoal Kit",
            "company": "General Pencil",
            "image": "../../assets/images/pencil/charcoal/generalPencilCharcoalkit12.jpg",
            "collectionSize": 12,
            "coreMaterial": "Mixed",
            "price": 8.29,
            "discription":
            [
                "Includes black and white charcoal pencils, compressed charcoal, accessories and a carbon sketch drawing pencil",
                "Excellent quality",
                "Original charcoal drawing kit",
                "Includes black and white charcoal pencils, sticks, sketch pencil, eraser and sharpener",
                "Made In USA"
            ]
        },
        {
            "category": "charcoal",
            "name": "General 33-Piece Classic Charcoal Drawing Set",
            "company": "General Pencil",
            "image": "../../assets/images/pencil/charcoal/general33CharcoalDrawingSet.jpg",
            "collectionSize": 33,
            "coreMaterial": "Mixed",
            "price": 24.25,
            "discription":
            [
                "This set is filled with artists favorite charcoal tools!",
                "Field sketching and creative projects of all levels",
                "This package contains eighteen pencils, twelve drawing sticks, one sharpener, one eraser and one drawing pad"
            ]
        },
        {
            "category": "charcoal",
            "name": "Mont Marte Coloured Charcoal Pencils Set",
            "company": "Mont Marte",
            "image": "../../assets/images/pencil/charcoal/montMarteColouredCharcoal.jpg",
            "collectionSize": 12,
            "coreMaterial": "Medium",
            "price": 12.95,
            "discription":
            [
                "Available in 4 earthy colours that have been favoured by the masters for centuries.",
                "Include 2 x White Charcoal Pencil,2 x Sanguine Charcoal Pencil,2 x Sepia Charcoal Pencil,6 x Black Charcoal.",
                "Charcoal Pencils are fragile by nature. It is recommended to carefully sharpen them with a Mont Marte Hobby Knife."
            ]
        },
        {
            "category": "charcoal",
            "name": "General Pencil Compressed White Charcoal Sticks",
            "company": "General Pencil",
            "image":"../../assets/images/pencil/charcoal/generalCompressedWhiteCharcoalSticks.jpg",
            "collectionSize": 4,
            "coreMaterial": "Hard",
            "price": 5.63,
            "discription":
            [
                "GP958BP",
                "Brand New Item / Unopened Product"
            ]
        },
        {
            "category": "charcoal",
            "name": "Mont Marte Woodless Charcoal Pencils",
            "company":"Mont Marte",
            "image":"../../assets/images/pencil/charcoal/montMarteWoodlessCharcoalPencil.jpg",
            "collectionSize": 3,
            "coreMaterial": "Mixed",
            "price": 6.99,
            "discription":
            [
                "Three piece set: this set comes with three grades of charcoal including soft, medium and hard",
                "Clean handling: each woodless pencil is lacquer coated for clean handling",
                "Add detail: use the sharpened point to add detail to charcoal drawings",
                "Create bold lines: hold the pencil on an angle to create broad lines",
                "Easy to sharpen: a regular sharpener, sandpaper block or blade can be used to sharpen each pencil in this set"
            ]
        },
        {
            "category": "charcoal",
            "name": "Derwent Tinted Charcoal Pencils 24pcs Metal Tin Set",
            "company":"Derwent",
            "image":"../../assets/images/pencil/charcoal/derwentCharcoal24MetalTinSet.jpg",
            "collectionSize": 24,
            "coreMaterial": "Mixed",
            "price": 43.45,
            "discription":
            [
                "Get the traditional effect of charcoal with more control and less mess",
                "Charcoal particles are mixed with the finest clays and wood encased",
                "Cedar barrels contain flexible charcoal of the highest quality for scratch-free marks",
                "Tinted pencils extend creative possibilities",
                "Set of 24 colors smudge and blend beautifully for deep, rich tones"
            ]
        },
        {
            "category": "charcoal",
            "name": "Derwent Tinted Charcoal Pencils 12pcs Metal Tin Set",
            "company":"Derwent",
            "image":"../../assets/images/pencil/charcoal/derwentCharcoal12MetalTinSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Mixed",
            "price": 24.92,
            "discription":
            [
                "Get the traditional effect of charcoal with more control and less mess",
                "Charcoal particles are mixed with the finest clays and wood encased",
                "Cedar barrels contain flexible charcoal of the highest quality for scratch-free marks",
                "Tinted pencils extend creative possibilities",
                "Set of 12 colors smudge and blend beautifully for deep, rich tones"
            ]
        },
        {
            "category": "charcoal",
            "name": "Derwent Tinted Charcoal Pencils Set",
            "company":"Derwent",
            "image":"../../assets/images/pencil/charcoal/derwentCharcoal6Set.jpg",
            "collectionSize": 6,
            "coreMaterial": "Mixed",
            "price": 14.13,
            "discription":
            [
                "Get the traditional effect of charcoal with more control and less mess",
                "Charcoal particles are mixed with the finest clays and wood encased",
                "8mm cedar barrels contain flexible charcoal of the highest quality for scratch-free marks",
                "Tinted pencils extend creative possibilities",
                "Set of 6 colors smudge and blend beautifully for deep, rich tones"
            ]
        },
        {
            "category": "charcoal",
            "name": "Prismacolor Premier Charcoal Pencils with Erasers, Sharpeners & Blending Stump Set",
            "company":"Prismacolor",
            "image":"../../assets/images/pencil/charcoal/prismacolorPremierCharcoalPencilWEraserSharperBlendingStumpSet.jpg",
            "collectionSize": 6,
            "coreMaterial": "Mixed",
            "price": 130.00,
            "discription":
            [
                "Smooth, dark and artist-quality, the sketch and graphite pencils create intense marks ideal for drawing and underpainting layouts",
                "Natural vine charcoal is meticulously selected for consistent, imperfection-free texture – create dark, easily-erasable marks. Compressed charcoal sticks lay down rich blacks that blend easily and adhere to most drawing surfaces",
                "Clean, precise charcoal pencils are ideal for tightly-rendered drawings requiring control and detail. Sepia and Sanguine pencils mark fine lines and help with highlighting",
                "Steel sharpener and sanding board help you create the perfect point. Vinyl Magic Rub eraser is ideal for delicate surfaces. Kneaded rubber eraser molds to exactly the shape you’re erasing",
                "Set of 6 colors smudge and blend beautifully for deep, rich tonesIncludes: 10 vine charcoals (extra soft, soft & medium), 4 compressed charcoals (extra soft, soft, medium & hard), 4 charcoal pencils (black, soft black, medium black, hard white & extra soft), 2 erasers (Magic Rub vinyl & kneaded rubber), 1 steel sharpener, 1 sanding board and 1 blending stump"
            ]
        },
        {
            "category": "colored",
            "name": "Arteza Colored Pencils with Color Names",
            "company":"Arteza",
            "image": "../../assets/images/pencil/color/arteza48CanSet.jpg",
            "collectionSize": 48,
            "coreMaterial": "Soft",
            "price": 13.99,
            "discription":
            [
                "Extensive range of 48 unique long pre-sharpened colored pencils with color names",
                "Triangular shaped for easy comfortable grip, also won’t roll off desks or tables",
                "Constructed from high grade ultra-lightweight basswood for durability",
                "Packaged in an eco-friendly tube that is resistant to crushing and protects pencils from damage",
                "Perfect for color mixing, blending and adult coloring"
            ]
        },
        {
            "category": "colored",
            "name": "Prismacolor Premier Colored Pencils, Manga Colors Set",
            "company": "Prismacolor",
            "image": "../../assets/images/pencil/color/prismacolorMangaColors23Set.jpg",
            "collectionSize": 23,
            "coreMaterial": "Soft",
            "price": 27.66,
            "discription":
            [
                "Soft Core and Verithin pencils in colors picked to help you draw Manga and comics",
                "Soft Core pencils are perfect for blending and shading",
                "Verithin pencils help you draw crisp details",
                "High-quality, lightfast pigments and leads that resist breaking",
                "18 Soft Core and 5 Verithin Premier colored pencils"
            ]
        },
        {
            "category": "colored",
            "name": "Prismacolor Premier Colored Pencils, Botanical Garden Set",
            "company": "Prismacolor",
            "image": "../../assets/images/pencil/color/prismacolorPrimierBotanicalGardentSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Soft",
            "price": 8.49,
            "discription":
            [
                "Beautiful range of colors selected to bring lush flowers and trees to life",
                "Artist-quality colored pencils for every level of expertise - perfect for coloring books",
                "High-quality pigments for rich color saturation",
                "Soft, thick cores for a smooth laydown and excellent blending and shading",
                "Coloring Pencil set includes: pomegranate, pink, pink Rose, pale Vermilion, lemon Yellow, olive green, spring green, grass green, blue slate, non photo blue, lavender and dahlia purple"
            ]
        },
        {
            "category": "colored",
            "name": "Prismacolor Premier Colored Pencils, Landscape Set",
            "company": "Prismacolor",
            "image": "../../assets/images/pencil/color/prismacolorPrimierUnderTheSeaSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Soft",
            "price": 16.52,
            "discription":
            [
                "Beautiful range of colors selected to bring exciting aquatic scenes to life",
                "Artist-quality colored pencils for every level of expertise - perfect for coloring books",
                "High-quality pigments for rich color saturation",
                "Soft, thick cores for a smooth laydown and excellent blending and shading",
                "Includes: poppy red, yellowed orange, Canary Yellow, salmon pink, grass green, Moss green, light aqua, Cobalt turquoise, electric blue, Indanthrone blue, Dioxazine purple hue and seashell pink"
            ]
        },
        {
            "category": "colored",
            "name": "Prismacolor Premier Colored Pencils, Portrait Set",
            "company": "Prismacolor",
            "image": "../../assets/images/pencil/color/prismacolorPrimierPortraitSet.jpg",
            "collectionSize": 24,
            "coreMaterial": "Soft",
            "price": 25.49,
            "discription":
            [
                "Range of colors specifically selected to help bring your portraits to life",
                "Soft, thick, ultra-smooth cores are perfect for shading and deliver an even color laydown",
                "Lightfast, richly saturated pigments",
                "Thick, robust leads resist cracking and chipping making them perfect for adult coloring books",
                "Includes 24 portrait-quality colored pencils"
            ]
        },
        {
            "category": "colored",
            "name": "Arteza Professional Colored Pencils 72 Set",
            "company":"Arteza",
            "image": "../../assets/images/pencil/color/artezaProfessional72Set.jpg",
            "collectionSize": 72,
            "coreMaterial": "Medium",
            "price": 28.97,
            "discription":
            [
                "Superior Quality, Sensible Price: Why pay a fortune for premium art pencils? This affordable colored pencil set gives you the same professional quality you'd get with far costlier brands. Try it & see.",
                "Blend & Layer Like a Pro: Go ahead. Layer it on. These expert coloring pencils glide smoothly across your paper, blend beautifully & layer effortlessly. You'll be amazed by their rich, deep coverage.",
                "Vivid, Varied Colors: Why settle for dull & boring? These bright colored pencils come in a broad array of brilliant, saturated colors. Each pencil is labeled & numbered for easy color identification.",
                "Crafted for Keeps: From their sturdy, comfortable barrels to their soft, break-resistant cores, your Arteza artist pencils are made to last. Count on them to sharpen easily & work superbly every time.",
                "Metal Storage Case & Iron-Clad Guarantee: 100% safe & nontoxic, your assorted colored pencils come in a durable, double-hinged storage tin. Any problems? Let us know & we'll send a free replacement."
            ]
        },
        {
            "category": "colored",
            "name": "Arteza Professional Colored Pencils 48 Set",
            "company":"Arteza",
            "image": "../../assets/images/pencil/color/artezaProfessional48Set.jpg",
            "collectionSize": 48,
            "coreMaterial": "Medium",
            "price": 16.87,
            "discription":
            [
                "Superior Quality, Sensible Price: Why pay a fortune for premium art pencils? This affordable colored pencil set gives you the same professional quality you'd get with far costlier brands. Try it & see.",
                "Blend & Layer Like a Pro: Go ahead. Layer it on. These expert coloring pencils glide smoothly across your paper, blend beautifully & layer effortlessly. You'll be amazed by their rich, deep coverage.",
                "Vivid, Varied Colors: Why settle for dull & boring? These bright colored pencils come in a broad array of brilliant, saturated colors. Each pencil is labeled & numbered for easy color identification.",
                "Crafted for Keeps: From their sturdy, comfortable barrels to their soft, break-resistant cores, your Arteza artist pencils are made to last. Count on them to sharpen easily & work superbly every time.",
                "Metal Storage Case & Iron-Clad Guarantee: 100% safe & nontoxic, your assorted colored pencils come in a durable, double-hinged storage tin. Any problems? Let us know & we'll send a free replacement."
            ]
        },
        {
            "category": "colored",
            "name": "Arteza Woodless Colored Pencils Set",
            "company":"Arteza",
            "image": "../../assets/images/pencil/color/artezaWoodlessColorSet.jpg",
            "collectionSize": 24,
            "coreMaterial": "Medium",
            "price": 13.87,
            "discription":
            [
                "Woodless Colored Pencils 24-Unique Rich & Vibrant Colors (Soft Core, Pre-sharpened, Set of 24)"
            ]
        },
        {
            "category": "colored",
            "name": "Prismacolor Premier Verithin Colored Pencils 36 Set",
            "company": "Prismacolor",
            "image": "../../assets/images/pencil/color/prismacolorPrimierVeritin36Set.jpg",
            "collectionSize": 36,
            "coreMaterial": "Hard",
            "price": 20.00,
            "discription":
            [
                "Pack of 1 box, available in 36 vibrant colors",
                "Hard, thin cores can be sharpened to a fine point",
                "Ideal for outlining, detailing, and lettering",
                "High-quality pigments deliver rich color saturation"
            ]
        },
        {
            "category": "colored",
            "name": "Prismacolor Premier Verithin Colored Pencils 24 Set",
            "company": "Prismacolor",
            "image": "../../assets/images/pencil/color/prismacolorPrimierVeritin24Set.jpg",
            "collectionSize": 24,
            "coreMaterial": "Hard",
            "price": 14.49,
            "discription":
            [
                "Thin cores are perfect for details, edges and lettering",
                "Leads resist crumbling, cracking and breakage",
                "Richly saturated, lightfast pigments",
                "Hardened cores sharpen to an ultra-fine point making them perfect for adult coloring books",
                "Includes: Lemon Yellow, Canary Yellow, Orange, Poppy Red, Crimson Red, Magenta, Process Red, Light Peach, Dahlia Purple, Parma Violet, Violet, Ultramarine, Peacock Blue, Indigo Blue, Apple Green, Grass Green, Olive Green, Peacock Green, Terra Cotta, Tuscan Red, Dark Brown, Warm Grey 20%, White and Black"
            ]
        },
        {
            "category": "colored",
            "name": "Prismacolor Premier Verithin Colored Pencils 12 Set",
            "company": "Prismacolor",
            "image": "../../assets/images/pencil/color/prismacolorPrimierVeritin12Set.jpg",
            "collectionSize": 12,
            "coreMaterial": "Hard",
            "price": 7.54,
            "discription":
            [
                "Thin cores are perfect for details, edges and lettering",
                "Leads resist crumbling, cracking and breakage",
                "Richly saturated, lightfast pigments",
                "Hardened cores sharpen to an ultra-fine point making them perfect for adult coloring books",
                "Includes: Canary Yellow: VT735, Orange: VT737, Poppy Red: VT744, Crimson Red: VT745, Violet: VT742, Peacock Blue: VT740-1/2, Indigo Blue: VT741, Grass Green: VT738, Peacock Green: VT739, Dark Brown: VT746, Black: VT747 and White: VT734"
            ]
        },
        {
            "category": "water",
            "name": "Derwent Water Color Pencils 12 Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterColor12Set.jpg",
            "collectionSize": 12,
            "coreMaterial": "Medium",
            "price": 10.74,
            "discription":
            [
                "STURDY PRECISION – Easy to sharpen, break-resistant pencils are ideal for long periods of use. With a 3.4mm core and hexagonal barrel, you gain precision for detailed drawings. Includes 12 colours.",
                "WATER SOLUBLE – Combine the control of a pencil with the beauty of watercolour. Use a wetted pencil tip to create rich textured lines or use dampened paper to obtain bright colours with soft edges.,",
                "COLOUR LAYERING – Pigment transfers to paper quickly due to a softer formulation. This helps with blending and layering, creating a range of effects from bold colours to delicate watercolour washes.",
                "ARTISTIC FLEXIBILITY – Customize colours by adding water to create muted watercolour washes. As the pigment is not permanent, you can use water to move and adjust colours, even after it has dried.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Canvas Pencil Wrap, Derwent Waterbrush Set, Derwent Technique Brushes and Derwent Watercolour Paper Pads."
            ]
        },
        {
            "category": "water",
            "name": "Derwent Water Color Pencils 24 Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterColor24Set.jpg",
            "collectionSize": 24,
            "coreMaterial": "Medium",
            "price": 20.59,
            "discription":
            [
                "STURDY PRECISION – Easy to sharpen, break-resistant pencils are ideal for long periods of use. With a 3.4mm core and hexagonal barrel, you gain precision for detailed drawings. Includes 24 colours.",
                "WATER SOLUBLE – Combine the control of a pencil with the beauty of watercolour. Use a wetted pencil tip to create rich textured lines or use dampened paper to obtain bright colours with soft edges.",
                "COLOUR LAYERING – Pigment transfers to paper quickly due to a softer formulation. This helps with blending and layering, creating a range of effects from bold colours to delicate watercolour washes.",
                "ARTISTIC FLEXIBILITY – Customize colours by adding water to create muted watercolour washes. As the pigment is not permanent, you can use water to move and adjust colours, even after it has dried.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Canvas Pencil Wrap, Derwent Waterbrush Set, Derwent Technique Brushes and Derwent Watercolour Paper Pads."
            ]
        },
        {
            "category": "water",
            "name": "Derwent Water Color Pencils 36 Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterColor36Set.jpg",
            "collectionSize": 36,
            "coreMaterial": "Medium",
            "price": 41.99,
            "discription":
            [
                "STURDY PRECISION – Easy to sharpen, break-resistant pencils are ideal for long periods of use. With a 3.4mm core and hexagonal barrel, you gain precision for detailed drawings. Includes 36 colours.",
                "WATER SOLUBLE – Combine the control of a pencil with the beauty of watercolour. Use a wetted pencil tip to create rich textured lines or use dampened paper to obtain bright colours with soft edges.",
                "COLOUR LAYERING – Pigment transfers to paper quickly due to a softer formulation. This helps with blending and layering, creating a range of effects from bold colours to delicate watercolour washes.",
                "ARTISTIC FLEXIBILITY – Customize colours by adding water to create muted watercolour washes. As the pigment is not permanent, you can use water to move and adjust colours, even after it has dried.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Canvas Pencil Wrap, Derwent Waterbrush Set, Derwent Technique Brushes and Derwent Watercolour Paper Pads."
            ]
        },
        {
            "category": "water",
            "name": "Derwent Water Color Pencils 48 Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterColor48Set.jpg",
            "collectionSize": 48,
            "coreMaterial": "Medium",
            "price": 85.94,
            "discription":
            [
                "STURDY PRECISION – Easy to sharpen, break-resistant pencils are ideal for long periods of use. With a 3.4mm core and hexagonal barrel, you gain precision for detailed drawings. Includes 48 colours.",
                "WATER SOLUBLE – Combine the control of a pencil with the beauty of watercolour. Use a wetted pencil tip to create rich textured lines or use dampened paper to obtain bright colours with soft edges.",
                "COLOUR LAYERING – Pigment transfers to paper quickly due to a softer formulation. This helps with blending and layering, creating a range of effects from bold colours to delicate watercolour washes.",
                "ARTISTIC FLEXIBILITY – Customize colours by adding water to create muted watercolour washes. As the pigment is not permanent, you can use water to move and adjust colours, even after it has dried.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Canvas Pencil Wrap, Derwent Waterbrush Set, Derwent Technique Brushes and Derwent Watercolour Paper Pads."
            ]
        },
        {
            "category": "water",
            "name": "Derwent Water Color Pencils 72 Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterColor72Set.jpg",
            "collectionSize": 72,
            "coreMaterial": "Medium",
            "price": 168.29,
            "discription":
            [
                "STURDY PRECISION – Easy to sharpen, break-resistant pencils are ideal for long periods of use. With a 3.4mm core and hexagonal barrel, you gain precision for detailed drawings. Includes 72 colours.",
                "WATER SOLUBLE – Combine the control of a pencil with the beauty of watercolour. Use a wetted pencil tip to create rich textured lines or use dampened paper to obtain bright colours with soft edges.",
                "COLOUR LAYERING – Pigment transfers to paper quickly due to a softer formulation. This helps with blending and layering, creating a range of effects from bold colours to delicate watercolour washes.",
                "ARTISTIC FLEXIBILITY – Customize colours by adding water to create muted watercolour washes. As the pigment is not permanent, you can use water to move and adjust colours, even after it has dried.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Canvas Pencil Wrap, Derwent Waterbrush Set, Derwent Technique Brushes and Derwent Watercolour Paper Pads."
            ]
        },
        {
            "category": "water",
            "name": "Derwent Water Inktense Ink Pencils 6 Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterInktenseColor6Set.jpg",
            "collectionSize": 6,
            "coreMaterial": "Soft",
            "price": 8.10,
            "discription":
            [
                "VIBRANT SHADES – The round 4mm soft lead core is perfect for bold expressive drawings. The highly pigmented colour is easy to apply and produces a vibrant finish. Includes a range of 6 colours.",
                "WATER SOLUBLE – Expand your creative possibilities. Water soluble pencils can be used dry for expressive drawings, or washed out with water to create a bright, yet translucent ink-like effect.",
                "PERMANENT COLOUR – Pigments dry quickly and permanently when washed out, minimizing colour bleeding. Once dry, colours can be placed next to each other or layered, without fear of colour bleeding.",
                "SURFACE VARIETY – Switch up your artistic canvas. As the colour dries permanently, it’s great on fabrics such as silk or cotton. Can also easily be used on paper. Modify the use to fit your project.",
                "COLOUR CREATION – Make custom shades by mixing colours together. You can also obtain lighter shades of the same colour by adding water. Mix colours to create a truly unique piece of art.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Waterbrush Set, Derwent Technique Brushes, Derwent Watercolour Paper Pads and Derwent Carry-All Canvas Bag."
            ]
        },
        {
            "category": "water",
            "name": "Derwent Water Inktense Ink Pencils 12 Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterInktenseColor12Set.jpg",
            "collectionSize": 12,
            "coreMaterial": "Soft",
            "price": 14.63,
            "discription":
            [
                "VIBRANT SHADES – The round 4mm soft lead core is perfect for bold expressive drawings. The highly pigmented colour is easy to apply and produces a vibrant finish. Includes a range of 12 colours.",
                "WATER SOLUBLE – Expand your creative possibilities. Water soluble pencils can be used dry for expressive drawings, or washed out with water to create a bright, yet translucent ink-like effect.",
                "PERMANENT COLOUR – Pigments dry quickly and permanently when washed out, minimizing colour bleeding. Once dry, colours can be placed next to each other or layered, without fear of colour bleeding.",
                "SURFACE VARIETY – Switch up your artistic canvas. As the colour dries permanently, it’s great on fabrics such as silk or cotton. Can also easily be used on paper. Modify the use to fit your project.",
                "COLOUR CREATION – Make custom shades by mixing colours together. You can also obtain lighter shades of the same colour by adding water. Mix colours to create a truly unique piece of art.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Waterbrush Set, Derwent Technique Brushes, Derwent Watercolour Paper Pads and Derwent Carry-All Canvas Bag."
            ]
        },
        {
            "category": "water",
            "name": "Derwent Water Inktense Ink Pencils 24 Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterInktenseColor24Set.jpg",
            "collectionSize": 24,
            "coreMaterial": "Soft",
            "price": 22.60,
            "discription":
            [
                "VIBRANT SHADES – The round 4mm soft lead core is perfect for bold expressive drawings. The highly pigmented colour is easy to apply and produces a vibrant finish. Includes a range of 24 colours.",
                "WATER SOLUBLE – Expand your creative possibilities. Water soluble pencils can be used dry for expressive drawings, or washed out with water to create a bright, yet translucent ink-like effect.",
                "PERMANENT COLOUR – Pigments dry quickly and permanently when washed out, minimizing colour bleeding. Once dry, colours can be placed next to each other or layered, without fear of colour bleeding.",
                "SURFACE VARIETY – Switch up your artistic canvas. As the colour dries permanently, it’s great on fabrics such as silk or cotton. Can also easily be used on paper. Modify the use to fit your project.",
                "COLOUR CREATION – Make custom shades by mixing colours together. You can also obtain lighter shades of the same colour by adding water. Mix colours to create a truly unique piece of art.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Waterbrush Set, Derwent Technique Brushes, Derwent Watercolour Paper Pads and Derwent Carry-All Canvas Bag."
            ]
        },
        {
            "category": "water",
            "name": "Derwent Water Inktense Ink Pencils 36 Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterInktenseColor36Set.jpg",
            "collectionSize": 36,
            "coreMaterial": "Soft",
            "price": 46.89,
            "discription":
            [
                "VIBRANT SHADES – The round 4mm soft lead core is perfect for bold expressive drawings. The highly pigmented colour is easy to apply and produces a vibrant finish. Includes a range of 36 colours.",
                "WATER SOLUBLE – Expand your creative possibilities. Water soluble pencils can be used dry for expressive drawings, or washed out with water to create a bright, yet translucent ink-like effect.",
                "PERMANENT COLOUR – Pigments dry quickly and permanently when washed out, minimizing colour bleeding. Once dry, colours can be placed next to each other or layered, without fear of colour bleeding.",
                "SURFACE VARIETY – Switch up your artistic canvas. As the colour dries permanently, it’s great on fabrics such as silk or cotton. Can also easily be used on paper. Modify the use to fit your project.",
                "COLOUR CREATION – Make custom shades by mixing colours together. You can also obtain lighter shades of the same colour by adding water. Mix colours to create a truly unique piece of art.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Waterbrush Set, Derwent Technique Brushes, Derwent Watercolour Paper Pads and Derwent Carry-All Canvas Bag."
            ]
        },
        {
            "category": "water",
            "name": "Derwent Water Inktense Ink Pencils 48 Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterInktenseColor48Set.jpg",
            "collectionSize": 48,
            "coreMaterial": "Soft",
            "price": 91.59,
            "discription":
            [
                "VIBRANT SHADES – The round 4mm soft lead core is perfect for bold expressive drawings. The highly pigmented colour is easy to apply and produces a vibrant finish. Includes a range of 48 colours.",
                "WATER SOLUBLE – Expand your creative possibilities. Water soluble pencils can be used dry for expressive drawings, or washed out with water to create a bright, yet translucent ink-like effect.",
                "PERMANENT COLOUR – Pigments dry quickly and permanently when washed out, minimizing colour bleeding. Once dry, colours can be placed next to each other or layered, without fear of colour bleeding.",
                "SURFACE VARIETY – Switch up your artistic canvas. As the colour dries permanently, it’s great on fabrics such as silk or cotton. Can also easily be used on paper. Modify the use to fit your project.",
                "COLOUR CREATION – Make custom shades by mixing colours together. You can also obtain lighter shades of the same colour by adding water. Mix colours to create a truly unique piece of art.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Waterbrush Set, Derwent Technique Brushes, Derwent Watercolour Paper Pads and Derwent Carry-All Canvas Bag."
            ]
        },
        {
            "category": "water",
            "name": "Derwent Water Inktense Ink Pencils 72 Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterInktenseColor72Set.jpg",
            "collectionSize": 72,
            "coreMaterial": "Soft",
            "price": 118.03,
            "discription":
            [
                "VIBRANT SHADES – The round 4mm soft lead core is perfect for bold expressive drawings. The highly pigmented colour is easy to apply and produces a vibrant finish. Includes a range of 72 colours.",
                "WATER SOLUBLE – Expand your creative possibilities. Water soluble pencils can be used dry for expressive drawings, or washed out with water to create a bright, yet translucent ink-like effect.",
                "PERMANENT COLOUR – Pigments dry quickly and permanently when washed out, minimizing colour bleeding. Once dry, colours can be placed next to each other or layered, without fear of colour bleeding.",
                "SURFACE VARIETY – Switch up your artistic canvas. As the colour dries permanently, it’s great on fabrics such as silk or cotton. Can also easily be used on paper. Modify the use to fit your project.",
                "COLOUR CREATION – Make custom shades by mixing colours together. You can also obtain lighter shades of the same colour by adding water. Mix colours to create a truly unique piece of art.",
                "ACCESSORIES – For best results, combine with other Derwent products, such as Derwent Waterbrush Set, Derwent Technique Brushes, Derwent Watercolour Paper Pads and Derwent Carry-All Canvas Bag."
            ]
        },
        {
            "category": "water",
            "name": "Derwent Watercolor Pencils, Metallic Set",
            "company": "Derwent",
            "image":"../../assets/images/pencil/watercolor/derwentWaterColorMetallicSet.jpg",
            "collectionSize": 12,
            "coreMaterial": "Soft",
            "price": 9.56,
            "discription":
            [
                "Derwent Metallic Pencils add brilliant definition and highlights to your work; matte metallic colors; 12 pack",
                "Add a light metallic wash to dissolve the pigment further; pre-sharpened with a sure hexagonal grip",
                "PERMANENT COLOUR – Pigments dry quickly and permanently when washed out, minimizing colour bleeding. Once dry, colours can be placed next to each other or layered, without fear of colour bleeding.",
                "Metallic tin of 12 pencils contains the following colors: Silver, Pewter, Gold, Antique Gold, Bronze, Copper, Yellow, Red, Pink, Purple, Blue and Green"
            ]
        },
        {
            "category": "water",
            "name": "Arteza Professional Watercolor Pencils Set",
            "company": "Arteza",
            "image":"../../assets/images/pencil/watercolor/artezaProfessionalWaterColor72Set.jpg",
            "collectionSize": 72,
            "coreMaterial": "Soft",
            "price": 30.99,
            "discription":
            [
                "Add Depth to Your Masterpieces: With just a dab of a wet brush, these water-soluble colored pencils allow you to blend, layer, and create unique effects that lend drama to your artwork.",
                "Highly Pigmented for Vibrant Color: Your sketch pencils have soft, break-resistant cores made from lightfast pigment that won't fade over time. 72 shades give you limitless creative freedom.",
                "Comes in Protective Case: Your rainbow-colored pencils arrive in a sturdy tin that's ideal for storing and transporting them. Give this high-quality pencil set as a gift to your favorite artist.",
                "Non-Toxic, With a Comfortable Grip: Our watercolor pencils for kids, teens, and adults conform to all safety standards. They each feature a classic, 6-sided wooden casing for an ergonomic fit.",
                "100% Money-Back Guarantee: We stand behind our colored pencil set with a rock-solid satisfaction guarantee. If you're not happy, return them for a no-hassle refund or replacement."
            ]
        },
        {
            "category": "water",
            "name": "Arteza Woodless Watercolor Pencils Set",
            "company": "Arteza",
            "image":"../../assets/images/pencil/watercolor/artezaWoodlessWaterColorPencil24Set.jpg",
            "collectionSize": 24,
            "coreMaterial": "Soft",
            "price": 16.14,
            "discription":
            [
                "24 unique water soluble colors",
                "Woodless and environmentally friendly",
                "Coated in lacquer to prevent rubbing and can be sharpened with any sharpener",
                "Five times more lead than wooden colored pencils",
                "Create even strokes with minimal pressure - Perfect for adult watercoloring"
            ]
        },
        {
            "category": "water",
            "name": "Arteza Triangular-shaped Watercolor Pencils Set",
            "company": "Arteza",
            "image":"../../assets/images/pencil/watercolor/artezaProfessionalWaterColor48Set.jpg",
            "collectionSize": 48,
            "coreMaterial": "Soft",
            "price": 14.99,
            "discription":
            [
                "Extensive range of 48 unique long pre-sharpened watercolor pencils with color names",
                "Triangular shaped for easy comfortable grip, also won’t roll off desks or tables",
                "Constructed from high grade ultra-lightweight basswood for durability",
                "Packaged in an eco-friendly tube that is resistant to crushing and protects pencils from damage",
                "Perfect for watercolorcolor mixing, blending and adult coloring"
            ]
        },
        {
            "category": "accessory",
            "name": "Arteza Watercolor Painting & Drawing Paper Sketchbooks, 3 Pack Set",
            "company": "Arteza",
            "image":"../../assets/images/pencil/accessory/artezaWaterColorPaintDrawingPaperSketchBook3Set.jpg",
            "collectionSize": 3,
            "price": 21.89,
            "discription":
            [
                "Value 3-Pack: Many watercolor sketchbooks offer just 12 sheets max. But your Arteza set gives you two 5.5\"X8.5\" pads – 90 sheets in all – so you can play with techniques & effects to your heart's content.",
                "Premium Paper, Affordably Priced: Why spend a fortune? Your Arteza watercolor paper is thicker & heavier (140 lb./300gsm), so it can stand up to multiple washes without warping or bleeding through.",
                "Just-Right Texture: Not too rough. Not too smooth. Your Arteza painting paper has a cold-pressed surface – slightly textured or \"toothy\" – so it's ideal for large, even washes & for finer detail, too.",
                "No More Fading: Concerned that your artwork might deteriorate over time? No worries. Each Arteza drawing pad is 100% acid-free, so colors stay rich & vibrant. Perfect for most wet & dry media.",
                "Satisfaction Guaranteed: We're sure you'll love your 3 durable, glue-bound sketch pads, with their easy-to-tear pages. But if you have problems, just let us know & we'll send you a free replacement."
            ]
        },
        {
            "category": "accessory",
            "name": "Bellofy Sketchpad Artist Pro, Watercolor, Acrylic Art Pad for Sketching, Ink Sketch Book, Coloring Notebook",
            "company": "Bellofy",
            "image":"../../assets/images/pencil/accessory/bellofy100SheetNoteBook.jpg",
            "collectionSize": 1,
            "price": 14.99,
            "discription":
            [
                "Premium Artist Paper – This heavy, A-4 fine art drawing paper is best for sketching, drawing, manga, cartoons, still life, stippling and practicing new styles.",
                "Mixed Media Use – The premium surface makes our quality drawing paper good for most mediums, including charcoal, watercolors, acrylic paint, ink or pencil.",
                "Durable, Acid-Free Paper – Bellofy sketch paper is strong, smooth and absorbs colors and lines more readily, reducing blotching, smudges, and accidents.",
                "Satisfaction Guaranteed – All Bellofy products are backed by premium craftsmanship, reliability and customer service you can rely on.",
                "100-Sheet Sketchpad Artist Pro, Watercolor, and Acrylic Art Pad for Sketching, Ink Sketch Book, Coloring Notebook - 98 Ib / 160 g/m2 - 9\" x 12\" in Multi-Media Spiral Notebook, Drawing Paper, Drawing Pad"
            ]
        },
        {
            "category": "accessory",
            "name": "Derwent Academy Sketch Pad, Gray, A5, Portrait",
            "company": "Derwent",
            "image":"../../assets/images/pencil/accessory/derwentAcademySketchPadGrayA5.jpg",
            "collectionSize": 1,
            "price": 13.44,
            "discription":
            [
                "Ideal for everyday sketching needs in the studio or on the road",
                "Gray cartridge paper is suitable for all kinds of drawing media",
                "Works well with graphite and colored pencils",
                "110gsm (75#) acid-free gray paper; 5.83W x 8.27H Inch Sheet Size",
                "30 sheets per pad"
            ]
        },
        {
            "category": "accessory",
            "name": "Bellofy 9x12-Inch 100 Sheet Sketch Book",
            "company": "Bellofy",
            "image":"../../assets/images/pencil/accessory/bellofySketchBook9X12100Sheet.jpg",
            "collectionSize": 1,
            "price": 10.99,
            "discription":
            [
                "QUALITY: Our professional grade sketching sheets are smudge resistant and designed to endure frequent erasing. The thick and smooth surface makes it ideal for pencils, pens, graphite, charcoal, and more.",
                "CONVENIENCE: This portable sketchbook is spiral bound from the top, making it ideal for both lefties and righties. It opens flat on any surface and allows you to flip effortless from one sheet to another.",
                "TEAR & SHARE: With micro-perforated pages for easy removal, you can say good-bye to unexpected rips and tears! This protects what you create and provides clean edges that are great for presentation and framing.",
                "ARTIST & ECO FRIENDLY: We use recycled, acid free & pH neutral paper that is safe to use and resists unwanted yellowing over time.",
                "GUARANTEE: This sketch pad is created by artists, for artists. We believe that you will love this product as much as we do. But, if for some reason you don’t, let us know within 90 days and you’ll get every penny back."
            ]
        },
        {
            "category": "accessory",
            "name": "Bellofy 50 Sheet Watercolor Paper Pad ",
            "company": "Bellofy",
            "image":"../../assets/images/pencil/accessory/bellofyWaterPadSeries9x1250Sheets.jpg",
            "collectionSize": 1,
            "price": 13.99,
            "discription":
            [
                "COMFORTABILITY: 130 lB / 190 GSM Coldpress sheets, providing a high quality, thin design to create an ideal water-coloring experience.",
                "GLUE BOUND: All pages are glue bound for the easiest page detachment.",
                "DURABLE: It's DURABLE, ACID FREE PAPER is strong enough for your entire watercolor and sketchbook painting that will not bleed through.",
                "SUITABILITY: Works with all watercolor paint and markers for sketching, drawing and painting all of your designs.",
                "GUARANTEE: Rest assured that you will get the best of the best products when you shop with us. We're so sure you'll love your purchase, we offer a MONEY BACK GUARANTEE!"
            ]
        },
        {
            "category": "accessory",
            "name": "Derwent Academy Sketch Paper Pad, 50 Sheets, 18\" x 12\", Mediumweight",
            "company": "Derwent",
            "image":"../../assets/images/pencil/accessory/derwentAcademySketchPadWhite18x1250Sheet.jpg",
            "collectionSize": 1,
            "price": 6.99,
            "discription":
            [
                "Quality sketch pad is the perfect choice for aspiring artists and hobbyists",
                "Mediumweight 45lb paper is great for sketching with a variety of dry mediums",
                "White, acid-free pages keep artwork looking its best and won’t Yellow or Degrade over time",
                "Top bound sheets easily flip back when it’s time to start a New sketch",
                "18\" x 12\" sheet size. Contains 50 sheets."
            ]
        },
        {
            "category": "accessory",
            "name": "Derwent Academy Drawing Paper Pad, 40 Sheets, 9\" x 12\", Heavyweight ",
            "company": "Derwent",
            "image":"../../assets/images/pencil/accessory/derwentAcademySketchPadWhite9x1240Sheet.jpg",
            "collectionSize": 1,
            "price": 4.99,
            "discription":
            [
                "Quality drawing pad is the perfect choice for aspiring artists and hobbyists",
                "Heavyweight 67lb paper is great for drawing with a variety of dry mediums",
                "White, acid-free pages keep artwork looking its best and won’t Yellow or Degrade over time",
                "Top bound sheets easily flip back when it’s time to start a New sketch",
                "9\" x 12\" sheet size. Contains 40 sheets."
            ]
        },
        {
            "category": "accessory",
            "name": "Prismacolor Premier Pencil Sharpener",
            "company": "Prismacolor",
            "image":"../../assets/images/pencil/accessory/prismacolorPencilSharpener.jpg",
            "collectionSize": 1,
            "price": 5.49,
            "discription":
            [
                "Sharpens your Prismacolor colored pencils to a perfect point",
                "Two different blades, both made from high-quality sharpened steel",
                "Select a wide point for coverage or a fine point for sharp details",
                "Translucent black body allows you to see exactly when the sharpener is full",
                "Specifically designed for Prismacolor Premier pencils"
            ]
        },
        {
            "category": "accessory",
            "name": "Derwent Academy Pencil Sharpener & Eraser, 2-In-1",
            "company": "Derwent",
            "image":"../../assets/images/pencil/accessory/derwentAcademySharper&Eraser.jpg",
            "collectionSize": 1,
            "price": 6.99,
            "discription":
            [
                "With 2 sharpening ports and a handy eraser, the Derwent Academy 2-in-1 Pencil sharpener & eraser is a perfect choice for aspiring artists",
                "Its dual ports let you sharpen both standard pencils and larger media, like oil pastels, with ease, while the large, high-quality eraser takes care of unwanted Pencil marks without damaging your paper",
                "2-In-1 sharpener & eraser is a must-have tool for aspiring artists and hobbyists; includes 2 sharpening ports and a large eraser in one conveniently compact design",
                "THigh-quality, durable blades sharpen media to a fine point and minimize breaks in the ports; 8mm port is perfect for sharpening standard-sized pencils",
                "11mm port sharpens large media like oil pastels and jumbo pencils; smooth, white eraser easily removes Pencil marks while preventing paper abrasion; enclosed reservoir catches all shavings"
            ]
        },
        {
            "category": "accessory",
            "name": "Derwent Pencil Case, Canvas Carry-All Bag Pencil Holder with Removable Shoulder Strap, Holds up to 132 Pencils and Supplies",
            "company": "Derwent",
            "image":"../../assets/images/pencil/accessory/derwentCarryAllStorage132.jpg",
            "collectionSize": 1,
            "price": 22.18,
            "discription":
            [
                "Large bag that holds your pencils, accessories and paper pads",
                "Perfect for on-site sketching and art class",
                "Removable shoulder strap and exterior pocket",
                "8-1/2 x 10 x 4-1/2 inches overall",
                "Accessories shown not included"
            ]
        },
        {
            "category": "accessory",
            "name": "Derwent Pencil Case, Canvas Wrap Pencil Holder, Holds up to 30 Pencils and Supplies",
            "company": "Derwent",
            "image":"../../assets/images/pencil/accessory/derwentPencilWrap30.jpg",
            "collectionSize": 1,
            "price": 12.99,
            "discription":
            [
                "Stylish, lightweight, well-made Derwent tan canvas roll is secured with dark brown faux leather ties; pencil case / pouch has individual compartments to protect and hold up to 30 of your favorite drawing pencils and an eraser",
                "Small enough to fit into a backpack, portfolio or purse; 17.75\"L when open x 7.5\"H; pencils and accessories not included",
                "The wrap / pencil holder unrolls flat for easy access to the contents and when you are ready to move on, you just roll it up again; it is quite simply a must-have when you're out and about"
            ]
        },
        {
            "category": "accessory",
            "name": "Derwent Pencil Case, Canvas Wrap Pencil Holder, Holds up to 12 Pencils ",
            "company": "Derwent",
            "image":"../../assets/images/pencil/accessory/derwentPencilWrap12.jpg",
            "collectionSize": 1,
            "price": 4.80,
            "discription":
            [
                "Tough khaki canvas with leather-look wrap ties",
                "Two compartments store 6 pencils each",
                "The smart way to carry your drawing pencils and pens",
                "Slips easily into your backpack or purse",
                "Pencils and accessories not included"
            ]
        }
    ];

    Product.collection.insert(products, function(err)
    {
        if(err)
        {
            return console.log(err);
        } 
        else
        {
            console.log('Collection Saved');
            res.send('DB Products Saved!');
        }
    })
});



