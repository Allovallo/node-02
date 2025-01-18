const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getById(id);
      return console.log(oneBook);
    case "add":
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);

    default:
      return console.log("Unknown action :(");
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "YxhM4QDxPeA3SmPHcEZPJ" });
// invokeAction({ action: "add", title: "X", author: "Y" });
// invokeAction({
//   action: "updateById",
//   id: "S0dAKFY_px1-55wheEX13",
//   title: "XXX",
//   author: "YYY",
// });
invokeAction({ action: "deleteById", id: "S0dAKFY_px1-55wheEX13" });
