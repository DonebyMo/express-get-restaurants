const express = require("express");
const app = express();
const { Restaurant } = require("./models/index");
const { sequelize } = require("./db");
const { response } = require("express");

//post request below
const port = 3000;
// app.post("/createRestaurasnt", async (request, response) => {
//   const restaurant1 = await Restaurant.create({
//     name: "cahpati",
//     location: "london",
//     cuisine: "African",
//   });
//   response.send(restaurant1);
// });

//TODO: Create your GET Request Route Below:
app.get("/restaurants", async (request, response) => {
  let restaurants = await Restaurant.findAll();

  await response.json(restaurants);
});

//use express to handle a GET request to the endpoint
app.get("/restaurants/:id", async (req, res) => {
  const restaurants = await Restaurant.findByPk(req.params.id);
  res.send(restaurants);
});

app.use(express.json());

app.post("/restaurants/:id", async (req, res) => {
  const restaurant1 = await Restaurant.create(req.body);
  await res.send(restaurant1);
});

app.put("/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.update(
    { name: "The best" },
    { where: { id: req.params.id } }
  );
  await res.send(restaurant);
});

app.delete("/restaurants/:id", async (req, res) => {
  await Restaurant.destroy({ where: { id: req.params.id }, force: true });
  await res.send("Successful DELETE Request made!");
});

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});
