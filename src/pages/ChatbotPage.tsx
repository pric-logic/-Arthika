import React from "react";
import Chatbot from "../components/Chatbot";

const ChatbotPage: React.FC = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-blue">
    <div className="w-full max-w-3xl flex-1 flex flex-col justify-end py-8">
      <Chatbot />
    </div>
  </div>
);

export default ChatbotPage; 