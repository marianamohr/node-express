const express = require('express');
const { validateEmail, validatePassword } = require('../midlewares/index');
const { generateToken } = require('../utils');

const router = express.Router();

router.post('/', validateEmail, validatePassword, async (req, res) => {
    const token = generateToken();
   return res.status(200).send({ token });
  });

  module.exports = router;