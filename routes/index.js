var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET home page. */
router.get('/', function(req, res, next) {
  
  if (req.body === {}){
    
  }
    
});
router.post("/", function(req,res,next){
  res.send(req.body);
  console.log(req.body);
})

module.exports = router;
