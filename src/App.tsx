import { useState, useEffect } from 'react';
// import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import StarBackground from './components/StarBackground';
import MarqueeText from './components/MarqueeText';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Tickets from './components/Tickets';
import Footer from './components/Footer';
import { PopupExperience } from './components/PopupExperience';
import { WhatsappLogo, Sparkle } from '@phosphor-icons/react';
import FAQ from './components/Faq';

function App() {
  const [ticketsSold, setTicketsSold] = useState(77);
  const totalTickets = 200;
  const remainingTickets = totalTickets - ticketsSold;
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const showRandomNotification = () => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 30000);
      setTicketsSold((prev) => Math.min(prev + 1, totalTickets));
    };

    const notificationInterval = setInterval(showRandomNotification, 30000);
    return () => clearInterval(notificationInterval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
      <PopupExperience />
      <StarBackground />
      {/* <Header /> */}
      <Hero />
      <MarqueeText />
      <About />
      <Stats
        totalTickets={totalTickets}
        ticketsSold={ticketsSold}
        remainingTickets={remainingTickets}
      />
      <Timeline />
      <Tickets />
      <FAQ />
      <MarqueeText />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5521989825798"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[175px] md:bottom-8 right-6 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-green-500 
          rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 
          transition-all duration-300 z-50"
      >
        <WhatsappLogo className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </a>

      {/* Fake Notification */}
      {showNotification && (
        <div
          className="fixed bottom-20 md:bottom-24 right-6 md:right-8 bg-white/10 backdrop-blur-md 
          rounded-lg p-4 shadow-lg animate-slide-up z-50 max-w-[calc(100%-3rem)] md:max-w-sm"
        >
          <div className="flex items-center space-x-3">
            <Sparkle className="w-5 h-5 md:w-6 md:h-6 text-purple-300 flex-shrink-0" />
            <p className="text-white text-sm md:text-base">
              Mais um ingresso vendido! Restam apenas {remainingTickets}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
