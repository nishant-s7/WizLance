const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getLandingPage);
router.get("/mainpage", shopController.getMainPage);
router.get("/mainpage/:category", shopController.getCategories);
router.get("/:pages/:categories", shopController.getSubCategories);
router.get("/:pages/:categories/:gig", shopController.getGigs);
router.get("/:pages/:categories/:gig/payment", shopController.getPayment);
router.post("/place-order", shopController.orderplaced);

module.exports = router;
