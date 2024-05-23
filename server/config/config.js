// const mongoose = require('mongoose');
// require('colors');

// const connectDB = async () => {
//     try {
//         const url = process.env.MONGO_URI;
//         const conn = await mongoose.connect(url,{
//                 useUnifiedTopology : true,
//                 useNewUrlParser : true
//         });
//         console.log(`Mongodb Database Connected! ${conn.connection.host}`.bgCyan.white);
//     } catch (error) {
//         console.log(`error : ${error.message}`.bgRed.white);
//     }
// };
// module.exports = connectDB;


// config/config.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...'.green);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
