import Hero from './components/AppleHero'
import Features from './components/AppleFeatures'
import Testimonials from './components/AppleTestimonials'
import FAQ from './components/AppleFAQ'
import CTA from './components/AppleCTA'
import Footer from './components/AppleFooter'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 function Home() {
  return (
    <main className="min-h-screen bg-[#f0e6d2] text-[#3a3a3a] font-sans">
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}





export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
    </Router>
  );
}

