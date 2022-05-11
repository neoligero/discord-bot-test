import dotenv from 'dotenv';
dotenv.config();
const { TOKEN, CLIENT_ID, PORT } = process.env;

if (
  !TOKEN ||
  !CLIENT_ID ||
  !PORT
) {
  throw new Error('Missing env vars');
}

const config: Record<string, string> = {
  TOKEN,
  CLIENT_ID,
  PORT,
}

export default config;