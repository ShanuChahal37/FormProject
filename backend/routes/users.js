var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/create', (req,res,next)=> {
//   alert("hii insde route of server");
//   userData = {
//       "username":req.body.username,
//       "password":req.body.password
//   }
//    const myData = req.body;
//  
//         dbo.collection("user").insertOne(myData, function (err, res) {
//             if (err) {
//                 throw err;
//             }
//             console.log("Number of documents inserted: " + res.insertedCount);
//         });
//         res.send(myData);

// })

module.exports = router;
