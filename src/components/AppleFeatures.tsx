import { Zap, Layout, Maximize, Sliders } from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: 'Swift Split',
    description: 'Divide your browser window in an instant.'
  },
  {
    icon: <Layout className="w-8 h-8 text-blue-600" />,
    title: 'Adaptive Layouts',
    description: 'Multiple split-screen configurations at your fingertips.'
  },
  {
    icon: <Maximize className="w-8 h-8 text-blue-600" />,
    title: 'Enhanced Productivity',
    description: 'Seamlessly view and interact with multiple pages.'
  },
  {
    icon: <Sliders className="w-8 h-8 text-blue-600" />,
    title: 'Personalized Experience',
    description: 'Tailor the extension to your unique browsing style.'
  }
]

export default function AppleFeatures() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Innovative Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

