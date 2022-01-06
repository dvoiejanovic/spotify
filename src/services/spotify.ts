const BASE_URL = process.env.REACT_APP_BASE_URL;
const bearerToken = `Bearer ${localStorage.getItem('spotify-access-token')}`;

type ISearchParams = string | URLSearchParams | string[][] | Record<string, string> | undefined;

const baseRequest = async (endpoint: string, params?: ISearchParams) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(`${BASE_URL}/${endpoint}?${searchParams}`, {
    headers: {
      Authorization: bearerToken,
    },
  });

  return response.json();
}

export const getUserProfile = () => {
  return baseRequest('me');
}

export const getRecommendations = () => {
  return baseRequest('recommendations', {
    seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
    seed_genres: "",
    seed_tracks: "0c6xIDDpzE81m2q797ordA"
  })
}
