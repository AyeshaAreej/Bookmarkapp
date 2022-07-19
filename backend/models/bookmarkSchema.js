const mongoose = require('mongoose')

const bookmarkSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true,
    },
  
});

const  Bookmark = mongoose.model('Bookmark',bookmarkSchema)
module.exports = Bookmark

 