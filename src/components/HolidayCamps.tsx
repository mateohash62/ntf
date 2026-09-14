import { motion } from 'framer-motion';
import { 
  CalendarDays, 
  Users, 
  Target, 
  Flame, 
  Trophy, 
  Smile, 
  HeartHandshake, 
  Swords, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: <CalendarDays size={28} />,
    title: '1 Semaine Complète',
    tag: 'Du Lundi au Vendredi',
    desc: '5 jours d’immersion totale avec un programme intensif et structuré pour vivre au rythme d’un joueur professionnel du matin au soir.'
  },
  {
    icon: <Users size={28} />,
    title: 'Ouvert à Tous les Joueurs',
    tag: 'Tous Niveaux & Clubs',
    desc: 'Garçons et filles, licenciés ou non, tous clubs confondus. Répartition par groupes d’âge et de niveau pour un épanouissement garanti.'
  },
  {
    icon: <Target size={28} />,
    title: 'Stage de Perfectionnement',
    tag: 'Excellence & Méthode',
    desc: 'Ateliers ciblés sur le premier contrôle, la motricité, la prise d’information rapide, le geste juste et les corrections personnalisées.'
  },
  {
    icon: <Flame size={28} />,
    title: '100% Football',
    tag: 'Immersion Totale',
    desc: 'Le ballon au centre de chaque minute : un volume de pratique, de touches et de répétitions incomparable pour franchir un vrai palier.'
  },
  {
    icon: <Trophy size={28} />,
    title: 'Matchs Amicaux & Tournois',
    tag: 'Validation des Acquis',
    desc: 'Oppositions réelles, matchs à thème et tournois de fin de semaine pour mettre en pratique les apprentissages en situation de match.'
  }
];

const values = [
  {
    icon: <Smile size={32} />,
    title: 'Le Plaisir & le Fun',
    tag: 'Passion & Sourires',
    desc: 'Le football reste avant tout un jeu. Défis ludiques, sourires, joie communicative et cohésion d’équipe sont au cœur de chaque journée.'
  },
  {
    icon: <HeartHandshake size={32} />,
    title: 'Un Environnement Sain',
    tag: 'Respect & Bienveillance',
    desc: 'Encadrement par des éducateurs diplômés et expérimentés. Respect des règles, entraide mutuelle, sécurité et valeurs éducatives fortes.'
  },
  {
    icon: <Swords size={32} />,
    title: 'La Compétition Positive',
    tag: 'Dépassement de Soi',
    desc: 'Culture de l’effort, goût du défi, duels disputés dans un esprit fair-play et célébration de la progression de chacun.'
  }
];

const schedule = [
  { time: '09h00 - 09h30', title: 'Accueil & Éveil Athlétique', desc: 'Arrivée des académiciens, mise en route dynamique et motricité.' },
  { time: '09h30 - 11h45', title: 'Séance Technique & Jeux Réduits', desc: 'Ateliers ciblés, maîtrise du ballon, passes et situations tactiques.' },
  { time: '12h00 - 13h30', title: 'Pause Déjeuner & Temps Calme', desc: 'Repas, cohésion d’équipe et échanges pédagogiques avec les coachs.' },
  { time: '13h30 - 15h00', title: 'Spécifique & Duels 1v1', desc: 'Finition face au but, élimination, vitesse d’exécution et frappes.' },
  { time: '15h00 - 16h30', title: 'Matchs Amicaux & Tournois', desc: 'Oppositions réelles à thème et tournois internes à haute intensité.' },
  { time: '16h30 - 17h00', title: 'Bilan de la Journée & Goûter', desc: 'Débriefing individuel, remise des récompenses et fin de journée.' }
];

