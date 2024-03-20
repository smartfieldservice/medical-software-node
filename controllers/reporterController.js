//@internal module
const { reportModel } = require("../models/modelExporter");
const { errorResponse, 
        successResponse,
        newError } = require("../utilities/responserHandler");
const { userHandler } = require("../utilities/utilityExporter");

//@create a new report
//protected route(reporter)
const createReport = async(req, res) => {

    try {
   
        const newReport = new reportModel({

            passport : req.body.passport,
            registrationId : req.body.registrationId,
            image_url : req.body.image_url,
            height : req.body.height,
            weight : req.body.weight,
            bp : req.body.bp,
            pulse : req.body.pulse,
            eye_lt : req.body.eye_lt,
            eye_rt : req.body.eye_rt,
            ear_lt : req.body.ear_lt,
            ear_rt : req.body.ear_rt,
            heart : req.body.heart,
            lungs : req.body.lungs,
            abdomen : req.body.abdomen,
            hernia : req.body.hernia,
            v_venins : req.body.v_venins,
            extremities : req.body.extremities,
            deformities : req.body.deformities, 
            skin : req.body.skin,
            cns : req.body.cns,
            psychiatry : req.body.psychiatry,
            vd : req.body.vd,
            hb : req.body.hb,
            fbs : req.body.fbs,
            bilirubin : req.body.bilirubin,
            sgpt : req.body.sgpt,
            sgot : req.body.sgot,
            creatinine : req.body.creatinine,
            urea : req.body.urea,
            blood_group : req.body.blood_group,
            hiv : req.body.hiv,
            hbs_ag : req.body.hbs_ag,
            hcv : req.body.hcv,
            vdrl : req.body.vdrl,
            tpha : req.body.tpha,
            pregnancy : req.body.pregnancy,
            albumin : req.body.albumin,
            u_bilharziasis : req.body.u_bilharziasis,
            helminthes : req.body.helminthes,
            giaz_dia : req.body.giaz_dia,
            s_bilharziasis : req.body.s_bilharziasis,
            salmonella : req.body.salmonella,
            shigella : req.body.shigella,
            v_cholerae : req.body.v_cholerae,
            malaria : req.body.malaria,
            m_filaria : req.body.m_filaria,
            chest_xray : req.body.chest_xray

        });

        await newReport.save();

        successResponse(200,"New report added successfully !",newReport, res);

    } catch (error) {

        if(error.code === 11000){
            error.message = "Report already exist !";
        }
        errorResponse(error, res);        
    }
}

//@edit an existed report
//protected route(reporter)
const editReport = async(req, res) => {

    try {
        const passport = req.query.passport;

        const reportdata = await userHandler.findPerson({ passport });
        
        if(! reportdata){
            throw newError(404);
        }
        
        await reportModel.findOneAndUpdate({
            _id : reportdata._id
        },{
            height : req.body.height,
            weight : req.body.weight,
            bp : req.body.bp,
            pulse : req.body.pulse,
            eye_lt : req.body.eye_lt,
            eye_rt : req.body.eye_rt,
            ear_lt : req.body.ear_lt,
            ear_rt : req.body.ear_rt,
            heart : req.body.heart,
            lungs : req.body.lungs,
            abdomen : req.body.abdomen,
            hernia : req.body.hernia,
            v_venins : req.body.v_venins,
            extremities : req.body.extremities,
            deformities : req.body.deformities, 
            skin : req.body.skin,
            cns : req.body.cns,
            psychiatry : req.body.psychiatry,
            vd : req.body.vd,
            hb : req.body.hb,
            fbs : req.body.fbs,
            bilirubin : req.body.bilirubin,
            sgpt : req.body.sgpt,
            sgot : req.body.sgot,
            creatinine : req.body.creatinine,
            urea : req.body.urea,
            blood_group : req.body.blood_group,
            hiv : req.body.hiv,
            hbs_ag : req.body.hbs_ag,
            hcv : req.body.hcv,
            vdrl : req.body.vdrl,
            tpha : req.body.tpha,
            pregnancy : req.body.pregnancy,
            albumin : req.body.albumin,
            u_bilharziasis : req.body.u_bilharziasis,
            helminthes : req.body.helminthes,
            giaz_dia : req.body.giaz_dia,
            s_bilharziasis : req.body.s_bilharziasis,
            salmonella : req.body.salmonella,
            shigella : req.body.shigella,
            v_cholerae : req.body.v_cholerae,
            malaria : req.body.malaria,
            m_filaria : req.body.m_filaria,
            chest_xray : req.body.chest_xray
        },{
            new : true
        });

        successResponse(200, "Report updated successfully !", {}, res);

    } catch (error) {
        errorResponse(error, res);
    }
}

//@exports
module.exports = {  createReport,
                    editReport
                }