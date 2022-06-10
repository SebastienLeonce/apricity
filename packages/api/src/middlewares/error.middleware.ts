import { NextFunction, Response } from 'express';
import { HttpException } from '../exceptions/HttpException';

export const ErrorMiddleware = () => {
    return (
        error: HttpException,
        _req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const status: number = error.status || 500;
            const message: string =
                error.message || error.stack || 'Something went wrong';

            res.status(status).json({ message });
        } catch (error) {
            next(error);
        }
    };
};
