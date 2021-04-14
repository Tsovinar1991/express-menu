const router = require('express').Router();
const menuList = require('../controllers/menu_list/list.js');

router.get('/', menuList);

module.exports = router;