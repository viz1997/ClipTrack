import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="nav-container glass-morphism">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-4">
            <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Split Screen Pro
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="hover:text-blue-400 transition-colors">功能</Link>
            <Link to="#comments" className="hover:text-blue-400 transition-colors">评价</Link>
            <Link to="#faq" className="hover:text-blue-400 transition-colors">问答</Link>
            <Link to="https://e02502d.webp.li/2024/yeheboo.jpg" target="_blank" className="hover:text-blue-400 transition-colors">联系</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="lang-switch-container">
              <span className="lang-text">中</span>
              <div className="lang-switch active"></div>
            </div>
            <a href="https://chrome.google.com/webstore/detail/cianjgodoefcpaifdgbhkbnnpelkakaf" target="_blank" className="button-shine bg-gradient-to-r from-blue-500 to-emerald-500 px-6 py-2 rounded-2xl hover:opacity-90 transition-opacity">
              立即下载
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              className="mobile-menu-button p-2 rounded-lg hover:bg-gray-800/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu md:hidden">
            <div className="glass-morphism rounded-xl p-4 shadow-lg">
              <nav className="flex flex-col space-y-4">
                <Link to="#features" className="block hover:text-blue-400 transition-colors py-2">功能</Link>
                <Link to="#comments" className="block hover:text-blue-400 transition-colors py-2">评价</Link>
                <Link to="#faq" className="block hover:text-blue-400 transition-colors py-2">问答</Link>
                <Link to="https://e02502d.webp.li/2024/yeheboo.jpg" target="_blank" className="block hover:text-blue-400 transition-colors py-2">联系</Link>
                <div className="pt-3 mt-3 border-t border-gray-700">
                  <div className="lang-switch-container mb-4">
                    <span className="lang-text">中</span>
                    <div className="lang-switch active"></div>
                  </div>
                  <a href="https://chrome.google.com/webstore/detail/cianjgodoefcpaifdgbhkbnnpelkakaf" target="_blank" className="button-shine bg-gradient-to-r from-blue-500 to-emerald-500 px-6 py-2 rounded-2xl hover:opacity-90 transition-opacity block text-center">
                    立即下载
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

