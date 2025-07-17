import { user } from "../models/User.js";
import { showDataRoute } from "../routes/UserRoutes.js";

function showUserData(app) {
  app.get(showDataRoute, (req, res) => {
    res.status(200).send(user);
  });
}

export { showUserData };
