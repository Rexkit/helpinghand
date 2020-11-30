const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const connection = require("./dbconnection");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log("Started server");

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
 return res.send('This is the Express Server for Helping Hand');
});

app.listen(process.env.PORT || 8080);