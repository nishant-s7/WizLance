const express = require('express');
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/admin-users", adminController.displayUsers);
router.get("/admin-categories", adminController.displayCategories);
module.exports = router;