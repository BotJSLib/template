import { Platform } from "botjs";
import BotManager from "botjs/src/manager";
import "dotenv/config";
import { dirname, isESM } from "@discordx/importer";
import MetadataStorage from "botjs/src/storage/metadata";

const manager = new BotManager();

manager.create(process.env.DISCORD_TOKEN!, Platform.Discord);
manager.create(process.env.TELEGRAM_TOKEN!, Platform.Telegram);

manager.start().then(() => {
  const folder = isESM() ? dirname(import.meta.url) : __dirname;
  manager.loadFiles(folder).then(() => {});
});
