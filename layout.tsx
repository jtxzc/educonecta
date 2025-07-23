import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "EduConecta",
  description: "Conectando estudantes e professores",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}