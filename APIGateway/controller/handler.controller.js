const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { admin, firebase } = require("../config/auth");
const {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require("firebase/auth");
const Model = require("../model/model");
const auth = getAuth();

exports.login = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  await signInWithEmailAndPassword(auth, email, password)
    .then((user) => res.status(200).json({ data: { user: user } }))
    .catch((err) => res.status(400).json({ data: { error: err } }));
});

exports.signup = catchAsync(async (req, res, next) => {
  if (req.body.password !== req.body.repeatedPassword) {
    return next(new AppError("Error: Passwords do not match"));
  }
  await createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then(async (someRes) => {
      let some;
      try {
        some = await admin.auth().setCustomUserClaims(someRes.user.uid, {
          type: req.body.role ? req.body.role : "customer",
        });
      } catch (err) {
        console.log("Error setting custom user claims:", err);
        res.status(401).json({
          error: err.message,
        });
      }

      const user = Object.assign({}, someRes.user);
      delete user.providerData;

      const updateUserDatabase = {
        email: user.email,
        uid: user.uid,
        name: user.displayName,
      };

      const updateUser = await axios.post(
        `${process.env.USERSERVICE}/`,
        updateUserDatabase,
        {
          headers: {
            Authorization: user.stsTokenManager.accessToken,
            "Content-Type": "application/json",
          },
        }
      );
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log("Error signing up user:", err.message);
      res.status(401).json({
        error: err.message,
      });
      next();
    });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  console.log({ user: req.user });
  // const users = await admin
  //   .auth()
  //   .listUsers(1000, req.user.stsTokenManager.accessToken)
  //   .then((users) => users.users);
  // if (!users) {
  //   return next(new AppError("No user exists"));
  // }
  res.status(200).json({
    data: {
      data: "users",
    },
  });
});
