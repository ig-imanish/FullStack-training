import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
//   const token = req.header("Authorization").replace("Bearer ", "");
  const token = req.header("Authorization").replace("Bearer ", "");
  // console.log(token);

  if (!token) {
    return res.status(401).send("Token not provided");
  }

  try {
    var decoded = jwt.verify(token, "secret");
    let userId = decoded.userId;
    console.log(decoded.data);
    let user = await userModel.findOne({ _id: userId });
    if (user) {
        
      next();
    } else {
      res.status(401).send("UnAuthorized");
    }
  } catch (error) {
    res.status(501).send("Invalid Token");
  }
};

export { authMiddleware };
