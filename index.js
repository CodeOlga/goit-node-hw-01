const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

listContacts();
// // getContactById("05olL7gyvQdWRwgKfg5J6"); //нереальный
// getContactById("05olLMgyVQdWRwgKfg5J6"); //реальный
// removeContact();
// addContact();

// const readline = require("readline");
// require("colors");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      const allContacts = await listContacts();
      //return or break
      console.log(allContacts);

      break;

    case "get":
      // ... id
      const foundContactById = await getContactById(id);
      console.log(foundContactById);

      break;

    case "add":
      // ... name email phone
      const newContact = await addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      // ... id
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "e6ywwRe4jcqxXfCZOj_1e" });
// invokeAction({
//   action: "add",
//   name: "Olga K",
//   email: "olga@gmail.com",
//   phone: "(777) 206-2688",
// });
// invokeAction({ action: "remove", id: "mfnIvp7y7bDI_-XEd4xoh" });
