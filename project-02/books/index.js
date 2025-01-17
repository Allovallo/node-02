const fs = require("fs/promises");
const path = require("path");

const bookPath = path.join(__dirname, "books.json");

const getAll = async () => {
  const data = await fs.readFile(bookPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const books = await getAll();
  const result = books.find((item) => item.id === id);
  return result;
};

module.exports = {
  getAll,
  getById,
};
