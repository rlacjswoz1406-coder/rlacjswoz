'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '홈', href: '/' },
    { name: '강의', href: '#' },
    { name: '커뮤니티', href: '#' },
    { name: '문의하기', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 서비스 로고 */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <BookOpen size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">EduApp</span>
        </Link>

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
          {/* 여기에 새로운 네비게이션 메뉴를 추가하세요 */}
          <button className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-all">
            시작하기
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}
