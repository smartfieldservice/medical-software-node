//@error response
const errorResponse = function(error, res) {

    const errorMessage = {
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        500: 'Internal Server Error',
        502: 'Bad Gateway',
        503: 'Service Unavailable',
        504: "Gateway Timeout",    
    }[error.code] || error.message;

    res.json({status : error.code, error : errorMessage});
};

//@success response
const successResponse = function(code , message, data, res) {
    const success = {
        message : message,
        data : data
    }
    
    res.status(code).json({success : success.message, data : success.data});
};

//@throw a new created message
const newError = function(code) {
    const error = new Error("");
    error.code = code;
    return error;
}

//@exports
module.exports = {  errorResponse,
                    successResponse,
                    newError
                }