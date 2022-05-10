import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*this.belongsTo(models.Users, {
        foreignKey: "UserId",
      });*/
    }
  }
  Dog.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      age: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Dog",
      tableName: "Dogs",
    }
  );
  return Dog;
};
