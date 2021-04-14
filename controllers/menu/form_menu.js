module.exports = (req, res)=>{
    res.render('menu/index', {url: req.originalUrl});
}