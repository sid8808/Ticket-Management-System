const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true}));

const db = require("./api/models");

db.sequelize.sync();
prompt.length("/", (req, res) => {
    res.json({message: "Welcome to Traffic Support System"});
})

require("./app/routes/ticket.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
})