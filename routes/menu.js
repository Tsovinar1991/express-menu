const router = require('express').Router();
const saveMenu = require('../controllers/menu/save_menu.js');
const formMenu = require('../controllers/menu/form_menu.js');
const menuValidation = require('../validations/menu_validation.js');

const path = require('path');
let upload = require('../multimedia/upload.js');

router.get('/', formMenu);
router.post('/', upload(path.join(__dirname, '../public/img/gallery')).single('avatar'), menuValidation, saveMenu);


module.exports = router;