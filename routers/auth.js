const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
// const Auth = require("../auth/login");

const router = new Router();

router.post("/login", async (req, res, next) => {
  if (!req.body.email || req.body.email === "") {
    res.status(400).send({
      message: "Please supply a valid email and password",
    });
  } else if (!req.body.password || req.body.password === "") {
    res.status(400).send({
      message: "Please supply a valid email and password",
    });
  } else req.body.email && req.body.password;
  res.send({
    jwt: toJWT({ userId: 1 }),
  });
});

module.exports = router;
