const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getUserProfile = async () => {
  const response = await fetch(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('spotify-access-token')}`
    }
  });

  return response.json();
}
