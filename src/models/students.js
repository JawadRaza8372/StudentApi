const mongoose=require('mongoose');
const validator=require("validator");
const studentSchema=new mongoose.Schema({
    name:{
        type:String,required:true,minlength:5,
    }, email:{
        type:String,required:true,unique:[true,"email is taken"],validator(value){
if (!validator.isEmail(value)){
throw new Error("invalid email")
}
        }
    }, phone:{
        type:Number,required:true,minlength:10,maxlength:10,unique:[true,"phone number is taken"]
    },address:{
        type:String,required:true,minlength:7
    }
});
const Student=new mongoose.model("Student",studentSchema);
module.exports=Student;