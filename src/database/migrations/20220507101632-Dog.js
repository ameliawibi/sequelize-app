export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Dogs", "UserId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Dogs", "UserId"); // logic for reverting the changes
  },
};
