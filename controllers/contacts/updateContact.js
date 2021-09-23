const { NotFound } = require('http-errors')
const contactsOperations = require('../../model/contacts')
const { sendSuccessRes } = require('../../helpers')

const updateContact = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperations.updateContact(contactId, req.body)

  if (!result) {
    throw NotFound(`Contact with id=${contactId} not found`)
  }
  sendSuccessRes(res, result, 200, 'Contact has been successfully updated')
}

module.exports = updateContact
