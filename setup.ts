import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

const TOKEN = process.env.TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const APPLICATION_ID = "828214275192389642";

if (!TOKEN) throw new Error("TOKEN is not defined");
if (!GUILD_ID) throw new Error("GUILD_ID is not defined");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "9" }).setToken(TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationGuildCommands(APPLICATION_ID, GUILD_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
