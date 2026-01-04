import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "성심동행케어(주) - 병원동행 서비스",
  description: "다시 안녕을 묻다. 보호자가 안심할 수 있는 병원동행 서비스 '성심동행케어(주)'입니다.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "성심동행케어(주)",
    description: "보호자가 안심할 수 있는 병원동행 서비스 '성심동행케어(주)'",
    images: ["/logo.png"],
    type: "website",
    locale: "ko_KR",
  },
};

import FloatingCallButton from "@/components/FloatingCallButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body suppressHydrationWarning>
        <AuthProvider>
          {children}
          <FloatingCallButton />
        </AuthProvider>
      </body>
    </html>
  );
}
