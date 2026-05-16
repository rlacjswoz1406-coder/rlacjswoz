import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Guestbook from '@/components/Guestbook';
import MathChat from '@/components/MathChat';
import { getMessages } from '@/app/actions/guestbook';
import { Book, Users, Zap } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const messages = await getMessages();

  return (
    <div className="bg-white">
      {/* 메인 히어로 섹션 */}
      <Hero />

      {/* 특징 소개 섹션 */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">제공하는 핵심 기능</h2>
            <p className="mt-4 text-slate-600">교육 서비스를 위한 필수 기능을 미리 확인해보세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 기능 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                <Book size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">맞춤형 강의</h3>
              <p className="text-slate-600 leading-relaxed">
                학생들의 수준에 맞는 맞춤형 교육 컨텐츠를 손쉽게 구성하고 배포할 수 있습니다.
              </p>
            </div>

            {/* 기능 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">학습자 관리</h3>
              <p className="text-slate-600 leading-relaxed">
                실시간으로 학생들의 진도율을 파악하고 효과적인 피드백을 주고받을 수 있습니다.
              </p>
            </div>

            {/* 기능 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">빠른 상호작용</h3>
              <p className="text-slate-600 leading-relaxed">
                퀴즈와 토론 기능을 통해 학습 효과를 극대화하고 참여도를 높일 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 방명록 섹션 */}
      <Guestbook messages={messages} />

      {/* AI 선생님 섹션 */}
      <MathChat />

      {/* CTA 섹션 */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-3xl p-8 md:p-16 text-center text-white relative z-10 overflow-hidden">
            {/* 장식용 배경 요소 */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-700 rounded-full opacity-30" />
            
            <div className="relative z-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                지금 바로 교육 혁신을 시작하세요
              </h2>
              <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
                더 나은 교육 환경을 만들기 위한 첫걸음, 민호쌤 수학교실과 함께라면 어렵지 않습니다.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all active:scale-95 shadow-lg">
                  무료로 시작하기
                </button>
                <Link href="#" className="bg-indigo-500/20 backdrop-blur-sm border border-indigo-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-500/40 transition-all active:scale-95">
                  데모 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
