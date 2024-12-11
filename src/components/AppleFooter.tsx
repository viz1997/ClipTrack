import { Link } from 'react-router-dom';

export default function AppleFooter() {
  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">SplitView Pro</h3>
          <p className="text-gray-600">Redefine your browsing experience</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Features</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Testimonials</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Help Center</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Twitter</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">GitHub</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">LinkedIn</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

