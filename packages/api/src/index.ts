import App from './app';
import { PeopleRoute } from './components/people/people.route';

const app = new App(3001, [new PeopleRoute()]);

app.listen();
