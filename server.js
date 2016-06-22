var express = require('express');
app = express();
path = require('path');
var bodyParser = require('body-parser');
mongoose = require('mongoose');
app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8080, function(){
	console.log('Now Streaming on Channel 8080');
})
