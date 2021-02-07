const connection = require("../models/dbconnection");
//===========================================
//        Request Controller
//===========================================

exports.createRequest = (req, res) => {
    let query = `INSERT INTO test_schema.requests SET ?`;
    let value = {
        iduser: req.body.iduser,
        request_name: req.body.request_name,
        request_text: req.body.request_text,
        request_cat: req.body.request_cat,
      };

    connection.query(query, value, (err, result) => {
        console.log(result);
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
}