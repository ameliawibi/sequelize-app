import express from "express";
import route from "./src/routes";
import methodOverride from "method-override";

const app = express();
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app);

const port = 5000;

app.listen(port, () => {
  console.log("App is now running at port ", port);
});
