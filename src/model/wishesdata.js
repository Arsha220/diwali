const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:user@diwali.tnr1r.mongodb.net/diwali?retryWrites=true&w=majority');

const Schema = mongoose.Schema

const wishesSchema = new Schema({

    rname:String,
    email:String,
    
});

var wishesdata = mongoose.model('wishesdata',wishesSchema);

module.exports =wishesdata;