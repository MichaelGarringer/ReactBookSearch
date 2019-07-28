const router = require("express").Router();
const searchController = require ("../controllers/searchController");

router.router("/").get(searchController.findAll)

module.exports = router;