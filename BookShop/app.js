const express = require('express')
const app = express();
const cors = require('cors');


app.use(express.json());

app.use('/api/bookshop', require('./controllers/bookController'))

module.exports = app;