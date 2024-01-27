import { Platform } from "botjs/src/bot.js";
import BotManager from "botjs/src/manager.js";
import { dirname, isESM } from "@discordx/importer";
import "dotenv/config";

const manager = new BotManager();

manager.create(process.env.DISCORD_TOKEN!, Platform.Discord);
manager.create(process.env.TELEGRAM_TOKEN!, Platform.Telegram);

const folder = isESM() ? dirname(import.meta.url) : __dirname;

if (process.env.BOTJS_WATCH === "true") {
  manager.startDev(folder);
} else {
  manager.start().then(() => {
    manager.loadFiles(folder).then(() => {});
  });
}
