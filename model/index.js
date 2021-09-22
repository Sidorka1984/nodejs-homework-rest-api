const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const removeContact = require('./removeContact')
const addContact = require('./')
const updateContact = require('./updateContact')

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
