//@external module
const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express(); 

//@internal module
const databaseConnection = require("./configuration/databaseConnection");

const { adminRoute, 
        doctorRoute, 
        registerRoute,
        labRoute,
        reporterRoute,
        vaccinationRoute,
        sampleCollectionRoute,
        dashBoardRoute,
        xRayRoute,
        commonRoute
    } = require('./routes/routeExporter')

//@connect the database
databaseConnection();

//@useful middleware
app
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended : true }));

if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

//@set static route
app.use(express.static(path.join(__dirname,"public")));

app
    .use("/", commonRoute)
    .use("/dashboard", dashBoardRoute)
    .use("/admin", adminRoute)
    .use("/doctor", doctorRoute)
    .use("/register", registerRoute)
    .use("/report", reporterRoute)
    .use("/vaccination", vaccinationRoute)
    .use("/sample-collection", sampleCollectionRoute)
    .use("/x-ray", xRayRoute)
    .use("/lab", labRoute)

//@start the server
app.listen(process.env.PORT,() => {
    console.log(`App listening in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
})