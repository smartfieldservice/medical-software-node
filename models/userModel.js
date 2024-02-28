//@external module
const mongoose = require("mongoose");

//@create userSchema
const userSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type :String,
        default : "12345"
    },
    role : {
        type : String,
        enum : ['admin', 'doctor' , 'register' , 'reporter', 'vaccination', 'sampleCollection', 'xRay', 'lab'],
    }
},{
    timestamps : true
});

//@exports
module.exports = mongoose.model('user',userSchema);