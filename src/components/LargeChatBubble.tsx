import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/glass-effects.css";
import emoji4 from "../assets/images/Emoji4.png";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const LargeChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowSuggestions(messages.length === 0);
    }
  };

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

  return (
    <>
      {/* Modern Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-2xl shadow-lg transition-all duration-300 z-50 flex items-center justify-center group ${
          isOpen
            ? "bg-slate-900 hover:bg-slate-800 scale-100"
            : "bg-slate-900 hover:bg-slate-800 hover:scale-110"
        }`}
        style={{
          boxShadow: isOpen
            ? "0 8px 25px -5px rgba(15, 23, 42, 0.4)"
            : "0 10px 25px -5px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        }}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-white transition-transform duration-200 group-hover:rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <div className="relative">
            <img
              src={emoji4}
              alt="Chat"
              className="w-7 h-7 object-contain transition-transform duration-200 group-hover:scale-110"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </button>

      {/* Modern Chat Window */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-24 right-6 w-[420px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-6rem)] rounded-3xl shadow-2xl border flex flex-col z-40 overflow-hidden bg-white"
          style={{
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 0 0 1px rgba(0, 0, 0, 0.05)
            `,
          }}
        >
          {/* Messages Area */}
          <div
            className="flex-1 overflow-y-auto p-8 chat-scroll"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            {/* Welcome Message */}
            {messages.length === 0 && (
              <div className="text-center py-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200">
                  <img src={emoji4} alt="Hi" className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Hi there!
                </h4>
                <p className="text-gray-600 text-sm">
                  I'm here to tell you about Dhini's work and experience.
                </p>
              </div>
            )}

            {/* Suggested Questions */}
            {showSuggestions && messages.length === 0 && (
              <div className="space-y-4 mb-6">
                <p className="text-sm text-gray-500 font-semibold">
                  Suggested questions:
                </p>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="w-full text-left p-4 rounded-xl border transition-all duration-300 text-sm text-gray-800 hover:shadow-lg hover:scale-[1.02]"
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(20px) saturate(180%)",
                      WebkitBackdropFilter: "blur(20px) saturate(180%)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.3)";
                      e.currentTarget.style.borderColor =
                        "rgba(99, 102, 241, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.2)";
                      e.currentTarget.style.borderColor =
                        "rgba(255, 255, 255, 0.3)";
                    }}
                  >
                    {question}
                  </button>
                ))}

                <div className="text-center py-3">
                  <span className="text-gray-400 text-sm">OR</span>
                </div>

                <button
                  onClick={() => handleSendMessage(fullStoryPrompt)}
                  className="w-full text-left p-4 rounded-xl border transition-all duration-300 text-sm text-gray-800 font-semibold hover:shadow-lg hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(251, 146, 60, 0.2) 0%, rgba(239, 68, 68, 0.2) 100%)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    borderColor: "rgba(251, 146, 60, 0.3)",
                    boxShadow: "0 4px 16px 0 rgba(251, 146, 60, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, rgba(251, 146, 60, 0.3) 0%, rgba(239, 68, 68, 0.3) 100%)";
                    e.currentTarget.style.borderColor =
                      "rgba(251, 146, 60, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, rgba(251, 146, 60, 0.2) 0%, rgba(239, 68, 68, 0.2) 100%)";
                    e.currentTarget.style.borderColor =
                      "rgba(251, 146, 60, 0.3)";
                  }}
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
                    className={`max-w-lg p-4 rounded-2xl text-sm whitespace-pre-line ${
                      message.isBot
                        ? "text-gray-800 shadow-lg border"
                        : "text-white shadow-lg"
                    }`}
                    style={
                      message.isBot
                        ? {
                            background: "rgba(255, 255, 255, 0.3)",
                            backdropFilter: "blur(20px) saturate(180%)",
                            WebkitBackdropFilter: "blur(20px) saturate(180%)",
                            borderColor: "rgba(255, 255, 255, 0.4)",
                            boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.2)",
                          }
                        : {
                            background:
                              "linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(168, 85, 247, 0.8) 100%)",
                            backdropFilter: "blur(20px) saturate(180%)",
                            WebkitBackdropFilter: "blur(20px) saturate(180%)",
                            boxShadow: "0 4px 16px 0 rgba(99, 102, 241, 0.3)",
                          }
                    }
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="bg-white/90 text-gray-800 p-4 rounded-2xl shadow-md border border-gray-200"
                    style={{
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                  >
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
            <div
              className="p-4 border-t"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="flex space-x-3 mb-3">
                <button
                  onClick={handleDownloadCV}
                  className="flex-1 flex items-center justify-center space-x-2 py-3 px-3 rounded-xl transition-all duration-300 text-sm text-gray-700 font-medium border hover:scale-[1.02]"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.2)";
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Download CV</span>
                </button>
                <button
                  onClick={handleLetsTalk}
                  className="flex-1 flex items-center justify-center space-x-2 py-3 px-3 rounded-xl transition-all duration-300 text-sm text-indigo-700 font-medium border hover:scale-[1.02]"
                  style={{
                    background: "rgba(99, 102, 241, 0.2)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    borderColor: "rgba(99, 102, 241, 0.3)",
                    boxShadow: "0 4px 16px 0 rgba(99, 102, 241, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(99, 102, 241, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(99, 102, 241, 0.2)";
                  }}
                >
                  <img src={emoji4} alt="Chat" className="w-4 h-4" />
                  <span>Let's Talk!</span>
                </button>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div
            className="p-4 border-t"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about my portfolio"
                className="flex-1 px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent placeholder-gray-600"
                style={{
                  background: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                }}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="px-5 py-3 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm hover:scale-[1.02] shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(168, 85, 247, 0.9) 100%)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  boxShadow: "0 4px 16px 0 rgba(99, 102, 241, 0.4)",
                }}
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

export default LargeChatBubble;
