const express = require("express");
// const Contact = require("../modals/userModal");
// const bgDonor = require("../modals/DonorRegistration");
const User = require("../modals/User");
const router = express.Router();

//signin user
router.post("/signin", (req, res) => {
  const { Name, Email, Password } = req.body;

  const userSignin = new User({
    Name, Email,Password
  });
  try {
    userSignin.save();
    res.status(200).json({
      success: true,
      message: "Volunteer Registration done Successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

//login user
router.post("/login", async (req, res) => {
  const { Email,Password } = req.body;
  try {
    const user = await User.find({ Email,Password });
    if (user.length > 0) {
      const currentUser = {
        Name: user[0].Name,
        Email: user[0].Email,
        Password: user[0].Password,
       
        _id: user[0]._id,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something Went Wrong",
    });
  }
});





//  @route GET api/contacts
//  @desc Get all contacts

// DONATING BLOOD GROUP VIEW ROUTER
// router.post("/submit", (req, res) => {
//   const {
//     Email,

//     Password,
//   } = req.body;

//   const donorRegistration = new bgDonor({
//     Email,
//     Password,
//   });
//   try {
//     donorRegistration.save();
//     res.status(200).json({
//       success: true,
//       message: "Blood Group Registration done Successfully",
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: error,
//     });
//   }
// });





module.exports = router;
