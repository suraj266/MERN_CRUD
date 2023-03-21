const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin.model");
const User = require("../models/User.model");

let checkAuth;
const userAdminAuth = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (authorization && authorization.startsWith("Bearer")) {
            const token = authorization.split(" ")[1];
            const { _id } = jwt.verify(token, process.env.SECRET_KEY);

            const rootUser = await User.findOne({ _id: _id });
            const rootAdmin = await Admin.findOne({ _id: _id });

            if (rootUser) {
                req.token = token;
                req.rootUser = rootUser;
                req.userId = rootUser._id;
                checkAuth = 'user'
            }
            if (rootAdmin) {
                req.token = token;
                req.rootAdmin = rootAdmin;
                req.adminId = rootAdmin._id;
                checkAuth = 'admin'
            }
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({ Error: `Unauthorized : ${error}` })
    }
}

module.exports = userAdminAuth;