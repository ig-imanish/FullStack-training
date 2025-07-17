import { user } from "../models/User.js";
import { createDataRoute } from "../routes/UserRoutes.js";
import { generateId } from "../utils/GenerateID.js";
function createUserData(app) {
  app.get(createDataRoute, (req, res) => {
    user.id = generateId();
    user.name = "Manish Kumar";
    user.age = 19;
    user.clg = "RBIENT";
    user.rollNumber = 2305544;
    res.status(200).send(user);
  });
}

export { createUserData };