const contactsOperations = require('../model')
const { sendSuccessRes } = require('../helpers')

const listContacts = async (req, res, next) => {
  const result = await contactsOperations.listContacts()
  sendSuccessRes(res, { result })
}

module.exports = listContacts
