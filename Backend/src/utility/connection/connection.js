const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const DB = process.env.DATABASE;

mongoose.set('strictQuery', false);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Created Successfully...........");
}).catch((e) => {
    console.log(`Connection Error : ${e}`);
})