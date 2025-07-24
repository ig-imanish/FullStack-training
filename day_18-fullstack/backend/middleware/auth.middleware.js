const { userModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  // let token =req.header("authorization");
  let token = req.headers.authorization;
  token = token.replace("Bearer ", "");
  console.log("authenticating.....");

  if (!token) {
    res.send("invalid token");
  }
  try {
    var decoded = jwt.verify(token, "secret");

    const userId = decoded.userId;
    const matchUser = await userModel.findOne({ _id: userId });
    console.log(userId);
    if (matchUser) {
      req.headers = decoded.userId;
      next();
    } else {
      return res.status(400).send({ msg: "user is not authrized" });
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).send({ error: error });
  }
};

module.exports = { authMiddleware };
