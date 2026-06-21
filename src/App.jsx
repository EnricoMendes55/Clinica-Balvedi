import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Specialists from './components/Specialists/Specialists'
import Services from './components/Services/Services'
import Benefits from './components/Benefits/Benefits'
import Plans from './components/Plans/Plans'
import LifeQuality from './components/LifeQuality/LifeQuality'
import Consultation from './components/Consultation/Consultation'
import FAQ from './components/FAQ/FAQ'
import Location from './components/Location/Location'
import LeadCapture from './components/LeadCapture/LeadCapture'
import ChatBot from './components/ChatBot/ChatBot'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialists />
        <Services />
        <Benefits />
        <Plans />
        <LifeQuality />
        <Consultation />
        <FAQ />
        <Location />
        <LeadCapture />
      </main>
      <Footer />
      <ChatBot />
    </>
  )
}
