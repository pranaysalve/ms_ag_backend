const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const firebase = require("firebase/app");
const admin = require("firebase-admin");
const serviceAccount = require("./config.json");
const { firebaseConfig } = require("./firebase.config");

firebase.initializeApp(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const auth = getAuth();
module.exports = { firebase, admin, auth, signInWithEmailAndPassword };
