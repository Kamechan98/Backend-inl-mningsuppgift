const app = require('./app');
require('dotenv').config();
const mongoose = require('mongoose');

//Kör antingen det PORT-nummer vi gett på .env eller 8080 
const PORT = process.env.PORT || 8080;

//Lyssnar efter PORT-nummret och kopplar till vår MONGO_URI. 
app.listen(PORT, () => console.log('server running on' + PORT))
mongoose.connect(process.env.MONGO_URI)
//Om det går bra consol-loggar den texten. Om det går fel så consol-loggas error
.then(() => console.log('connected to db'))
.catch(err => console.log(err))