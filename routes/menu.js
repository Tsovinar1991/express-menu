const router = require('express').Router();
const saveMenu = require('../controllers/menu/save_menu.js');
const formMenu = require('../controllers/menu/form_menu.js');
const menuValidation = require('../validations/menu_validation.js');

router.get('/', formMenu);
router.post('/', menuValidation, saveMenu);


module.exports = router;