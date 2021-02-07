const express = require("express");
const router = express.Router();
const {
    getAllRequests,
    getRequestWithID,
    setRequestWorkerByID,
    setRequestResolved
} = require("../controllers/dashboardController");

//===========================================
//                 Dashboard
//===========================================

router.get("/getAllRequests", getAllRequests);
router.get("/getRequestWithID", getRequestWithID);
router.post("/setWorker", setRequestWorkerByID);
router.post("/setRequestResolved", setRequestResolved)

module.exports = router;