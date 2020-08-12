const { verify } = require('../utils/jwt')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization
    console.log(token)
    const decoded_token = verify(token)
    req.user = decoded_token
    console.log('decoded_token ', decoded_token)
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: "Auth failed!" });
  }
};

