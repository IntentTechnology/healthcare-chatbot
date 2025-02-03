"use client";
import Chat from "@/components/Chat";
import Navigation from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { useEffect, useState } from "react";
import DashboardApplication from "@/components/DashboardApplication";
const MOCK_USER_ID = "MIF46sN9px";
export default function DashboardPage() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [credentials, setCredentials] = useState<{
    data: { id?: string };
  }>();

  useEffect(() => {
    const credentials = localStorage.getItem("credentials");
    if (credentials) {
      setCredentials(JSON.parse(credentials));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://smart-care-9r4m.onrender.com/api/smart_care/chat/send_chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: input,
            userId: credentials?.data?.id,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      // const data = await response.json();
      // Add the new message directly since the API returns a single message
      // const newMessage: ChatMessage = {
      //   id: data.id || Date.now().toString(),
      //   userId: MOCK_USER_ID,
      //   prompt: input,
      //   response: data.response || "Sorry, I couldn't process that request.",
      //   createdAt: new Date().toISOString(),
      //   updatedAt: new Date().toISOString(),
      // }
      // setMessages((prev) => [...prev, newMessage])
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <DashboardApplication>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <div className="flex">
            <Sidebar
              handleSubmit={handleSubmit}
              setInput={setInput}
              isLoading={isLoading}
            />
            <main className="flex-1 p-4">
              <Chat
                credentials={credentials}
                input={input}
                setInput={setInput}
                isLoading={isLoading}
                handleSubmit={handleSubmit}
              />
            </main>
          </div>
        </div>
      </DashboardApplication>
    </ProtectedRoute>
  );
}
