import { dirname, isESM } from "@discordx/importer";
import { BotManager, Platform } from "botjs";
import "dotenv/config";

const manager = new BotManager();

// Register your bots and their tokens here
manager.create(process.env.DISCORD_TOKEN!, Platform.Discord);
manager.create(process.env.TELEGRAM_TOKEN!, Platform.Telegram);

// Load all files in this folder
const folder = isESM() ? dirname(import.meta.url) : __dirname;

// Start the bot
if (process.env.BOTJS_WATCH === "true") {
  manager.startDev(folder);
} else {
  manager.start().then(() => {
    manager.loadFiles(folder).then(() => {});
  });
}
