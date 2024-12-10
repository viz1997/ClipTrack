import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import CommentsSection from '../components/CommentsSection'
import FAQSection from '../components/FAQSection'
import HowItWorksSection from '../components/HowItWorksSection'
import CTASection from '../components/CTASection'

const HomePage: React.FC = () => {
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

export default HomePage

