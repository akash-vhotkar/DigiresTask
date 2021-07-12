const mongoose = require('mongoose');
module.exports = mongoose.model("Records",  {
    name:{
        type:String,
        required: true
    },
    to:{
        type:String,
        required: true
    },
    from: {
        type:String,
        required: true
    },
    notes:{
        type:String,
        required: true
    }
    
})