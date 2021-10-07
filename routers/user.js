const express = require("express");

const { Router } = express;

const router = new Router();
const User = require("../models").user;

router.get("/", async (request, response, next) => {
  try {
    const allUsers = await User.findAll();
    response.send(allUsers);
    console.log("Hello, there are ", allUsers);
    // return allUsers.map((user) => user.toJSON());
  } catch (e) {
    next(e);
    //console.log(e);
    console.log("there are ", allUsers);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      res.status(400).send("You are missing parameters");
    } else {
      const newUser = await User.create({
        email,
        password,
        fullName,
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
