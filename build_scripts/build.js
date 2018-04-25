import webpack from "webpack";
import chalk from 'chalk';
import webpackConfig from '../webpack.config.prod';

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log(chalk.blue("Generating minified bundle for production. This will take a moment..."));

webpack(webpackConfig).run((error, stats) => {
    if (error) {
        console.log(chalk.red(error));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings:');
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${stats}`);

    console.log(chalk.green('App has been build for production and written to /dist'));

    return 0;
});
