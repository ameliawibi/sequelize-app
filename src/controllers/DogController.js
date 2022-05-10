import model from "../models";

export default {
  async deleteDog(req, res) {
    try {
      const dogs = await model.Dog.destroy({
        where: {
          id: req.params.index,
        },
      });
      res.json({
        status: "Deleted",
        messages: "",
        data: dogs,
      });
    } catch (err) {
      res.json({
        status: "ERROR",
        messages: err.message,
        data: {},
      });
    }
  },
  async updateDog(req, res) {
    try {
      const dogs = await model.Dog.update(
        {
          name: "Frankie",
          age: 5.05,
        },
        {
          where: {
            id: req.params.index,
          },
        }
      );
      res.json({
        status: "OK",
        messages: "",
        data: dogs,
      });
    } catch (err) {
      res.json({
        status: "ERROR",
        messages: err.message,
        data: {},
      });
    }
  },
  async findDog(req, res) {
    try {
      const index = req.params.index;
      const dogs = await model.Dog.findByPk(index);
      if (dogs.length !== 0) {
        res.json({
          status: "OK",
          messages: "",
          data: dogs,
        });
      } else {
        res.json({
          status: "ERROR",
          messages: "EMPTY",
          data: {},
        });
      }
    } catch (err) {
      res.json({
        status: "ERROR",
        messages: err.message,
        data: {},
      });
    }
  },
  async buildDog(req, res) {
    try {
      let dog = model.Dog.build({
        name: "Frankie",
        description: "My dog",
        age: 5.65,
        UserId: 1,
      });
      dog.save().then((persistedDog) => console.log(persistedDog));
      const dogs = await model.Dog.findAll({});
      if (dogs.length !== 0) {
        res.json({
          status: "OK",
          messages: "",
          data: dogs,
        });
      } else {
        res.json({
          status: "ERROR",
          messages: "EMPTY",
          data: {},
        });
      }
    } catch (err) {
      res.json({
        status: "ERROR",
        messages: err.message,
        data: {},
      });
    }
  },
};
