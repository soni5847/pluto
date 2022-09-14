const collegemodel = require("../models/College Model")
const internmodel = require("../models/Intern Model")


// create college document

const createcollegedocument = async (req, res) => {

    try {
        let { name, fullName, logoLink, isDeleted } = req.body

        let findname = await collegemodel.find({ name: name })
        if (findname.length !== 0) return res.send({ status: false, Message: "Name is Already present" })
        if (Object.keys(req.body).length <= 0) return res.status(400).send({ Status: false, Message: "Data must be present" })

        const createdata = await collegemodel.create(req.body)
        res.status(201).send({ Status: true, Data: createdata })

    } catch (error) {
        res.status(500).send({ Status: false, Message: error.Message })

    }
}

// GET COLLEGE DETAILS

const getcollegedetail = async (req, res) => {
    try {
        let { name } = req.query
       
        let findnameindb = await collegemodel.findOne({ name: name })
        if (!findnameindb) return res.status(400).send({ status: true, Message: "Data not found" })

        let findintern = await internmodel.find({ collegeId: findnameindb._id })

        findnameindb.interns = findintern

       let newobj = {name : findnameindb.name , fullName : findnameindb.fullName ,logoLink : findnameindb.logoLink,  interns : findintern}
   
        res.status(201).send({ status: true, Data: newobj })
    } catch (error) {
        res.status(500).send({ status: false, Message: error.Message })
    }
}

module.exports.createcollegedocument = createcollegedocument
module.exports.getcollegedetail = getcollegedetail