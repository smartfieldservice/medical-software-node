//@external module
const bcrypt = require('bcryptjs');
const moment = require('moment/moment');

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

const formatDate = function(date){

    const parseDate = moment(date, 'DD-MM-YYYY', true);
    
    if(parseDate.isValid()){
        return parseDate.format('YYYY-MM-DD');
    }else{
        console.log('Invalid date format !');
        return;
    }

}

const generateSlug = (s1, s2) => {

    let slug = `${s1}%${s2}`;

    let time = Date.now();

    slug = `${slug}%${time}`;

    return slug.replace(/\s+/g, "-");

}


//@exports
module.exports = {  hashedPassword,
                    verifyPassword,
                    escapeString,
                    pagination,
                    formatDate,
                    generateSlug
                }