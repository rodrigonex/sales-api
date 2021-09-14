import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserServices';
import ListUserService from '../services/ListUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUserService();
    console.log(request.user.id);
    const users = await listUsers.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const CreateUser = new CreateUserService();

    const user = await CreateUser.execute({ name, email, password });

    return response.json(user);
  }
}
