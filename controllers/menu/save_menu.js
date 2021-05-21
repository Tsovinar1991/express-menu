const connection = require('../../config/dbConnection.js');
const menuService = require('../../services/menuService.js');
let {today} = require('../../helpers/date_helper.js');



module.exports = (req, res) => {

    let {name, short_description, description, price} = req.body;
    let {filename:image} = req.file;

    let date_created = today();

        menuService.createMenuTable().then(([rows, fields]) => {
            return menuService.create({name, short_description, description, price, image, date_created})
                .then(([rows, fields]) => {
                    return res.redirect('/menu-list');
                })
                .catch(err => {
                        console.log(err.toString());
                       return res.render('menu/index', {dberror: err.toString(), error: []});
                    }
                );
        })
        .catch(err => {
            console.log(err.toString());
           return  res.render('menu/index', {db_error: err.toString()});

        });

}