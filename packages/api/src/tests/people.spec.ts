import request from 'supertest';
import App from '../app';
import { PeopleRoute } from '../components/people/people.route';

describe('Testing Company', () => {
    describe('[GET] /company', () => {
        it('response statusCode 400', () => {
            const peopleRoute = new PeopleRoute();
            const app = new App(3000, [peopleRoute]);

            return request(app.getServer())
                .get(`${peopleRoute.path}`)
                .expect(400);
        });

        // it('response statusCode 200', () => {
        //     const peopleRoute = new PeopleRoute();
        //     const app = new App(3000, [peopleRoute]);

        //     return request(app.getServer())
        //         .get(`${peopleRoute.path}`)
        //         .query({ category: 'education' })
        //         .expect(200)
        //         .expect([]);
        // });

        it('response statusCode 404', () => {
            const peopleRoute = new PeopleRoute();
            const app = new App(3000, [peopleRoute]);

            return request(app.getServer())
                .get(`${peopleRoute.path}`)
                .query({ category: 'fjhdkshfksfhdsjfhdsjkfsd' })
                .expect(404);
        });
    });
});
