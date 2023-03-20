const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const { string } = require('joi');
dotenv.config({ path: './config.env' });


const Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true, match: /^[0-9]{10}$/ },
    gender: { type: String, required: true },
    status: { type: String, default: "inactive", required: true },
    area: { type: String, required: true },
    hobby: { type: Array },
    image: { type: String, },
    otp: { type: Number },
    password: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

// password hashing

Schema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

// Schema.pre('updateOne', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 12);
//     }
//     next();
// });

// ****** End ******

const User = mongoose.model('user', Schema);
module.exports = User;