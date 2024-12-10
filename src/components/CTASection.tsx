import React from 'react'

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto glass-morphism rounded-3xl p-8 md:p-12 text-center border border-gray-800">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          准备好提升您的标签页分屏浏览体验了吗？
        </h2>
        <p className="text-gray-400 mb-8">
          加入数千位满意用户的行列，体验全新的网页分屏浏览方式
        </p>
        <a
          href="https://chrome.google.com/webstore/detail/cianjgodoefcpaifdgbhkbnnpelkakaf"
          target="_blank"
          rel="noopener noreferrer"
          className="button-shine inline-block bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-3 rounded-2xl text-lg font-medium hover:opacity-90 transition-opacity"
        >
          立即下载 - 免费
        </a>
      </div>
    </section>
  )
}

export default CTASection

