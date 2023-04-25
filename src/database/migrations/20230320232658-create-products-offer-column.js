'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products', 'offer', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('products', 'offer')
  },
}
