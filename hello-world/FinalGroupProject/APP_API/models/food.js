const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	type: {type: String, required: true},
	releaseDate: {type:String,required:true},
	cookName: {type:String,required:true},
    ingredients:{type:String, required:true},
	rating:{type:String,required:true},
    description:{type:String, required:true}
});
mongoose.model('Food', foodSchema);