import React from 'react'
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1 rounded-2xl border border-gray-700 bg-gray-800/50">
          <span className="text-sm">✨ 全球用户的信赖之选</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
          浏览器标签页分屏管理器
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          在同一个浏览器窗口内，一键将多个标签页分屏显示，支持自由调整分屏比例，完美适配文档对比、代码编写、资料查阅等多任务场景
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="https://chrome.google.com/webstore/detail/cianjgodoefcpaifdgbhkbnnpelkakaf" target="_blank" className="button-shine bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-3 rounded-2xl text-lg font-medium hover:opacity-90 transition-opacity w-full md:w-auto">
            安装扩展
          </a>
          <Link to="#" className="px-8 py-3 rounded-2xl text-lg font-medium border border-gray-700 hover:bg-gray-800/50 transition-colors w-full md:w-auto">
            观看演示
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

