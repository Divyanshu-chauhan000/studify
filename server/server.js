const express = require('express');
const ConnectDataBase = require('../server/config/dataBase');
const authrouter  = require('./routes/authRoute');
require('dotenv').config();

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

ConnectDataBase();

//routing here
app.use("/api/v1/auth" , authrouter)
app.use("/api/v1/auth", authrouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
  console.log(`Server is running on http://localhost:${PORT}`)
})

