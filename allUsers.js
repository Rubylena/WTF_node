const fs = require("fs");

module.exports = () => {
  const data = fs.readFileSync("datasource.json", "utf-8");
  return data;
};
