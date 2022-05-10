import { Op } from "sequelize";
import model from "../models";

//console.log(model.Users);

export default {
  async getDogsOfUser(req, res) {
    try {
      const users = await model.Users.findAll({
        where: {
          id: 1,
        },
        include: {
          model: model.Dog,
        },
      });
      if (users.length !== 0) {
        res.json({
          status: "OK",
          messages: "",
          data: users,
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
  async signUp(req, res) {
    const { email, password, name, phone } = req.body;
    try {
      const user = await model.Users.findOne({
        where: { [Op.or]: [{ phone }, { email }] },
      });
      if (user) {
        return res
          .status(422)
          .send({ message: "User with that email or phone already exists" });
      }

      await model.Users.create({
        name,
        email,
        password,
        phone,
      });
      return res.status(201).send({ message: "Account created successfully" });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message:
          "Could not perform operation at this time, kindly try again later.",
      });
    }
  },
  async register(req, res) {
    //res.status(200).send({ message: "Testing register" });
    try {
      const users = await model.Users.findAll({});
      if (users.length !== 0) {
        res.json({
          status: "OK",
          messages: "",
          data: users,
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
