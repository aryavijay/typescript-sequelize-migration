module.exports = {
    content: `'use strict';
    import {QueryInterface, DataTypes, Sequelize} from "sequelize";
    
    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up (queryInterface: QueryInterface, Sequelize: Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
      },
    
      async down (queryInterface: QueryInterface, Sequelize: Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
      }
    };`,
    createTableTemplate : `'use strict';
    import {QueryInterface, DataTypes, Sequelize} from "sequelize";

    /** @type {import('sequelize-cli').Migration} */
    const tableName = ""
    module.exports = {
      async up (queryInterface: QueryInterface, Sequelize: Sequelize) {
        const transaction =  await queryInterface.sequelize.transaction()
        try{
          await queryInterface.createTable(tableName,
              {},
              {
                engine: "INNODB",
                charset: "utf8mb4",
                transaction
              })
          await transaction.commit()
        }catch(err){
          console.log(err)
          await transaction.rollback()
        }
      },
    
      async down (queryInterface: QueryInterface, Sequelize: Sequelize) {
       await queryInterface.dropTable(tableName)
      }
    };`
}