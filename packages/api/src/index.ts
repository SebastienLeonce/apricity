import App from './app';
import { PeopleRoute } from './components/people/people.route';

const PORT = parseInt(process.env.PORT || '3001');
const app = new App(PORT, [new PeopleRoute()]);

app.listen();
