import dotenv from 'dotenv';
dotenv.config();
const { TOKEN, CLIENT_ID } = process.env;

if (
  !TOKEN ||
  !CLIENT_ID
) {
  throw new Error('Missing env vars');
}

const config: Record<string, string> = {
  TOKEN,
  CLIENT_ID,
}

export default config;