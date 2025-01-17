const fs = require("fs/promises");
const path = require("path");

const bookPath = path.join(__dirname, "books.json");

const getAll = async () => {
  const data = await fs.readFile(bookPath);
  return JSON.parse(data);
};

module.exports = {
  getAll,
};
