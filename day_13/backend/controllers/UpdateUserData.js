import { user } from "../models/User.js";
import { updateDataRoute } from "../routes/UserRoutes.js";
function updateUserData(app) {
  app.get(updateDataRoute, (req, res) => {
    // if (req.query["name"]) {
    //   user.name = req.query["name"];
    // } else {
    //   user.name = "Default";
    // }

    user.name = "No Name";
    res.status(200).send(user);
  });
}

export { updateUserData };
