module.exports = (req, res, next) => {
    let {name, short_description, description, price} = req.body;
    let err = [];
    if (name == null || name === "") {
        err.push('Name can not be blank.')
    }
    if (short_description == null || short_description === "") {
        err.push('Short Description can not be blank.')
    }

    if (description == null || description.replace(/^\s+|\s+$/g,'') === '' ) {
        err.push('Description can not be blank.')
    }
    if (isNaN(price) || price ==="") {
        err.push('Price must be number.')
    }
    if(err.length>0){
        return res.render('menu/index', {
            error: err,
            url: req.originalUrl,
            name,
            short_description,
            description,
            price
        })
    }else{
        return next();
    }
}