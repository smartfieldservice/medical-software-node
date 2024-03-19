//@external module
const mongoose = require("mongoose");

//@create userSchema
const userSchema = mongoose.Schema({
    
    email : {
        type : String,
        unique : true,
        required : true
    },
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
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
    toJSON : {
        transform : function(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.slug;
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps : true
});

//@exports
module.exports = mongoose.model('user',userSchema);