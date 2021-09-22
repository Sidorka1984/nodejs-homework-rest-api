const contactsOperations = require('../model')
const { contactSchema } = require('../schemas')

const updateContact = async (req, res, next) => {
  const { error } = contactSchema.validate(req.body)
  if (error) {
    const err = new Error('missing field')
    err.status = 400
    throw err
  }
  const { contactId } = req.params
  const result = await contactsOperations.updateContact(contactId, req.body)

  if (!result) {
    const error = new Error(`Contact with id=${contactId} not found`)
    error.status = 404
    throw error
  }

  res.json({
    status: 'seccess',
    code: 200,
    data: result
  })
}

module.exports = updateContact
