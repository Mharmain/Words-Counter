#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log("\n");
console.log("=".repeat(90));
console.log(chalk.bold.cyanBright('\t \t Welcome to the \'Muhammad Harmain\' - Word Counter!'));
console.log("=".repeat(90));
console.log("\n");
let amswer = await inquirer.prompt([
    {
        name: 'Sentence',
        message: chalk.yellowBright('Enter a sentence to count the words in it: '),
        type: 'input'
    }
]);
let words = amswer.Sentence.trim().split(' ');
console.log("\n");
console.log("=".repeat(90));
console.log(chalk.green(`\t \t [${words}]`));
console.log("=".repeat(90));
console.log("\n");
console.log("=".repeat(90));
console.log(chalk.green(`\t \t The sentence has ${words.length} words.`));
console.log("=".repeat(90));
