import React from 'react';
import Hero from '@/components/Hero';
import { Book, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* 메인 히어로 섹션 */}
      <Hero />

      {/* 특징 소개 섹션 (Placeholder) */}
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

            {/* 여기에 새로운 기능 카드를 추가하세요 */}
          </div>
        </div>
      </section>

      {/* 여기에 새로운 섹션(예: 이용 후기, 가격 정책 등)을 추가하세요 */}
      
      {/* CTA 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative">
            {/* 장식용 원 */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-50" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              지금 바로 교육 혁신을 시작하세요
            </h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              더 나은 교육 환경을 만들기 위한 첫걸음, EduApp과 함께라면 어렵지 않습니다.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* 여기에 새로운 기능을 위한 버튼을 추가하세요 */}
              <button 
                type="button"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all active:scale-95"
              >
                게임 시작하기
              </button>
              
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-blue-600">
                더 알아보기 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* 배경 장식 요소 (선택사항) */}
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </section>

      {/* 여기에 새로운 섹션(예: 특징 소개, 게임 목록 등)을 추가하세요 */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 border-t">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* 기능 플레이스홀더 1 */}
          <div className="rounded-2xl border p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">기능 추가 대기 중</h3>
            <p className="text-gray-600">여기에 새로운 수학 게임이나 교육 컨텐츠를 추가할 수 있습니다.</p>
          </div>

          {/* 여기에 추가 카드 컴포넌트를 작성하세요 */}
        </div>
      </section>
    </div>
  );
}
