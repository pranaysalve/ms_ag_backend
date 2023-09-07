const express = require("express");
const xss = require("xss-clean");
const cors = require("cors");
const proxy = require("express-http-proxy");
//router
const Route = require("./routes/routes");
//middleware
const verifyToken = require("./middleware/verifyToken");
const app = express();

app.use(cors());
//body parsing
app.use(express.json({ limit: "10kb" }));
app.use(xss());

app.use((req, res, next) => {
  console.log(req.protocol, req.hostname, req.method, " ", req.url);
  next();
});

//route
app.use("/user", Route);

// app.use(verifyToken);

app.use("/product", proxy("http://localhost:8010"));
app.use("/packaging", verifyToken, proxy("http://localhost:8011"));
app.use("/sku", verifyToken, proxy("http://localhost:8012"));
app.use("/rates", verifyToken, proxy("http://localhost:8013"));
app.use("/location", verifyToken, proxy("http://localhost:8014"));
app.use("/logisticsmode", verifyToken, proxy("http://localhost:8015"));
app.use("/logisticswithsku", verifyToken, proxy("http://localhost:8016"));
app.use("/freightdetails", verifyToken, proxy("http://localhost:8017"));
app.use("/freight", verifyToken, proxy("http://localhost:8018"));
app.use("/order", verifyToken, proxy("http://localhost:8019"));

module.exports = app;
