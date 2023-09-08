const { admin } = require("../config/auth");
const verifyToken = async (req, res, next) => {
  // if (req.header("Authorization")) {
  const idToken = req.header("authorization").replace("Bearer", "").trim()
    ? req.header("authorization").replace("Bearer", "").trim()
    : req.header("authorization" || "Authorization");
  // console.log({ idToken });
  if (!idToken) {
    res
      .status(401)
      .json({ error: "Unauthorized Access: You are not authorised" });
    next();
  }
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    // console.log({ decodedToken });
    const userDetails = await admin
      .auth()
      .getUser(decodedToken.uid)
      .then((usr) => usr)
      .catch((err) => err);
    // console.log({ userDetails });
    req.user = { ...decodedToken, role: userDetails.customClaims.type };
    // console.log(req.user);
    next();
  } catch (error) {
    res
      .status(401)
      .json({ error: "Unauthorized Access: You are not authorised" });
  }
  // }
};

module.exports = verifyToken;
