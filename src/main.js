const {HtmlTelegramBot, userInfoToString} = require("./bot");
const ChatGptService = require("./gpt");

class MyTelegramBot extends HtmlTelegramBot {
    constructor(token) {
        super(token);
    }

    async hello(msg) {
      await this.sendText('Привет')
    }
}

const bot = new MyTelegramBot("7516598346:AAHX2pT5KBrl-peTqRJbxq4o9WTli3QO4Gg");
bot.onTextMessage(bot.hello)