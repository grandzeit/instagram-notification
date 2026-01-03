const axios = require("axios");

async function sendPush(title, message) {
  await axios.post("https://api.pushover.net/1/messages.json", {
    token: process.env.PUSHOVER_TOKEN,
    user: process.env.PUSHOVER_USER,
    title,
    message,
    priority: 0
  });
}

module.exports = { sendPush };