'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function askMathQuestion(question: string) {
  if (!question) return { error: '질문을 입력해주세요.' };

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // gpt-4o-mini 등으로 변경 가능
      messages: [
        {
          role: 'system',
          content: '너는 "민호쌤 수학교실"의 친절하고 유능한 수학 선생님인 "민호쌤"이야. 학생들의 수학 질문에 쉽고 재미있게 답변해줘. 수식이나 기호는 반드시 LaTeX 문법을 사용해서 $수식$ (인라인) 또는 $$수식$$ (블록) 형태로 작성해줘. 초중고 학생 수준에 맞춰서 설명해주고, 격려의 말도 잊지 마.',
        },
        {
          role: 'user',
          content: question,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return { answer: response.choices[0].message.content };
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return { error: '죄송해요, 잠시 문제가 생겨서 답변을 드릴 수 없어요. 나중에 다시 물어봐주세요!' };
  }
}
