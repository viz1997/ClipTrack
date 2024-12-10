import React from 'react'

interface Comment {
  initial: string;
  name: string;
  role: string;
  content: string;
  gradientFrom: string;
  gradientTo: string;
}

const CommentCard: React.FC<Comment> = ({ initial, name, role, content, gradientFrom, gradientTo }) => (
  <div className="comment-card glass-morphism p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-${gradientFrom} to-${gradientTo} flex items-center justify-center text-white font-bold text-xl`}>
        {initial}
      </div>
      <div className="ml-4">
        <h4 className="font-bold">{name} - {role}</h4>
        <div className="flex text-yellow-400">
          ★★★★★
        </div>
      </div>
    </div>
    <p className="text-gray-300 leading-relaxed">{content}</p>
  </div>
)

const CommentsSection: React.FC = () => {
  const comments: Comment[] = [
    {
      initial: "L",
      name: "李小姐",
      role: "翻译工作者",
      content: "作为一名翻译，经常需要对照原文和译文。Split Screen Pro 可以让我可以同时查看两个文档，大大提高了工作效率。分屏布局灵活实用！",
      gradientFrom: "blue-400",
      gradientTo: "purple-400"
    },
    {
      initial: "Z",
      name: "张先生",
      role: "程序开发者",
      content: "作为一名程序开发者，使用Split Screen Pro 非常方便，可以同时查看两个文档，提高工作效率。界面设计也很漂亮！",
      gradientFrom: "emerald-400",
      gradientTo: "teal-400"
    },
    {
      initial: "W",
      name: "王教授",
      role: "学术研究员",
      content: "对比阅读学术论文时，这个工具帮了大忙！可以同时打开多篇论文，做文献综述时效率提高了不少。界面简洁专业，完全不会分散注意力。",
      gradientFrom: "rose-400",
      gradientTo: "pink-400"
    },
    {
      initial: "C",
      name: "陈同学",
      role: "在校研究生",
      content: "写论文时经常需要参考多个文献，Split Screen Pro 让我可以同时打开多个PDF，做笔记对比特别方便。最棒的是它完全免费，对学生来说太友好了！",
      gradientFrom: "amber-400",
      gradientTo: "orange-400"
    },
    {
      initial: "L",
      name: "刘女士",
      role: "内容创作者",
      content: "做内容创作需要同时查看多个资料，这个插件帮我节省了很多时间。分屏功能超级实用，再也不用在多个标签页之间来回切换了。强烈推荐！",
      gradientFrom: "indigo-400",
      gradientTo: "violet-400"
    },
    {
      initial: "W",
      name: "吴先生",
      role: "金融分析师",
      content: "经常需要对比多个金融报表和市场数据，Split Screen Pro 让我的工作效率提升了一个档次。界面简洁，操作直观，是我每天必用的工具。",
      gradientFrom: "cyan-400",
      gradientTo: "blue-400"
    },
    {
      initial: "Z",
      name: "赵女士",
      role: "法律顾问",
      content: "对比合同文件时这个工具特别好用，可以同时打开多份文件进行比对，极大提高了工作效率。",
      gradientFrom: "fuchsia-400",
      gradientTo: "purple-400"
    },
    {
      initial: "Z",
      name: "郑先生",
      role: "设计师",
      content: "作为UI设计师，经常需要参考多个设计方案。Split  Screen Pro不仅让我能够同时查看多个设计稿，还能保持页面整洁有序，太赞了！",
      gradientFrom: "lime-400",
      gradientTo: "green-400"
    },
    {
      initial: "H",
      name: "黄同学",
      role: "考研学生",
      content: "备考期间用这个插件复习太方便了！可以同时打开视频课程和笔记，或者对比不同的复习资料。完全免费还这么好用，真心感谢开发者！",
      gradientFrom: "red-400",
      gradientTo: "rose-400"
    }
  ];

  return (
    <section id="comments" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          用户评价
        </h2>
        <div className="comments-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comments.map((comment, index) => (
            <CommentCard key={index} {...comment} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommentsSection

