const mongoose = require("mongoose");
const port = 27017;
const host = "localhost";
const db = "registro";
const uri = `mongodb://${host}:${port}/${db}`;


const connect = ()=>{
    mongoose
    .connect(uri)
    .then(() =>{
        console.log("Conectado en", port);
    })
    .catch(error =>{
        console.log(error);

    });
};
module.exports = connect;