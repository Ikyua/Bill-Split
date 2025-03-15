// This will be the main file where everything will start at

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db.js');

dotenv.config(); // loads environment variables
connectDB(); // Call the function to connect to MongoDB :3

const app = express();
const PORT = 3000

app.get('/', (req,res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`I'm listening ${PORT}`);
})