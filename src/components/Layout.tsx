import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <div className="gradient-bg"></div>
      <div className="gradient-animate fixed inset-0 opacity-30"></div>
      <Navigation />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

