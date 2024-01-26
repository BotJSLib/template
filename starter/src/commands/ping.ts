import { Command } from "botjs/src/decorators/command";

class Ping {
  @Command("ping", "Pong!")
  ping() {
    return "Pong!";
  }
}
