const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    seller : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
      required : true
    },
    title : {
      type : String,
      required : true,
      trim : true,
      maxlength : 100,
    },
    description : {
      type :  String,
      required : true,
      trim : true,
      maxlength : 1000,

    },
    price : {
      type : Number,
      required : true,
      min : 0
    },
    category : {
      type : String,
      enum : ["Books", "Notes", "Pdfs", "Courses", "Electronics", "Others"],
      required : true,
    },
    images : [
      {
        type : String
      },
    ],
    condition : {
      type : String,
      enum : ["New" , "Used", "Like New"],
      default : "Used",
    },
    location : {
      type : String,
      default : "",
      trim : true
    },
    isAvailable :{
      type : Boolean,
      default : true
    },

  },
  {
    timestamps : true
  }
);

module.exports =  mongoose.model("Product" , productSchema);