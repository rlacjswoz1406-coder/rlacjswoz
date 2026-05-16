import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// 예시: 사용자 테이블 정의
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 방명록 메시지 테이블 정의
export const guestbookMessages = pgTable('guestbook_messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
