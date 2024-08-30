import express from 'express';
const userRouter = express.Router();
import UserControllerDefault from '../controllers/UserController.js';
const UserController = UserControllerDefault.UserController;
const userController = new UserController();
import { ROUTES } from '../../routes/api/api.js';


userRouter.post(ROUTES.API_USERS, (req, res) => userController.create(req, res));
userRouter.get(ROUTES.API_USERS + ':id', (req, res) => userController.read(req, res));
userRouter.get(ROUTES.API_USERS, (req, res) => userController.read(req, res));
userRouter.put(ROUTES.API_USERS + ':id', (req, res) => userController.update(req, res));
userRouter.delete( ROUTES.API_USERS + ':id', (req, res) => userController.delete(req, res));

export default {
    userRouter
}