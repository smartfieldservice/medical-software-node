//@external module
const mongoose = require("mongoose");

//@create userSchema
const patientSchema = mongoose.Schema({

    registrationId : {
        type : String,
        required : true
    },
    passport : {
        type : String,
        unique : true,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    country : {
        type : String,
        require : true
    },
    slipNo : {
        type : Number,
        require : true
    },
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    sex : {
        type : String,
        enum : ['male' , 'female', 'other'],
        require : true
    },
    profession : {
        type : String,
        require : true
    },
    dob : {
        type : Date,
        require : true
    },
    amount : {
        type : Number,
        require : true
    },
    agencyName : {
        type : String,
        require :true
    },
    daliveryDate : {
        type : String,
        require : true
    },
    religion : {
        type : String,
        enum : ['Hindu', 'Islam', 'Buddha', 'Christian'],
        require : true
    },
    
},{
    timestamps : true
});

//@exports
module.exports = mongoose.model('patient',patientSchema);