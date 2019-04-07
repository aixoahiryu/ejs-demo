const express = require('express');
const router = express.Router();
fs = require('fs');

app = express()
const PORT = process.env.PORT || 5000;


const HomeController = require('./router/home.js');
const EntryController = require('./router/entry.js');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

app.use(express.static(__dirname + '/public'));
app.use('/', HomeController);
app.use('/', EntryController);
/*fs.readdirSync('./router').forEach(function(file){
    const api = '/' + file.substr(0, file.lastIndexOf('.'));
    const url = require('./router' + file);
    app.use(api, url);
});*/
//ClearDB

app.listen(PORT, () => {
	console.log(PORT);
});