const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getById(id);
      return console.log(oneBook);

    default:
      return console.log("Unknown action :(");
  }
};

// invokeAction({ action: "read" });
invokeAction({ action: "getById", id: "YxhM4QDxPeA3SmPHcEZPJ" });
