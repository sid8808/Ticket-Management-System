module.exports = (app) => {
  const user = require("../controllers/users.controllers");

  var router = require("express").Router();

  router.post("/", user.create);

  router.get("/", user.findAll);

  app.use("/api/users", router);
};
