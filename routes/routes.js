const express = require('express');
const router = express.Router();

// Require the controllers
const userController = require('./../controllers/user');
const postController = require('../controllers/postController');

// a simple test url to check that all of our files are communicating correctly.

router.get('/test', userController.test);

//CRud User
router.post('/user/create', userController.create);

router.post('/user/update', userController.update);

router.get('/user/:id', userController.findByEmail);

router.delete('/user/:id', userController.delete);


//crud posts
router.get("/posts", postController.posts);

router.get("/post", postController.post);


module.exports = router;