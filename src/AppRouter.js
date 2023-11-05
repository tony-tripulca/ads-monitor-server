import { app } from "./Server.js";
import AdController from "./controllers/AdController.js";

import Logger from "./util/Logger.js";

function AppRoutes() {
  app.get("/", (req, res) => {
    res.json({ service: process.env.APP_NAME });
  });

  app.get("/ads", (req, res) => {
    Logger.out([`GET /ads`, req.query]);
    AdController.list(req, res);
  });
}

AppRoutes();
