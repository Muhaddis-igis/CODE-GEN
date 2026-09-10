import 'dotenv/config';
import postgres from '@prisma/orm-postgres/runtime';
import type { Contract } from './auth.d';
import contractJson from './auth.json' with { type: 'json' };

export const db = postgres<Contract>({
  contractJson,
  url: process.env['DATABASE_URL']!,
});
