const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'UX Designer',
      content: 'SplitView Pro has revolutionized my design process. Comparing designs side-by-side has never been easier.'
    },
    {
      name: 'David Chen',
      role: 'Software Engineer',
      content: 'This extension is a game-changer for coding. I can now effortlessly reference documentation while writing code.'
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Content Creator',
      content: "SplitView Pro has dramatically improved my research and content creation workflow. It's an indispensable tool."
    }
  ]
  
  export default function AppleTestimonials() {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                <p className="mb-4 text-gray-600 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  