const mongoose = require('mongoose')

const commentSchema =  new mongoose.Schema(
  {
    user : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
      required : true
    },
    post : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Post",
      required : true
    },
    text : {
      type : String,
      required : true,
      maxlength: 300,
      trim : true
    },
    likes :[ 
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User"
    },
  ],
    replies : [
      {
        type :  mongoose.Schema.Types.ObjectId,
        ref : "Comment"
      },
    ],
    isDeleted :{
      type : Boolean,
      default : false
    },

  },
  {
    timestamps : true
  }
);

module.exports =  mongoose.model("Comment" , commentSchema)