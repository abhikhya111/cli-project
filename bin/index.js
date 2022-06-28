#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const axios = require("axios");

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

const greeting = `Hello, ${options.name}!`;

console.log(greeting);

// const greeting = chalk.white.bold("Hello!");

// const boxenOptions = {
//  padding: 1,
//  margin: 1,
//  borderStyle: "round",
//  borderColor: "green",
//  backgroundColor: "#FFC0CB"
// };
// const msgBox = boxen( greeting, boxenOptions );

// console.log(msgBox);

//https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
