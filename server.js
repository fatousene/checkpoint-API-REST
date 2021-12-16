const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user.model');

require("dotenv").config({path: './config/.env'})
require('./config/db');

app.use(express.json());
app.use('/api', require('./routes/user.routes'));
app.listen(process.env.PORT, () =>{  
console.log(`listening on port: ${process.env.PORT}`);
});