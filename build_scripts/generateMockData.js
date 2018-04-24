import jsf from 'json-schema-faker';
import fsPath from 'fs-path';
import chalk from 'chalk';
import { schema } from './mockDataSchema';

/* eslint-disable no-console */

const json = JSON.stringify(jsf(schema));

fsPath.writeFile("./test_data/api/db.json", json, (error) => {
    if (error) {
        console.log(chalk.red(error));
    } else {
        console.log(chalk.green("Mock data generated"));
    }
});
