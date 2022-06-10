import { IService } from '../../interfaces/service.interface';
import { AppDataSource, People } from '../../lib/database';

export class PeopleService implements IService<People> {
    public async getByCategoryAndCount(column: string): Promise<People[]> {
        return AppDataSource.manager
            .createQueryBuilder(People, 'people')
            .select('people.' + column + ' AS value')
            .addSelect('COUNT(*) AS count')
            .addSelect('round(AVG(people.age), 1) AS average_age')
            .groupBy('people.' + column + '')
            .orderBy('count', 'DESC')
            .getRawMany();
    }

    public async getCategory(): Promise<string[]> {
        return AppDataSource.getMetadata(People)
            .columns.map((column) => column.databaseName)
            .slice(1);
    }
}
