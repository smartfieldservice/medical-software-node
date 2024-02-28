//@external module
const bcrypt = require('bcryptjs');

//@function for hashed the password
const hashedPassword = async(password) => {
    try {
        return await bcrypt.hash(password, 10);
    } catch (error) {
        return error;
    }
};

//@function for verify password
const verifyPassword = async(inputPassword, hashPassword) => {
    try {
        return await bcrypt.compare(inputPassword,hashPassword)
    } catch (error) {
        return error;
    }
}

//@function for regular expression string
const escapeString = function(str){
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); 
};

//@function for pagination
const pagination = async(pageNo, pageLimit , data) => {

        try {
            const page = parseInt(pageNo) || 1;
            const limit = parseInt(pageLimit) || 10;
            const skip = (page - 1) * limit;

            return await data.skip(skip).limit(limit);

        } catch (error) {
            return error;
        }
}

//@exports
module.exports = {  hashedPassword,
                    verifyPassword,
                    escapeString,
                    pagination
                }