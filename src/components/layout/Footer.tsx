import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DhiniAfifah",
      icon: "📚",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/siti-maryama-ramadhini-afifah/",
      icon: "💼",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/dhini_afifah/",
      icon: "📸",
    },
    {
      name: "Email",
      url: "mailto:dhiniafifah.work@gmail.com",
      icon: "✉️",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dhini Afifah</h3>
            <p className="text-gray-300 mb-4">
              Frontend Developer passionate about creating beautiful, functional
              web experiences with modern technologies.
            </p>
            <p className="text-gray-400 text-sm">
              Always learning, always growing. 🚀
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
                  aria-label={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {currentYear} Made with love</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
