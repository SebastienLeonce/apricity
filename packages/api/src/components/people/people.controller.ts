import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../../exceptions/HttpException';
import { PeopleService } from './people.service';

export class PeopleController {
    private peopleService = new PeopleService();

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { category } = req.query as { category: string };

            if (category) {
                console.log(category);
                res.status(200).json(
                    await this.peopleService.getByCategoryAndCount(category)
                );
            } else {
                next(new HttpException(400, 'Bad request'));
            }
        } catch (error) {
            next(new HttpException(404, 'Not found'));
        }
    };

    public getCategory = async (
        _req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(200).json(await this.peopleService.getCategory());
        } catch (error) {
            next(error);
        }
    };
}

export default PeopleController;
