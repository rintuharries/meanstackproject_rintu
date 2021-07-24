const express=require("express");
const app=express();
const cors=require("cors");
const jwt=require("jsonwebtoken");
const User=require("./src/model/Userdata");

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

email="admin@gmail.com"
password="Admin123@"

app.post('/signup', (req, res) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
       User.findOne({email : req.body.email}).exec(function(err,user){
      console.log(user);
      if(user) {
        res.status(401).send('User exists')
        console.log("user exists");
      } 

      else{

       var data = {
            firstname : req.body.firstname,
            lastname: req.body.lastname,
            email : req.body.email,
            password : req.body.password,
            phone: req.body.phone,
            usertype: req.body.usertype
  }
  var data = new User(data);
  data.save();  
}
})
})

app.listen(8000,()=>{
    console.log("Server Ready at 8000");
});

app.post('/login', (req, res) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
  
        
        if(req.body.email=="admin@gmail.com" && req.body.password=="Admin123@"){
          let payload={subject:email+password}
          let token=jwt.sign(payload,'secretKey')  
          res.status(200).send({token})
          console.log("token")
        }
        else{
          User.findOne({email: req.body.email, password:req.body.password},function(err,user){
  
            if(!user){ 
              res.status(401).send('User not registered')
            }
            else{
             res.status(200).send({user})
             console.log("success")
            }
          })
        }
      
    })