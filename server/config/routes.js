var birthdates = require('../controllers/birthdates.js');

module.exports = function(app){
	app.get('/birthdates', function(request, response){
		birthdates.showAll(request, response);
	});

	app.post('/new', function(request, response){
		birthdates.add(request, response);
	});

	app.delete('/remove/:id', function(request, response){
		birthdates.remove(request, response);
	})

	app.get('/:name', function(request, response){
		birthdates.showOne(request, response);
	})


}