const parseCookies = (req, res, next) => {

  // start with an empty object
  var cookieObj = {};
  //acess our long string of cookies && turn into array
  if (req.headers.cookie) {
    var cookiesArr = req.headers.cookie.split("; ");
    //loop through the cookies array
    for (var i = 0; i < cookiesArr.length; i++) {
      var current = cookiesArr[i];
      let index = current.indexOf('=');
      let key = current.slice(0, index);
      let value = current.slice(index + 1);
      cookieObj[key] = value;
    }
    req.cookies = cookieObj
  }
  next();
  //for each cookie we are geting to splice it at the '='
  //left side of = will be key
  //right side of = will be value
  //set req.cookies to our new object.


};

module.exports = parseCookies;