const jwt = require('jsonwebtoken')

const generateToken = (id) =>{
  // console.log(process.env.JWT_SECRET_KEY)
  return jwt.sign({id} , process.env.JWT_SECRET_KEY,{
    expiresIn : "7d",
  });
};

module.exports = generateToken