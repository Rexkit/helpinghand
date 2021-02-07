const connection = require("../models/dbconnection");
//===========================================
//        Dashboard Controller
//===========================================

exports.getAllRequests = (req, res) => {
    const query = `SELECT * FROM test_schema.requests ORDER BY resolved DESC`;

    connection.query(query, (err, result) => {
        console.log(result);
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

exports.getRequestWithID = (req, res) => {
    const query = `SELECT * FROM test_schema.requests
  WHERE id=${req.body.id}`;

    connection.query(query, (err, result) => {
        console.log(result);
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

exports.setRequestResolved = (req, res) => {
    const reqID = req.body.id;
    const query = `UPDATE test_schema.requests SET resolved="yes" WHERE idrequest=${reqID};`;

    connection.query(query, (err, result) => {
        console.log(result);
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

exports.setRequestWorkerByID = (req, res) => {
    const reqID = req.body.id,
        workerID = req.body.wid;
    const query = `UPDATE test_schema.requests SET idworker=${workerID} WHERE idrequest=${reqID};`;

    connection.query(query, (err, result) => {
        console.log(result);
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
}