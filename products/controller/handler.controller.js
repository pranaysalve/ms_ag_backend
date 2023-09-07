const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Model = require("../model/model");


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
  const doc = await Model.findByIdAndUpdate(req.params.id, { ...req.body });
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
