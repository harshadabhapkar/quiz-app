const express = require("express");
const router = express.Router();
const {createTestPosting} = require("../controllers/TestUpdateControllers")

router.post('/update', createTestPosting );

module.exports = router;