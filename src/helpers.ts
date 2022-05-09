import { AnyChannel, Client, Guild, GuildMember, OAuth2Guild, RoleResolvable, TextChannel } from "discord.js";

export const getGuilds = async (client: Client): Promise<Map<string, Guild>> => {
  return client.guilds.cache;
};

export const getChannels = async (client: Client): Promise<Map<string, AnyChannel>> => {
  return client.channels.cache;
};

export const getMembers = async (client: Client, guildId: string): Promise<Map<string, GuildMember>> => {
  const guild: Guild = await client.guilds.fetch(guildId);
  return guild.members.fetch();
};

export const printChannels = async (client: Client) => {
  const cresult: Map<string, AnyChannel> = await getChannels(client);
  cresult.forEach(channel => console.log((channel as TextChannel).name));
}

export const printGuilds = async (client: Client) => {
  const gresult: Map<string, Guild> = await getGuilds(client);
  gresult.forEach(guild => console.log(guild.id));
}

export const printMembers = async (client: Client, guildId: string) => {
  const guild: Guild = await client.guilds.fetch(guildId);
  const members = await guild.members.fetch();
  members.forEach((member) => {
    console.log(member.user.username);
  })
}

export const addRole = async (client: Client, guildId: string, username: string, rolename: string) => {
  const guild: Guild = await client.guilds.fetch(guildId);
  const role = guild.roles.cache.find(role => role.name == rolename);

  if (!role) {
    throw Error('No role');
  }

  const members: Map<string, GuildMember> = await getMembers(client, guild.id);
  members.forEach((member) => {
    if (member.user.username === username) {
      member.roles.add(role as RoleResolvable)
    }
  })
}