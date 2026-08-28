import React from 'react'
import { CartProvider } from './context/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MenuSection from './components/MenuSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import VisitSection from './components/VisitSection.jsx'
import Footer from './components/Footer.jsx'
import CartPanel from './components/CartPanel.jsx'

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <MenuSection />
          <AboutSection />
          <VisitSection />
        </main>
        <Footer />
        <CartPanel />
      </div>
    </CartProvider>
  )
}