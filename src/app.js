const express=require("express");
const app=express();
app.use(express.json());
require("./db/connecton");
const Student=require("./models/students");

const port=process.env.PORT || 3000;
app.post("/student",(req,res,next)=>{
    const user= new Student(req.body);
    console.log(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send("error"+e)
    })
});

app.get("/student",(req,res,next)=>{
    Student.find().then((data)=>{
        res.send(data);
        next();
    }).catch((e)=>{
        res.send("Error:"+e)
    })

})

app.get("/student/:name",(req,res,next)=>{
    const _name=req.params.name;
    Student.findOne({name:_name}).then((data)=>{
        if (data){
            res.send(data);
            next();
        }
        else{
            res.status(500).send("data not found")
        }
        
    }).catch((e)=>{
        res.send("Error:"+e)
    })

})
//patch and pull ma itna differance hy k patch aik spacific property ko change karta hy jab k pull sary k sary document ko change karta hy
app.patch("/student/:name",(req,res,next)=>{
    const _name=req.params.name;
    Student.findOneAndUpdate({name:_name},{name:req.body.name}).then((data)=>{
        if (data){
            res.send(data);
            next();
        }
        else{
            res.status(500).send("data not found")
        }
        
    }).catch((e)=>{
        res.send("Error:"+e)
    })
})
    app.delete("/student/:name",(req,res,next)=>{
        const name=req.params.name;
        Student.findOneAndDelete({name:name}).then((data)=>{
           if (!name || !data){
               res.status(400).send("data not found");
               
           }
           else{

            console.log(data);
                res.send("successfull");
  next();
}
            
        }).catch((e)=>{
            res.send("Error:"+e)
        })
    })
    



app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
});
