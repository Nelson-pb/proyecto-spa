const express = require("express");
const { getItems, getItem, createItems } = require("../controllers/user");
const router = require= express.Router();

router.get("/", getItems);
router.post("/", createItems);


module.exports = router