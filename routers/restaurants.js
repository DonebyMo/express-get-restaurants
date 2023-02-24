const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant");
const { check, validationResult } = require("express-validator");
router.use(express.json());
//TODO: Create your GET Request Route Below:
router.get("/", async (request, response, next) => {
  let restaurants = await Restaurant.findAll();
  await response.json(restaurants);
  next();
});

//use express to handle a GET request to the endpoint
router.get("/:id", async (req, res) => {
  const restaurants = await Restaurant.findByPk(req.params.id);
  res.send(restaurants);
});

router.post(
  "/",
  [check("name").not().isEmpty()],
  [check("name").isLength({ min: 10, max: 30 })],
  [check("location").not().isEmpty()],
  [check("cuisine").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      const restaurant1 = await Restaurant.create(req.body);
      await res.send(restaurant1);
    }
  }
);

router.put("/:id", async (req, res) => {
  const restaurant2 = await Restaurant.update(
    { name: "Smokey Grill" },
    { where: { id: req.params.id } }
  );
  await res.send(restaurant2);
});

router.delete("/:id", async (req, res) => {
  await Restaurant.destroy({ where: { id: req.params.id }, force: true });
  await res.send("Successful DELETE Request made!");
});

module.exports = router;
