import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';

console.log(chalk.green('Starting app in dev mode...')); // eslint-disable-line no-console

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../src/index.html'));
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
