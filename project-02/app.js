const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);

    default:
      return console.log("Unknown action :(");
  }
};

invokeAction({ action: "read" });
