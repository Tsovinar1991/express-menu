const multer  = require('multer');
const path = require('path');


module.exports = (destination)=>{

    let storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, destination );
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now()+ '.jpeg')
        }
    });

    return multer({ storage: storage });
};