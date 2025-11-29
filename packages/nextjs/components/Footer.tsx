import React from "react";

/**
 * Site footer
 */
export const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Staking", href: "#staking" },
      { name: "Events", href: "#events" },
      { name: "Rewards", href: "#rewards" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Blog", href: "#blog" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Disclaimer", href: "#disclaimer" },
    ],
  };

  const socialLinks = [
    { icon: "ri-twitter-x-line", href: "#", label: "Twitter" },
    { icon: "ri-discord-line", href: "#", label: "Discord" },
    { icon: "ri-telegram-line", href: "#", label: "Telegram" },
    { icon: "ri-github-line", href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <i className="ri-trophy-fill text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-white" style={{ fontFamily: '"Pacifico", serif' }}>
                MEMEPOT
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              혁신적인 스테이킹 플랫폼으로 안정적인 수익과 흥미진진한 이벤트를 제공합니다.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer group"
                >
                  <i className={`${social.icon} text-slate-400 group-hover:text-white text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2024 MEMEPOT. All rights reserved.</p>
            <a
              href="https://readdy.ai/?origin=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
