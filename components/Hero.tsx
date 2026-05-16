'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      {/* 배경 장식 (Blob) */}
      <div className="absolute -top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-indigo-50 blur-3xl opacity-50" />
      <div className="absolute top-[20%] -left-[10%] h-[400px] w-[400px] rounded-full bg-blue-50 blur-3xl opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* 뱃지 */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600">
              <Sparkles size={16} />
              <span>새로운 학습의 시작</span>
            </div>
          </div>

          {/* 환영 문구 */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            나만의 <span className="text-indigo-600">교육용 웹앱</span> 만들기
          </h1>

          {/* 간단한 설명 */}
          <p className="mt-6 text-lg leading-8 text-slate-600">
            복잡한 설정 없이 바로 시작하세요. 선생님과 학생 모두를 위한 
            최고의 교육 플랫폼 뼈대를 제공합니다. 지금 바로 시작해 보세요.
          </p>

          {/* 가짜(Placeholder) 버튼 */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#guestbook" className="btn-primary flex items-center gap-2">
              방명록 남기기
              <ArrowRight size={18} />
            </Link>
            
            <button className="text-sm font-semibold leading-6 text-slate-900 hover:text-indigo-600 transition-colors">
              더 알아보기 <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
