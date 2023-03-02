const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const User = require('../../model/User.model')

module.exports.Register = async (req, res) => {
    try {
        const schema = joi.object({
            name: joi.string().required(),
            email: joi.string().required(),
            contact: joi.number().required(),
            gender: joi.string().required(),
            hobby: joi.string().required(),
            address: joi.string().required(),
            city: joi.string().required(),
            state: joi.string().required(),
            password: joi.string().required()
        })
        const { error, value } = schema.validate({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            gender: req.body.gender,
            hobby: req.body.hobby,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            password: req.body.password
        })
        if (!error) {
            const user = new User(value);
            await user.save();
            res.status(201).json({ status: true, Message: "User Registered Successfully " });
        } else {
            console.log("joi error : ", error);
            res.status(400).json({ status: false, Error: `Else :  ${error}` })
        }
    } catch (err) {
        res.status(400).json({ status: false, Error: `Catch : ${err}` })
    }
}

module.exports.Login = async (req, res) => {
    try {
        const schema = joi.object({
            email: joi.string().required(),
            password: joi.string().required()
        })
        const { error, value } = schema.validate({
            email: req.body.email,
            password: req.body.password
        })
        if (!error) {
            const checkUser = await User.findOne({ email: value.email })
            if (checkUser) {
                const isMatch = await bcrypt.compare(value.password, checkUser.password);
                if (isMatch) {
                    const token = jwt.sign({ _id: checkUser._id }, process.env.SECRET_KEY);
                    res.status(200).json({ status: true, token: token })
                } else {
                    res.status(400).json({ status: false, Error: "Invalid Email or Password" });
                }
            } else {
                res.status(400).json({ status: false, Error: "Invalid Email or Password" });
            }
        }
    } catch (error) {
        res.status(400).json({ msg: "Oops ! Some error Occur", Error: `${error}` })
    }
}

module.exports.List = async (req, res) => {
    try {
        const schema = joi.object({
            id: joi.string(),
        })
        const { error, value } = schema.validate({
            _id: req.body.id,
        })
        if (!error) {
            const opts = value._id ? { _id: value._id } : null;
            const data = await User.find(opts);
            res.status(200).json({ status: true, data: data })
        }
    } catch (error) {
        res.status(400).json({ msg: "Oops ! Some error Occur", Error: `${error}`, opts: opts })
    }
}