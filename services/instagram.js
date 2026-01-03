const axios = require("axios");

async function fetchInstagramProfile(username) {
  const options = {
    method: "GET",
    url: "https://instagram-looter2.p.rapidapi.com/profile2",
    params: { username },
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST
    }
  };

  const response = await axios.request(options);
  return response.data;
}

module.exports = { fetchInstagramProfile };