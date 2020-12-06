const express = require("express");
const router = express.Router();
const {
  getAllRequests,
  getRequestWithID,
} = require("../controllers/dashboardController");

//===========================================
//                 Dashboard
//===========================================

router.post("/getAllRequests", getAllRequests);
router.post("/getRequestWithID", getRequestWithID);

module.exports = router;