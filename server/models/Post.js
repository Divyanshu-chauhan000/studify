const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    user : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
      required : true
    },
    caption : {
      type : String,
      trim : true,
      maxlength : 500,
      default : "",
    },
    mediaUrl : {
      type : String,
      required : true
    },

    mediaType : {
      type : String,
      enum : ["image" , video],
      required : true,
    },

    thumbnail : {
      type : String,
      default : ""
    },
    
    tags : [
      {
        type : String,
        trim : true
      }
    ],

    likes : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User"
    },
    comments :[
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Comment"
    },
  ],

  shares : {
    type : Number,
    default : 0
  },

  visibilty : {
    type : String,
    enum : ["public" , "private"],
    default : "public"
  },

  },
  {
    timestamps : true,
  }
);

module.exports =  mongoose.model("Post" , postSchema);