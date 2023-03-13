const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const server = express();

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;
require('./src/utility/connection/connection');
const User = require("./src/routes/user/User.route")
const Admin = require("./src/routes/admin/Admin.route")

server.use(cors());
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));

///////////////////  API Routers ///////////////////
server.use("/api/user", User);
server.use("/api/admin", Admin);

/////////////////// //////////// ///////////////////

server.listen(PORT, () => {
    console.log(`Express Server Running at ${PORT}`);
})