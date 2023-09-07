const router = require("express").Router();
const Controller = require("../controller/handler.controller");

router
  .get("/", Controller.getAll)
  .post("/", Controller.createOne)
  .patch("/:id", Controller.updateOne)
  .delete("/:id", Controller.deleteOne);

router
  .post("/many", Controller.createMany)
  .delete("/many/:id", Controller.deleteMany);

module.exports = router;
