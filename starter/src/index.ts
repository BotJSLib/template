import { Platform } from "botjs";
import BotManager from "botjs/src/manager";
import { Command } from "botjs/src/objects/command";
import "dotenv/config";

const manager = new BotManager();

manager.create(process.env.DISCORD_TOKEN!, Platform.Discord);
manager.create(process.env.TELEGRAM_TOKEN!, Platform.Telegram);

manager.start().then(() => {
  manager.bots.forEach((bot) => {
    bot.registerCommand(
      new Command(
        "ping",
        "Example command",
        (user) => {
          return "Pong!";
        },
        []
      )
    );
    bot.loadCommands();
  });
});