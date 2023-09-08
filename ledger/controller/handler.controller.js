const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Model = require("../model/model");
const axios = require("axios");

exports.getAllByCustomer = catchAsync(async (req, res, next) => {
  const doc = await Model.find({ uid: req.params.uid });
  res.status(200).json({
    data: {
      results: doc.length,
      data: doc,
    },
  });
});
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
  const doc = await Model.create(req.body);
  res.status(200).json({
    data: {
      results: doc.length,
      data: doc,
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
