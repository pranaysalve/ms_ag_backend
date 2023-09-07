const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const DB = process.env.DBURI.replace("<PASSWORD>", process.env.DBPASS);

mongoose
  .connect(DB, {
    dbName: "Order",
  })
  .then((res) => {
    console.log("Order Database is connected");
  })
  .catch((err) => {
    console.log("error connecting with database", err);
  });

const PORT = process.env.PORT || 8019;

app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
