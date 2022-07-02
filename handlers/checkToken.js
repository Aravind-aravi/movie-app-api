const jwt = require("jsonwebtoken");

function checkToken(req, res, next) {
  //get authcookie from request
  const authcookie = req.cookies.authcookie;

  //verify token which is in cookie value
  jwt.verify(authcookie, "secret_key", (err, data) => {
    if (err) {
      res.sendStatus(401);
    } else if (data.user) {
      req.user = data.user;
      return next();
    }
  });
}

module.exports = checkToken;
