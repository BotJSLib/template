import { Event } from "botjs/src/decorators/event.js";
import { User } from "botjs/src/objects/user";

export class Message {
  @Event("message")
  async message(user: User, content: string) {
    if (content === "ping") {
      await user.send("Pong!");
    }
  }
}