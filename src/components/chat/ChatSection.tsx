import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="chat-section"
      ref={sectionRef}
      className="min-h-screen bg-gray-50 py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="p-8 border-b border-gray-100 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">👋</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Hi, I'm Dhini
            </h2>
            <p className="text-xl text-indigo-600 font-semibold mb-3">
              React Specialist
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Passionate about creating beautiful, functional web experiences.
              Let's build something amazing together!
            </p>
          </div>

          {/* Messages Area */}
          <div className="p-8">
            {/* Suggested Questions */}
            {showSuggestions && messages.length === 0 && (
              <div className="space-y-6 mb-8">
                <p className="text-sm text-gray-500 font-medium">
                  Suggested questions:
                </p>
                <div className="space-y-4">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-200 text-gray-700 text-lg hover:shadow-md"
                    >
                      {question}
                    </button>
                  ))}
                </div>

                <div className="text-center py-6">
                  <span className="text-gray-400 text-sm">OR</span>
                </div>

                <button
                  onClick={() => handleSendMessage(fullStoryPrompt)}
                  className="w-full text-left p-6 bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 rounded-2xl border border-orange-200 hover:border-orange-300 transition-all duration-200 text-gray-700 font-semibold text-lg hover:shadow-md"
                >
                  {fullStoryPrompt}
                </button>
              </div>
            )}

            {/* Messages */}
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-md lg:max-w-lg p-4 rounded-2xl whitespace-pre-line ${
                      message.isBot
                        ? "bg-gray-100 text-gray-800"
                        : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-4 rounded-2xl">
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
            <div className="p-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
                <button
                  onClick={handleDownloadCV}
                  className="flex-1 flex items-center justify-center space-x-3 py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors text-gray-700 font-semibold text-lg"
                >
                  <span className="text-xl">📄</span>
                  <span>Download CV</span>
                </button>
                <button
                  onClick={handleLetsTalk}
                  className="flex-1 flex items-center justify-center space-x-3 py-4 px-6 bg-indigo-100 hover:bg-indigo-200 rounded-2xl transition-colors text-indigo-700 font-semibold text-lg"
                >
                  <span className="text-xl">💬</span>
                  <span>Let's Talk!</span>
                </button>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-8 border-t border-gray-100 bg-gray-50">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about my portfolio"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl hover:from-indigo-600 hover:to-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
