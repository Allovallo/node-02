const { program } = require("commander");

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
      console.log("UNKNOWN ACTION!");
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "CTHE0f1kkWwqS5sL2tI8_" });
// invokeAction({ action: "add", title: "X", author: "Y" });
// invokeAction({
//   action: "updateById",
//   id: "WV2a_0a-jCZR6HneYd0Vt",
//   title: "XXX",
//   author: "YYY",
// });
// invokeAction({ action: "deleteById", id: "WV2a_0a-jCZR6HneYd0Vt" });

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-t, --title, <type>")
  .option("-u, --author, <type>");

program.parse();

const options = program.opts();
console.log(options);
