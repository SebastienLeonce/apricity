import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './lib/database';

class App {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.loadMiddlewares();
        this.loadDataBase();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    public getServer() {
        return this.app;
    }

    private loadMiddlewares() {
        this.app.use(express.json());
    }

    private loadDataBase() {
        AppDataSource.initialize()
            .then(() => {
                console.log('Database initialized');
            })
            .catch((error: Error) => {
                console.warn('Database initialization failed');
                console.error(error);
            });
    }
}

export default App;
