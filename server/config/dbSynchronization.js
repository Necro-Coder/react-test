import sequelize from "./database.js";
import * as models from '../models/models.js';

// const sequelizeObj = sequelize.default.sequelize;

const syncDatabase = async () => {
    try {
        // Sync all models with database
        await sequelize.sequelize.sync({ alter: true });
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

const syncDatabaseProvision = async () => {
    try {
        // Sync all models with database
        await sequelize.sequelize.sync({ force: true }); // Use { force: true } to drop all tables
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

export default { syncDatabase, syncDatabaseProvision };