const express = require('express');
const mongoose = require('mongoose');

const ConnectDataBase = async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database is Connected Successfully");
  }
  catch(error){
    console.log("Failed to connect with Database" , error);
    process.exit(1);
  }
}

module.exports = ConnectDataBase;