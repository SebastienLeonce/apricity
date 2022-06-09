import { IService } from '../../interfaces/service.interface';
import { AppDataSource, People } from '../../lib/database';

export class PeopleService implements IService<People> {
    public async getByCategoryAndCount(column: string): Promise<People[]> {
        return AppDataSource.manager
            .createQueryBuilder(People, 'people')
            .select('people.' + column + ' AS value')
            .addSelect('COUNT(*) AS count')
            .addSelect('AVG(people.age) AS average_age')
            .groupBy('people.' + column + '')
            .orderBy('count', 'DESC')
            .getRawMany();
    }
}
