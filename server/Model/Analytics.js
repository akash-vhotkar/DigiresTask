const mongoose = require('mongoose');
module.exports =  mongoose.model("Analysis",{
    browser_name:{
        type:String,
        required: true
    },
    ip:{
        type:String,
        required: true
    },
    event_type:{
        type:String,
        
    },
    user_id:{
        tyep:String ,
        required:false
    }
})
