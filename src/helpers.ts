import { Client } from "discord.js";

export const fetchGuilds = async (client: Client) => {
  return client.guilds.fetch();
};