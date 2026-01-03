const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/lastData.json");

function readLastData() {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function saveLastData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readLastData, saveLastData };