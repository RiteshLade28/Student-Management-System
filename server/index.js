import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from './routes/student.js';


const app = Express();
app.use(cors());

app.use(bodyParser.json({limit: "20mb", extended: true})); // set limit of the json file to 20mb and extended 
// the json file to accept all type of data
// if it was set to false it will only accept strings

app.use(bodyParser.urlencoded({limit: "20mb", extended: true})); // allow us to post nested objects

app.use('/students', studentRoutes);

const CONNECTION_URL = "mongodb://RiteshLade:6pCaWBLVEaZ8loVu@ac-3ffyfir-shard-00-00.cqsmpth.mongodb.net:27017,ac-3ffyfir-shard-00-01.cqsmpth.mongodb.net:27017,ac-3ffyfir-shard-00-02.cqsmpth.mongodb.net:27017/?ssl=true&replicaSet=atlas-nculeh-shard-0&authSource=admin&retryWrites=true&w=majority"

const PORT = 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
)).catch((err)=>console.log(err));

// mongoose.set('useFindAndModify', false);



