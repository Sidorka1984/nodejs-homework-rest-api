const { NotFound } = require('http-errors')
const contactsOperations = require('../model')
const { sendSuccessRes } = require('../helpers')

const removeContact = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperations.removeContact(contactId)

  if (!result) {
    throw NotFound(`Contact with id=${contactId} not found`)
  }
  sendSuccessRes(res, result, 200, 'Contact has been successfully deleted')
}

module.exports = removeContact
