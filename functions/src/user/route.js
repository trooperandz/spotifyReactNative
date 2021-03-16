/* eslint-disable */

const router = require('express').Router();
const controller = require('./controller');

// Endpoint url: https://us-central1-echobindchallenge.cloudfunctions.net/api/authentication
router.post('/authentication', controller.proxySpotifyToken);

module.exports = router;
