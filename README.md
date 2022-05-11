# discord-bot-test

## Prerrequisites

- The bot needs to be verified to do somethings like manage GuildMembers.

## Walkthrough

### Run the app
 - Go to https://discord.com/developers
 - After sign up, creates a new app and a bot.
 - Copy the CLIENT_ID and the TOKEN and paste it in the .env file.
 - yarn dev

### Give access to the bot to your channel
In the same developer portal you have a tool for generate this url, example:
https://discord.com/api/oauth2/authorize?client_id=968875767922573312&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&response_type=code&scope=bot%20identify%20applications.store.update
You just have to paste it into the explorer and follow the steps.

Response example:
http://localhost:3000/redirect?code=CJlXNpaQLb93HQqQcFPQhh4cBr5OWT&guild_id=973149157772623872&permissions=8
Now should save the guild_id for future interactions.

### Claim viewer permissions
If you want to be able to claim invites and special offers from your streamers
https://discord.com/oauth2/authorize?client_id=836232765942923305&response_type=code&redirect_uri=https%3a%2f%2fko-fi.com/Discord/IdentifyAuthResponse&scope=identify%20guilds%20guilds.join

## Tips
 - The bot needs to be promoted to a role higher than theirs for make it work
 - Some intents are secured and need to be specifically approved in the bot configuration section until the bot is fully verified. https://discordpy.readthedocs.io/en/stable/intents.html

## Bibliografia

### Oficial documentation
https://discord.com/developers/docs/intro
https://discord.js.org/#/docs/discord.js/stable/general/welcome
https://discordjs.guide/#before-you-begin

### Tutorials
https://thenextweb.com/news/build-discord-bot-in-under-60-minutes-syndication
https://www.toptal.com/chatbot/how-to-make-a-discord-bot
https://www.toptal.com/typescript/dependency-injection-discord-bot-tutorial

### Cache vs fetch
https://www.reddit.com/r/Discordjs/comments/slgr4v/how_do_cache_and_fetch_work_and_what_is_the/