/* GET home page */
const index = function(req, res){ 
 res.render('index', { title: 'Your name here' }); 
};
module.exports = { 
 index 
}; 