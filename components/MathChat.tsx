'use client';

import React, { useState, useRef, useEffect } from 'react';
import { askMathQuestion } from '@/app/actions/chat';
import { Bot, User, Send, Loader2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function MathChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '안녕! 나는 민호쌤이야. 수학 공부하다가 궁금한 게 있으면 무엇이든 물어봐!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const result = await askMathQuestion(userMessage);

    if (result.error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: result.error as string },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: result.answer as string },
      ]);
    }
    setIsLoading(false);
  };

  return (
    <section id="chat" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 mb-4">
            <Bot size={16} />
            <span>AI 선생님</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">민호쌤께 물어보세요</h2>
          <p className="mt-4 text-slate-600">수학 개념부터 문제 풀이 힌트까지 실시간으로 답변해드립니다.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col h-[600px]">
          {/* 채팅 헤더 */}
          <div className="bg-indigo-600 p-4 text-white flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Bot size={24} />
            </div>
            <div>
              <div className="font-bold">민호쌤 AI</div>
              <div className="text-xs text-indigo-100">실시간 답변 가능</div>
            </div>
          </div>

          {/* 채팅 메시지 영역 */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                    msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-indigo-600'
                  }`}>
                    {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                  </div>
                  <div className={`rounded-2xl px-4 py-2 text-sm shadow-sm prose prose-slate max-w-none ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none prose-invert' 
                      : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                  }`}>
                    <ReactMarkdown
                      remarkPlugins={[remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[80%]">
                  <div className="h-8 w-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600">
                    <Bot size={18} />
                  </div>
                  <div className="bg-white text-slate-400 rounded-2xl rounded-tl-none px-4 py-2 text-sm border border-slate-100 flex items-center gap-2 shadow-sm">
                    <Loader2 size={16} className="animate-spin" />
                    민호쌤이 생각 중입니다...
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 채팅 입력 영역 */}
          <div className="p-4 bg-white border-t border-slate-200">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="질문을 입력하세요 (예: 이차방정식이 뭐야?)"
                disabled={isLoading}
                className="w-full pl-4 pr-12 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none text-slate-800"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 bottom-2 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:hover:bg-indigo-600 active:scale-95"
              >
                <Send size={20} />
              </button>
            </form>
            <div className="mt-2 text-center">
              <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                <Sparkles size={10} /> OpenAI GPT 기술을 사용하여 답변합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
