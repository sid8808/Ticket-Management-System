const jwt = require("jsonwebtoken");

const privateKey = "asbsdzvjh";
module.exports.getJwtToken = (data) =>
  jwt.sign({ data }, privateKey, {
    expiresIn: 60 * 60,
  });
module.exports.verifyToken = (token) => jwt.verify(token, privateKey);
