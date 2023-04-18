const { verifyToken } = require("../config/jwt.config.js");

module.exports = (app) => {
  const tickets = require("../controllers/ticket.controller.js");

  var router = require("express").Router();
  router.use((req, res, next) => {
    const token = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.split("Bearer ")[1]
      : undefined;
    if (!token) {
      return res.status(401).send("Please Provide a auth token");
    }
    try {
      const userDetails = verifyToken(token);
      req.user = userDetails.data;
      return next();
    } catch (e) {
      return res.status(401).send("Invalid token");
    }
  });
  router.post("/", tickets.create);

  router.get("/", tickets.findAll);

  router.get("/published", tickets.findAllPublished);

  router.get("/:id", tickets.findOne);

  router.put("./id", tickets.update);

  router.delete("./id:", tickets.delete);

  router.delete("/", tickets.deleteAll);

  app.use("/api/tickets", router);
};
