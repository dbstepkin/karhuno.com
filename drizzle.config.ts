import 'dotenv/config';

export default {
  out: './drizzle',
  schema: './src/db/schema.ts',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};
