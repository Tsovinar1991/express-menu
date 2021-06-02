const connection = require('../../config/dbConnection.js');
const menuService = require('../../services/menuService.js');

module.exports = (req, res)=>{
    let{offset=0,limit=4} = req.query;

    Promise.all([menuService.findCountAll(),menuService.findAll(+limit, +offset)]).then(
        ([[count],[rows]]) => {
            let pageNumber = offset >= count ? -1 : parseInt(offset / limit) + 1;

            res.render('menu_list/index', {url: req.originalUrl, data:rows, count:count, pageNumber:pageNumber });
        }
    ).catch(err=>{
        console.log(err.toString());
    });

        // menuService.findAll(limit, offset).then(
        //     ([rows,fields]) => {
        //         res.render('menu_list/index', {url: req.originalUrl, data:rows });
        //     }
        //     )
        // .catch(err=>{
        //     console.log(err.toString());
        // });
}