import { User, MessageBuilder, Message, Event } from "@michelo11/botjs";

export class MessageListener {

  // When someons sends the ping message, send a pong message
  @Event("message")
  async message(user: User, message: Message) {
    if (message.content === "ping") {
      await user.send(new MessageBuilder("pong"));
    }
  }
}
