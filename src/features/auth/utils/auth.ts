import {authorize, refresh} from 'react-native-app-auth';

const authConfig = {
  clientId: 'f0ee9f555949461d8071fbf539aa3fbe',
  clientSecret: 'e71a203009fc408d82aadad412ce0fc0',
  redirectUrl: 'com.spotifyreactnative://oauthredirect',
  scopes: [
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

export const onLogin = async () => {
  try {
    const result = await authorize(authConfig);
    alert(JSON.stringify(result));
    return result;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

export const refreshLogin = async (refreshToken: string) => {
  const result = await refresh(authConfig, {
    refreshToken: refreshToken,
  });
  return result;
};
