const mongoose = require('mongoose');
const express =require('express');
const app =  express();
const cors =  require('cors');
const jwt = require('jsonwebtoken');
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000"
}))

mongoose.connect("mongodb://localhost:27017/digirex", { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: true}).then(() => {
    console.log("the database is connected successfully...");
}).catch(err => {
    console.log(err);
})

const jwtauthorization= (req,res , next)=>{
    const authheader = req.headers.authorization;
    if( authheader){
        const token = authheader.split(' ')[1];
        console.log("the authheader is fired and its story is  ", token);
        jwt.verify(token, 'secret', (err, user)=>{
            if(err) res.status(401).json({err: 1, message:"please login"});
            req.user = user;
        
            next();
        })
    }
    else{
        res.status(401).json({err: 1, message:"please login "})
    }
    
}


app.use("/auth",  require('./Route/auth'));
app.use("/dashboard", jwtauthorization, require('./Route/Dashboard'));
app.use("/analysis",  require('./Route/analysis'));
app.post('/verifytoken',(req,res)=>{
    const token = req.body.token;
   
    jwt.verify(token, 'secret', (err, user)=>{
        if(err) res.status(401).json({err: 1, message:"please login"});
        else{
            res.status(200).json({err: 0, message:"Login Successfully"});
        }
    })
})

const port = process.env.PORT || 5000;
app.listen(port , (err)=>{
  if(err){
      console.log(err);
  }  
  else{
      console.log(`Server running on port ${port}`);
  }

})