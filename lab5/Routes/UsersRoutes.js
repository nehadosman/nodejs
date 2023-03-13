const express = require("express");
let userController = require("../Controllers/UsersController");
let router = express.Router();
router.post("/",userController.AddNewUser)

module.exports = router;