import React from 'react'

interface Step {
  number: number;
  title: string;
  description: string;
  color: string;
  delay: string;
}

const Step: React.FC<Step> = ({ number, title, description, color, delay }) => (
  <div className="text-center">
    <div 
      className={`w-20 h-20 rounded-full bg-${color}-500/20 flex items-center justify-center mx-auto mb-6 animate-float`} 
      style={{animationDelay: delay}}
    >
      <span className={`text-2xl font-bold text-${color}-400`}>{number}</span>
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
)

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: "安装扩展",
      description: "在插件市场一键将 Split Screen Pro 扩展添加到浏览器",
      color: "blue",
      delay: "0s"
    },
    {
      number: 2,
      title: "自定义设置",
      description: "根据自己的需求个性化设置 Split Screen Pro 扩展程序",
      color: "emerald",
      delay: "0.2s"
    },
    {
      number: 3,
      title: "享受便利",
      description: "选择多个标签页，立即体验增强的分屏浏览体验",
      color: "purple",
      delay: "0.4s"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          使用方法
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

