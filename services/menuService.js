const connection = require('../config/dbConnection.js');

class MenuService {
    constructor() {
        this.tablename = 'menu';
    }


    createMenuTable(){
        let createMenuTable = `CREATE TABLE IF NOT EXISTS ${this.tablename} ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, description varchar(255) NOT NULL, short_description varchar(255) NOT NULL, price INT(11) NOT NULL, image varchar(255) NOT NULL, date_created varchar(255) NOT NULL );`;
        return connection.promise().query(createMenuTable);
    }

    create({
               name,
               short_description,
               description,
               price,
               image,
               date_created
           }) {


        let insertMenuTable = `INSERT INTO ${this.tablename} (name, short_description, description, price, image, date_created) VALUES (?, ?, ?, ?, ?, ?);`;
        return connection.promise().query(insertMenuTable, [name, short_description, description, +price, image, date_created]);
    }

    findAll(limit, offset) {
        let sql = `SELECT * FROM menu LIMIT ${limit} OFFSET ${offset}`;
        return connection.promise()
            .query(sql);

    }

    findById(id) {

    }

    updateById(id, {
        name,
        short_description,
        description,
        price,
        image,
        date_created
    }) {

    }

    deleteById(id) {

    }
}

module.exports = new MenuService();