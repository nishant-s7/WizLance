const express = require('express');
const FreelancerController = require("../controllers/freelancer");

const router = express.Router();

router.post("/addGigs", FreelancerController.addGigs);
router.get("/uploadGigs", (req, res) => {
    res.render("pages/seller-form");
});

module.exports = router;