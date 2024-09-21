const { HtmlTelegramBot, userInfoToString } = require("./bot");
const ChatGptService = require("./gpt");

class MyTelegramBot extends HtmlTelegramBot {
  constructor(token) {
    super(token);
  }

  async hello(msg) {
    const text = msg.text;
    await this.sendText("<b>Привет</b>");
    await this.sendText("<i>Привет</i>");
    await this.sendText("Вы писали " + text);
    await this.sendText(`Вы писали: ${text}`);
  }
}

const bot = new MyTelegramBot("7516598346:AAHX2pT5KBrl-peTqRJbxq4o9WTli3QO4Gg");
bot.onTextMessage(bot.hello);
