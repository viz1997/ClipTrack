import { Link } from 'react-router-dom';
// import Image from 'next/image'

export default function GhibliHero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* <Image
          src="/ghibli-landscape.jpg"
          alt="Ghibli-inspired landscape"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
          SplitView Pro
        </h1>
        <p className="text-xl mb-8 text-white drop-shadow-md">
          Embark on a magical journey through your browser tabs
        </p>
        <Link 
          to="#"
          className="bg-[#7bb7a5] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#5a9c8a] transition-colors shadow-lg inline-flex items-center"
        >
          <span>Begin Your Adventure</span>
          {/* <Image src="/totoro-icon.png" alt="Totoro icon" width={24} height={24} className="ml-2" /> */}
        </Link>
      </div>
    </section>
  )
}

