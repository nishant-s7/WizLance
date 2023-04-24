const express = require("express");

const dashboardController = require("../controllers/dashboard");
const otherFuncController = require("../controllers/otherFunc");

const router = express.Router();

router.get("/dashboard", dashboardController.getDashboard);
router.get("/seller-overview", dashboardController.getSellerForm);
router.post("/signupFreelancer", dashboardController.postSignupFreelancer);

router.post("/search", otherFuncController.postSearchCategories);
router.post(
  "/:category/search-gig",
  otherFuncController.postSearchSubCategories
);

router.get("/contact", otherFuncController.getContactForm);

module.exports = router;
