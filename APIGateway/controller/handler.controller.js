const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { admin, firebase } = require("../config/auth");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const auth = getAuth();

exports.login = catchAsync(async (req, res, next) => {
  console.log({ auth, body: req.body });
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
      console.log("Error signing up user:", err.message);
      res.status(401).json({
        error: err.message,
      });
      next();
    });
});
