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

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});
