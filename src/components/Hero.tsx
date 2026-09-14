import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background-wrapper">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
          src="/NFT.mp4"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content hero-content-bottom">
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          DÉVELOPPER LE TALENT • FORGER LE CARACTÈRE • RÉVÉLER LE POTENTIEL
        </motion.p>

        <motion.div 
          className="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <Link to="/vision" className="btn-glass primary">
            DÉCOUVRIR L'ACADÉMIE <ArrowRight size={16} />
          </Link>
          <a 
            href="https://calendly.com/northfootballtraining/1heure?back=1&month=2026-08" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-glass secondary"
          >
            RÉSERVER UNE SÉANCE <Calendar size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
