import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jarvis OS",
  description: "AI-powered personal operating system"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
