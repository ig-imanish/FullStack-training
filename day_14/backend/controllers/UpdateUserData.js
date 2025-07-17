import { user } from "../models/User.js";
import { updateDataRoute } from "../routes/UserRoutes.js";
function updateUserData(app) {
  app.get(updateDataRoute, (req, res) => {
    // if (req.query["name"]) {
    //   user.name = req.query["name"];
    // } else {
    //   user.name = "Default";
    // }
    user.name = "Tony stark";
    user.age = 53;
    user.clg = "MIT";
    user.rollNumber = 3000;
    res.status(200).send(user);
  });
}

export { updateUserData };