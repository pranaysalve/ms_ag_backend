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
  const findDoc = await Model.findOne({ ...req.body });
  if (findDoc) {
    if (findDoc) {
      return next(new AppError("Product Already Exist", 404));
    }
  }
  const { totalProductAndFreightCost, paidAmount, createdBy, createdFor, uid } =
    req.body;

  const body = {
    booking: req.body,
    billingAmount: totalProductAndFreightCost,
    balance: paidAmount
      ? totalProductAndFreightCost - paidAmount
      : totalProductAndFreightCost,
    paidAmount: paidAmount ? paidAmount : 0,
  };
  const doc = await Model.create(body);
  let ledgerUpdate;
  if (doc) {
    const sendData = {
      debitAmount: paidAmount
        ? totalProductAndFreightCost - paidAmount
        : totalProductAndFreightCost,
      debitDescription: `Sale - ${createdBy.email}`,
      creditAmount: paidAmount ? paidAmount : 0,
      creditDescription: `Sale - ${createdBy.email}`,
      createdBy: createdBy,
      createdFor: createdFor,
      uid: uid,
    };
    ledgerUpdate = await axios.post(process.env.LEDGERSERVICE, sendData, {
      headers: {
        Authorization: req.header("authorization" || "Authorization"),
        "Content-Type": "application/json",
      },
    });
  }
  res.status(200).json({
    data: {
      results: doc.length,
      data: doc,
      ledgerUpdate: ledgerUpdate && ledgerUpdate.data,
    },
  });
});

exports.updateOne = catchAsync(async (req, res, next) => {
  const { totalProductAndFreightCost, paidAmount, createdBy, createdFor, uid } =
    req.body;

  const body = {
    booking: req.body,
    billingAmount: totalProductAndFreightCost,
    balance: paidAmount
      ? totalProductAndFreightCost - paidAmount
      : totalProductAndFreightCost,
    paidAmount: paidAmount ? paidAmount : 0,
  };
  const doc = await Model.create(body);
  let ledgerUpdate;
  if (doc) {
    const sendData = {
      debitAmount: paidAmount
        ? totalProductAndFreightCost - paidAmount
        : totalProductAndFreightCost,
      debitDescription: `Sale - ${createdBy.email}`,
      creditAmount: paidAmount ? paidAmount : 0,
      creditDescription: `Sale - ${createdBy.email}`,
      createdBy: createdBy,
      createdFor: createdFor,
      uid: uid,
    };
    ledgerUpdate = await axios.post(process.env.LEDGERSERVICE, sendData, {
      headers: {
        Authorization: req.header("authorization" || "Authorization"),
        "Content-Type": "application/json",
      },
    });
  }

  res.status(200).json({
    data: {
      results: doc.length,
      data: doc,
      ledgerUpdate: ledgerUpdate && ledgerUpdate.data,
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
