import mongoose from "mongoose";
import { DB_NAME } from "./constant";














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