// types/gtag.d.ts

// 이 파일을 모듈로 만들기 위해 export {} 추가
export {};

declare global {
  interface Window {
    gtag(
      command: "config",
      targetId: string,
      config?: {
        page_path?: string;
        [key: string]: any; // 다른 설정도 받을 수 있도록 추가
      }
    ): void;
  }
}
