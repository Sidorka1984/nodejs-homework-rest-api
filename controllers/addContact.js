const contactsOperations = require('../model')
const { contactSchema } = require('../schemas')

const addContact = async (req, res, next) => {
  // eslint-disable-next-line no-empty

  const { error } = contactSchema.validate(req.body)
  if (error) {
    const err = new Error(error.message)
    err.status = 400
    throw err
  }
  const result = await contactsOperations.addContact(req.body)
  res.status(201).json({
    status: 'seccess',
    code: 201,
    data: { result }
  })
}

module.exports = addContact
