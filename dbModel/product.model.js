var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var defineSchema = new Schema
({
    category:
     {
        type: String,
        required: true
     },
     name:
     {
         type: String,
         required: true
     },
     company: 
     {
         type: String,
         required: true
     },
     image:
     {
         type: String,
         default: '../../assets/images/pencil.svg'
     },
     collectionSize:
     {
         type: Number,
         required: true
     },
     coreMaterial:
     {
        type: String,
        required: true
     },
     price:
     {
         type: Number,
         required: true
     },
     discription:
     {
         type: [String]
     }
     
});

module.exports = mongoose.model('Product', defineSchema);

