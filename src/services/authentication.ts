import { camelize } from "../helpers/string";

export const login = (): void => {
  const { REACT_APP_CLIENT_ID, REACT_APP_AUTHORIZATION_URL } = process.env;
  const  authorizationUrl = `${REACT_APP_AUTHORIZATION_URL}?` + new URLSearchParams({
      client_id: REACT_APP_CLIENT_ID as string,
      redirect_uri: 'http://localhost:3000/redirect',
      response_type: 'token',
      show_dialog: 'true',
  });
  window.location.replace(authorizationUrl);
}

export const storeAccessToken = (): void => {
  console.log(window.location);
  const hash = window.location.hash;
  const urlChunks = hash.replace('#', '').split('&');
  let parameters: Record<string, string> = {};

  for (const chunk of urlChunks) {
    const chunkDictionary = chunk.split('=');
    parameters[camelize(chunkDictionary[0])] = chunkDictionary[1];
  }

  localStorage.setItem('spotify-access-token', parameters.accessToken);
  localStorage.setItem('apotify-access-token-expires-in', parameters.expiresIn);
}

export const isLoggedIn = (): string | null => {
  return localStorage.getItem('spotifyAccessToken');
}
