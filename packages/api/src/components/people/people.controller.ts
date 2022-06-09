import { NextFunction, Request, Response } from 'express';
import { PeopleService } from './people.service';

export class PeopleController {
    private peopleService = new PeopleService();

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { category } = req.query as { category: string };

            if (category) {
                res.status(200).json(
                    await this.peopleService.getByCategoryAndCount(category)
                );
            } else {
                next('ERRRROOORRRR');
            }
        } catch (error) {
            next(error);
        }
    };
}

export default PeopleController;
