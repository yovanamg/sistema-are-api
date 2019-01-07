const config =  require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService = require('../services/auth');
const userService = require('../services/user');
function login(req, res){
  return authService.authenticate(req.body)
  .then(token => {
    console.log('------------------------------------');
    console.log('token');
    console.log('------------------------------------');
    res.send({
      success: true,
      data: { token }
    });
  })
  .catch(err => {
    console.log('------------------------------------');
    console.log('token2');
    console.log('------------------------------------');
    res.status(404).send('Not found');
    // res.send({
    //   success: false,
    //   status: 404,
    //   message: err.message //not the best error handling.
    //   //for better error handling visit github repository, link provided below
    // });
  })
};

function register(req, res){
  var username = req.body.username;
  return userService.getUserByLogin(req.body.username || '')
  .then(exists => {
    if (exists){
      return res.send({
        success: false,
        message: 'Registration failed. User with this email already registered.'
      });
    }
    var user = {
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, config.saltRounds)
    }
    return userService.addUser(user)
    .then(() => res.send({success: true}));
  });
};
module.exports = {
  login,
  register
}