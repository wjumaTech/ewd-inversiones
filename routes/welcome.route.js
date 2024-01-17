const { Router } = require('express');
const router = Router();

const { getWelcomeCtrl } = require('../controllers/welcome.controller');

router.get('/', getWelcomeCtrl);

module.exports = router;