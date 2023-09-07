const { getAuth } = require("firebase/auth");
const { initializeApp } = require("firebase/app");
const admin = require("firebase-admin");
const serviceAccount = require("./config.json");
const { firebaseConfig } = require("./firebase.config");

const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = { admin, firebase, auth };
