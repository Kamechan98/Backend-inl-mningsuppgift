const express = require('express')
const app = express();
const cors = require('cors');


app.use(express.json());

app.use('/api/bookshop', require('./controllers/bookController'))
app.use('/api/user', require('./controllers/userController'))

module.exports = app;