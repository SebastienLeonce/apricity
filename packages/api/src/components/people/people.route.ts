import { Router } from 'express';
import { Route } from '../../interfaces/route.interface';
import { PeopleController } from './people.controller';

export class PeopleRoute implements Route {
    readonly path = '/people';
    readonly router = Router();

    private peopleController = new PeopleController();

    constructor() {
        this.loadRoutes();
    }

    private loadRoutes() {
        this.router.get('/', this.peopleController.getAll);
        this.router.get('/category', this.peopleController.getCategory);
    }
}
