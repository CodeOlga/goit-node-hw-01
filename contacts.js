const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.join("db", "contacts.json");
const { nanoid } = require("nanoid");

async function listContacts() {
  // ...твой код. Возвращает массив контактов.
  try {
    const jsonContactsRead = await fs.readFile(contactsPath);
    const contactsReadResult = JSON.parse(jsonContactsRead);
    // console.log(contactsReadResult);
    // console.table(contactsReadResult);
    return contactsReadResult;
  } catch (err) {
    console.log(err);
  }
}

async function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
  try {
    // const jsonContactsRead = await fs.readFile(contactsPath);
    // const contactsReadResult = JSON.parse(jsonContactsRead);
    const allContactsList = await listContacts();
    const foundContact = allContactsList.find(
      (contact) => contact.id === contactId
    );
    // console.log(foundContact);
    return foundContact || null;
  } catch (err) {
    console.log(err);
  }
}

async function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
  const allContactsList = await listContacts();
  const index = allContactsList.findIndex(
    (contact) => contact.id === contactId
  );
  if (index === -1) {
    return null;
  }
  const [result] = allContactsList.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContactsList, null, 2));
}

async function addContact({ name, email, phone }) {
  // ...твой код. Возвращает объект добавленного контакта.
  try {
    const allContactsList = await listContacts();
    const newContact = {
      id: nanoid(),
      // ...data,
      name,
      email,
      phone,
    };
    allContactsList.push(newContact);
    // await fs.writeFile(contactsPath, JSON.stringify(allContactsList));
    //щоб json був не в одну строку, число 2 тут - це виступи, таким чином запише нормального вигляду
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
