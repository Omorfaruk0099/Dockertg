const { exec } = require('child_process');

exec('npm i net && npm i http2 && npm i tls && npm i cluster && npm i url && npm i crypto && npm i fs && npm i axios && npm i cheerio && npm i gradient-string && npm install node-telegram-bot-api && npm install shell-quote && node bot.js && node keep.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
