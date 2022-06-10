import { AppDataSource, People } from '../../lib/database';
import { category, data } from './people.dto';

export class PeopleService {
    public async getByCategoryAndCount(column: category): Promise<data[]> {
        return AppDataSource.manager
            .createQueryBuilder(People, 'people')
            .select('people.' + column + ' AS value')
            .addSelect('COUNT(*) AS count')
            .addSelect('round(AVG(people.age), 1) AS average_age')
            .groupBy('people.' + column + '')
            .orderBy('count', 'DESC')
            .getRawMany();
    }

    public async getCategory(): Promise<category[]> {
        return AppDataSource.getMetadata(People)
            .columns.map((column) => column.databaseName)
            .slice(1);
    }
}
