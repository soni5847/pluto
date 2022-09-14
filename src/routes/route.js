
const express = require("express");
const collegecontroller = require('../controllers/collegecontroller')

const router = express.Router()

router.post("/functionup/colleges" , collegecontroller.createcollegedocument)

module.exports = router