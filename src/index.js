import express from "express";

import middlewaresConfig from "./config/middlewares";
import "./config/db";
import { CustomerRoutes, ProductRoutes } from "./modules";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser({ limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "10mb",
    parameterLimit: 50000
  })
);

middlewaresConfig(app);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/api/v1/customers", CustomerRoutes);
app.use("/api/v1/products", ProductRoutes);

app.listen(process.env.PORT || 3000, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listen on port`, process.env.PORT || 3000);
  }
});
