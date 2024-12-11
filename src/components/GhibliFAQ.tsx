'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Can SplitView Pro transport me to the spirit realm?',
    answer: "While SplitView Pro can't physically transport you, it can certainly help you organize your spiritual research more effectively!"
  },
  {
    question: 'How many magic portals can I open simultaneously?',
    answer: 'SplitView Pro allows you to open up to four magical portals (or browser windows) at once, perfect for multitasking across different realms.'
  },
  {
    question: 'Is a magic wand required to use SplitView Pro?',
    answer: 'No magic wand necessary! SplitView Pro works with just a wave of your mouse or a tap on your trackpad.'
  },
  {
    question: 'Will SplitView Pro work in my bathhouse?',
    answer: 'SplitView Pro is designed to work in all environments, from bustling bathhouses to serene forests.'
  }
]

export default function GhibliFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-[#e6d7b8]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3a3a3a]">Curious Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#f0e6d2] rounded-lg shadow-md overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#7bb7a5]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#7bb7a5]" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#f9f3e5] border-t border-[#d4c5a8]">
                  <p className="text-[#3a3a3a]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

