const TestData = require("../models/Test.js");

exports.createTestPosting = async (req, res) => {
  try {
    const { sentence_1, sentence_2, sentence_3} = req.body;
    const newTestData = new TestData({
      sentence_1, sentence_2, sentence_3
    });

    await newTestData.save();

    return res.status(201).json({
      success: true,
      message: 'Test updated successfully!',
      testdata: newTestData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error. Could not update Test.',
      error: error.message,
    });
  }
};