const collegemodel = require("../models/College Model")
const internmodel = require("../models/Intern Model")
const validation = require('../validator/validation')


// create college document

const createcollegedocument = async (req, res) => {

    try {
        let { name, fullName, logoLink, isDeleted } = req.body

        if (!validation.isValidReqBody(req.body)) return res.status(400).send({ Status: false, Message: "Please! Give deatils" })
        if (!name) return res.status(400).send({ status: false, msg: "Name is mandatory" })
        if (!fullName) return res.status(400).send({ status: false, msg: "fullName is mandatory" })
        if (!logoLink) return res.status(400).send({ status: false, msg: "logoLink is mandatory" })

        if (!validation.isValid(name)) return res.status(400).send({ status: false, msg: "Invalid name" })
        if (!validation.isValid(fullName)) return res.status(400).send({ status: false, msg: "Invalid fullname" })

        if (!validation.isValidData(name)) return res.status(400).send({ status: false, msg: "Give suitable Name ,Use only alphabets" })
        if (!validation.isValidData(fullName)) return res.status(400).send({ status: false, msg: "Give suitable fullName ,Use only alphabets" })

        let findname = await collegemodel.find({ name: name })
        if (findname.length !== 0) return res.status(400).send({ status: false, Message: "Name is already exist" })

        if (!validation.isURL(logoLink)) return res.status(400).send({ status: false, msg: "Url not valid" })

        const createdata = await collegemodel.create(req.body)
        res.status(201).send({ Status: true, Data: createdata })

    } catch (error) {
        res.status(500).send({ Status: false, Message: error.Message })

    }
}

// GET COLLEGE DETAILS

const getcollegedetail = async (req, res) => {
    
    try {
        res.setHeader('Access-Control-Allow-Origin','*')
        let { collegeName } = req.query
       
        if (!validation.isValid(collegeName)) return res.status(400).send({ status: true, Message: "Please Enter College name" })

        let findnameindb = await collegemodel.findOne({  name: collegeName } )
        if (!findnameindb) return res.status(404).send({ status: true, Message: "College Name not found please enter valid name" })


        let findintern = await internmodel.find({ collegeId: findnameindb._id })

        if(findintern.length > 0)findnameindb.interns = findintern
        if(findintern.length == 0)  findnameindb.interns = "Intern not Found"

        let newobj = { name: findnameindb.name, fullName: findnameindb.fullName, logoLink: findnameindb.logoLink, interns: findnameindb.interns }

        res.status(200).send({ status: true, Data: newobj })
    } catch (error) {
        res.status(500).send({ status: false, Message: error.message })
    }
}

module.exports.createcollegedocument = createcollegedocument
module.exports.getcollegedetail = getcollegedetail