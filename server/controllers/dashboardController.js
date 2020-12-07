const connection = require("../models/dbconnection");
//===========================================
//        Dashboard Controller
//===========================================

exports.getAllRequests = (req, res) => {
  const query = `SELECT * FROM test_schema.requests`;

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