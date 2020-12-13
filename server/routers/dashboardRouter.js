const express = require("express");
const router = express.Router();
const {
    getAllRequests,
    getRequestWithID,
    setRequestWorkerByID
} = require("../controllers/dashboardController");

//===========================================
//                 Dashboard
//===========================================

router.get("/getAllRequests", getAllRequests);
router.get("/getRequestWithID", getRequestWithID);
router.put("/setWorker", setRequestWorkerByID);

module.exports = router;