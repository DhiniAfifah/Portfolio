import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Dhini's AI assistant. Ask me anything about her skills, projects, or experience!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "What are Dhini's main skills?",
    "Tell me about her projects",
    "What's her experience?",
    "How can I contact her?",
  ];

  const botResponses: { [key: string]: string } = {
    skills:
      "Dhini specializes in Frontend Development with React, TypeScript, and modern CSS. She's also experienced with Node.js, Git, and has a strong eye for UI/UX design. Her technical skills include 90% proficiency in React and 95% in JavaScript!",
    projects:
      "She has worked on various projects including an E-Commerce Dashboard with real-time analytics, a collaborative Task Management App with drag-and-drop functionality, and a beautiful Weather App with animations. All built with modern technologies like React, TypeScript, and Node.js.",
    experience:
      "Dhini is a passionate Frontend Developer who loves creating beautiful, functional web experiences. She's always learning new technologies and enjoys solving complex problems with creative solutions.",
    contact:
      "You can reach Dhini through multiple channels: Email at dhiniafifah.work@gmail.com, connect on LinkedIn, check out her GitHub projects, or follow her on Instagram @dhini_afifah. She's always open to new opportunities and collaborations!",
    default:
      "That's a great question! While I can tell you about Dhini's skills, projects, and experience, I'd recommend reaching out to her directly for more detailed discussions. She's very responsive and loves talking about technology and new opportunities!",
  };

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (
      lowerInput.includes("skill") ||
      lowerInput.includes("technology") ||
      lowerInput.includes("tech")
    ) {
      return botResponses.skills;
    }
    if (
      lowerInput.includes("project") ||
      lowerInput.includes("work") ||
      lowerInput.includes("portfolio")
    ) {
      return botResponses.projects;
    }
    if (
      lowerInput.includes("experience") ||
      lowerInput.includes("background") ||
      lowerInput.includes("about")
    ) {
      return botResponses.experience;
    }
    if (
      lowerInput.includes("contact") ||
      lowerInput.includes("reach") ||
      lowerInput.includes("email") ||
      lowerInput.includes("hire")
    ) {
      return botResponses.contact;
    }

    return botResponses.default;
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(messageText),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (chatRef.current) {
      if (isOpen) {
        gsap.fromTo(
          chatRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );
      }
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {isOpen ? (
          <span className="text-white text-2xl">×</span>
        ) : (
          <span className="text-white text-2xl">🤖</span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-40"
        >
          {/* Header */}
          <div className="bg-indigo-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Chat with Dhini's AI Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything about her!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isBot
                      ? "bg-gray-100 text-gray-800"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="space-y-1">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded border text-gray-600"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={() => handleSendMessage()}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
