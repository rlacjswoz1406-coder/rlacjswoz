import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@/db/schema';

// Vercel 환경 변수 DATABASE_URL을 사용합니다.
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn('DATABASE_URL is not defined. Database operations will fail.');
}

const sql = neon(databaseUrl || '');

// Drizzle 인스턴스를 생성하여 내보냅니다.
export const db = drizzle(sql, { schema });
