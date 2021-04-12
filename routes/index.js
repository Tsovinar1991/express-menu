const router = require('express').Router();

router.get('/',(req, res)=>{
    res.render('index/index', {url: req.originalUrl})
});

router.get('/about',(req, res)=>{
    res.render(`index/about`, {url: req.originalUrl})
});

router.get('/contact',(req, res)=>{
    res.render(`index/contact`, {url: req.originalUrl})
});

module.exports = router;