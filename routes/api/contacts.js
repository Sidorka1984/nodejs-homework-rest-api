const express = require('express');
const router = express.Router();

const { controllerWrapper, validation } = require('../../middlewares');
const contactsController = require('../../controllers/contacts');
const { joiSchema, updateFavoriteJoiSchema } = require('../../models/contact');

router.get('/', controllerWrapper(contactsController.listContacts));

router.get('/:contactId', controllerWrapper(contactsController.getContactById));

router.post('/', validation(joiSchema), controllerWrapper(contactsController.addContact));

router.delete('/:contactId', controllerWrapper(contactsController.removeContact));

router.put('/:contactId', validation(joiSchema), controllerWrapper(contactsController.updateContact));

router.patch("/:contactId", validation(updateFavoriteJoiSchema), controllerWrapper(contactsController.updateFavoriteContact));

module.exports = router;
