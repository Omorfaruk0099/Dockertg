FROM node:latest
RUN npm install
RUN npm i net && npm i http2 && npm i tls && npm i cluster && npm i url && npm i crypto && npm i fs && npm i axios && npm i cheerio && npm i gradient-string && npm install node-telegram-bot-api && npm install shell-quote
CMD ["node", "bot.js"]
