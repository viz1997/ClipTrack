
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import CommentsSection from './components/CommentsSection'
import FAQSection from './components/FAQSection'
import HowItWorksSection from './components/HowItWorksSection'
import CTASection from './components/CTASection'

function Home() {


  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <CommentsSection />
      <FAQSection />
      <HowItWorksSection />
      <CTASection />
    </Layout>
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

