const dotenv=require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const connectDB = require('./databselogic/db');
app.use(express.json());
const cors = require('cors');
app.use(cors());

console.log("m backend m hu");
const routing = require('./routes/routing');
app.use('/api', routing);

//connect to database
connectDB();

const PORT = process.env.PORT;



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


