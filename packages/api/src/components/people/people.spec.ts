import { AppDataSource } from '../../lib/database';
import { PeopleService } from './people.service';

const peopleService = new PeopleService();

describe('PeopleService', () => {
    beforeAll(async () => {
        await AppDataSource.initialize();
    });

    describe('getCategory', () => {
        it('should return the columns name', async () => {
            const categories = await peopleService.getCategory();

            expect(categories).toBeInstanceOf(Array);
            expect(categories.length).toBeGreaterThan(0);
            expect(categories.length).toEqual(new Set(categories).size);
        });
    });

    describe('getByCategoryAndCount', () => {
        it('should return data', async () => {
            const categories = await peopleService.getCategory();
            const data = await peopleService.getByCategoryAndCount(
                categories[0]
            );

            expect(data.length).toBeGreaterThan(0);
            expect(data[0]).toHaveProperty('value');
            expect(data[0]).toHaveProperty('count');
            expect(data[0]).toHaveProperty('average_age');
        });
    });
});
