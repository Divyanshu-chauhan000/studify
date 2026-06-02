const User = require('../models/User')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/generateToken')

// Register Logic here

 const registerUser = async (req , res) =>{
  try{
     const {fullName , userName , email , password } = req.body;

    //  checking if there is any empty field 
    if(!fullName || !userName || !email || !password){
      console.log("All fields are required");
      res.status(400).json({success : false ,message : "All field are required"});
    }


    // checking if there is any existing user with same email

    const existingEmail = await User.findOne({email});
    if(existingEmail){
      console.log("Email already exist");
      res.status(400).json({success :  false ,message : "Email already exist"});
    }
     
    // checking if there is any existing user with same userName

    const existingUserName =  await User.findOne({userName});
    if(existingUserName){
      console.log("UserName alreay taken");
      res.status(400).json({success : false ,message : "UserName already taken , Try Something else"});
    }


    // Now hashing the password 
    const hashedPassword = await bcrypt.hash(password , 10);

    // Now creating the user using this hashedPassword 


    const user = await User.create({
      fullName,
      userName,
      email,
      password : hashedPassword,
    });

    // now generating the token
    const token = generateToken(user._id);
   

    // sending response 
    res.status(201).json({success : true , message : "User Registered Successfull" , token , user : {
      id : user._id,
      fullName : user.fullName,
      userName  : user.userName,
      email : user.email,
    }} )

  }
  catch(error){
    console.log(error);
    res.status(500).json({success : false , message : "Server Error"});
  }
};



// login logic is here


const loginUser = async (req , res )=>{
  try{
     

    const {email , password } = req.body;

    //check if there is any field empty
    if(!email || !password){
      console.log("All fields are required ");
      res.status(400).json({success : false  , message : "All fields are requied"} );
    }

    // finding user in dataBase

    const user = await User.findOne({email});

    if(!user){
      console.log("User is not present");
      res.status(400).json({success : false , message : "User doesn't Exist. Please Register first"});
    }


    // comparing the password
    const isMatch = await bcrypt.compare(password , user.password);

    if(!isMatch){
      console.log("Invalid Credentials");
      res.status(400).json({success : false , message : "Invalid Credentials"});
    }
    // now generating the token
    const token = generateToken(user._id);
   

    // sending response 
    res.status(200).json({success : true , message : "Login Successfull" , token , user : {
      id : user._id,
      fullName : user.fullName,
      userName  : user.userName,
      email : user.email,
    },
  } );

  }

  catch(error){
    console.log(error);
    res.status(400).json({success : false , message : "Server Error during logging in"})
  }
}


// logout logic will be added later


module.exports = {registerUser , loginUser}