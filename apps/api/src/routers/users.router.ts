import { UserController } from '@/controllers/users.controller';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;
  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.post('/register', this.userController.Register)
  }
  getRouter(): Router {
    return this.router;
  }
}