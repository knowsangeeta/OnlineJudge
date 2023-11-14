const express = require('express');
const app = express();
const port = 8080;
const {DBConnection} = require('./database/db.js');
const User = require("./models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
DBConnection();


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post("/register", async(req,res)=>{
  try{
    //get all the data from the frontend
    const { firstname,lastname, email, password} = req.body;
    console.log(firstname,lastname,email,password);
    //check all fields are there
    if(!(firstname && lastname && email && password)){
      return res.status(400).send("Please enter all the information.");
    }
    // check if user already exists
    
    const existingUser = await User.findOne({email});
    if(existingUser){
      res.status(200).send("User already exists!");
    }
    //encrypt the password
    const hashedPassword = await bcrypt.hash(password,10);

    //save the user in database
    const user = await User.create({
      firstname, 
      lastname, 
      email, 
      password : hashedPassword,
    });
    //generate the token for the user and send it
    const token = jwt.sign({id:user._id, email}, process.env.SECRET_KEY, {expiresIn:"1h"});
    user.token = token;
    user.password = undefined;
    res.status(200).json({
      message:"You have successfully registered!",
      user
    }); 

  } catch(error){
    console.log(error.message);
  }
});

app.post("/login", async(req,res)=>{
  try{
    //get all the user data
    const {email, password} = req.body;
    
    //check all fields are there
    if(!(email && password)){
      return res.status(400).send("Please enter all the information.");
    }
    // check if user already exists
    const user = await User.findOne({email});
    if(!user){
      res.status(200).send("User not found");
    }
    //match the password
    const enteredPassword = await bcrypt.compare(password,user.password);
    if(!enteredPassword){
      return res.status(400).send("Incorrect Password")
    }
    //store cookies
    const options ={
      expires: new Date(Date.now()+1*24*60*60*1000),
      httpOnly :true,
    };
    
    //generate the token 
    const token = jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn:"1h"});
    user.token = token;
    user.password = undefined;
    
    //send the token
    res.status(200).cookie("token",token,options).json({
      message:"You have successfully logged in!",
      success:true,
      token,
    });

  } catch(error){
    console.log(error.message);
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});