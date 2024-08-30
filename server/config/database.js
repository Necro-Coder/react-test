import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('react', 'react', 'react', { // database, username, password
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log // set to console.log to see the raw SQL queries
});

export default { sequelize };