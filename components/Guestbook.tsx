'use client';

import React, { useRef } from 'react';
import { addMessage } from '@/app/actions/guestbook';
import { MessageSquare, Send, User } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  content: string;
  createdAt: Date;
}

export default function Guestbook({ messages }: { messages: Message[] }) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="guestbook" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 mb-4">
            <MessageSquare size={16} />
            <span>방명록</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">민호쌤께 한마디 남겨주세요</h2>
          <p className="mt-4 text-slate-600">여러분의 소중한 의견과 응원이 큰 힘이 됩니다.</p>
        </div>

        {/* 메시지 작성 폼 */}
        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-12 border border-slate-100">
          <form
            ref={formRef}
            action={async (formData) => {
              await addMessage(formData);
              formRef.current?.reset();
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700 mb-1">이름</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    <User size={16} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="홍길동"
                    className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-slate-700 mb-1">메시지</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="content"
                    required
                    placeholder="수업 너무 재미있어요!"
                    className="block w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
                  >
                    <span>등록</span>
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* 메시지 목록 */}
        <div className="space-y-6">
          {messages.length === 0 ? (
            <div className="text-center py-12 text-slate-400 border-2 border-dashed border-slate-100 rounded-2xl">
              아직 남겨진 메시지가 없습니다. 첫 번째 주인공이 되어보세요!
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                      {msg.name.charAt(0)}
                    </div>
                    <span className="font-bold text-slate-900">{msg.name}</span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {new Date(msg.createdAt).toLocaleDateString('ko-KR')}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed pl-10">
                  {msg.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
