
const express = require("express");
const collegecontroller = require('../controllers/collegecontroller')
const interncontroller = require('../controllers/internController')

const router = express.Router()

router.post("/colleges" , collegecontroller.createcollegedocument)
router.post("/interns" , interncontroller.createInterns)
router.get("/collegeDetails" , collegecontroller.getcollegedetail)

router.all("/*", (req, res) => { res.status(404).send({ status: false, message: "Endpoint is not correct" }) })

module.exports = router;