/* eslint-disable */

const SpotifyWebApi = require('spotify-web-api-node');

const spotifyConfig = {
  clientId: 'f0ee9f555949461d8071fbf539aa3fbe',
  clientSecret: 'e71a203009fc408d82aadad412ce0fc0',
  redirectUri: 'com.spotifyreactnative://oauthredirect',
};

const spotifyApi = new SpotifyWebApi(spotifyConfig);

async function proxySpotifyToken(_req, res) {
  console.log('_req: ', _req);
  console.log('res: ', res);
  // Retrieve code from request
  const code = _req.body.code;
  const refreshToken = _req.body.refresh_token;

  if (!code && !refreshToken) {
    return res.status(403).json({ success: false, data: 'Not authorized' });
  }

  // Refresh token is available, retrieve a new access token
  if (refreshToken) {
    spotifyApi.setRefreshToken(refreshToken);
    spotifyConfig
      .refreshAccessToken()
      .then(
        data => {
          data.body.refreshToken = refreshToken;
          return res.json(data.body);
        },
        error => {
          console.log('Access token could not be refreshed: ', error);
        },
      )
      .catch(error => res.json(error));
    // spotifyConfig.refreshToken
    // return res.json({ todo: 'Refresh accesstoken' });
  }

  // Retrieve new refresh token and access token
  if (code) {
    spotifyApi
      .authorizationCodeGrant(code)
      .then(
        data => {
          return res.json(data.body);
        },
        err => {
          console.log('There was an error!', err);
        },
      )
      .catch(err => res.json(err));
    // return res.json({ todo: 'Get refresh token & access token' })
  }
}

module.exports = {
  proxySpotifyToken,
};
