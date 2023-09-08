const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Model = require("../model/model");
const axios = require("axios");
exports.getAll = catchAsync(async (req, res, next) => {
  const doc = await Model.find({ ...req.query });
  res.status(200).json({
    data: {
      results: doc.length,
      data: doc,
    },
  });
});

exports.createOne = catchAsync(async (req, res, next) => {
  const findDoc = await Model.findOne({ ...req.body });
  if (findDoc) {
    if (findDoc) {
      return next(new AppError("Product Already Exist", 404));
    }
  }
  const doc = await Model.create({ ...req.body });
  res.status(200).json({
    data: {
      results: doc.length,
      data: doc,
    },
  });
});

exports.updateOne = catchAsync(async (req, res, next) => {
  console.log({ body: req.body });
  let doc;
  if (req.params.id) {
    doc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
  }
  if (!req.params.id) {
    doc = await Model.updateMany({ product: req.body });
  }
  let updateRate;
  let updateLogisticsMode; //8016
  const RATESERVICE = "http://localhost:8013";
  const LOGISTICSWITHSKUSERVICE = "http://localhost:8016";
  try {
    updateRate = await axios.patch(RATESERVICE, JSON.stringify(req.body), {
      headers: {
        Authorization: req.header("authorization" || "Authorization"),
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error updating SKU:", error.message);
    // Handle the error as needed
  }
  try {
    if (updateRate) {
      updateLogisticsMode = await axios.patch(
        LOGISTICSWITHSKUSERVICE,
        JSON.stringify(req.body),
        {
          headers: {
            Authorization: req.header("authorization" || "Authorization"),
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error updating SKU:", error.message);
    // Handle the error as needed
  }

  res.status(200).json({
    data: {
      results: doc.length,
      data: doc,
      rates: updateRate && updateRate.data,
      logisticsku: updateLogisticsMode && updateLogisticsMode.data,
    },
  });
});

exports.deleteOne = catchAsync(async (req, res, next) => {
  console.log({ params: req.params });
  const doc = await Model.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json({
    data: {
      results: doc.length,
      data: doc,
    },
  });
});

exports.createMany = catchAsync(async (req, res, next) => {
  res.status(200).json({
    data: {
      message: `Hello world`,
    },
  });
});

exports.deleteMany = catchAsync(async (req, res, next) => {
  res.status(200).json({
    data: {
      message: `Hello world`,
    },
  });
});
