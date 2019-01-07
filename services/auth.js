const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models').User;
const config =  require('../config');
const authenticate = params => {
  console.log('------------------------------------');
  console.log('params', params);
  console.log('------------------------------------');
  return Users.findOne({
      where: {
        username: params.username
      },
      raw: true
  }).then(user => {
    console.log('------------------------------------');
    console.log('user', !user);
    console.log('------------------------------------');
      if (!user)
          throw new Error('Authentication failed. User not found.');
      if (!bcrypt.compareSync(params.password.trim() || '', user.password.trim()))
          throw new Error('Authentication failed. Wrong password.');
      const payload = {
          username: user.username,
          id: user.id,
          time: new Date()
      };
      var token = jwt.sign(payload, config.jwtSecret, {
          expiresIn: config.tokenExpireTime
      });
      return token;
  })
}

module.exports = {
  authenticate
}