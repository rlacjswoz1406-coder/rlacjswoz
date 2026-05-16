import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// 예시: 사용자 테이블 정의
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 여기에 새로운 테이블 스키마를 추가하세요.
