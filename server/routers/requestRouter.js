const express = require("express");
const router = express.Router();
const {
    createRequest, deleteRequest,
} = require("../controllers/requestController");

//===========================================
//                 Requests
//===========================================

router.post("/createRequest", createRequest);
router.post("/deleteRequest", deleteRequest);

module.exports = router;