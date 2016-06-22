var birthdate = mongoose.model('birthdates');

module.exports = {
	showAll: function(request, response){
		birthdate.find({}, function(err, birthdates){
			if(err){
				response.json(err);
			}
			else{
				response.json(birthdates);
			}
		})
	},
	add: function(request, response){
		var newBdate = birthdate(request.body);

		newBdate.save(function(err){
			if(err){
				response.json(err);
			}
			else{
				response.json({success: true});
			}
		})
	},
	showOne: function(request, response){
		birthdate.findOne({name: request.params.name}, function(err, birthdate){
			if(err){
				response.json(err);
			}
			else{
				response.json(birthdate);
			}
		})
	},
	remove: function(request, response){
		birthdate.remove({_id: request.params.id}, function(err){
			if(err){
				response.json(err);
			}
			else{
				response.json({success: true});
			}
		})
	}
}