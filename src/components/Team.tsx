import { motion } from 'framer-motion';

const team = [
  {
    name: 'Alexander DUEZ',
    role: 'Fondateur & Responsable Pédagogique',
    details: [
      'Conception & ingénierie de la méthode NFT',
      'Planification des cycles & contenus d’entraînement',
      'Coordination globale du staff technique'
    ],
    tag: 'Formé au RC LENS',
    image: '/images/img_7.png'
  },
  {
    name: 'Ludovic BIGOT',
    role: 'Co-fondateur & Responsable Terrain',
    details: [
      'Direction & encadrement des séances d’élite',
      'Suivi de la progression & intensité terrain',
      'Développement des programmes compétitifs'
    ],
    tag: 'Formé au VAFC',
    image: '/images/img_8.png'
  },
  {
    name: 'Evann DUCONSEIL',
    role: 'Éducateur Référent • Pédagogie & Mental',
    details: [
      'Accompagnement humain & personnalisé',
      'Développement de l’autonomie & confiance en soi',
      'Gestion de l’apprentissage par l’action'
    ],
    tag: 'Spécialiste Formation Jeunesse',
    image: '/images/img_9.png'
  },
  {
    name: 'Ismaël',
    role: 'Éducateur Référent • Maîtrise Technique',
    details: [
      'Perfectionnement technique individuel & 1v1',
      'Travail gestuel sous haute vitesse',
      'Exigence & intensité du premier contrôle'
    ],
    tag: 'Formé au LOSC',
    image: '/images/img_10.png'
  }
];

export default function Team() {
  return (
    <section id="equipe" className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-badge">
            Staff & Encadrement
          </span>
          <h2 className="section-title text-gradient">L'EXCELLENCE DU COACHING</h2>
          <p className="section-subtitle">
            Issus des meilleurs centres de formation professionnels du Nord (RC Lens, LOSC, Valenciennes FC), nos éducateurs partagent une passion commune : transmettre l’exigence du haut niveau avec bienveillance et rigueur.
          </p>
        </motion.div>

        <div className="grid-4" style={{ gap: '1.5rem' }}>
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ alignItems: 'flex-start', textAlign: 'left', padding: '0', overflow: 'hidden' }}
            >
              <div style={{ width: '100%', height: '260px', background: 'var(--glass-border)', position: 'relative' }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />
                {member.tag && (
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '12px', 
                    left: '12px',
                    background: 'rgba(0, 0, 0, 0.75)', 
                    backdropFilter: 'blur(6px)',
                    padding: '0.35rem 0.8rem', 
                    borderRadius: '20px', 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.05em',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    {member.tag}
                  </div>
                )}
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', width: '100%', boxSizing: 'border-box' }}>
                <h3 style={{ fontSize: '1.3rem', margin: '0 0 0.3rem 0', fontWeight: 800 }}>{member.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', marginBottom: '1.2rem', fontWeight: 600 }}>
                  {member.role}
                </p>
                
                <ul style={{ paddingLeft: '1.2rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0', lineHeight: 1.5 }}>
                  {member.details.map((detail, j) => (
                    <li key={j} style={{ marginBottom: '0.4rem' }}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
