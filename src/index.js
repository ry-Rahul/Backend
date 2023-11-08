// require ('dotenv').config({path: './.env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env" 
    
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT||8000, () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        } );
})
    .catch((error) => {
        console.log("MONGODB connect fail !!! ", error);
        process.exit(1);
    });























/* 

import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        // if out application is not able to connect to the database, it will throw an error
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        });
        
        // if our application is able to connect to the database, it will start listening on the port
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("Error: ", error);
    }
})();

*/