const contactsOperations = require('../model')

const getContactById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperations.getContactById(contactId)
  if (!result) {
    const error = new Error(`Contact with id=${contactId} not found`)
    error.status = 404
    throw error
  }
  res.json({
    status: 'seccess',
    code: 200,
    data: {
      result
    }
  })
}
module.exports = getContactById
