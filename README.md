# 🏴‍☠️ 국제 해적처럼 말하기의 날: TLaPD

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/f5e5b577-9052-40b0-a4ac-a95c0639e011" alt="메인화면" width="400" />
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/720302a8-86fe-4768-b0a1-dbd9eb3ad500" alt="기능동작" width="400" />
      </td>
    </tr>
  </table>
</div>

29번째 **국제 해적처럼 말하기의 날**을 기념하여 만든 간단한 웹 애플리케이션입니다.<br/>
사용자가 입력한 문장을 Google Gemini API를 통해 해적 말투로 번역해 줍니다.


🔗 **Live Demo:** [https://talk-like-a-pirate-day.xyz](https://talk-like-a-pirate-day.xyz)
---

## ⚠️ 안내

* **API 사용량 제한:** 이 프로젝트의 라이브 데모는 Google Gemini API의 **무료 등급**을 사용합니다. 따라서 **분당 및 일일 요청량에 제한**이 있습니다.<br/>
  트래픽이 몰릴 경우, 번역 기능이 일시적으로 동작하지 않을 수 있습니다.

---

## ✨ 기능

* **문장 번역 기능**: 입력한 문장을 바탕으로 재미있는 해적 말투 결과를 제공
* **사용자 분석**: Google Analytics를 연동하여 방문자 데이터 수집

* **추가 예정**: 다크 모드 지원, 모바일 반응형 지원

---

## 🛠️ 기술 스택

* **Framework**: Next.js
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **API**: Google Gemini API
* **Deployment**: Render

---

## 🚀 시작하기

이 프로젝트를 로컬 환경에서 실행하려면 아래의 단계를 따르세요.

### 1. 레포지토리 복제

```bash
git clone [https://github.com/](https://github.com/)[your-github-username]/[your-repo-name].git
cd [your-repo-name]
```

### 2. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 3. 환경 변수 설정

프로젝트 루트 디렉터리에 `.env.local` 파일을 생성하고 아래 내용을 채워주세요.

#### **`.env.local` 파일 예시**

```
# (필수) Google Gemini API 키
NEXT_PUBLIC_GEMINI_API_KEY=[Your_Google_Gemini_API_Key]

# (선택 사항) Google Analytics 측정 ID
# 이 값을 비워두어도 프로젝트는 정상적으로 실행됩니다.
NEXT_PUBLIC_GA_MEASUREMENT_ID=[Your_GA_MEASUREMENT_ID]
```

### 4. 개발 서버 실행

```bash
npm run dev
```

이제 브라우저에서 `http://localhost:3000`으로 접속할 수 있습니다.

---

## 📜 라이선스

이 프로젝트는 [MIT License](LICENSE)를 따릅니다.
