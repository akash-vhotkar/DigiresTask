const mongoose = require('mongoose');
const express =require('express');
const app =  express();
const cors =  require('cors');

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/digirex", { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: true}).then(() => {
    console.log("the database is connected successfully...");
}).catch(err => {
    console.log(err);
})


app.use("/auth",  require('./Route/auth'));
app.use("/dashboard", require('./Route/Dashboard'));
app.use("/analysis",  require('./Route/analysis'));


const port = process.env.PORT || 5000;
app.listen(port , (err)=>{
  if(err){
      console.log(err);
  }  
  else{
      console.log(`Server running on port ${port}`);
  }

})