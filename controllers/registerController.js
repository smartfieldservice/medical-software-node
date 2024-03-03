//@internal module
const patientModel = require("../models/patientModel");
const { escapeString, 
        formatDate, 
        pagination } = require("../utilities/helperFunctions");
const { errorResponse, 
        successResponse } = require("../utilities/responserHandler")

//@patient search using passport id by search box
const searchPatient = async(req, res) => {

    try {
        const passport = new RegExp("^" + escapeString(req.params.passport),"i");

        let patientData;

        if(req.params.passport !== ""){

            patientData = await patientModel.find({
                $or : [{ passport : passport }]
            });
        }

        successResponse(200,`${patientData.length} patient's found !`,patientData,res);

    } catch (error) {

        errorResponse(error, res);
    
    }

};

//@patient can filter using date
//@single patient details using slug
const getPatient = async(req, res) => {
    
    try {

        const { slug, from, to, sort } = req.query;
        
        const queryObject = {};

        if(slug){
            //@for single patient details view
            queryObject.registrationId = slug;
        }

        if(from){

            const startDate = formatDate(from);

            if(startDate){
                let date = new Date(startDate);
                date.setHours(0,0,0,0);

                console.log(date);
                queryObject.createdAt = { $gte : date };
            }
        }

        if(to){
            console.log(from,to,sort);
            const endDate = formatDate(to);

            if(endDate){

                let date = new Date(endDate);
                date.setHours(0,0,0,0);
                date.setDate(date.getDate() + 1);

                if(queryObject.createdAt){
                    queryObject.createdAt.$lt = date;
                }else{
                    queryObject.createdAt = { $lt : date };
                }
            }
        }

        let patientData = patientModel.find(queryObject);

        //@decending order
        let sortBy = "-createdAt";

        if(sort){
            sortBy = sort.replace(","," ");
        }

        patientData = patientData.sort(sortBy);

        patientData = await pagination(req.query.page, req.query.limit , patientData);

        successResponse(200,`${patientData.length} patient's found !`,patientData, res);

    } catch (error) {
        errorResponse(error, res);
    }
};

//@exports
module.exports = {  searchPatient,
                    getPatient
                }   