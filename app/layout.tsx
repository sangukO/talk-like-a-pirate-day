import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "TLaPD Translator",
  description: "A fun tool to translate text into pirate speak!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Pirata+One&display=swap');
        </style>
      </head>

      <body className={`flex flex-col min-h-screen`}>
        <div className="mt-[10%] flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
