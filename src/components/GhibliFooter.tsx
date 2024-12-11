import { Link } from 'react-router-dom';
import { Twitter, GitlabIcon as GitHub, Linkedin } from 'lucide-react'

export default function GhibliFooter() {
  return (
    <footer className="bg-[#d4c5a8] py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#3a3a3a]">SplitView Pro</h3>
          <p className="text-[#5a5a5a]">Enchant your browsing experience</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-[#3a3a3a]">Magic Spells</h4>
          <ul className="space-y-2 text-[#5a5a5a]">
            <li><Link to="#" className="hover:text-[#7bb7a5] transition-colors">Enchanting Features</Link></li>
            <li><Link to="#" className="hover:text-[#7bb7a5] transition-colors">User Tales</Link></li>
            <li><Link to="#" className="hover:text-[#7bb7a5] transition-colors">Curious Questions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-[#3a3a3a]">Spirit Support</h4>
          <ul className="space-y-2 text-[#5a5a5a]">
            <li><Link to="#" className="hover:text-[#7bb7a5] transition-colors">Bathhouse of Knowledge</Link></li>
            <li><Link to="#" className="hover:text-[#7bb7a5] transition-colors">Send a Paper Plane</Link></li>
            <li><Link to="#" className="hover:text-[#7bb7a5] transition-colors">Magical Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-[#3a3a3a]">Connect with Spirits</h4>
          <div className="flex space-x-4">
            <Link to="#" className="text-[#5a5a5a] hover:text-[#7bb7a5] transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="#" className="text-[#5a5a5a] hover:text-[#7bb7a5] transition-colors">
              <GitHub size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link to="#" className="text-[#5a5a5a] hover:text-[#7bb7a5] transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-[#5a5a5a]">
        <p>&copy; 2023 SplitView Pro. All rights reserved. Inspired by the magic of Studio Ghibli.</p>
      </div>
    </footer>
  )
}

