'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Is SplitView Pro compatible with all browsers?',
    answer: "SplitView Pro is currently available for Safari, Chrome, and Firefox. We're actively working on expanding support to other browsers."
  },
  {
    question: 'How many windows can I split simultaneously?',
    answer: 'SplitView Pro allows you to split your browser window into up to four separate views, providing ample space for multitasking.'
  },
  {
    question: 'Is there a cost associated with using SplitView Pro?',
    answer: 'SplitView Pro is offered free of charge. We believe in providing value to our users without any hidden costs.'
  }
]

export default function AppleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

