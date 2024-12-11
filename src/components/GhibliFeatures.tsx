// import Image from 'next/image'

const features = [
  {
    icon: '/soot-sprite.png',
    title: 'Magical Split',
    description: 'Divide your browser window with the ease of Ghibli magic'
  },
  {
    icon: '/cat-bus.png',
    title: 'Whimsical Layouts',
    description: 'Arrange your tabs in delightful, fantastical configurations'
  },
  {
    icon: '/kodama.png',
    title: 'Spirited Productivity',
    description: 'Enhance your workflow with the efficiency of forest spirits'
  },
  {
    icon: '/jiji.png',
    title: 'Charming Customization',
    description: 'Personalize your browsing experience with magical touches'
  }
]

export default function GhibliFeatures() {
  return (
    <section className="py-20 px-4 bg-[#e6d7b8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3a3a3a]">Enchanting Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#f0e6d2] p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4 flex justify-center">
                {/* <Image src={feature.icon} alt={feature.title} width={64} height={64} /> */}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-[#3a3a3a] text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

