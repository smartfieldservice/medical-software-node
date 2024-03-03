//@external module
const userModel = require("../models/userModel");

//@internal module
const { errorResponse } = require("../utilities/responserHandler")

const totalInformation = async(req, res) => {

    try {
        
        const register = await userModel.find({ role : "register" });
        const doctor = await userModel.find({ role : "doctor" });
        const reporter = await userModel.find({ role : "reporter" });
        const vaccination = await userModel.find({ role : "vaccination" });
        const sampleCollection = await userModel.find({ role : "sampleCollection" });
        const xRay = await userModel.find({ role : "xRay" });
        const lab = await userModel.find({ role : "lab" });

        res.status(200).json({ registers : `${register.length} register's found !`, doctors : `${doctor.length} doctor's found !`,
        reporter : `${reporter.length} reporter's found !`, vaccination : `${vaccination.length} vaccination's found !`,
        sampleCollection : `${sampleCollection.length} sample collection's found !`, xRay : `${xRay.length} xRay's found !`,
        lab : `${lab.length} lab's found !` })

    } catch (error) {
        errorResponse(error, res);
    }

}

//@exports
module.exports = { totalInformation
                }