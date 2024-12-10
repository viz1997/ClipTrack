import React from 'react'

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; color: string }> = ({ icon, title, description, color }) => (
  <div className={`glass-morphism rounded-2xl p-6 border border-gray-800 hover:border-${color}-500/50 transition-colors group`}>
    <div className={`w-12 h-12 rounded-full bg-${color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
)

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3H4a2 2 0 00-2 2v5m0 0h20m0 0v11a2 2 0 01-2 2H4a2 2 0 01-2-2V10m20 0V5a2 2 0 00-2-2h-5m0 0v20"></path>
        </svg>
      ),
      title: "一键分屏",
      description: "无需复杂操作，轻松点击即可实现分屏",
      color: "blue"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
        </svg>
      ),
      title: "灵活布局",
      description: "根据任务需要自由调整分屏比例，完美适配不同内容类型",
      color: "green"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0v8a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0V5a2 2 0 00-2-2H6a2 2 0 00-2 2v2m16 0H4"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11v6"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l3-3 3 3"></path>
        </svg>
      ),
      title: "无缝切换",
      description: "随时可以重新恢复原始标签页，不影响原来的浏览器使用体验",
      color: "purple"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
        </svg>
      ),
      title: "简单易用",
      description: "界面直观，无需学习成本，支持鼠标右键和键盘快捷键等场景打开分屏插件",
      color: "rose"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      ),
      title: "个性定制",
      description: "通过强大的自定义选项个性化您的分屏体验",
      color: "amber"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "全球化支持",
      description: "支持多种语言，让全球用户都能轻松使用",
      color: "cyan"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          强大功能
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

