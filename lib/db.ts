import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@/db/schema';

// Vercel 환경 변수 DATABASE_URL을 사용합니다.
const sql = neon(process.env.DATABASE_URL!);

// Drizzle 인스턴스를 생성하여 내보냅니다.
export const db = drizzle(sql, { schema });
