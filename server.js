const express = require("express");
const app = express();
const restaurantRouter = require("./routers/restaurants");
const port = 3000;
app.use("/restaurants", restaurantRouter);
app.use(express.json());

app.listen(port, () => {
  // sequelize.sync();
  console.log("Your server is listening on port " + port);
});

module.exports = { app, restaurantRouter };
