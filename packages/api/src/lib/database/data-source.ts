import { DataSource } from 'typeorm';
import { People } from './entities/people.entity';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'us-census.db',
    entities: [People],
});
