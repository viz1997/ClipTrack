import React, { useState } from 'react'

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <button
        className="faq-question w-full text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="faq-answer mt-4 text-gray-300">
          {answer}
        </div>
      )}
    </div>
  )
}

const FAQSection: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Split Screen Pro 扩展是免费的吗？",
      answer: "是的，Split Screen Pro 扩展完全免费。我们致力于为用户提供高质量的分屏体验，没有任何隐藏费用或付费功能。"
    },
    {
      question: "Split Screen Pro 支持哪些类型的网页分屏？",
      answer: "Split Screen Pro 支持所有类型的网页分屏，包括但不限于视频网站、文档、社交媒体等。您可以自由组合不同类型的网页，最多支持同时打开4个窗口。但是由于部分网站的安全限制，可能无法正常分屏。"
    },
    {
      question: "如何调整分屏窗口的大小？",
      answer: "插件默认等分各部分内容，只需用鼠标拖动窗口之间的分隔线即可调整各部分内容的大小。"
    },
    {
      question: "Split Screen Pro 会影响浏览器性能吗？",
      answer: "Split Screen Pro 采用了高效的性能优化设计，对浏览器性能的影响极小。即使在同时打开多个窗口的情况下，也能保持流畅的使用体验。"
    },
    {
      question: "打开分屏标签页后，如何处理原始标签页？",
      answer: "您可以在设置中选择分屏后是否关闭原标签页，以及关闭分屏后是否恢复原标签页。自定义设置会一直保持生效。"
    },
    {
      question: "Split Screen Pro 支持快捷键操作吗？",
      answer: "是的，Split Screen Pro 提供默认的快捷键支持(Ctrl+Shift+S/Command+Shift+S)。您也可以在扩展管理中进行更改。"
    },
    {
      question: "如何快速联系我们？",
      answer: "您有任何问题都可以添加微信好友 yeheboo 或者邮件联系 freeourdays@gmail.com，我们会尽快回复。"
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          常见问题
        </h2>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection

