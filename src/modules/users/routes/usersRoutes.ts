import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from '../Controllers/UsersController';
import isAutenticated from '@shared/http/middlewares/isAutenticated';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', isAutenticated, usersController.index);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

export default usersRouter;
