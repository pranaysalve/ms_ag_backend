const router = require("express").Router();
const Controller = require("../controller/handler.controller");
const { restrictTo } = require("../middleware/restrictUser");

router.use(restrictTo("customer", "admin", "manager"));

router.get("/:id", Controller.getAllByCustomer).post("/", Controller.createOne);

router.use(restrictTo("admin", "manager"));
router
  .get("/", Controller.getAll)
  .patch("/:id", Controller.updateOne)
  .delete("/:id", Controller.deleteOne)
  .post("/many", Controller.createMany)
  .delete("/many/:id", Controller.deleteMany);

module.exports = router;
