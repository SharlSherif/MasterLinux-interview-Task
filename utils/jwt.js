const jwt = require("jsonwebtoken");
const secret = "my secret secret";

module.exports.verify = (token) => jwt.verify(token, secret);

module.exports.encode = (payload) =>
  jwt.sign(payload, secret, { expiresIn: "20m" });

module.exports.decode = (token) => {
  let decoded = jwt.decode(token, secret);
  console.log("decoded : ", decoded);
  return decoded;
};
