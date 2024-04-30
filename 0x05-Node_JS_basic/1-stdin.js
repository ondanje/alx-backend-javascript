#!/usr/bin/node

const readline = require('readline');

const rline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');
rline.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rline.close();
});
rline.on('close', () => {
  console.log('This important software is now closing');
  rline.close();
});
