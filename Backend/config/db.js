const e = require('express');
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected successfully👍🤩💃");
    }catch(err) {
        console.log(err);
    }
}
module.exports = connectDB;
