const collegeModels = require("../models/College Model");
const internModels = require("../models/Intern Model");


const createInterns = async function (req, res) {
    try 
    {
      let {name, email, mobile ,collegeId, collegeName, isDeleted, ...rest} = req.body; // Destructing Key and Values.
     
      if(Object.keys(rest) != 0) return res.status(400).send({status: false, msg: "Please provide required details only"})
      
      //checking 
      if (!name) return res.status(400).send({status: false, msg: "Name is required => Please Enter your Name" })
      if (!email) return res.status(400).send({status: false, msg: "email is required => Please Enter your email" })
      if (!mobile) return res.status(400).send({status: false, msg: "mobile is required => Please Enter your mobile" })
      if (!collegeName) return res.status(400).send({status: false, msg: "collegeName is required => Please Enter your collegeName" })


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