import mongoose from "mongoose";

export const dbConnection = ()=>(
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"PROFILE"
    })
    .then(()=>console.log("DB connected"))
    .catch((err)=>console.log(err))
);
