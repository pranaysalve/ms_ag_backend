const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { signInWithEmailAndPassword } = require("firebase/auth");
const { admin, firebase, auth } = require("../config/auth");
const { get } = require("firebase-admin");

exports.login = catchAsync(async (req, res, next) => {
  await signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((user) => {
      firebase.default
        .auth()
        .currentUser.getIdToken(true)
        .then((idToken) => {
          console.log({ idToken });
          res.status(200).json(idToken);
        })
        .catch((err) => {
          console.log(err);
          next();
        });
      admin
        .auth()
        .getUser(user.user.uid)
        .then((usr) => console.log({ usr }));
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

exports.signup = catchAsync(async (req, res, next) => {
  await firebase.default
    .auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then(async (someRes) => {
      try {
        await admin.auth().setCustomUserClaims(someRes.user.uid, {
          type: req.body.role ? req.body.role : "customer",
        });
      } catch (err) {
        console.log("Error setting custom user claims:", err);
        res.status(401).json({
          error: err.message,
        });
      }
      console.log({ user: someRes.user });
      res.status(200).json(someRes.user);
    })
    .catch((err) => {
      console.log("Error siginingup user:", err.message);
      res.status(401).json({
        error: err.message,
      });
      next();
    });
});
// exports.getAll = catchAsync(async (req, res, next) => {
//   const doc = await Model.find({ ...req.query });
//   res.status(200).json({
//     data: {
//       results: doc.length,
//       data: doc,
//     },
//   });
// });

// exports.createOne = catchAsync(async (req, res, next) => {
//   const findDoc = await Model.findOne({ ...req.body });
//   if (findDoc) {
//     if (findDoc) {
//       return next(new AppError("Product Already Exist", 404));
//     }
//   }
//   const doc = await Model.create({ ...req.body });
//   res.status(200).json({
//     data: {
//       results: doc.length,
//       data: doc,
//     },
//   });
// });

// exports.updateOne = catchAsync(async (req, res, next) => {
//   const doc = await Model.findByIdAndUpdate(req.params.id, { ...req.body });
//   res.status(200).json({
//     data: {
//       results: doc.length,
//       data: doc,
//     },
//   });
// });

// exports.deleteOne = catchAsync(async (req, res, next) => {
//   console.log({ params: req.params });
//   const doc = await Model.findByIdAndDelete({ _id: req.params.id });
//   res.status(200).json({
//     data: {
//       results: doc.length,
//       data: doc,
//     },
//   });
// });

// exports.createMany = catchAsync(async (req, res, next) => {
//   res.status(200).json({
//     data: {
//       message: `Hello world`,
//     },
//   });
// });

// exports.deleteMany = catchAsync(async (req, res, next) => {
//   res.status(200).json({
//     data: {
//       message: `Hello world`,
//     },
//   });
// });
