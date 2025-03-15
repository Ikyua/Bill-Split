// database
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => 
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => {
            console.log("MongoDB Connection Error:", err)
            process.exit(1);
        })
// This exports the connectDB function so other files can use it
module.exports = connectDB;
