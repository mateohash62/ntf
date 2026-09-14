import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const socials = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/33619886561',
    icon: <MessageCircle size={24} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/northfootballtraining/',
    icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/195sndKGhR/?mibextid=wwXIfr',
    icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@northfootballtraining?_t=ZN-8yesFbHLcOd&_r=1',
    icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /><path d="M15 8a4 4 0 1 0 4-4" /><line x1="15" y1="2" x2="15" y2="14" /></svg>,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@northfootballtraining?si=wpDWMP5Gw32MEp_6',
    icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>,
  },
  {
    name: 'Email',
    url: 'mailto:northfcofficiel@gmail.com',
    icon: <Mail size={24} />,
  }
];

export default function Footer() {
  return (
    <footer style={{ padding: '4rem 2rem 2rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.6)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.5rem 0', color: '#fff' }}>
          NORTH FOOTBALL TRAINING
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
          Construire aujourd’hui les joueurs de demain • Rejoins la NFT Family
        </p>
      </div>

      <motion.div 
        className="socials-container"
        style={{ justifyContent: 'center', marginTop: 0, paddingBottom: '2rem' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {socials.map((social, index) => (
          <a 
            key={index} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={social.name}
            style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}
          >
            {social.icon}
          </a>
        ))}
      </motion.div>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', margin: 0 }}>
        © {new Date().getFullYear()} North Football Training. Tous droits réservés.
        <br />
        Créé par <a href="https://studiostatic.net" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>studiostatic.net</a>
      </p>
    </footer>
  );
}
