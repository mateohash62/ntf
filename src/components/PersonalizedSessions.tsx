import { motion } from 'framer-motion';
import { 
  User, 
  Users, 
  Target, 
  HeartHandshake, 
  Eye, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: <Users size={28} />,
    title: 'Ouvert à Tous',
    badge: 'Tous Niveaux & Âges',
    description: 'Accessible à tous les profils (débutants en quête de bases solides, joueurs de club compétitif ou jeunes en préparation de tests/détections).'
  },
  {
    icon: <Target size={28} />,
    title: 'Aspect Technique',
    badge: 'Précision & Répétition',
    description: 'Travail chirurgical du premier contrôle orienté, motricité des deux pieds, finition, passes sous contrainte et élimination en 1v1.'
  },
  {
    icon: <HeartHandshake size={28} />,
    title: 'Confiance en Soi',
    badge: 'Mental & Affirmation',
    description: 'Dépassement de la peur de rater, renforcement de la détermination mentale et acquisition d’une posture positive et audacieuse sur le terrain.'
  },
  {
    icon: <Eye size={28} />,
    title: 'Prise d’Information',
    badge: 'Vision & Anticipation',
    description: 'Scanning constant pré-réception, vision périphérique, orientation corporelle avant de recevoir et vitesse de prise de décision en situation réelle.'
  }
];

const formats = [
  {
    title: 'One on One (1v1)',
    subtitle: 'Séance 100% Individuelle',
    tag: 'Sur-Mesure Absolu',
    duration: '1 heure d\'entraînement intensif',
    target: '1 Joueur / 1 Coach Dédié',
    points: [
      'Diagnostic technique et athlétique complet personnalisé',
      'Volume de répétitions et de touches de balle maximal',
      'Corrections immédiates du geste et feedbacks en direct',
      'Travail adapté au profil, aux objectifs et au poste du joueur',
      'Idéal pour cibler un point d\'amélioration spécifique'
    ],
    highlight: false
  },
  {
    title: 'Small Group',
    subtitle: 'Micro-Groupe d\'Élite',
    tag: 'Maximum 4 Joueurs',
    duration: '1 heure d\'émulation tactique',
    target: '2 à 4 Joueurs Maximum',
    points: [
      'Duels 1v1, 2v1 et 2v2 à haute intensité',
      'Prise d\'information et jeu sous pression adverse',
      'Émulation collective et esprit de compétition bienveillant',
      'Ratio coach/joueur ultra-privilégié garantissant l\'attention personnalisée',
      'Idéal entre coéquipiers ou amis de niveau homogène'
    ],
    highlight: true
  }
];

export default function PersonalizedSessions() {
  return (
    <section id="seances-personnalisees" className="section-container" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="section-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-badge">
            Accompagnement Sur-Mesure • NFT Performance
          </span>
          <h1 className="section-title text-gradient">SÉANCES PERSONNALISÉES</h1>
          <p className="section-subtitle">
            Un encadrement d'élite individualisé pour accélérer votre progression technique, cognitif et mental avec des coachs formés au haut niveau.
          </p>
          <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="https://calendly.com/northfootballtraining/1heure?back=1&month=2026-08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-glass primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 1.8rem',
                fontSize: '0.88rem',
                fontWeight: 700
              }}
            >
              <Calendar size={18} /> RÉSERVER UN CRÉNEAU EN LIGNE
            </a>
            <Link 
              to="/rejoignez-nous"
              className="btn-glass"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.8rem',
                fontSize: '0.88rem',
                fontWeight: 700
              }}
            >
              <MessageSquare size={16} /> CONTACTEZ-NOUS
            </Link>
          </div>
        </motion.div>

        {/* Les 4 Piliers Fondamentaux */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: 'rgba(255,255,255,0.5)',
              display: 'block',
              marginBottom: '0.5rem'
            }}>
              Méthodologie Spécifique
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: '#fff', margin: 0 }}>
              LES PILIERS DU PERFECTIONNEMENT INDIVIDUEL
            </h2>
          </div>

          <div className="grid-4" style={{ gap: '1.3rem' }}>
            {pillars.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="card"
                style={{ padding: '1.75rem', justifyContent: 'flex-start', textAlign: 'left' }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  background: 'rgba(255,255,255,0.06)', 
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.2rem',
                  color: '#fff'
                }}>
                  {p.icon}
                </div>
                <span style={{ 
                  fontSize: '0.7rem', 
                  fontWeight: 700, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.08em', 
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '0.35rem'
                }}>
                  {p.badge}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formats de Séances : One on One vs Small Group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: 'rgba(255,255,255,0.5)',
              display: 'block',
              marginBottom: '0.5rem'
            }}>
              Deux Formules au Choix
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: '#fff', margin: 0 }}>
              ONE ON ONE OU SMALL GROUP
            </h2>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {formats.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: f.highlight 
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(18,18,22,0.95) 100%)' 
                    : 'rgba(14,14,16,0.85)',
                  border: f.highlight ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.09)',
                  borderRadius: '1.4rem',
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 15px 35px -10px rgba(0,0,0,0.6)',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {i === 0 ? <User size={24} className="text-accent" /> : <Users size={24} className="text-accent" />}
                      <h3 style={{ fontSize: '1.6rem', color: '#fff', margin: 0 }}>
                        {f.title}
                      </h3>
                    </div>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 800, 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      background: 'rgba(255,255,255,0.12)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '16px',
                      color: '#fff'
                    }}>
                      {f.tag}
                    </span>
                  </div>

                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    {f.subtitle} • {f.duration}
                  </p>

                  <div style={{ 
                    background: 'rgba(255,255,255,0.03)', 
                    borderRadius: '0.9rem', 
                    padding: '1.25rem', 
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.06)'
                  }}>
                    <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>
                      Programme de la séance :
                    </strong>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {f.points.map((pt, pIdx) => (
                        <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>
                          <CheckCircle2 size={16} color="#fff" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                    Effectif : <strong style={{ color: '#fff' }}>{f.target}</strong>
                  </span>
                  <a
                    href="https://calendly.com/northfootballtraining/1heure?back=1&month=2026-08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.4rem',
                      fontSize: '0.85rem',
                      fontWeight: 700
                    }}
                  >
                    RÉSERVER <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bloc CTA & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: 'center',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(14,14,16,0.9) 100%)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '1.5rem',
            padding: '3rem 2rem',
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.8)'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.1)', padding: '0.4rem 1rem', borderRadius: '20px', marginBottom: '1rem' }}>
            <Sparkles size={16} color="#fff" />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Planning & Disponibilités</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1rem', color: '#fff' }}>
            PLANIFIEZ VOTRE PROCHAINE SÉANCE
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem auto', color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Choisissez directement votre créneau sur notre calendrier en ligne ou contactez notre équipe pour organiser une session sur-mesure pour votre club ou groupe d'amis.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <a 
              href="https://calendly.com/northfootballtraining/1heure?back=1&month=2026-08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-glass primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.7rem',
                padding: '1.05rem 2.5rem',
                fontSize: '0.95rem',
                fontWeight: 700
              }}
            >
              <Calendar size={18} /> RÉSERVER SUR CALENDLY <ArrowRight size={18} />
            </a>
            <Link 
              to="/rejoignez-nous"
              className="btn-glass"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '1.05rem 2.2rem',
                fontSize: '0.95rem',
                fontWeight: 700
              }}
            >
              <MessageSquare size={18} /> CONTACTEZ-NOUS
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
