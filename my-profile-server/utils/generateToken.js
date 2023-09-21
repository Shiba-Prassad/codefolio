const jwt = require("jsonwebtoken");

const generateWebToken = async (id) => {
  const token = await jwt.sign({ userId: id }, process.env.JWT_KEY, {
    expiresIn: "30d",
  });
  return token;
};

const verifyToken = async (token) => {
  const { userId } = await jwt.verify(token, process.env.JWT_KEY);
  if (!userId) {
    return false;
  }
  return userId;
};

module.exports = { generateWebToken, verifyToken };
