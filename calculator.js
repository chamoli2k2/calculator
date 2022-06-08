var express = require("express");

var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){

    // fetching data from user
    var n1 = Number(req.body.Num1);
    var n2 = Number(req.body.Num2);
    var op = req.body.opperand;
    var result;
    var flag = true;
    // calculation logic 
    if(op==='+'){
       result=n1 + n2;
    }else if(op==='/'){
        result = n1/n2;
    }else if(op==='*'){
        result = n1*n2;
    }else if(op==='-'){
        result = n1-n2;
    }else{
        flag=false;
    }

    if(flag===true){
        res.send("Result of calculation is : " + result);
    }else{
        res.send("C J B");
    }
})

app.listen("3000",function(){
    console.log("Listining port 3000")
})