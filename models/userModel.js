//@external module
const mongoose = require("mongoose");

//@create userSchema
const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    password : {
        type :String,
        default : "12345"
    },
    role : {
        type : String,
        enum : ['admin', 'doctor' , 'register' , 'reporter', 'vaccination', 'sampleCollection', 'xRay', 'lab'],
    },
    slug : {
        type : String,
        required :true
    }
},{
    timestamps : true
});

//@exports
module.exports = mongoose.model('user',userSchema);