export default function HolidayCamps() {
  return (
    <section id="stages-vacances" className="section-container" style={{ background: 'rgba(255,255,255,0.015)' }}>
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
            Stages Vacances Scolaires • NFT Immersion
          </span>
          <h1 className="section-title text-gradient">STAGES DE PERFECTIONNEMENT 100% FOOTBALL</h1>
          <p className="section-subtitle">
            Une semaine complète du <strong>Lundi au Vendredi</strong> pour progresser intensément, vivre des matchs amicaux passionnants et partager une aventure humaine inoubliable.
          </p>
          <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="https://forms.monday.com/forms/9e06b08c9d8a5a00d6ae10040d282492?r=euc1" 
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
              <CalendarDays size={18} /> S'INSCRIRE AU PROCHAIN STAGE <ArrowRight size={18} />
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

        {/* Section Les Piliers du Stage */}
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
              Au Cœur du Jeu
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', color: '#fff', margin: 0 }}>
              LE PROGRAMME & LES POINTS FORTS DU STAGE
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.25rem' 
          }}>
            {pillars.map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.25)' }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'rgba(14, 14, 17, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '1.25rem',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  boxShadow: '0 15px 30px -10px rgba(0,0,0,0.6)'
                }}
              >
                <div style={{ 
                  width: '52px', 
                  height: '52px', 
                  borderRadius: '14px', 
                  background: 'rgba(255,255,255,0.06)', 
                  border: '1px solid rgba(255,255,255,0.12)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#fff',
                  marginBottom: '1.25rem'
                }}>
                  {p.icon}
                </div>

                <span style={{ 
                  fontSize: '0.7rem', 
                  fontWeight: 800, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em', 
                  color: 'rgba(255,255,255,0.5)', 
                  marginBottom: '0.4rem' 
                }}>
                  {p.tag}
                </span>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.65rem' }}>
                  {p.title}
                </h3>

                <p style={{ margin: 0, fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Phare : LE FUN, L’ENVIRONNEMENT SAIN ET LA COMPÉTITION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(18, 18, 22, 0.95) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '1.5rem',
            padding: 'clamp(1.75rem, 3.5vw, 3rem)',
            marginBottom: '4rem',
            boxShadow: '0 25px 50px -15px rgba(0,0,0,0.8)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <span className="section-badge" style={{ background: 'rgba(255,255,255,0.08)', padding: '0.35rem 1rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
              L'ADN des Stages NFT
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.3rem)', fontWeight: 900, color: '#fff', margin: '0.75rem 0' }}>
              LE FUN, L'ENVIRONNEMENT SAIN & LA COMPÉTITION
            </h2>
            <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Nous croyons qu'un joueur progresse au maximum quand il s'épanouit dans un climat de confiance, avec la bonne dose de rigueur, de bienveillance et d'esprit de challenge.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'rgba(10, 10, 12, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  borderRadius: '1.25rem',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left'
                }}
              >
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '14px', 
                  background: 'rgba(255,255,255,0.06)', 
                  border: '1px solid rgba(255,255,255,0.15)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#fff',
                  marginBottom: '1.25rem'
                }}>
                  {v.icon}
                </div>
                <span style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: 800, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em', 
                  color: 'rgba(255,255,255,0.5)', 
                  marginBottom: '0.35rem' 
                }}>
                  {v.tag}
                </span>
                <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.75rem', fontWeight: 800 }}>
                  {v.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Déroulement d'une Journée Type */}
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
              Organisation Quotidienne
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: '#fff', margin: 0 }}>
              DÉROULEMENT D'UNE JOURNÉE TYPE
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.2rem' 
          }}>
            {schedule.map((item, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '1rem',
                  padding: '1.25rem 1.5rem',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', color: '#fff' }}>
                  <Clock size={16} className="text-accent" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.04em' }}>{item.time}</span>
                </div>
                <strong style={{ fontSize: '1.05rem', color: '#fff', display: 'block', marginBottom: '0.35rem' }}>
                  {item.title}
                </strong>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section Inscription / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: 'center',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(14,14,16,0.95) 100%)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '1.5rem',
            padding: '3rem 2rem',
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.8)'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.1)', padding: '0.4rem 1rem', borderRadius: '20px', marginBottom: '1rem' }}>
            <Sparkles size={16} color="#fff" />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Places Limitées</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1rem', color: '#fff' }}>
            RÉSERVEZ VOTRE PLACE POUR LE PROCHAIN STAGE
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem auto', color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Inscrivez votre enfant dès maintenant via notre formulaire officiel pour lui garantir une semaine 100% football, encadrée par des professionnels passionnés.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <a 
              href="https://forms.monday.com/forms/9e06b08c9d8a5a00d6ae10040d282492?r=euc1" 
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
              <CalendarDays size={18} /> FORMULAIRE D'INSCRIPTION <ArrowRight size={18} />
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
