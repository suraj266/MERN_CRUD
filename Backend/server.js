const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const server = express();
const admin = require('./src/routes/Admin.route')
dotenv.config({ path: './.env' });
const PORT = process.env.PORT;
require('./src/utility/connection/connection');

server.use(cors());
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));

///////////////////  API Routers ///////////////////
server.use("/api", require("./src/utility/path").include(express.Router()));

server.get("*", (_req, res) =>
    res.json({ error: "No route found for this GET request" })
);
server.post("*", (_req, res) =>
    res.json({ error: "No route found for this POST request" })
);
/////////////////// //////////// ///////////////////

server.listen(PORT, () => {
    console.log(`Express Server Running at ${PORT}`);
})