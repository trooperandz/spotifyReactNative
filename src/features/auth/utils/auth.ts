import { authorize, refresh } from 'react-native-app-auth';

const authConfig = {
  clientId: 'f0ee9f555949461d8071fbf539aa3fbe',
  // TODO: should move this to a back-end service; attempted with Firebase function service but aborted
  clientSecret: 'e71a203009fc408d82aadad412ce0fc0',
  redirectUrl: 'com.spotifyreactnative:/oauth',
  scopes: ['user-library-read'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
    //'https://us-central1-echobindchallenge.cloudfunctions.net/api/user/authentication',
  },
};

export const authorizeSpotify = async () => {
  try {
    const result = await authorize(authConfig);
    // alert(JSON.stringify(result));
    console.log('refresh token: ', result.refreshToken);
    console.log('access token: ', result.accessToken);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const refreshLogin = async (refreshToken: string) => {
  try {
    const result = await refresh(authConfig, {
      refreshToken: refreshToken,
    });

    return result;
  } catch (error) {
    console.error(error);
  }
};
