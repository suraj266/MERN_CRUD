const jwt = require("jsonwebtoken")
const User = require("../models/User.model");

let checkAuth;
const userAuth = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (authorization && authorization.startsWith("Bearer")) {
            const token = authorization.split(" ")[1];
            const { _id } = jwt.verify(token, process.env.SECRET_KEY);
            const rootUser = await User.findOne({ _id: _id });

            if (!rootUser)
                throw new Error('User Not Found...')

            req.token = token;
            req.rootUser = rootUser;
            req.userId = rootUser._id;
            checkAuth = 'user'
            next();
        }
    } catch (error) {
        res.status(401).send({ Error: `Unauthorized : ${error}` })
    }
}

module.exports = userAuth;