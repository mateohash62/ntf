import { motion } from 'framer-motion';
import { Target, Brain, Zap, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: <Target size={36} />,
    title: 'Maîtrise Technique d\'Élite',
    subtitle: 'Répétition & Précision',
    description: 'Premier contrôle orienté, utilisation fluide des deux pieds, dribble en 1 contre 1 et qualité d’exécution sous pression maximale.'
  },
  {
    icon: <Brain size={36} />,
    title: 'Intelligence de Jeu & Vision',
    subtitle: 'Prise d\'information & Décision',
    description: 'Scanning constant avant réception, lecture tactique de l’espace et justesse dans le choix de passe pour toujours avoir un temps d’avance.'
  },
  {
    icon: <Zap size={36} />,
    title: 'Motricité & Vitesse d\'Exécution',
    subtitle: 'Explosivité & Vivacité',
    description: 'Coordination athlétique spécifique au football, travail d’appuis dynamiques et réactivité pour faire la différence sur les premiers mètres.'
  },
  {
    icon: <ShieldCheck size={36} />,
    title: 'Mentalité & Confiance en Soi',
    subtitle: 'Caractère & Résilience',
    description: 'Apprendre à sortir de sa zone de confort, transformer l’erreur en opportunité d’apprentissage et développer un leadership naturel.'
  }
];

export default function Vision() {
  return (
    <section id="vision" className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-badge">
            Philosophie & Méthodologie
          </span>
          <h2 className="section-title text-gradient">L'ADN DE LA NFT ACADEMY</h2>
          <p className="section-subtitle">
            Une approche holistique du développement individuel pour bâtir des footballeurs complets, intelligents et audacieux.
          </p>
        </motion.div>

        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '4rem', gap: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ 
              display: 'inline-block', 
              background: 'rgba(255,255,255,0.08)', 
              padding: '0.4rem 1rem', 
              borderRadius: '20px', 
              fontSize: '0.85rem', 
              fontWeight: 600, 
              letterSpacing: '0.05em',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              COMPLÉMENTARITÉ CLUB
            </span>
            <h3 style={{ fontSize: '2rem', lineHeight: 1.2, marginBottom: '1.2rem' }}>
              Le club développe l’équipe, <br />
              <span className="text-gradient">NFT développe le joueur.</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>
              La progression d’un jeune talent ne doit pas s’arrêter aux séances collectives de son club. En découvrant de nouveaux partenaires, des contextes pédagogiques exigeants et des situations de haute intensité, chaque joueur décuple sa capacité d’adaptation.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
              Notre vocation est d’offrir un environnement d'entraînement d'élite, stimulant et bienveillant, où l’athlète est au cœur de chaque exercice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ position: 'relative', borderRadius: '1.2rem', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img 
                src="/images/vision_soccer_training.jpg" 
                alt="NFT Action Coaching" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                padding: '1.5rem', 
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' 
              }}>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', margin: 0 }}>
                  Exigence technique & intensité maximale à chaque instant
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid-4" style={{ gap: '1.5rem' }}>
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              style={{ 
                textAlign: 'left', 
                alignItems: 'flex-start', 
                padding: '2rem 1.6rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'flex-start'
              }}
            >
              <div className="card-icon" style={{ marginBottom: '1.25rem' }}>
                {pillar.icon}
              </div>
              <div style={{ minHeight: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginBottom: '0.75rem', width: '100%' }}>
                <span style={{ 
                  fontSize: '0.72rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.12em', 
                  color: 'rgba(255,255,255,0.45)', 
                  fontWeight: 700,
                  marginBottom: '0.35rem', 
                  display: 'block' 
                }}>
                  {pillar.subtitle}
                </span>
                <h3 style={{ 
                  fontSize: '1.15rem', 
                  fontWeight: 800,
                  lineHeight: 1.3, 
                  margin: 0,
                  color: '#fff',
                  letterSpacing: '-0.01em'
                }}>
                  {pillar.title}
                </h3>
              </div>
              <p style={{ 
                fontSize: '0.88rem', 
                lineHeight: 1.65, 
                color: 'rgba(255,255,255,0.65)', 
                margin: 0,
                flexGrow: 1 
              }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
