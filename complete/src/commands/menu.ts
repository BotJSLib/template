import {
  Command,
  User,
  MessageBuilder,
  SelectMenuOption,
  SelectMenu,
} from "botjs";

export class MenuCommand {
  // On the /menu command, send a message with a select menu
  @Command("menu", "Sends the menu!")
  menuCommand(user: User) {
    return new MessageBuilder("Here is your menu:")
      .createSelectMenu("Select an option", "menu")
      .addOption(new SelectMenuOption("Option 1", "option1"));
  }

  // When the menu is clicked, send a message
  @SelectMenu("menu")
  menu(user: User, value: string) {
    return new MessageBuilder(`You selected ${value}!`);
  }
}
