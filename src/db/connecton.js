const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/studentApi",{
useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false
}).then(()=>{
console.log("connection is successfull")
}).catch((error)=>{
    console.log("Error: "+error)
})