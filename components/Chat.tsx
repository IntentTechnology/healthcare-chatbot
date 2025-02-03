"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ChatMessage } from "../types/chat";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MessageCircle } from "lucide-react";

// TODO: This should come from your auth system
const suggestedPrompts = [
  "What are some tips for maintaining a healthy diet?",
  "How can I improve my sleep quality?",
  "What exercises are best for cardiovascular health?",
  "How can I manage stress effectively?",
]
export default function Chat({
  isLoading,
  handleSubmit,
  input,
  setInput,
  credentials,
}: any) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [username,setUserName] = useState("");
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);
  console.log(messages);
  
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };
  // Fetch chat history
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await fetch(
          `https://smart-care-9r4m.onrender.com/api/smart_care/chat/get_user_chats/${credentials?.data?.id}`
        );
        if (!response.ok) throw new Error("Failed to fetch chat history");
        const data = await response.json();
        setMessages(data.data);
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    fetchChatHistory();
  }, [messages]);
  const handleSuggestedPrompt = async (prompt: string) => {
    setInput(prompt)
    const fakeEvent = { preventDefault: () => {} } as React.FormEvent
    await handleSubmit(fakeEvent)
  }
  return (
    <Card className="w-full h-[calc(100vh-5rem)]">
      <CardHeader></CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-15rem)]">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <MessageCircle className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
              <p className="text-muted-foreground">
                Start a conversation by asking a health-related question or
                choosing a suggested prompt below.
              </p>
              <div className="my-4">
          
            <div className="flex justify-center items-center flex-wrap gap-2">
              {suggestedPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestedPrompt(prompt)}
                  disabled={isLoading}
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className="space-y-4 mb-4">
                <div className="flex items-end justify-end">
                  <div className="flex items-end flex-row-reverse">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>{getInitials(username)}</AvatarFallback>
                    </Avatar>
                    <div className="mx-2 p-3 rounded-lg bg-primary text-primary-foreground">
                      {message.prompt}
                    </div>
                  </div>
                </div>
                <div className="flex w-full lg:w-[800px] items-end justify-start">
                  <div className="flex items-end">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/botMobile.png" alt={"Ai"} />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="mx-2 p-3 rounded-lg bg-muted leading-loose">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {message.response}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex items-end justify-start">
              <div className="flex items-end">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/botMobile.png" alt={"Ai"} />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="mx-2 p-3 rounded-lg bg-muted">Thinking...</div>
              </div>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your health..."
            className="flex-grow"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
