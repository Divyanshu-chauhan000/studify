const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type : String,
      required : true,
      trim : true
    },
    userName :{
      type : String,
      required : true,
      unique : true,
      lowercase : true,
      trim : true
    },
    email:{
      type: String,
      required : true,
      unique : true,
      lowercase : true,
      trim : true
    },
    password:{
      type: String,
      required : true,
      minlength : 6
    },

    profilePic :{
      type : String,
      default : ""
    },
    bio :{
      type : String,
      default: "",
      maxlength : 250
    },
    college : {
     type : String,
     default : "",
    },
    course : {
      type : String,
      default:""
    },
    year:{
      type : String,
      default : ""
    },
    skills : [
      {
        type: String
      },
    ],
    followers :[
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
      },
    ],
    followings :[
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
      },
    ],
    savedPost : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
      },
    ],
    likedPost : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
      },
    ],

    marketPlaceListening : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
      },
    ],

    role : {
      type : String,
      enum : ["user" , "admin"],
      default : "user"
    },

    isVerfied : {
      type : Boolean,
      default : false
    },

    isBlocked : {
      type : Boolean ,
      default : false
    },
    refreshToken:{
      type : String,
      default : ""
    }
  },
  {
    timestamps : true
  }
);

module.exports = mongoose.model("User", userSchema);