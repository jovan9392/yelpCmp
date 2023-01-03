const express = require('express');
const router = express.Router();
const catchAsync = require('../utilities/catchAsync');
const passport = require('passport');
const users = require('../controllers/user');

const passMiddle = passport.authenticate('local', {
    failureFlash: true,
    failureRedirect: '/login'
});

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passMiddle, users.login);

router.get('/logout', users.logout);

module.exports = router;

