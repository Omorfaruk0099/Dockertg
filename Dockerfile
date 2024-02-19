FROM node:latest
RUN node-telegram-bot-api
CMD ["node", "bot.js"]
