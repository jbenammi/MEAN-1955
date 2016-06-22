var bdateSchema = new mongoose.Schema({
	name: {type: String, require: true, minlength: 4, maxlength: 100}
},{timestamps: true});

mongoose.model('birthdates', bdateSchema);