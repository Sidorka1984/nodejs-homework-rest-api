const express = require('express');

const router = express.Router();

module.exports = router;

router.post("/users/signup");

router.post("/users/login");

router.post("/users/logout");

module.exports = router;