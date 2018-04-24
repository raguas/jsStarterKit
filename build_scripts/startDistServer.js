import express from 'express';
import compression from 'compression';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (request, response) => {
    response.json(
        [
            { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
            { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
            { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
        ]
    );
});

app.listen(port, (error) => {
    if (error) {
        console.log(error); // eslint-disable-line no-console
    } else {
        open('http://localhost:' + port);
    }
});
