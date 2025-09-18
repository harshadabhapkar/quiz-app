const express = require("express");
const router = express.Router();
const {createRegisterPosting} = require("../controllers/AuthControllers")

router.post('/register', createRegisterPosting);

module.exports = router;