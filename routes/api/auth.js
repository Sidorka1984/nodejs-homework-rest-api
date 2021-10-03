const express = require('express');

const { joiSchema } = require("../../models/user");
const { controllerWrapper, validation } = require('../../middlewares');
const { auth: ctrl } = require("../../controllers");

const router = express.Router();

module.exports = router;

router.post("/user/signup", validation(joiSchema), controllerWrapper(ctrl.signup));

router.post("/users/login", validation(joiSchema), controllerWrapper(ctrl.login));

router.post("/users/logout", validation(joiSchema), controllerWrapper(ctrl.logout));

module.exports = router;