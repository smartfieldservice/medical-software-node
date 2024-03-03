//@external module
const mongoose = require("mongoose");

//@create userSchema
const reportSchema = mongoose.Schema({

    passport : {
        type : String,
        unique : true,
        require : true
    },
    registrationId : {
        type : String,
        required : true
    },
    image_url : {
        type : String,
        required : true
    },
    height : {
        type : String
    },
    weight : {
        type : String
    },
    bp : {
        type : String
    },
    pulse : {
        type : String
    },
    eye_lt : {
        type : String
    },
    eye_rt : {
        type : String
    },
    ear_lt : {
        type : String
    },
    ear_rt : {
        type : String
    },
    heart : {
        type : String
    },
    lungs : {
        type : String
    },
    abdomen : {
        type : String
    },
    hernia : {
        type : String
    },
    v_venins : {
        type : String
    },
    extremities : {
        type : String
    },
    deformities : {
        type : String
    },
    skin : {
        type : String
    },
    cns : {
        type : String
    },
    psychiatry : {
        type : String
    },
    vd : {
        type : String
    },
    hb : {
        type : String
    },
    fbs : {
        type : String
    },
    bilirubin : {
        type : String
    },
    sgpt : {
        type : String
    },
    sgot : {
        type : String
    },
    creatinine : {
        type : String
    },
    urea : {
        type : String
    },
    blood_group : {
        type : String
    },
    hiv : {
        type : String
    },
    hbs_ag : {
        type : String
    },
    hcv : {
        type : String
    },
    vdrl : {
        type : String
    },
    tpha : {
        type : String
    },
    pregnancy : {
        type : String
    },
    albumin : {
        type : String
    },
    u_bilharziasis : {
        type : String
    },
    helminthes : {
        type : String
    },
    giaz_dia : {
        type : String
    },
    s_bilharziasis : {
        type : String
    },
    salmonella : {
        type : String
    },
    shigella : {
        type : String
    },
    v_cholerae : {
        type : String
    },
    malaria : {
        type : String
    },
    m_filaria : {
        type : String
    },
    chest_xray : {
        type : String
    }
},{
    timestamps : true
});

//@exports
module.exports = mongoose.model('report',reportSchema);