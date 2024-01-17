const { Router } = require('express');
const router = Router();

const { loginCtrl } = require('../controllers/auth.controller');

router.get('/login', loginCtrl);

module.exports = router;