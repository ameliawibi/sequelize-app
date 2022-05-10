"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John",
          phone: "9999",
          password: "password",
          status: "new",
          last_login_at: new Date(),
          last_ip_address: "localhost",
          email: "johnDoe@test.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", [
      {
        name: "John",
      },
    ]);
  },
};
