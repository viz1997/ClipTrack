import { Link } from 'react-router-dom';

export default function AppleHero() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          SplitView Pro
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Redefine your browsing experience with intuitive tab management.
        </p>
        <Link 
          to="#"
          className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors"
        >
          Download Now
        </Link>
      </div>
    </section>
  )
}

