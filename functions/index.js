/* eslint-disable */
const functions = require('firebase-functions');
const server = require('./src/server');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const api = functions
  .runWith({ memory: '2GB', timeoutSeconds: 120 })
  .https.onRequest(server);

module.exports = {
  api,
};
