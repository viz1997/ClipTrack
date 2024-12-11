import { Link } from 'react-router-dom';

export default function AppleCTA() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Browsing?</h2>
        <p className="text-xl mb-8 text-gray-600">
          Join thousands of satisfied users and experience a new level of web browsing efficiency.
        </p>
        <Link 
          to="#"
          className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors"
        >
          Get SplitView Pro
        </Link>
      </div>
    </section>
  )
}

