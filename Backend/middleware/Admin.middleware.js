const jwt = require("jsonwebtoken")
const Admin = require("../model/Admin.model");

const adminAuth = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (authorization && authorization.startsWith("Bearer")) {
            const token = authorization.split(" ")[1];
            const { _id } = jwt.verify(token, process.env.SECRET_KEY);
            const rootAdmin = await Admin.findOne({ _id: _id });

            if (!rootAdmin)
                throw new Error('Admin Not Found...')

            req.token = token;
            req.rootAdmin = rootAdmin;
            req.adminId = rootAdmin._id;
            checkAuth = 'Admin'
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({ Error: `Unauthorized : ${error}` })
    }
}

module.exports = adminAuth;