const router = require('express').Router();
const saveMenu = require('../controllers/menu/save_menu.js');
const formMenu = require('../controllers/menu/form_menu.js');

router.get('/', formMenu);
router.post('/', saveMenu);


module.exports = router;