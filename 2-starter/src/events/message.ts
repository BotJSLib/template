import { User, MessageBuilder, Event } from "@michelo11/botjs";

export class Message {

  // When someons sends the ping message, send a pong message
  @Event("message")
  async message(user: User, content: string) {
    if (content === "ping") {
      await user.send(new MessageBuilder("pong"));
    }
  }
}
