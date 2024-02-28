//@external module
const bcrypt = require('bcryptjs')

//@function for hashed the password
const hashedPassword = async(password) => {
    try {
        return await bcrypt.hash(password, 10);
    } catch (error) {
        return error;
    }
};

//@exports
module.exports = {  hashedPassword
                }