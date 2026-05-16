import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* 로고 및 설명 */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-slate-900">EduApp</h2>
            <p className="mt-2 text-sm text-slate-500">
              미래를 만드는 교육용 웹앱 솔루션
            </p>
          </div>

          {/* 여기에 새로운 링크 그룹을 추가하세요 */}

          {/* SNS 및 연락처 */}
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} EduApp. All rights reserved.
          </p>
            <a href="#" className="hover:text-blue-600 transition-colors">개인정보처리방침</a>
            {/* 여기에 새로운 푸터 링크를 추가하세요 */}
          </div>
        </div>
      </div>
    </footer>
  );
}
