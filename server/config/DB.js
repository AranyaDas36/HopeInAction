require("dotenv").config();

const mongoose = require("mongoose");

const dbConnect = async ()=>{
    try{

        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then( ()=>{
            console.log("DB connected!");
        }).catch(error =>{
            console.log("Error in DB Connection-->",error);
        } )

    }catch(err){
        console.log("ERRR in DB ",err);
    }
}

module.exports = dbConnect;