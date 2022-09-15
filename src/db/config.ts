import { Sequelize } from 'sequelize';

const sequelize  = new Sequelize('sqlite::memory:', {
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
});

async function connection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connection()

module.exports = { sequelize };