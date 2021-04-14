const express = require('express');
const path = require('path');

const engine =  require('ejs-locals');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || '127.0.0.1';

app.engine('ejs', engine);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', require(path.join(__dirname, './routes/index.js')));
app.use('/menu', require(path.join(__dirname, './routes/menu.js')));
app.use('/menu-list', require(path.join(__dirname, './routes/menu_list.js')));



app.listen(port, host, ()=>{
    console.log(`Server is listening on ${host}:${port}`);
})

