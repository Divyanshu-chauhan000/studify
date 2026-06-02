const express = require('express')
const {registerUser , loginUser} = require('../controllers/authController');
const protect = require('../middlewares/authMiddleware');
// const protect = require('../middlewares/authMiddleware')

const authrouter = express.Router();

// Register User Router

authrouter.post("/register" , registerUser);

// Login User Router
authrouter.post("/login" , loginUser)

// me routes
authrouter.get("/me" , protect , (req , res) =>{
  res.status(201).json({
    success  : true,
    user : req.user
  });
})


module.exports = authrouter