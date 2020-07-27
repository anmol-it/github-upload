const mongoose = require('mongoose');
const Food = mongoose.model('Food');

const getFoods = function (req, res) {
  Food.find().exec(function(err, fooddata) {
	if (err) {
		res
		.status(404)
		.json(err);
	return;
	}
	res
	.status(200) 
	.json(fooddata); 
	});
};

const createFood = function (req, res) {
 Food.create({
	 name: req.body.name,
	 type: req.body.type,
	 releaseDate:req.body.releaseDate,
	 cookName:req.body.cookName,
	 rating:req.body.rating,
     ingredients:req.body.ingredients,
     description:req.body.description

}, (err, fooddata) => {
	if (err) {
		res
		.status(400)
		.json(err);
	} else {
		res
		.status(201)
		.json(fooddata);
	}
  });
};


const getSingleFood = function (req, res) {
 if (req.params && req.params.foodid) { 
	Food
	.findById(req.params.foodid)
	.exec((err, fooddata) => {
		if (!fooddata) { 
			res 
			.status(404) 
			.json({ 
				"message": "locationid not found" 
			}); 
		return;
		} else if (err) { 
			res 
			.status(404) 
			.json(err); 
		return; 
	}
	res
	.status(200) 
	.json(fooddata); 
	});
} else { 
	res 
	.status(404) 
	.json({ 
		"message": "No locationid in request" 
	}); 
}
};

const updateFood = function (req, res) {
	if (!req.params.foodid) {
		res
		.status(404)
		.json({
			"message": "Not found, foodid is required"
		});
	return;
	}	
	Food.findById(req.params.foodid)
		.exec((err, fooddata) => {
			if (!fooddata) {
				res
			.json(404)
			.status({
				"message": "foodid not found"
			});
			return;
		} else if (err) {
			res
			.status(400)
			.json(err);
			return;
		}
		fooddata.name = req.body.name;
		fooddata.type = req.body.type;
		fooddata.releaseDate=req.body.releaseDate;
		fooddata.cookName=req.body.cookName;
		fooddata.rating=req.body.rating;
        fooddata.ingredients= req.body.ingredients;
        fooddata.description = req.body.description;
		fooddata.save((err, fooddata) => {
			if (err) {
				res
				.status(404)
				.json(err);
			} else {
				res
				.status(200)
				.json(fooddata);
			}
		});
	}
	);
};
		

const deleteFood = function (req, res) {

 const foodid = req.params.foodid;
 
 if (foodid) {
	Food
	.findByIdAndRemove(foodid) 
	.exec((err, fooddata) => { 
	if (err) {
		res
		.status(404) 
		.json(err); 
	return;
	}
 res
 .status(204)  
 .json(null);
 });
 } else {
	 res
	 .status(404)
	 .json({"message" : "No foodid"});
}};



 module.exports = {
 getFoods,
 createFood,
 getSingleFood,
 updateFood,
 deleteFood
};