const { userModel, patientModel } = require("../models/modelExporter");
const { newError } = require("./responserHandler");

const findPerson = async({ id, email, slug, passport }) => {
    
    try {
        
        if( id ){
            return await userModel.findById({ _id : id });
        }
        else if( email ) {
            return await userModel.findOne({ email });
        }
        else if( slug ) {
            return await userModel.findOne({ slug });
        }
        else if( passport ){
            return await patientModel.findOne({ passport });
        }
        else{
             throw newError(404);
        }
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    findPerson
}