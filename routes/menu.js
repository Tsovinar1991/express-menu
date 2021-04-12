const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('menu/index', {url: req.originalUrl});
})

module.exports = router;