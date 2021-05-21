const connection = require('../../config/dbConnection.js');
const menuService = require('../../services/menuService.js');

module.exports = (req, res)=>{
    let{offset=0,limit=10} = req.query;
        menuService.findAll(limit, offset).then(
            ([rows,fields]) => {
                res.render('menu_list/index', {url: req.originalUrl, data:rows });
            }
            )
        .catch(err=>{
            console.log(err.toString());
        });
}