const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require("http");



dotenv.config({ path: "./.env" });

const DB = process.env.DBURI.replace("<PASSWORD>", process.env.DBPASS);

mongoose
  .connect(DB, {
    dbName: "ProductDataBase",
  })
  .then((res) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("error connecting with database", err);
  });

io.on("connection", (socket) => {
  console.log("a user connected");
});
const PORT = process.env.PORT || 8010;

app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
