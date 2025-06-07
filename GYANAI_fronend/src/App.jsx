import './App.css'
// import Navbar from '/src/components/Navbar';
import  Navbar  from '/src/Components/Navbar.jsx';
import HeroSection from '/src/Components/HeroSection.jsx';
import Features from '/src/Components/Features.jsx';
import HowItWorks from '/src/Components/HowItWorks.jsx';
import WhyUse from '/src/Components/WhyUse.jsx';
import Footer from '/src/Components/Footer.jsx';

function App() {
  return (
    <>
    
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <WhyUse />
      <Footer />

      
    </>
  )
}

export default App;
