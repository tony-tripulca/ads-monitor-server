import Logger from "../util/Logger.js";
import fs from "fs";

const AdController = {
  list: (req, res) => {
    fs.readFile("../database/ads.json", "utf8", function (err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  },
};

export default AdController;
