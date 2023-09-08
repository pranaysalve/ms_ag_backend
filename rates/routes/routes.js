const router = require("express").Router();
const Controller = require("../controller/handler.controller");
const { restrictTo } = require("../middleware/restrictUser");

router.use(restrictTo("customer", "manager", "admin"));

router.get("/", Controller.getAll);

router.use(restrictTo("admin", "manager"));
router
  .post("/", Controller.createOne)
  .patch("/", Controller.updateOne)
  .patch("/:id", Controller.updateOne)
  .delete("/:id", Controller.deleteOne)
  .post("/many", Controller.createMany)
  .delete("/many/:id", Controller.deleteMany);

module.exports = router;
