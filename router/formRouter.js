const express = require('express');
const router = express.Router();
const { createForm, getUser, getOneUser, updateUser } = require('../controller/formController');

router.route('/create').post(createForm);
router.route('/').get(getUser);
router.route('/:id').get(getOneUser).patch(updateUser);

module.exports = router;