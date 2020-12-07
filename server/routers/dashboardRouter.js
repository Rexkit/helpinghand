const express = require("express");
const router = express.Router();
const {
    getAllRequests,
    getRequestWithID,
} = require("../controllers/dashboardController");

//===========================================
//                 Dashboard
//===========================================

router.get("/getAllRequests", getAllRequests);
router.get("/getRequestWithID", getRequestWithID);

module.exports = router;