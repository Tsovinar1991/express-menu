const connection = require('../../config/dbConnection.js');
let {today} = require('../../helpers/date_helper.js');

module.exports = (req, res) => {
        let{name, short_description, description, price} = req.body;

        let createMenuTable = "CREATE TABLE IF NOT EXISTS menu ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, description varchar(255) NOT NULL, short_description varchar(255) NOT NULL, price decimal(6.2) NOT NULL, date_created varchar(255) NOT NULL );";
        let insertMenuTable = "INSERT INTO menu (name, short_description, description, price, date_created) VALUES (?, ?, ?, ?, ?);"
        connection.query(createMenuTable, function (err) {
                if (err) {
                    console.log(err.toString());
                }

                connection.query(insertMenuTable,[name, short_description, description, +price,today()], (err)=>{
                    if(err){
                        console.log(err.toString());
                    }
                    res.redirect('/menu-list');
                })
            }
        );
    }