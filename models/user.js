const mongoose = 'mongoose';

const userModel = mongoose.Schema({
    username = String,
    email = String,
    password =String
});

module.exports= mongoose.model("userModel", userModel);