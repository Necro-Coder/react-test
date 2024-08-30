import express from 'express';
const userRouter = express.Router();

import UserControllerDefault from '../controllers/UserController.js';
const UserController = UserControllerDefault.UserController;
const userController = new UserController();
import { ROUTES } from '../../routes/api/api.js';

userRouter.route(ROUTES.API_USERS)
  .post((req, res) => userController.create(req, res))
  .get((req, res) => userController.read(req, res));

userRouter.route(ROUTES.API_USERS + ':id')
  .get((req, res) => userController.read(req, res))
  .put((req, res) => userController.update(req, res))
  .delete((req, res) => userController.delete(req, res));

export default userRouter;
