const { verifyToken } = require("../config/jwt.config");

module.exports = (app) => {
  const user = require("../controllers/users.controllers");

  const router = require("express").Router();

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

  router.post("/", user.create);

  router.get("/", user.getCurrentUser);

  app.use("/api/users", router);
};
