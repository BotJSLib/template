import { Command } from "botjs/src/decorators/command.js";

export class Ping {
  @Command("ping", "Pong!")
  ping() {
    return "Pong!";
  }
}