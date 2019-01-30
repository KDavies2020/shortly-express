const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  //console.log(req);
  if (Object.keys(req.cookies).length === 0) {
    return models.Sessions.create()
    .then((data) => {
    res.end();
  })
  }
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

