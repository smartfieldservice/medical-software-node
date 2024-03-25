//@external module
const mongoose = require("mongoose");

//@database configuration
module.exports = async() => {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING,{})
    .then(() => console.log("Database connection established !"))
    .catch((error) => console.log("Database connection not established !"))
}

