import { AnyChannel, Channel, Client, Guild, GuildMember, Intents, Interaction, Message, OAuth2Guild, Role, RoleResolvable, TextChannel } from 'discord.js';
import 'dotenv/config';
import {
  getGuilds,
  getChannels,
  printChannels,
  printGuilds,
  getMembers,
  printMembers,
  addRole
} from './helpers';

export const client: Client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.DIRECT_MESSAGES,
  ]
});

client.once('ready', async () => {
  console.log(`Logged in as ${ client.user?.tag }!`);
  client.user?.setActivity("testactivity", { type: "WATCHING" });

  // GUILDS
  // printGuilds(client);

  // CHANNELS
  // printChannels(client);

  // MEMBERS
  // printMembers(client, '946178193247838259');

});

client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

  if (interaction.commandName === "user") {
    if (!interaction.options.data[ 0 ]?.value) {
      await interaction.reply('User not found');
    }
    await addRole(client, interaction.guildId!, interaction.options.data[ 0 ].value as string, 'Soldado');
    await interaction.reply(`Role added to ${ interaction.options.data[ 0 ].value }`);
  }
});

client.on("messageCreate", async (message: Message) => {
  // Ignore any messages sent as direct messages.
  // The bot will only accept commands issued in a guild.
  if (!message.guild) {
    return;
  }

  if (message.content === "ping") {
    await message.reply("pong");
  }
});

client.on('channelCreate', async (channel: Channel) => {
  console.log((channel as TextChannel).name);
})

// Added to a server
client.on("guildCreate", guild => {
  console.log("Joined a new guild: " + guild.name);
})

// Removed from a server
client.on("guildDelete", guild => {
  console.log("Left a guild: " + guild.name);
})


client.login(process.env.TOKEN);
