const express = require('express');
const homeController = require('../controllers/homeController');
let route = express.Router();

let initWebRoutes = app => {
  app.get("/", homeController.getHomePage);
  return app.use("/", route);
}

module.exports = initWebRoutes;
