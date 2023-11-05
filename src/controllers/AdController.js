import Logger from "../util/Logger.js";

import ads from "../../../database/ads.json" assert { type: "json" };

const AdController = {
  list: (req, res) => {
    res.json(ads);
  },
};

export default AdController;
