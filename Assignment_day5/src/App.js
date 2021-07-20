import React from 'react'
import './App.css';
import NavBar from './Comp/NavBar'
import HeroSection from './Comp/HeroSection'
import FeatureSection from './Comp/FeatureSection'
import CardSection from './Comp/CardSection'
import FooterSection from './Comp/FooterSection'

function App() {
  return (
    <div>
        <NavBar />
        <FeatureSection />
        <HeroSection />
        <CardSection />
        <FooterSection />

    </div>
  )
}

export default App;
