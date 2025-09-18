const RegisterData = require("../models/Register.js");

exports.createRegisterPosting = async (req, res) => {
  try {
    const { username, password, confirm_password} = req.body;
    const newRegisterData = new RegisterData({
      username, password, confirm_password
    });

    await newRegisterData.save();

    return res.status(201).json({
      success: true,
      message: 'Register updated successfully!',
      Registerdata: newRegisterData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error. Could not update Register.',
      error: error.message,
    });
  }
};