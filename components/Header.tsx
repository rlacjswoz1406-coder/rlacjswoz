'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '홈', href: '/' },
    { name: '게임', href: '#' },
    { name: '방명록', href: '#guestbook' },
    { name: '수업도구', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 서비스 로고 */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <BookOpen size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">민호쌤 수학교실</span>
          </Link>
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <button className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-all">
            시작하기
          </button>
        </nav>

        {/* 모바일 메뉴 버튼 및 로그인 */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            로그인
          </button>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 네비게이션 */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <button className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-center text-base font-semibold text-white">
              시작하기
            </button>
            <button className="w-full rounded-lg border border-slate-200 px-4 py-3 text-center text-base font-semibold text-slate-600 hover:bg-slate-50">
              로그인
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
