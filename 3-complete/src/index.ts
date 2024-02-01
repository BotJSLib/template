import { dirname, isESM } from "@discordx/importer";
import { BotManager, Platform } from "@michelo11/botjs";
import "dotenv/config";

const manager = new BotManager();

// Register your bots and their tokens here
manager.create(process.env.DISCORD_TOKEN!, Platform.Discord);
manager.create(process.env.TELEGRAM_TOKEN!, Platform.Telegram);
manager.create(process.env.SLACK_TOKEN!, Platform.Slack, {
  signingSecret: process.env.SLACK_SIGNING_SECRET!,
  appToken: process.env.SLACK_SOCKETS!,
  token: process.env.SLACK_TOKEN!,
  port: 3001,
});
manager.create(process.env.WHATSAPP_TOKEN!, Platform.Whatsapp, {
  sid: process.env.TWILIO_SID!,
  port: 3000,
  number: process.env.WHATSAPP_NUMBER!,
});
manager.create(process.env.TWITCH_ACCESS_TOKEN!, Platform.Twitch, {
  channels: [process.env.TWITCH_CHANNEL!],
  username: process.env.TWITCH_CHANNEL!,
  clientId: process.env.TWITCH_CLIENT_ID!,
})

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
