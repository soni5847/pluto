const { default: mongoose } = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const moment = require("moment")


const internschema = new mongoose.Schema({

    name: {
        type: String,
        required: "Name is required"
    },
    email: {
        type: String,
        unique: true,
        required: "Name is required",
    },

    mobile: {
        type: Number,
        unique: true,
        required: "Name is required",
    },

    collegeId: {
        type: ObjectId,
        ref: "college",
    },
    isDeleted: { type: Boolean, default: false },


},/*{ createdAt: moment().format("DD-MM-YYYY  h:mm:ss a"),
    updatedAt: moment().format("DD-MM-YYYY  h:mm:ss a")}*/
    {timestamps : true})

module.exports = mongoose.model("intern", internschema)