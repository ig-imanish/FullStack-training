const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
const connection = mongoose.connect(uri);

module.exports = { connection };
