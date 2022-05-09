import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import config from './config';

const GUILD_ID = '946178193247838259'; // Insurrectores
// const GUILD_ID = '973149157772623872'; // Neoligero

const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
  new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
  new SlashCommandBuilder().setName('user').setDescription('Replies with user info!')
    .addStringOption(option =>
      option.setName('username')
        .setDescription('The name of the user')
    ),
]
  .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(config.TOKEN);

// For an specific guild command
// rest.put(Routes.applicationGuildCommands(config.CLIENT_ID, GUILD_ID), { body: commands })
rest.put(Routes.applicationCommands(config.CLIENT_ID), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);