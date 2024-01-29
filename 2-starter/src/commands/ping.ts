import { Command, MessageBuilder } from "@michelo11/botjs";

export class Ping {
  // When someone sends the /ping command, send a pong message
  @Command("ping", "Send pong!")
  ping() {
    return new MessageBuilder("pong");
  }
}
