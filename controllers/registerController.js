const patientsModel = require("../models/patientsModel");
const { escapeString } = require("../utilities/helperFunctions");
const { errorResponse, successResponse } = require("../utilities/responserHandler")


const searchPatient = async(req, res) => {

    try {
        const passport = new RegExp("^" + escapeString(req.params.passport),"i");

        let patientData;

        if(req.params.passport !== ""){

            patientData = await patientsModel.find({
                $or : [{ passport : passport }]
            });
            
        }

        successResponse(200,`${patientData.length} patient's found !`,patientData,res);

    } catch (error) {

        errorResponse(error, res);
    
    }

};

const getPatient = async(req, res) => {
    try {
        const patientData = await patientsModel.find({});
        successResponse(200,`${patientData.length} patient's found !`,patientData, res);
    } catch (error) {
        errorResponse(error, res);
    }
};

//@exports
module.exports = {  searchPatient,
                    getPatient
                }   