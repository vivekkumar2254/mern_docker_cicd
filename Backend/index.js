import express from 'express'
import dotenv from 'dotenv'
import mongoose  from 'mongoose';
import cors from 'cors';
import userRoute from './routes.js/userroute.js'

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// connection with mongo db
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    });

console.log("connected with server")

}catch(err){
console.log("Error: ",err);
}

app.use("/user",userRoute);



app.listen(PORT,()=>{
    console.log(`Running at...${PORT}`)
})
