const jwt = require('jsonwebtoken');
const User = require('../models/User')

const protect = async (req , res , next) =>{
  try{
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY
    );
    
    const user = await User.findById(decoded.id).select("-password");
    req.user = user;

    next();
  }
  catch(error){
    res.status(401).json({success : false , message : "Unauthorized "});
  }
}

module.exports = protect