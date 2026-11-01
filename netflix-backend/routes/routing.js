const express = require('express');
const router=express.Router();
const {createEntry, checkEntry} =require('../controllerLogic/controller');

router.post('/signup', createEntry);
router.post('/signin', checkEntry);

module.exports = router;