const express = require("express");
const adminController = require("../controllers/admin");
const ajaxController = require("../controllers/ajax");

const router = express.Router();

router.get("/admin-dashboard", adminController.getDashboard);
router.get("/admin-users", adminController.displayUsers);
router.get("/admin-categories", adminController.displayCategories);
router.get("/admin-gigs", adminController.displayGigs);
router.get("/admin-messages", adminController.displayMessages);

router.post("/admin-delete", adminController.deleteFromUser);
router.post("/admin-add-category", adminController.addCategory);
router.post("/admin-add-subcategory", adminController.addSubCategory);
router.post("/admin-delete-category", adminController.deleteCategory);
router.post("/admin-delete-subcategory", adminController.deleteSubCategory);
router.post("/contact-admin", adminController.contactAdmin);

router.post("/sendMail", adminController.postMail);
router.get("/admin-sendMail", adminController.getMailPage);

router.get("/search-categories", ajaxController.searchCategories);
router.get("/search-users", ajaxController.searchUsers);

module.exports = router;
