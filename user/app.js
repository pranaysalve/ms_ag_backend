const express = require("express");
const xss = require("xss-clean");
const cors = require("cors");
const verifyToken = require("./middleware/varifyToken");

//router
const Route = require("./routes/routes");
const app = express();

app.use(cors());
//body parsing
app.use(express.json({ limit: "100kb" }));
app.use(xss());

app.use((req, res, next) => {
  console.log(
    req.protocol,
    req.hostname,
    req.method,
    " ",
    req.url,
    " - ",
    req.statusCode,
    " - ",
    req.statusMessage
  );
  next();
});

app.use(verifyToken);
//route

app.use("/", Route);
module.exports = app;
