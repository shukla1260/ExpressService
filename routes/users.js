const express = require('express');
const router =express.Router();

const usersController = require('../controllers/users_controller');
const usersDetailsController = require('../controllers/users_details_controller');


router.get('/profile', usersController.profile);

router.get('/details', usersDetailsController.details);

// for any further routers, access from here
// router.use('/routerName', require('./routerfile'));



module.exports = router;