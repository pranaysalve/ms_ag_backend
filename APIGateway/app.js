const express = require("express");
const xss = require("xss-clean");
const cors = require("cors");
const proxy = require("express-http-proxy");
const dotenv = require("dotenv");
//router
const Route = require("./routes/routes");
//middleware
const verifyToken = require("./middleware/verifyToken");
dotenv.config({ path: "./.env" });
const app = express();

app.use(cors());
//body parsing
app.use(express.json({ limit: "10kb" }));
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

//route
app.use("/user", Route);

// app.use(verifyToken);

app.use("/product", proxy(process.env.PRODUCTSERVICE));
app.use("/packaging", verifyToken, proxy(process.env.PACKAGINGSERVICE));
app.use("/sku", verifyToken, proxy(process.env.SKUSERVICE));
app.use("/rates", verifyToken, proxy(process.env.RATESERVICE));
app.use("/location", verifyToken, proxy(process.env.LOCATIONSERVICE));
app.use("/logisticsmode", verifyToken, proxy(process.env.LOGISTICSMODESERVICE));
app.use(
  "/logisticswithsku",
  verifyToken,
  proxy(process.env.LOGISTICSWITHSKUSERVICE)
);
app.use(
  "/freightdetails",
  verifyToken,
  proxy(process.env.FREIGHTDETAILSSERVICE)
);
app.use("/freight", verifyToken, proxy(process.env.FREIGHTSERVICE));
app.use("/order", verifyToken, proxy(process.env.ORDERSERVICE));

module.exports = app;
