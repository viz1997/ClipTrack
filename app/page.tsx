

"use client"
// import Image from "next/image";
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clipboard, Search, Link2, Globe, ChevronRight, ArrowRight, Zap, Shield, Users } from 'lucide-react'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'


export default function ClipTrackIntro() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative container mx-auto px-4 py-8">
        <Header />
        <MainFeatures />
        <ProductShowcase />
        <HowToUse />
        <Advantages />
        <Testimonials />
        <PricingPlans />
        <FAQ />
        <CallToAction />
        <Advertisement />
      </div>
    </div>
  )
}

function Header() {
  return (
    <motion.div 
      className="text-center py-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <img src="/placeholder.svg?height=100&width=100" alt="ClipTrack Logo" className="mx-auto h-24 w-24" />
      </motion.div>
      <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
        ClipTrack
      </h1>
      <h2 className="text-2xl font-normal mt-4 text-gray-600 mb-12">
        智能剪贴板助手 - 让信息管理更轻松
      </h2>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl text-lg font-semibold">
          <Clipboard className="mr-2 h-6 w-6" /> 立即安装
        </Button>
      </motion.div>
    </motion.div>
  )
}

function MainFeatures() {
  const features = [
    { icon: <Clipboard className="h-10 w-10" />, title: "智能剪贴", description: "自动保存您复制的文本、链接和图片" },
    { icon: <Search className="h-10 w-10" />, title: "快速搜索", description: "轻松查找和管理您保存的所有内容" },
    { icon: <Link2 className="h-10 w-10" />, title: "源链接保存", description: "自动记录内容的来源网页，方便回溯" },
    { icon: <Globe className="h-10 w-10" />, title: "跨设备同步", description: "在多个设备间无缝同步您的剪贴板" },
  ]

  return (
    <section className="py-20">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">主要功能</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden border-0">
              <CardContent className="flex flex-col items-center text-center p-8">
                <motion.div
                  className="mb-6 p-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ProductShowcase() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl my-20">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">ClipTrack 实际应用</h2>
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.5 }}
        >
          <img src="/placeholder.svg?height=600&width=800" alt="ClipTrack Interface" className="rounded-2xl shadow-2xl" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-2">智能分类</h3>
          <p className="text-gray-600">ClipTrack 自动识别并分类您的剪贴内容</p>
        </motion.div>
      </div>
    </section>
  )
}

