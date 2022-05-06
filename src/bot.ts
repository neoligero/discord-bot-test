import { Client, Intents } from 'discord.js';
import 'dotenv/config';

export const client: Client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES ]
});

client.once('ready', () => {
  console.log(`Logged in as ${ client.user?.tag }!`);

  client.user?.setActivity("testactivity", { type: "WATCHING" });
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.on("messageCreate", async message => {
  if (message.content === "ping") {
    await message.reply("pong");
  }
});


client.login(process.env.TOKEN);
