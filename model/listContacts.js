const fs = require('fs/promises')

const listContacts = async() => {
  const data = await fs.readFile('./model/contacts.json')
  const contacts = JSON.parse(data)
  return contacts
}

module.exports = listContacts
