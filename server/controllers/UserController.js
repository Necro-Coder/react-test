import UserDefault from '../models/models.js';
import Controllers from './Controllers.js';

const User = UserDefault.User;

class UserController extends Controllers.Controllers {
    async create(req, res){
        try {
            console.log(req.body);
            // const user = await User.create(req.body);
            // res.status(201).json(user);
            res.status(201).json({ message: 'User created' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async read(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error retrieving user' });
        }
    }

    async update(req, res) {
        try {
            const [updated] = await User.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedUser = await User.findByPk(req.params.id);
                res.json(updatedUser);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error updating user' });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await User.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error deleting user' });
        }
    }
}

export default { UserController };
