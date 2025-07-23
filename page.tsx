"use client";

import { useState } from "react";
import { AuthPanel } from "@/components/AuthPanel";
import EduConectaApp from "./EduConectaApp";

export default function HomePage() {
  const [user, setUser] = useState<any>(null);

  return (
    <main className="min-h-screen bg-blue-50 p-6">
      {!user ? (
        <div className="max-w-md mx-auto mt-10">
          <h1 className="text-2xl font-bold mb-4 text-blue-900 text-center">Bem-vindo ao EduConecta</h1>
          <AuthPanel onAuthenticated={setUser} />
        </div>
      ) : (
        <EduConectaApp />
      )}
    </main>
  );
}