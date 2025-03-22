
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  content: string;
  sender: "user" | "other" | "ai";
  timestamp: Date;
};

export function ChatInterface({ caseId }: { caseId: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      content: "Welcome to the case discussion. Share your findings and coordinate with team members.",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn("flex", {
              "justify-end": message.sender === "user",
              "justify-start": message.sender !== "user",
            })}
          >
            <div
              className={cn("max-w-[80%] rounded-xl p-3 animate-fade-in", {
                "bg-primary text-primary-foreground": message.sender === "user",
                "bg-slate-200 dark:bg-slate-800": message.sender === "other",
                "glass-surface": message.sender === "ai",
              })}
            >
              <p className="text-sm">{message.content}</p>
              <div
                className={cn("mt-1 text-xs", {
                  "text-primary-foreground/70": message.sender === "user",
                  "text-muted-foreground": message.sender !== "user",
                })}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSend} className="border-t p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="rounded-full bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
