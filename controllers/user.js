//Dependencies
//import localstorage for nodeJS as a mini-database to test
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

//models
var User = require('./../models/User');
var Response = require('./../models/Response');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the User controller!');
};

//Crud users
exports.create = function (req, res){
    var user = new User();
    user.fill(req.body);
    var previous = localStorage.getItem(user.email);
    if(previous != undefined){
        res.send(new Response(200,"That email address is registered yet"));
    }else{
        localStorage.setItem(user.email, user);
        res.send(new Response(200,"The user was created successfully",user));
    }
}

exports.update = function(req, res){
    var previous = localStorage.getItem(req.body.email);
    if(previous == undefined){
        res.send({code:201,message:"There is not an user registered with that email address"});
    }else{
        var g = new User();
        g.fill(JSON.parse(previous));
        var user = Object.assign(g, req.body);
        var userEdited = new User();
        userEdited.fill(user);
        localStorage.setItem(user.email, JSON.stringify(userEdited));
        res.send({code:200,message:"The user was updated successfully", data:userEdited});
    }
}

exports.findByEmail = function(req, res){
    var user = localStorage.getItem(req.params.id);
    if(user == undefined){
        res.send({code:201,message:"There is not an user registered with that email address"});
    }else{
        var g = new User();
        g.fill(JSON.parse(user));
        res.send({code:200,message:"The user was finded successfully", data:g});
    }
}

exports.findAll = function(req, res){

}

exports.delete = function(req, res){
    var user = localStorage.getItem(req.params.id);
    if(user == undefined){
        res.send({code:201,message:"There is not an user registered with that email address"});
    }else{
        localStorage.removeItem(req.params.id);
        res.send({code:200,message:"The user was deleted successfully"});
    }
}
