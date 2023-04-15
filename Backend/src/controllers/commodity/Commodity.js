const joi = require('joi');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const Commodity = require('../../models/Commodity.model')

module.exports.Commodity = async (req, res) => {
    try {
        const schema = joi.object({
            symbol: joi.string().required(),
            name: joi.string().required(),
            price: joi.string().required(),
            change: joi.string().required(),
            per_change: joi.string().required(),
            volume: joi.string().required(),
            updatedAt: joi.string().default(Date.now)
        })
        const commodityArray = joi.array().items(schema);
        const { error, value } = commodityArray.validate(req.body)
        if (!error && value.length) {
            value.forEach((data) => {

            })
            // console.table(value);
            const result = await Commodity.insertMany(value);

            res.status(201).json({ status: true, Message: "Admin Registered Successfully ", data: result });
        } else {
            console.log("joi error : ", error);
            res.status(400).json({ status: false, Error: `Else :  ${error}` })
        }
    } catch (err) {
        res.status(400).json({ status: false, Error: `Catch : ${err}` })
    }
}
