import axios from "axios";

const GIPHY_BASE_URL = `https://api.giphy.com/v1/gifs/`;
// const GIPHY_BASE_URL = `https://api.giphy.com/v1/gifs/trending?api_key=dfalhskdjfhla&limit=50`;

const DEFAULT_PARAMS = {
  api_key: "6gqcofnFBuFpMWC4nWW6FDsBp7uB2B11",
  limit: 50,
};

export const fetchTrendingGiphys = async () => {
  const result = await axios.get(`trending`, {
    baseURL: GIPHY_BASE_URL,
    params: DEFAULT_PARAMS,
  });

  return result;
};
