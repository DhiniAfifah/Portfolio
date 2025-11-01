import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ModernAIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModernAIAssistant: React.FC<ModernAIAssistantProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "Who are you?",
    "What have you built?",
    "What's your work history?",
  ];

  const fullStoryPrompt = "Tell me your full story 🔥";

  const botResponses: { [key: string]: string } = {
    "who are you":
      "Hi! I'm Dhini Afifah, a passionate Frontend Developer specializing in React and modern web technologies. I love creating beautiful, functional user experiences and I'm always excited to learn new technologies and solve challenging problems!",

    "what have you built":
      "I've built several exciting projects including:\n\n🚀 E-Commerce Dashboard with real-time analytics\n📱 Task Management App with drag-and-drop functionality\n🌤️ Weather App with beautiful animations\n💼 Various React applications with TypeScript\n\nEach project showcases different aspects of modern web development!",

    "work history":
      "I'm a dedicated Frontend Developer with experience in:\n\n• React & TypeScript development\n• Modern CSS & responsive design\n• UI/UX implementation\n• Git version control\n• Collaborative development\n\nI'm passionate about continuous learning and staying up-to-date with the latest web technologies!",

    "full story":
      "🔥 Here's my full story!\n\nI'm Dhini Afifah, a Frontend Developer who fell in love with coding because of its perfect blend of creativity and logic. I specialize in React and TypeScript, creating web applications that are not just functional, but delightful to use.\n\nMy journey includes building e-commerce dashboards, task management systems, and mobile-responsive applications. I believe in writing clean, maintainable code and creating user experiences that make people's lives easier.\n\nWhen I'm not coding, I'm probably exploring new technologies, contributing to open source, or sharing knowledge with the developer community. I'm always excited about new challenges and opportunities to grow!\n\nWant to build something amazing together? Let's connect! 🚀",

    hobbies:
      "When I'm not coding, I love:\n\n🎨 Exploring UI/UX design trends\n📚 Reading tech blogs and documentation\n🌱 Learning new programming languages\n📸 Photography (check my Instagram!)\n🎵 Listening to music while coding\n☕ Discovering new coffee shops for coding sessions\n\nI believe in work-life balance and that hobbies make us better developers!",

    default:
      "That's an interesting question! I'd love to tell you more about my experience as a Frontend Developer. Feel free to ask about my projects, skills, or anything else you'd like to know. You can also download my CV or let's have a chat directly!",
  };

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("who are you") || lowerInput === "who are you?") {
      return botResponses["who are you"];
    }
    if (
      lowerInput.includes("what have you built") ||
      lowerInput === "what have you built?"
    ) {
      return botResponses["what have you built"];
    }
    if (
      lowerInput.includes("work history") ||
      lowerInput === "what's your work history?"
    ) {
      return botResponses["work history"];
    }
    if (
      lowerInput.includes("full story") ||
      lowerInput.includes("tell me your full story")
    ) {
      return botResponses["full story"];
    }
    if (lowerInput.includes("hobbies") || lowerInput.includes("hobby")) {
      return botResponses["hobbies"];
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
    setShowSuggestions(false);

    // Simulate AI thinking time
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

  useEffect(() => {
    if (isOpen) {
      setShowSuggestions(messages.length === 0);
    }
  }, [isOpen, messages.length]);

  const handleDownloadCV = () => {
    // Simulate CV download
    alert("CV download would be implemented here!");
  };

  const handleLetsTalk = () => {
    window.open("mailto:dhiniafifah.work@gmail.com", "_blank");
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
          { scale: 0, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
        );
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={chatRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold">Hi, I'm Dhini</h3>
                <p className="text-sm opacity-90">React Specialist</p>
                <p className="text-xs opacity-75">
                  Passionate about creating beautiful, functional web
                  experiences. Let's build something amazing together!
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <span className="text-lg">×</span>
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {/* Welcome Message */}
          {messages.length === 0 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👋</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Hi there!</h4>
              <p className="text-gray-600 text-sm">
                I'm here to tell you about Dhini's work and experience.
              </p>
            </div>
          )}

          {/* Suggested Questions */}
          {showSuggestions && messages.length === 0 && (
            <div className="space-y-3 mb-6">
              <p className="text-sm text-gray-500 font-medium">
                Suggested questions:
              </p>
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(question)}
                  className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-sm text-gray-700"
                >
                  {question}
                </button>
              ))}

              <div className="text-center py-2">
                <span className="text-gray-400 text-sm">OR</span>
              </div>

              <button
                onClick={() => handleSendMessage(fullStoryPrompt)}
                className="w-full text-left p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors text-sm text-gray-700 font-medium"
              >
                {fullStoryPrompt}
              </button>
            </div>
          )}

          {/* Messages */}
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl text-sm whitespace-pre-line ${
                    message.isBot
                      ? "bg-white text-gray-800 shadow-sm border border-gray-200"
                      : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-2xl shadow-sm border border-gray-200">
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
          </div>
          <div ref={messagesEndRef} />
        </div>

        {/* Action Buttons */}
        {messages.length > 0 && (
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2 mb-3">
              <button
                onClick={handleDownloadCV}
                className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm text-gray-700"
              >
                <span>📄</span>
                <span>Download CV</span>
              </button>
              <button
                onClick={handleLetsTalk}
                className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-indigo-100 hover:bg-indigo-200 rounded-lg transition-colors text-sm text-indigo-700"
              >
                <span>💬</span>
                <span>Let's Talk!</span>
              </button>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask about my portfolio"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>➤</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernAIAssistant;
