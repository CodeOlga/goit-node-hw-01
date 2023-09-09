const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.join("db", "contacts.json");
const { nanoid } = require("nanoid");

async function listContacts() {
  try {
    const jsonContactsRead = await fs.readFile(contactsPath);
    const contactsReadResult = JSON.parse(jsonContactsRead);

    return contactsReadResult;
  } catch (err) {
    console.log(err);
  }
}

async function getContactById(contactId) {
  try {
    const allContactsList = await listContacts();
    const foundContact = allContactsList.find(
      (contact) => contact.id === contactId
    );

    return foundContact || null;
  } catch (err) {
    console.log(err);
  }
}

async function removeContact(contactId) {
  try {
    const allContactsList = await listContacts();
    const index = allContactsList.findIndex(
      (contact) => contact.id === contactId
    );

    if (index === -1) {
      return null;
    }

    const [result] = allContactsList.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContactsList, null, 2));

    return result;
  } catch (err) {
    console.log(err);
  }
}

async function addContact({ name, email, phone }) {
  try {
    const allContactsList = await listContacts();

    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };

    allContactsList.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContactsList, null, 2));

    return newContact;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
