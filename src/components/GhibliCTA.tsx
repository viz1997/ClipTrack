import { Link } from 'react-router-dom';
// import Image from 'next/image'

export default function GhibliCTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* <Image
          src="/ghibli-forest.jpg"
          alt="Ghibli-inspired forest"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">Ready to Embark on Your Browsing Adventure?</h2>
        <p className="text-xl mb-8 text-white drop-shadow">
          Join countless explorers and discover the magic of effortless tab management.
        </p>
        <Link 
          to="#"
          className="bg-[#7bb7a5] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#5a9c8a] transition-colors shadow-lg inline-flex items-center"
        >
          <span>Start Your Journey</span>
          {/* <Image src="/totoro-icon.png" alt="Totoro icon" width={24} height={24} className="ml-2" /> */}
        </Link>
      </div>
    </section>
  )
}

