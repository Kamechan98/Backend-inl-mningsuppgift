const express = require('express')
const app = express();
const cors = require('cors');


app.use(express.json());
//Adress-slut för länkar i postman
app.use('/api/bookshop', require('./controllers/bookController'))
app.use('/api/user', require('./controllers/userController'))
app.use('/api/order', require('./controllers/orderController'))

module.exports = app;