const express = require('express')
const router = express.Router()

// const { contactSchema } = require('../../schemas')
const { controllerWrapper } = require('../../middlewares')
const contactsController = require('../../controllers')

router.get('/', controllerWrapper(contactsController.listContacts))

router.get('/:contactId', controllerWrapper(contactsController.getContactById))

router.post('/', controllerWrapper(contactsController.addContact))

router.delete('/:contactId', controllerWrapper(contactsController.removeContact))

router.put('/:contactId', controllerWrapper(contactsController.updateContact))

module.exports = router
