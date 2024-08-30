import UserDefault from '../models/models.js';
import Controllers from './Controllers.js';

const User = UserDefault.User;

class UserController extends Controllers.Controllers {
    
    async create(req, res) {
        try {
            console.log("Body:", req.body);
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            this.handleError(res, error);
        }
    }

    async read(req, res) {
        try {
            const { id } = req.params;
            const countUser = await User.count();

            if (countUser <= 0) {
                return res.status(404).json({ error: `No users found, the table '${User.tableName}' is empty` });
            }

            const user = id ? await User.findByPk(id) : await User.findAll();
            return user ? res.status(200).json(user) : res.status(404).json({ error: 'User not found' });

        } catch (error) {
            this.handleError(res, error, 'Error retrieving user');
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const [updated] = await User.update(req.body, { where: { id } });

            if (updated) {
                const updatedUser = await User.findByPk(id);
                return res.status(200).json(updatedUser);
            } 
            
            return res.status(404).json({ error: 'User not found' });
        } catch (error) {
            this.handleError(res, error, 'Error updating user');
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await User.destroy({ where: { id } });

            return deleted ? res.status(200).json({ message: 'User deleted successfully' }) : res.status(404).json({ error: 'User not found' });

        } catch (error) {
            this.handleError(res, error, 'Error deleting user');
        }
    }

    handleError(res, error, message = 'Internal server error') {
        console.error(message, error);
        res.status(500).json({ error: error.message || message });
    }
}

export default { UserController };
