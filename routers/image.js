const express = require("express");

const { Router } = express;

const router = new Router();

const Image = require("../models").image;

router.get("/", async (request, response, next) => {
  try {
    const allImages = await Image.findAll();
    response.send(allImages);
    console.log("Hello, there are ", allImages);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const url = req.body.url;
    if (!url || url === " ") {
      res.status(400).send("Must provide an url");
    } else {
      const createImage = await Image.create(req.body);
      res.json(createImage);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:imgId", async (req, res) => {
  const imgId = parseInt(req.params.imgId);
  const getImage = await Image.findByPk(imgId);
  if (!getImage) {
    console.log("hey");
    res.status(404).send("image was not found");
  } else {
    res.send(getImage);
  }
});

module.exports = router;
