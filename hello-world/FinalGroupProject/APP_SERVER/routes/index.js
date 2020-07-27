const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlFood = require('../controllers/food');
/* GET home page. */
router.get('/', ctrlFood.homelist);
router.get('/foods/:foodid', ctrlFood.foodInfo);
router.route('/new')
      .get(ctrlFood.addNewFood)
      .post(ctrlFood.doAddNewFood);
/*router.get('/list', ctrlFood.foodlist);
router.get('/favourite', ctrlFood.favouriteFood); */
module.exports = router;


