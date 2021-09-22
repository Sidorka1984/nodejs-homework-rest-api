const { NotFound } = require('http-errors')
const contactsOperations = require('../model')
const { sendSuccessRes } = require('../helpers')

const getContactById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperations.getContactById(contactId)
  if (!result) {
    throw NotFound(`Contact with id=${contactId} not found`)
  }
  sendSuccessRes(res, { result })
}
module.exports = getContactById
