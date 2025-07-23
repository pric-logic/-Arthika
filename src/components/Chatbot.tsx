import React, { useState, useRef, useEffect } from "react";
import { Mic, Users, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("chatbot-history");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("chatbot-history", JSON.stringify(messages));
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { sender: "user" as const, text: input },
      { sender: "bot" as const, text: "This is a demo response." },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[70vh] bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-pastel-pink/60 overflow-hidden ring-1 ring-pink-200">
      <div className="relative p-4 border-b font-bold text-2xl text-pink-700 bg-gradient-to-r from-pastel-pink/80 to-pastel-lavender/80 shadow-sm flex items-center">
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center text-pink-600 hover:text-pink-900 transition-colors"
          onClick={() => navigate('/dashboard')}
          aria-label="Back to Home"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span className="w-full text-center">Talk with NISA</span>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
        {messages.length === 0 && (
          <div className="text-center text-pink-400">Start the conversation...</div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-5 py-3 rounded-3xl max-w-[75%] shadow-lg text-base whitespace-pre-line border backdrop-blur-md ${
                msg.sender === "user"
                  ? "bg-gradient-to-br from-pastel-lavender to-pastel-pink text-right text-pink-900 border-pink-200"
                  : "bg-gradient-to-br from-pastel-blue to-pastel-lavender text-left text-pink-700 border-blue-100"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="border-t bg-pastel-pink/30 p-4 sticky bottom-0">
        <form
          className="flex gap-2 items-center"
          onSubmit={e => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <div className="relative flex-1">
            <textarea
              className="w-full resize-none rounded-2xl border border-pastel-pink p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white/70 text-pink-900 placeholder-pink-300 shadow-inner"
              rows={1}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="How can I help you achieve your financial goals?"
              style={{ minHeight: 40, maxHeight: 120 }}
            />
            <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 text-pink-400 hover:text-pink-600 transition-colors">
              <Mic className="w-5 h-5" />
            </button>
          </div>
          <button
            type="button"
            className="bg-pastel-blue hover:bg-pastel-lavender text-pink-700 font-bold px-4 py-2 rounded-2xl shadow flex items-center gap-1 transition-colors"
          >
            <Users className="w-5 h-5" />
            <span className="hidden sm:inline">Friends</span>
          </button>
          <button
            type="submit"
            className="bg-pastel-pink hover:bg-pink-300 text-pink-900 font-bold px-6 py-2 rounded-2xl shadow flex items-center transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot; 