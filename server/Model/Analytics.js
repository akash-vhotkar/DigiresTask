const mongoose = require('mongoose');
module.exports =  mongoose.model("",{
    browser_name:{
        type:String,
        required: true
    },
    user_ip:{
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
