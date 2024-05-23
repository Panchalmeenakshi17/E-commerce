const mongoose = require("mongoose");

const  BloodGroupDonorSchema = mongoose.Schema(
    {
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

module.exports = mongoose.model("BloodGroupDonor", BloodGroupDonorSchema);
