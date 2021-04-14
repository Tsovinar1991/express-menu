const connection = require('../../config/dbConnection.js');

module.exports = (req, res)=>{
    let sql = 'SELECT * FROM `menu`';
    connection.query(sql, function(err, data) {
            if(err){
                console.log(err.toString());
            }

           res.render('menu_list/index', {url: req.originalUrl, data:data });
        }
    );

}