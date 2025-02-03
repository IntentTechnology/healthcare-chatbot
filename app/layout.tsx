import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "HealthCare Chatbot",
  description: "A healthcare chatbot application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children} <Toaster />
      </body>
    </html>
  );
}
