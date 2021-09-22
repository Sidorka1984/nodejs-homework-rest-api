const contactsOperations = require('../model')

const listContacts = async (req, res, next) => {
  const result = await contactsOperations.listContacts()
  res.json({
    status: 'success',
    code: 200,
    data: result
  })
}

module.exports = listContacts
