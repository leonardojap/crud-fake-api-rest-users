//Dependencies
//import localstorage for nodeJS as a mini-database to test
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

//Import our static data..
const dataposts = require('./../data/posts.json');
const datapost = require('./../data/post.json');


exports.posts = function(req, res) {
    res.json(dataposts);
}

exports.post = function(req, res) {
    res.json(datapost);
}
