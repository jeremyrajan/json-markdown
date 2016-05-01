#!/usr/bin/env node
'use strict';
const argv = require('yargs').argv;
const process = require('../src/index');
const path = require('path');
let writeFile = true;

if (argv._.length === 0) {
  errHandler('No arguments, exiting!', 'err');
}

// json-markdown <input> <output> --w=true/false (By default its true)
const file = path.resolve(argv._[0]); // assign the argument as file and resolve absolute path
const outputFile = !!argv._[1] ? path.resolve(argv._[1]) : null; // take the output from args or get it from base filename
if (!!argv.w) {
  writeFile = JSON.parse(argv.w);
}

process(file, outputFile, writeFile, (err, result) => {
  if (!writeFile) {
    if (err) return err;
    console.log(result);
  }
});
