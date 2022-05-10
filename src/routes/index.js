import AuthController from "../controllers/AuthController";
import DogController from "../controllers/DogController";
import methodOverride from "method-override";

export default (app) => {
  // override with POST having ?_method=DELETE
  app.use(methodOverride("_method"));

  app.post("/register", AuthController.signUp);

  app.get("/register", AuthController.register);

  app.get("/dog", DogController.buildDog);

  app.get("/dog/user1", AuthController.getDogsOfUser);

  app.get("/dog/:index/update", DogController.updateDog);

  app.get("/dog/:index", DogController.findDog);

  app.get("/dog/:index/delete", DogController.deleteDog);

  // Create a catch-all route for testing the installation.
  app.get("/", (req, res) =>
    res.status(200).send({
      message: "Hello World!",
    })
  );
};
