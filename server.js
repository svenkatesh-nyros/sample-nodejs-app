var express = require("express");
var app = express();
var router = express.Router();
var home = require('./controllers/home');
var async = require('async');
var bodyParser = require("body-parser");
const port_number = 9090;

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/test1',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var name =   home.myName();
	res.send(name)
})

router.get("/about",function(req,res){
  	res.sendFile(__dirname + "/views/about.html");
});

app.post('/save',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	//console.log(req.body.username)
	var username= req.body.username;
	var mobile= req.body.mobile;
	var pwd= req.body.pwd;

	var data = 'test';
	data = home.insert(req,res);
})


app.post('/update',function(req,res){
	var sal= req.body.sal;
	var name= req.body.name;
	var id= req.body.id;
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var data = 'test';
	data = home.update(req,res);
})

app.post('/delete',function(req,res){
	var sal= req.body.sal;
	var name= req.body.name;
	var id= req.body.id;
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var data = 'test';
	data = home.remove(req,res);
})

app.post('/select',function(req,res){
	var id= req.body.id;
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var data = 'test';
	home.select(req,res);
	//res.send(JSON.stringify(data))
})

router.get("/user/:id",function(id,req,res){
  	res.json({"message" : "Hello "+req.params.id});
});

app.use("/",router);

app.use("*",function(req,res){
  	res.sendFile(__dirname + "/views/404.html");
});

app.listen(port_number,function(){
 	console.log('Server running on port',port_number)
});