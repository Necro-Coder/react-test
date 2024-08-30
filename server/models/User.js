import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.sequelize.define('User', {
    // Attributes
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Additional options
    tableName: 'users',
    timestamps: true // Adds createdAt and updatedAt fields
});

export default User;
