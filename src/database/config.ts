
const { Sequelize } = require('sequelize');
const path = require('path');


export const db  = new Sequelize('sqlite::memory:', {
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
    logging: false
});

// async function connection() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// connection()
//  module.exports = {
//    sequelize, connection
// }
export default db;