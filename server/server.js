const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(
    cors({
        orgin: ["/"],
        methods: ["GET", "POST"],
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/create", require("./routers/requestRouter"));
app.use("/api/dashboard", require("./routers/dashboardRouter"));
app.use(express.static(path.join(__dirname, "../client/build")));

app.get('/', function(req, res) {
    return res.send('This is the Express Server for Helping Hand');
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server up on port ${port}...`));