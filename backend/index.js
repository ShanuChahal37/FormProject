const express = require('express')
//const router = require('./routes/users')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongo:27017";
var dbo;

MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  dbo= db.db('dataDB');
  dbo.createCollection("user", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");

    dbo.createCollection("FormData", function(err, res) {
        if (err) throw err;
        console.log("Form Data Collection created!");
    
   // app.use('/', router);
/////////////////////////////////
//     var myobj = { name: "Company" , address: "Highway 37"};
//     dbo.collection("customers").insertOne(myobj, function(err,result)
// {
//     if (err) throw err;
//        console.log(result.name);
// db.close();
// });

// 

// dbo.collection("customers").drop(function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
  });
});
});


app.get('/getAllData', (req, res) => {
        dbo.collection("FormData").find({}).toArray( function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    })
    
    app.get('/getAll', (req, res) => {
            dbo.collection("user").find({}).toArray( function (err, result) {
                if (err) throw err;
                res.json(result);
            });
        })

        app.delete('/deleteUser', (res,req)=>{
            var userNAme= res.query.id;
            dbo.collection("user").deleteOne({"userName": userNAme}, function (err, res){
                if (err) {
                                throw err;
                            }  
                    console.log(userNAme);
                    console.log("user deleted");
            });
            req.send(item);
        });
        
   

    app.post("/create", (req, res) => {
        
        console.log("Hello shanu");
        const myData = req.body;

   
       
        dbo.collection("user").insertOne(myData, function (err, res) {
            if (err) {
                throw err;
            }
            console.log("Number of documents inserted: " + res.insertedCount);
        });
        res.send(myData);


    });
    app.post("/createForm", (req, res) => {
        
        console.log("Hello shanu, Form Submitter server");
        const myData = req.body;

   
       
        dbo.collection("FormData").insertOne(myData, function (err, res) {
            if (err) {
                throw err;
            }
            console.log("Number of documents inserted: " + res.insertedCount);
        });
        res.send(myData);


    });


    app.post("/login", (req,res,next)=>{
        console.log("login server");
        
          const  username= req.body.username;
           const password=req.body.password;
        

    dbo.collection("user").findOne({userName: username, password: password})
    .then(data =>
        {
            if(data){
                console.log(username);
                console.log(password);
                res.send(data);
            }
            else {
                
                let error = new Error("Could not find in database")
        error.status = 500
       next(error);

            }
        } );
        




    });
        
    
//     app.post("/login", (req, res) => {
//             const myData = req.body;
//         //     dbo.collection("user").insertOne(myData, function (err, res) {
//         //         if (err) {
//         //             throw err;
//         //         }
//         //         console.log("Number of documents inserted: " + res.insertedCount);
//         //     });
//         //     res.send(myData);

//         urllogin="http/localhost:4200/form"
//         res.send(urldata);
//         });
    
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

  