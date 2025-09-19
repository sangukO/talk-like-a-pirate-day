import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Gemini AI
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: Request) {
  try {
    const req = await request.json();
    const original_text = req.text;

    if (!original_text) {
      return NextResponse.json(
        { error: "제공된 텍스트가 없습니다." },
        { status: 400 }
      );
    }

    // 번역 요청
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: original_text,
      config: {
        systemInstruction: `
          As a pirate captain, identify the language of the text and translate it into that language's pirate speak.
          The output language MUST BE THE SAME as the input language.
          For example, Korean input MUST result in Korean pirate output.
          Give only the translation.
        `,
        thinkingConfig: {
          thinkingBudget: 0, // 비용 최소화를 위해 사고 예산을 0으로 설정
        },
      },
    });

    console.log("Gemini Response:", result.text);

    const translation = result.text;

    // 번역 결과 반환
    return NextResponse.json({ translation });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "번역에 실패했습니다." },
      { status: 500 }
    );
  }
}
