const router = require("express").Router();
const Controller = require("../controller/handler.controller");
const { restrictTo } = require("../middleware/restrictUser");

router.use(restrictTo("customer", "manager", "admin"));
router
  .get("/:id", Controller.getOne)
  .patch("/:id", Controller.updateOne)
  .post("/", Controller.createOne);

router.use(restrictTo("manager", "admin"));
router.get("/", Controller.getAll);

router.use(restrictTo("admin"));
router
  .post("/", Controller.createOne)
  .patch("/", Controller.updateOne)
  .delete("/:id", Controller.deleteOne)
  .post("/many", Controller.createMany)
  .delete("/many/:id", Controller.deleteMany);

module.exports = router;
