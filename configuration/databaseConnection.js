//@external module
const mongoose = require("mongoose");

//@database configuration
const databaseConnection = async() => {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING,{})
    .then(() => console.log("Database connection established !"))
    .catch(() => console.log("Database connection not established !"))
}

//@exports
module.exports = databaseConnection;

