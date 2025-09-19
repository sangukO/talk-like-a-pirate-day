"use client";

import { useState, useEffect, useMemo } from "react";

const KO_MESSAGES = {
  PLACEHOLDERS: [
    "여기에 문장을 입력하시오, 동료!",
    "문장을 입력하게나!",
    "자, 이제 말을 해보게나!",
    "무슨 말을 하고 싶은가, 친구여?",
    "이제 네 차례다, 선원아!",
  ],
  EMPTY_INPUT: "번역할 내용을 입력하시오, 이 게으른 선원아!",
  LOADING: "번역 중... Arrr!",
  TRANSLATE_BUTTON: "해적이 되어라!",
  TRANSLATED_TITLE: "해적의 말로 바꾸면!",
  ERROR: "이런! 풍랑을 만났소. 번역에 실패했다오.",
  SERVER_ERROR: "배에 문제가 생겼다! 서버가 응답하지 않소.",
};

const EN_MESSAGES = {
  PLACEHOLDERS: [
    "Here, enter a sentence, matey!",
    "Enter a sentence, ye scallywag!",
    "Now, speak up, ye landlubber!",
    "What be ye wantin' to say, friend?",
    "Now, it's yer turn, matey!",
    "What be on yer mind, bucko?",
  ],
  EMPTY_INPUT: "Arrr! Ye need to enter somethin' to translate, ye lazy sailor!",
  LOADING: "Chartin' the course...",
  TRANSLATE_BUTTON: "Make it Pirate!",
  TRANSLATED_TITLE: "Here Be Yer Words!",
  ERROR: "Blimey! We've hit rough seas. Translation failed.",
  SERVER_ERROR:
    "Arrr! There be a problem with the ship! The server be not respondin'.",
};

export default function HomePage() {
  const [language, setLanguage] = useState("ko");
  const MESSAGES = language === "ko" ? KO_MESSAGES : EN_MESSAGES;
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTooltipHover, setIsTooltipHover] = useState(false);

  const randomPlaceholder = useMemo(() => {
    const randomIndex = Math.floor(
      Math.random() * MESSAGES.PLACEHOLDERS.length
    );
    return MESSAGES.PLACEHOLDERS[randomIndex];
  }, [language]);

  const handleLanguageToggle = () => {
    setLanguage((prevLang) => (prevLang === "ko" ? "en" : "ko"));
  };

  const handleTranslate = async () => {
    if (!text.trim()) {
      setTranslation(MESSAGES.EMPTY_INPUT);
      return;
    }

    setIsLoading(true);
    setTranslation(""); // 로딩 시작 시 이전 번역 결과 초기화

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(MESSAGES.SERVER_ERROR);
      }

      const data = await response.json();
      setTranslation(data.translation || MESSAGES.ERROR);
    } catch (error) {
      console.error("번역 중 오류 발생:", error);
      setTranslation(MESSAGES.ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col flex-grow items-center justify-center bg-[#F3EAC5] text-[#4A2C2A] p-4 font-serif">
      <div className="flex flex-col w-full max-w-2xl text-center gap-6">
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setLanguage("ko")}
            className={`px-4 py-2 rounded-lg transition-all ${
              language === "ko"
                ? "bg-[#8B4513] text-white shadow-lg"
                : "bg-[#D1C6A4] text-[#6B5B3B] hover:bg-opacity-80"
            }`}
          >
            한국어
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 rounded-lg transition-all ${
              language === "en"
                ? "bg-[#8B4513] text-white shadow-lg"
                : "bg-[#D1C6A4] text-[#6B5B3B] hover:bg-opacity-80"
            }`}
          >
            English
          </button>
        </div>
        <header className="relative flex w-full">
          <div className="flex flex-1 justify-center">
            <h1 className="title-en text-5xl font-bold">
              Talk Like a Pirate Day
            </h1>
          </div>

          <img
            src={"/assets/Tooltip.png"}
            className="absolute right-0 top-0 w-[48px] h-[48px]"
            onMouseOver={() => {
              setIsTooltipHover(true);
            }}
            onMouseOut={() => {
              setIsTooltipHover(false);
            }}
          ></img>

          {isTooltipHover && (
            <div className="absolute z-10 top-[-75%] left-[102%] w-max border-2 border-[#8B4513] rounded-lg p-4 bg-[#FFF8DC] whitespace-pre-wrap">
              {language === "ko"
                ? `구글 제미나이 API 무료 등급 사용 중
최대 분당 요청 수 - 15
최대 분당 입력 토큰 수 - 250,000
최대 일일 요청 수 - 1,000`
                : `Using Google Gemini API free tier
Requests Per Minute - 15
Tokens Per Minute - 250,000
Requests Per Day - 1,000`}
            </div>
          )}
        </header>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={randomPlaceholder}
          suppressHydrationWarning={true}
          disabled={isLoading}
          className="w-full h-40 p-4 bg-[#FFF8DC] border-2 border-[#8B4513] rounded-lg shadow-inner resize-none focus:ring-2 focus:ring-[#CD853F] focus:outline-none transition"
        />

        <button
          className="bg-[#CD853F] text-white px-8 py-3 rounded-lg text-xl font-bold shadow-md hover:bg-[#A0522D] transform hover:-translate-y-1 transition-all duration-200 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center min-w-[180px] min-h-[56px]"
          onClick={handleTranslate}
          disabled={isLoading}
        >
          {isLoading ? (
            // 로딩 중일 때 돌아가는 스핀 아이콘
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
          ) : (
            // 로딩 중이 아닐 때 번역하기 텍스트
            MESSAGES.TRANSLATE_BUTTON
          )}
        </button>

        {translation && (
          <section className="bg-[#FFF8DC] p-6 rounded-lg shadow-md border border-[#8B4513] ">
            <h2 className="text-2xl font-bold">{MESSAGES.TRANSLATED_TITLE}</h2>
            <p className="mt-4 text-lg whitespace-pre-wrap">{translation}</p>
          </section>
        )}
      </div>
    </main>
  );
}
