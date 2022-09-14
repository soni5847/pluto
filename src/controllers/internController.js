const collegeModels = require("../models/College Model");
const internModels = require("../models/Intern Model");


const createInterns = async function (req, res) {
    try 
    {
      let {name, email, mobile ,collegeId, collegeName, isDeleted} = req.body; // Destructing Key and Values.
     
      const collegeNames = await collegeModels.findOne({fullName:collegeName})
         collegeId = collegeNames._id
      let data = { name, email, mobile, collegeId, collegeName, isDeleted }
     
      const internData = await internModels.create(data);
      
      res.status(201).send({status: true, message:"Intern Created Successfully",data: internData})
    }  catch (error) 
  {
    res.status(500).send({status: false, message:error.message})

  }
}

module.exports.createInterns =createInterns