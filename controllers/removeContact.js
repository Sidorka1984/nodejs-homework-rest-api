const contactsOperations = require('../model')

const removeContact = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperations.removeContact(contactId)

  if (!result) {
    const error = new Error(`Contact with id=${contactId} not found`)
    error.status = 404
    throw error
  }

  res.json({
    status: 'seccess',
    code: 200,
    message: result
  })
}

module.exports = removeContact
