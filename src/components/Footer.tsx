import React from 'react'
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="glass-morphism mt-20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />
              <span className="font-bold">Split Screen Pro</span>
            </div>
            <p className="text-gray-400">增强标签页分屏浏览体验</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">产品</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="#features" className="hover:text-white transition-colors">功能特点</Link></li>
              <li><Link to="#comments" className="hover:text-white transition-colors">用户评价</Link></li>
              <li><Link to="#faq" className="hover:text-white transition-colors">常见问题</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">支持</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://x.com/freeourdays" target="_blank" className="hover:text-white transition-colors">推特</a></li>
              <li><a href="https://e02502d.webp.li/2024/yeheboo.jpg" target="_blank" className="hover:text-white transition-colors">联系我们</a></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">隐私政策</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">赞赏</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://ko-fi.com/E1E8173VLB" target="_blank"><img height="36" style={{border: 0, height: '36px'}} src="https://storage.ko-fi.com/cdn/kofi6.png?v=6" alt="Buy Me a Coffee at ko-fi.com" /></a></li>
              <li><a href="https://www.buymeacoffee.com/yeheboo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{height: '36px'}} /></a></li>
              <li><a href="https://e02502d.webp.li/2024/WechatIMG276.jpg" target="_blank" className="text-wechat-green hover:text-white transition-colors">Wechat Pay</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

