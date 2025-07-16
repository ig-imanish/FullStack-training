import { user } from "../models/User.js";
import { deleteDataRoute } from "../routes/UserRoutes.js";
function deleteUserData(app) {
  app.get(deleteDataRoute, (req, res) => {
    user.name = "";
    user.age = 0;
    user.clg = "";
    user.rollNumber = 0;
    res.status(200).send(user);
  });
}

export { deleteUserData };