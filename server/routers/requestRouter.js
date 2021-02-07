const express = require("express");
const router = express.Router();
const {
    createRequest,
} = require("../controllers/requestController");

//===========================================
//                 Requests
//===========================================

router.post("/createRequest", createRequest);

module.exports = router;