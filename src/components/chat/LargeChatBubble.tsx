import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../../styles/glass-effects.css";
import "../../styles/ios-chat-bubbles.css";
import emoji4 from "../../assets/images/Emoji4.png";

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
    "Apa saja project yang pernah dibuat?",
    "Kemampuan teknologi apa yang dikuasai?",
    "Bagaimana pengalaman kerja sebelumnya?",
  ];

  const fullStoryPrompt = "Tell me your full story 🔥";

  const botResponses: { [key: string]: string } = {
    projects:
      "I've built several exciting projects including:\n\n🚀 E-Commerce Dashboard with real-time analytics\n📱 Task Management App with drag-and-drop functionality\n🌤️ Weather App with beautiful animations\n💼 Various React applications with TypeScript\n🎯 Interactive Portfolio with glassmorphism effects\n\nEach project showcases different aspects of modern web development! Want to know more about any specific project?",

    skills:
      "Hi! I'm Dhini Afifah, a passionate Frontend Developer specializing in:\n\n⚛️ React & TypeScript (90% proficiency)\n🎨 Modern CSS & SCSS (88% proficiency)\n📱 JavaScript (95% proficiency)\n🟢 Node.js & API integration\n📚 Git & version control\n🎯 UI/UX implementation\n\nI love creating beautiful, functional user experiences and I'm always excited to learn new technologies!",

    experience:
      "I'm a dedicated Frontend Developer with experience in:\n\n• React & TypeScript development\n• Modern CSS & responsive design\n• UI/UX implementation\n• Git version control\n• Collaborative development\n• API integration\n• Performance optimization\n\nI'm passionate about continuous learning and staying up-to-date with the latest web technologies!",

    contact:
      "You can reach me through multiple channels:\n\n📧 Email: dhiniafifah.work@gmail.com\n💼 LinkedIn: linkedin.com/in/siti-maryama-ramadhini-afifah/\n📚 GitHub: github.com/DhiniAfifah\n📸 Instagram: @dhini_afifah\n\nI'm always open to new opportunities, collaborations, and interesting projects! Let's build something amazing together! 🚀",

    hobbies:
      "When I'm not coding, I love:\n\n🎨 Exploring UI/UX design trends\n📚 Reading tech blogs and documentation\n🌱 Learning new programming languages\n📸 Photography (check my Instagram!)\n🎵 Listening to music while coding\n☕ Discovering new coffee shops for coding sessions\n🎮 Playing games for UI inspiration\n\nI believe in work-life balance and that hobbies make us better developers!",

    "full story":
      "🔥 Here's my full story!\n\nI'm Dhini Afifah, a Frontend Developer who fell in love with coding because of its perfect blend of creativity and logic. I specialize in React and TypeScript, creating web applications that are not just functional, but delightful to use.\n\nMy journey includes building e-commerce dashboards, task management systems, and mobile-responsive applications. I believe in writing clean, maintainable code and creating user experiences that make people's lives easier.\n\nWhen I'm not coding, I'm probably exploring new technologies, contributing to open source, or sharing knowledge with the developer community. I'm always excited about new challenges and opportunities to grow!\n\nWant to build something amazing together? Let's connect! 🚀",

    greeting:
      "Hello! 👋 I'm Dhini's AI assistant. I'm here to tell you all about her skills, projects, and experience as a Frontend Developer. What would you like to know?",

    thanks:
      "You're very welcome! 😊 Is there anything else you'd like to know about Dhini's work or experience? I'm here to help!",

    default:
      'I\'m not quite sure what you\'re asking about, but I\'d love to help! 🤔\n\nYou can ask me about Dhini in many different ways:\n\n💼 Projects: "Apa saja karya yang pernah dibuat?" or "What have you built?"\n🛠️ Skills: "Kemampuan apa yang dimiliki?" or "What technologies do you know?"\n📋 Experience: "Pengalaman kerja gimana?" or "Tell me about your background"\n📞 Contact: "Bagaimana cara menghubungi?" or "How can I reach you?"\n🎯 Hobbies: "Hobi apa saja?" or "What do you like to do?"\n\nTry asking in Indonesian or English - I understand both! 😊',
  };

  // Smart Intent Detection System
  const detectIntent = (input: string): string => {
    const text = input.toLowerCase().trim();

    // Greeting patterns
    if (
      /^(hi|hello|hey|halo|hai|selamat|good morning|good afternoon|good evening)/.test(
        text
      )
    ) {
      return "greeting";
    }

    // Thanks patterns
    if (/(thank|thanks|terima kasih|makasih|thx)/.test(text)) {
      return "thanks";
    }

    // Projects patterns - Indonesian & English variations
    if (
      /(project|projek|karya|portfolio|kerja|buat|bikin|develop|kerjaan|hasil|aplikasi|website|app|sudah.*buat|pernah.*buat|mengerjakan.*apa|what.*built|what.*made|what.*created|show.*work|your.*work)/.test(
        text
      )
    ) {
      return "projects";
    }

    // Skills patterns - Indonesian & English variations
    if (
      /(skill|kemampuan|bisa.*apa|teknologi|bahasa|framework|keahlian|mahir|programming|coding|tech.*stack|what.*can|abilities|expertise|good.*at|specialize)/.test(
        text
      )
    ) {
      return "skills";
    }

    // Experience patterns - Indonesian & English variations
    if (
      /(pengalaman|experience|kerja.*dimana|magang|internship|background|riwayat|sebelumnya|karir|work.*history|career|job|employment)/.test(
        text
      )
    ) {
      return "experience";
    }

    // Contact patterns - Indonesian & English variations
    if (
      /(kontak|contact|hubungi|hire|kerja.*sama|email|wa|whatsapp|linkedin|reach|get.*touch|collaborate|work.*together)/.test(
        text
      )
    ) {
      return "contact";
    }

    // Hobbies patterns - Indonesian & English variations
    if (
      /(hobi|hobby|hobbies|suka.*apa|interest|free.*time|spare.*time|fun|enjoy|like.*do|outside.*work)/.test(
        text
      )
    ) {
      return "hobbies";
    }

    // Full story patterns
    if (
      /(full.*story|tell.*more|about.*yourself|cerita|kisah|lengkap|detail|everything)/.test(
        text
      )
    ) {
      return "full story";
    }

    // Who are you patterns
    if (
      /(who.*are.*you|siapa.*kamu|introduce|perkenalan|about.*dhini)/.test(text)
    ) {
      return "skills"; // Redirect to skills which has intro
    }

    return "default";
  };

  const getResponse = (input: string): string => {
    const intent = detectIntent(input);
    return botResponses[intent] || botResponses.default;
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
      {/* Chat Button - Liquid Glass */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full transition-all duration-500 z-50 flex items-center justify-center liquid-glass-button liquid-float ${
          isOpen
            ? "hover:scale-110 rotate-180"
            : "hover:scale-110 hover:rotate-12"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 rgba(255, 255, 255, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.2)
          `,
          filter: "drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1))",
        }}
      >
        {isOpen ? (
          <span className="text-gray-700 text-2xl font-light">×</span>
        ) : (
          <img
            src={emoji4}
            alt="Chat"
            className="w-8 h-8 object-contain drop-shadow-sm"
          />
        )}
      </button>

      {/* Chat Window - Liquid Glass */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-30 right-6 w-[700px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-6rem)] rounded-3xl flex flex-col z-40 overflow-hidden liquid-glass liquid-shimmer"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
            backdropFilter: "blur(25px) saturate(200%)",
            WebkitBackdropFilter: "blur(25px) saturate(200%)",
            boxShadow: `
              0 25px 50px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              inset 0 -1px 0 rgba(255, 255, 255, 0.1)
            `,
            filter: "drop-shadow(0 8px 32px rgba(0, 0, 0, 0.1))",
          }}
        >
          {/* Messages Area - Liquid Glass */}
          <div
            className="flex-1 overflow-y-auto p-4 chat-scroll"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            {/* Welcome Message - Liquid Glass */}
            {messages.length === 0 && (
              <div className="text-center py-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    boxShadow:
                      "0 8px 25px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <img
                    src={emoji4}
                    alt="Hi"
                    className="w-10 h-10 drop-shadow-sm"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 drop-shadow-sm">
                  Hi there! 👋
                </h4>
                <p className="text-gray-700 text-sm mb-3 drop-shadow-sm">
                  I'm Dhini's smart AI assistant! I can understand various ways
                  you ask questions.
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
                    className="w-full text-left p-4 rounded-xl transition-all duration-300 text-sm text-gray-800 hover:scale-[1.02] hover:shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)",
                      backdropFilter: "blur(15px)",
                      WebkitBackdropFilter: "blur(15px)",
                      boxShadow:
                        "0 4px 15px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.3)",
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
                  className="w-full text-left p-4 rounded-xl transition-all duration-300 text-sm text-white font-semibold hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #007AFF 0%, #0056CC 100%)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    boxShadow:
                      "0 8px 25px rgba(0, 122, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {fullStoryPrompt}
                </button>
              </div>
            )}

            {/* Messages */}
            <div className="space-y-2">
              {messages.map((message, index) => {
                const isLastInGroup =
                  index === messages.length - 1 ||
                  (index < messages.length - 1 &&
                    messages[index + 1].isBot !== message.isBot);

                return (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isBot ? "justify-start" : "justify-end"
                    } mb-1`}
                  >
                    <div
                      className={`relative max-w-xs px-4 py-2 text-sm whitespace-pre-line ${
                        message.isBot ? "text-gray-800" : "text-white"
                      }`}
                      style={{
                        background: message.isBot
                          ? "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)"
                          : "linear-gradient(135deg, #007AFF 0%, #0056CC 100%)",
                        backdropFilter: "blur(15px)",
                        WebkitBackdropFilter: "blur(15px)",

                        borderRadius: message.isBot
                          ? isLastInGroup
                            ? "18px 18px 18px 2px"
                            : "18px 18px 18px 18px"
                          : isLastInGroup
                          ? "18px 18px 2px 18px"
                          : "18px 18px 18px 18px",
                        fontSize: "16px",
                        lineHeight: "1.3",
                        fontWeight: "400",
                        minHeight: "20px",
                        wordBreak: "break-word",
                        boxShadow: message.isBot
                          ? "0 4px 15px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)"
                          : "0 4px 15px rgba(0, 122, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      {message.text}
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex justify-start mb-1">
                  <div
                    className="relative px-4 py-2"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)",
                      backdropFilter: "blur(15px)",
                      WebkitBackdropFilter: "blur(15px)",

                      borderRadius: "18px 18px 18px 2px",
                      fontSize: "16px",
                      minHeight: "20px",
                      boxShadow:
                        "0 4px 15px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <div className="flex space-x-1 items-center py-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Action Buttons - Liquid Glass */}
          {messages.length > 0 && (
            <div
              className="p-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
              }}
            >
              <div className="flex space-x-3 mb-3">
                <button
                  onClick={handleDownloadCV}
                  className="flex-1 flex items-center justify-center space-x-2 py-3 px-3 rounded-xl transition-all duration-300 text-sm text-gray-700 font-medium hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    boxShadow:
                      "0 4px 15px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.4)",
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
                  className="flex-1 flex items-center justify-center space-x-2 py-3 px-3 rounded-xl transition-all duration-300 text-sm text-white font-medium hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #007AFF 0%, #0056CC 100%)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    boxShadow:
                      "0 8px 25px rgba(0, 122, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <img
                    src={emoji4}
                    alt="Chat"
                    className="w-4 h-4 drop-shadow-sm"
                  />
                  <span>Let's Talk!</span>
                </button>
              </div>
            </div>
          )}

          {/* Input Area - Liquid Glass */}
          <div
            className="p-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
            }}
          >
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about my portfolio"
                className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder-gray-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 100%)",
                  backdropFilter: "blur(15px)",
                  WebkitBackdropFilter: "blur(15px)",
                  boxShadow:
                    "0 4px 15px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.4)",
                }}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="px-5 py-3 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm hover:scale-105 hover:shadow-xl"
                style={{
                  background: inputValue.trim()
                    ? "linear-gradient(135deg, #007AFF 0%, #0056CC 100%)"
                    : "linear-gradient(135deg, rgba(0, 122, 255, 0.5) 0%, rgba(0, 86, 204, 0.5) 100%)",
                  backdropFilter: "blur(15px)",
                  WebkitBackdropFilter: "blur(15px)",
                  boxShadow: inputValue.trim()
                    ? "0 8px 25px rgba(0, 122, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)"
                    : "0 4px 15px rgba(0, 122, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)",
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
