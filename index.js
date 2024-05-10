const { exec } = require('child_process');
const path = require('path');

const commands = [
  'npm i net',
  'npm i http2',
  'npm i tls',
  'npm i cluster',
  'npm i url',
  'npm i crypto',
  'npm i fs',
  'npm i axios',
  'npm i cheerio',
  'npm i gradient-string',
  'npm install node-telegram-bot-api',
  'npm install shell-quote',
];

// Assuming bot.js and keep.js are in the same directory as this script
const botPath = 'bot.js';
const keepPath = 'keep.js';

commands.push(`node ${botPath}`, `node ${keepPath}`);

function runCommands(commands) {
  if (commands.length === 0) {
    console.log('All commands executed successfully.');
    return;
  }

  const command = commands.shift();
  console.log(`Executing command: ${command}`);
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${command}`, error);
      return;
    }
    console.log(stdout);
    console.error(stderr);
    runCommands(commands);
  });
}

runCommands(commands);
    
