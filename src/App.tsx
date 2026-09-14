import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Program from './components/Program';
import Team from './components/Team';
import Equipment from './components/Equipment';
import Success from './components/Success';
import FAQ from './components/FAQ';
import ContactLinks from './components/ContactLinks';
import Reviews from './components/Reviews';
import Conditions from './components/Conditions';
import PersonalizedSessions from './components/PersonalizedSessions';
import HolidayCamps from './components/HolidayCamps';
import Footer from './components/Footer';
import StaggeredMenu from './components/StaggeredMenu';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <StaggeredMenu
        position="right"
        isFixed={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        accentColor="#000000"
        colors={['#1a1a1a', '#333333']}
        items={[
          { label: 'Académie', link: '/programme' },
          { label: 'Stage vacances', link: '/stages-vacances' },
          { label: 'Séances personnalisées', link: '/seances-personnalisees' },
          { label: 'Boutique', link: '/boutique' },
          { label: 'FAQ', link: '/faq' },
          { label: 'Contactez-nous', link: '/rejoignez-nous' }
        ]}
        socialItems={[
          { label: 'Instagram', link: 'https://www.instagram.com/northfootballtraining/' },
          { label: 'Facebook', link: 'https://www.facebook.com/share/195sndKGhR/?mibextid=wwXIfr' },
          { label: 'WhatsApp', link: 'https://wa.me/33619886561' }
        ]}
      />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/programme" element={<Program />} />
          <Route path="/stages-vacances" element={<HolidayCamps />} />
          <Route path="/seances-personnalisees" element={<PersonalizedSessions />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/boutique" element={<Equipment />} />
          <Route path="/succes" element={<Success />} />
          <Route path="/avis" element={<Reviews />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/rejoignez-nous" element={<ContactLinks />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
