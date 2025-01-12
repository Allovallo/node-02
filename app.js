const books = require("./books");

console.log(books);

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
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "CTHE0f1kkWwqS5sL2tI8_" });
invokeAction({ action: "add", title: "X", author: "Y" });
