const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
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

            const transporter = nodemailer.createTransport({
                host: 'gmail',
                port: 587,
                auth: {
                    user: 'ojhasuraj832@gmail.com',
                    pass: 'Abcd@1234'
                }
            });
            var mailOptions = {
                from: 'ojhasuraj832@gmail.com',
                to: `${value.email}`,
                subject: "Registered successfully ✔",
                text: "sample mail?",
                html: "<b>you are registered successfully </b>",
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            // console.log("Message sent: %s", info);
            // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

            res.status(201).json({ status: true, Message: `User Registered Successfully` });

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
    console.log(req.body);
    try {
        const schema = joi.object({
            id: joi.string(),
        })
        const { error, value } = schema.validate({
            id: req.body.id,
        })
        if (!error) {
            const opts = value.id ? { _id: value.id } : null;
            const data = await User.find(opts);
            res.status(200).json({ status: true, data: data })
        } else {
            res.status(400).json({ msg: "joi error : ", Error: `${error}` })
        }
    } catch (error) {
        res.status(400).json({ msg: "Oops ! Some error Occur", Error: `${error}`, opts: opts })
    }
}


module.exports.Update = async (req, res) => {
    try {
        const schema = joi.object({
            id: joi.string().required(),
            name: joi.string().required(),
            contact: joi.number().required(),
            gender: joi.string().required(),
            hobby: joi.array().required(),
            address: joi.string().required(),
            city: joi.string().required(),
            state: joi.string().required(),
            password: joi.string()
        })
        const { error, value } = schema.validate({
            id: req.params.id,
            name: req.body.name,
            contact: req.body.contact,
            gender: req.body.gender,
            hobby: req.body.hobby,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            password: req.body.password
        })
        const updateDoc = {
            $set: {
                name: `${value.name}`,
                contact: `${value.contact}`,
                gender: `${value.gender}`,
                hobby: `${value.hobby}`,
                address: `${value.address}`,
                city: `${value.city}`,
                state: `${value.state}`,
                password: `${value.password}`,
            },
        };
        if (!error) {
            const user = await User.updateOne({ _id: value.id }, updateDoc, { upsert: true });
            console.log(user);
            res.status(201).json({ status: true, Message: "User update successfully " });
        } else {
            console.log("joi error : ", error);
            res.status(400).json({ status: false, Error: `Else :  ${error} ${value._id}` })
        }
    } catch (err) {
        res.status(400).json({ status: false, Error: `Catch : ${err}` })
    }
}

module.exports.Delete = async (req, res) => {
    try {
        const schema = joi.object({
            id: joi.string().required(),
            status: joi.string().required(),
        })
        const { error, value } = schema.validate({
            id: req.params.id,
            status: req.body.status
        })
        const updateDoc = {
            $set: {
                status: `${value.status}`
            },
        };
        if (!error) {
            const user = await User.updateOne({ _id: value.id }, updateDoc, { upsert: true });
            console.log(user);
            res.status(201).json({ status: true, Message: "User deleted successfully " });
        } else {
            console.log("joi error : ", error);
            res.status(400).json({ status: false, Error: `Else :  ${error} ${value._id}` })
        }
    } catch (err) {
        res.status(400).json({ status: false, Error: `Catch : ${err}` })
    }
}