function HowToUse() {
  const steps = [
    "安装ClipTrack浏览器插件",
    "复制任何文本、链接或图片",
    "点击浏览器工具栏中的ClipTrack图标",
    "在弹出窗口中查看和管理您的剪贴内容",
    "使用搜索功能快速找到需要的内容",
    "点击内容可以快速复制或访问原始网页"
  ]

  return (
    <section className="py-20">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">如何使用</h2>
      <Card className="max-w-4xl mx-auto overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardContent className="p-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex items-center mb-8 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold mr-6 text-lg transition-all duration-300 ease-in-out transform hover:scale-110">
                {index + 1}
              </span>
              <span className="text-gray-700 flex-1 text-lg">{step}</span>
              {index < steps.length - 1 && (
                <ArrowRight className="h-6 w-6 text-blue-400" />
              )}
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

function Advantages() {
  const advantages = [
    { icon: <Zap className="h-10 w-10" />, title: "提高效率", description: "快速访问和组织信息，节省宝贵时间" },
    { icon: <Shield className="h-10 w-10" />, title: "数据安全", description: "端到端加密，保护您的敏感信息" },
    { icon: <Users className="h-10 w-10" />, title: "协作共享", description: "轻松与团队成员分享重要剪贴内容" }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl my-20">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">为什么选择ClipTrack</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="h-full hover:shadow-2xl transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-sm overflow-hidden border-0">
              <CardContent className="flex flex-col items-center text-center p-8">
                <motion.div
                  className="mb-6 p-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {advantage.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { name: "张三", role: "自由职业者", content: "ClipTrack让我的工作效率提高了50%，再也不用担心丢失重要信息了！" },
    { name: "李四", role: "设计师", content: "作为设计师，我经常需要收集灵感。ClipTrack帮我轻松管理所有创意素材。" },
    { name: "王五", role: "学生", content: "写论文时，ClipTrack帮我整理了大量参考资料，省去了很多麻烦。" },
  ]

  return (
    <section className="py-20">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">用户评价</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-sm overflow-hidden border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function PricingPlans() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)
  const plans = [
    { name: "免费版", price: "¥0", features: ["基本剪贴功能", "本地存储", "有限的同步"] },
    { name: "专业版", price: "¥29/月", features: ["无限剪贴", "云端存储", "跨设备同步", "高级搜索", "智能分类"] },
    { name: "团队版", price: "¥99/月", features: ["所有专业版功能", "多用户支持", "团队协作工具", "优先支持", "自定义集成"] },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl my-20">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">定价方案</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredPlan(index)}
            onHoverEnd={() => setHoveredPlan(null)}
          >
            <Card className={`flex flex-col h-full transition-all duration-300 ease-in-out ${hoveredPlan === index ? 'shadow-2xl transform -translate-y-2' : 'shadow-lg'} bg-white/90 backdrop-blur-sm border-0`}>
              <CardContent className="p-8 flex-grow">
                <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                <p className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{plan.price}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-8">
                <Button className="w-full text-lg py-6" variant={index === 1 ? "default" : "outline"}>
                  选择方案
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { question: "ClipTrack是否支持所有浏览器？", answer: "目前ClipTrack支持Chrome、Firefox和Edge浏览器。我们正在努力扩展到更多平台。" },
    { question: "我的剪贴内容安全吗？", answer: "是的，您的所有数据都经过端到端加密存储，并且只有您能访问。我们非常重视用户隐私和数据安全。" },
    { question: "ClipTrack是否提供API接口？", answer: "是的，我们为专业版和团队版用户提供API接口，方便与其他工具集成。" },
    { question: "如何获取技术支持？", answer: "您可以通过我们的官方网站、在线社区或直接在插件中提交反馈来获取技术支持。我们的团队会尽快回复您的问题。" }
  ]

  return (
    <section className="py-20">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">常见问题</h2>
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="mb-6 last:mb-0 bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200">
            <AccordionTrigger className="text-left hover:no-underline p-6">
              <span className="text-xl font-semibold">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 p-6 pt-0">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl my-20 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">准备好提升您的工作效率了吗？</h2>
        <p className="text-xl mb-12">立即开始使用ClipTrack，体验智能剪贴板带来的便利！</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl text-lg font-semibold">
            <Clipboard className="mr-2 h-6 w-6" /> 免费试用14天
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function Advertisement() {
  const [activeTab, setActiveTab] = useState("cliptrack")

  const adContent = {
    cliptrack: {
      title: "ClipTrack 让您的工作更轻松",
      description: "使用ClipTrack，轻松管理您的剪贴内容，让工作更高效。",
      image: "/placeholder.svg?height=300&width=500"
    },
    google: {
      title: "Google Ads",
      description: "集成 Google 广告，获得更多收益。",
    },
    baidu: {
      title: "百度广告",
      description: "接入百度广告，拓展中国市场。",
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl my-20">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">广告展示</h2>
      <Card className="max-w-5xl mx-auto overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl">
        <CardContent className="p-10">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-10">
              <TabsTrigger value="cliptrack" className="text-lg py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-100 data-[state=active]:to-purple-100">ClipTrack</TabsTrigger>
              <TabsTrigger value="google" className="text-lg py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-100 data-[state=active]:to-purple-100">Google Ads</TabsTrigger>
              <TabsTrigger value="baidu" className="text-lg py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-100 data-[state=active]:to-purple-100">百度广告</TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              {Object.entries(adContent).map(([key, content]) => (
                <TabsContent key={key} value={key}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row items-center"
                  >
                    {key === 'cliptrack' ? (
                      <>
                        <div className="md:w-1/2 p-6">
                          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{content.title}</h3>
                          <p className="text-gray-600 mb-6 text-lg">{content.description}</p>
                          <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white transition-all duration-300 ease-out hover:from-blue-700 hover:to-purple-700">
                            <span className="relative z-10 text-lg">了解更多</span>
                            <span className="absolute inset-0 z-0 h-full translate-y-9 bg-white transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
                          </Button>
                        </div>
                        <div className="md:w-1/2 p-6">
                          <motion.img
                            // src={content.image}
                            alt={content.title}
                            className="rounded-2xl shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </>
                    ) : (
                      <div className="w-full p-6">
                        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{content.title}</h3>
                        <p className="text-gray-600 mb-6 text-lg">{content.description}</p>
                        <div className="bg-gray-100 p-8 rounded-2xl shadow-inner">
                          <p className="text-center text-gray-500">广告位置 - {key === 'google' ? 'Google Ads' : '百度广告'}</p>
                          {key === 'google' && (
                            <div className="mt-4 text-sm text-gray-600">
                              <p>要集成 Google Ads:</p>
                              <ol className="list-decimal list-inside mt-2">
                                <li>注册 Google AdSense 账户</li>
                                <li>获取您的 Google Ads 代码</li>
                                <li>将代码粘贴到此处的 div 中</li>
                              </ol>
                            </div>
                          )}
                          {key === 'baidu' && (
                            <div className="mt-4 text-sm text-gray-600">
                              <p>要集成百度广告:</p>
                              <ol className="list-decimal list-inside mt-2">
                                <li>注册百度广告联盟账户</li>
                                <li>获取您的百度广告代码</li>
                                <li>将代码粘贴到此处的 div 中</li>
                              </ol>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

