
const express = require("express");
const collegecontroller = require('../controllers/collegecontroller')
const interncontroller = require('../controllers/internController')

const router = express.Router()

router.post("/functionup/colleges" , collegecontroller.createcollegedocument)
router.post("/functionup/interns" , interncontroller.createInterns)

module.exports = router