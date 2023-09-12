const router = require("express").Router();
const Controller = require("../controller/handler.controller");

router.post("/login", Controller.login).post("/signup", Controller.signup);

router.get("/allusers", Controller.getAllUsers);

module.exports = router;
