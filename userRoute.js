const express = require('express');

const router = express.Router();

const user = require('./example.controller');

router.post('/',user.createUser);
router.delete('/',user.delet);
router.get('/',user.findone);


module.exports = router;