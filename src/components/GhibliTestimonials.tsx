// import Image from 'next/image'

const testimonials = [
  {
    name: 'Chihiro',
    role: 'Spirit Realm Explorer',
    content: 'SplitView Pro helped me navigate between the human and spirit worlds effortlessly!',
    avatar: '/chihiro-avatar.png'
  },
  {
    name: 'Howl',
    role: 'Moving Castle Operator',
    content: "Managing my castle's portals has never been easier. This extension is truly magical!",
    avatar: '/howl-avatar.png'
  },
  {
    name: 'Kiki',
    role: 'Delivery Witch',
    content: 'SplitView Pro allows me to manage my delivery routes and spellbook simultaneously. A must-have for any witch!',
    avatar: '/kiki-avatar.png'
  }
]

export default function GhibliTestimonials() {
  return (
    <section className="py-20 px-4 bg-[#f0e6d2]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3a3a3a]">Tales from Our Users</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#e6d7b8] p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7bb7a5] to-[#a3d9c9]"></div>
              <div className="mb-4 flex justify-center">
                {/* <Image src={testimonial.avatar} alt={testimonial.name} width={80} height={80} className="rounded-full border-4 border-[#7bb7a5]" /> */}
              </div>
              <p className="mb-4 text-[#3a3a3a] italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="text-center">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-[#5a5a5a]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

