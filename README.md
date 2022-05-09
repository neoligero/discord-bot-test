# discord-bot-test

## Prerrequisites

- The bot needs to be verified to do somethings like manage GuildMembers.

## Walkthrough
### Give bot permissions to the bot
https://discord.com/api/oauth2/authorize?client_id=968875767922573312&permissions=8&scope=bot%20applications.commands

### Give to the user
If you want to be able to claim invites and special offers from your streamers

https://discord.com/oauth2/authorize?client_id=836232765942923305&response_type=code&redirect_uri=https%3a%2f%2fko-fi.com/Discord/IdentifyAuthResponse&scope=identify%20guilds%20guilds.join

## Tips

- The bot needs to be promoted to a role higher than theirs for make it work

- Some intents are secured and need to be specifically approved in the bot configuration section until the bot is fully verified.
https://discordpy.readthedocs.io/en/stable/intents.html

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