import { Command, User, MessageBuilder, Button, ButtonBuilder } from "botjs";

export class ButtonCommand {
  // On the /button command, send a message with a button
  @Command("button", "Sends a button!")
  buttonCommand(user: User) {
    return new MessageBuilder("Here is your button:").addButton(
      new ButtonBuilder("Click me!", "button")
    );
  }

  // When the button is clicked, send a message
  @Button("button")
  button(user: User) {
    return new MessageBuilder("You clicked the button!");
  }
}
