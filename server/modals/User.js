const mongoose = require("mongoose");

const  User = mongoose.Schema(
    {
        Name : {
            type : String,
            required : [true,'Name Is Required']
        },
        Email: {
            type: String,
            required: [true, 'Email is required']
        },
        Password: {
            type: String,
            required: [true, 'Password is required']
        },
    
      },
  { timeStamps: true }
);

module.exports = mongoose.model("User", User);
