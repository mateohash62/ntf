import { motion } from 'framer-motion';
import { 
  CalendarDays, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ShoppingBag, 
  Check, 
  ArrowRight, 
  Target,
  MessageSquare,
  Mail,
  Trophy,
  Globe,
  Landmark,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    category: 'Catégorie U6',
    age: 'Nés en 2021',
    day: 'DIMANCHE',
    time: '9h30 - 10h45',
    duration: '1h15 d\'intensité',
    focus: 'Éveil moteur, premier contact avec le ballon & coordination motrice',
    badge: 'Sur sélection'
  },
  {
    category: 'Catégorie U7',
    age: 'Nés en 2020',
    day: 'DIMANCHE',
    time: '9h30 - 10h45',
    duration: '1h15 d\'intensité',
    focus: 'Fondamentaux techniques, conduite de balle & prises d\'appuis',
    badge: 'Sur sélection'
  },
  {
    category: 'Catégorie U8',
    age: 'Nés en 2019',
    day: 'DIMANCHE',
    time: '11h00 - 12h15',
    duration: '1h15 d\'intensité',
    focus: 'Vitesse de décision, duel 1v1, passes courtes & vision de jeu',
    badge: 'Sur sélection'
  },
  {
    category: 'Catégorie U9',
    age: 'Nés en 2018',
    day: 'DIMANCHE',
    time: '11h00 - 12h15',
    duration: '1h15 d\'intensité',
    focus: 'Jeu sous pression, orientation du corps & oppositions à thème élites',
    badge: 'Sur sélection'
  }
];

const eliteOpportunities = [
  {
    icon: <Eye size={28} />,
    title: 'Repérage par des Sélectionneurs',
    tag: 'Visibilité Pro',
    desc: 'Présence régulière de scouts, recruteurs officiels et sélectionneurs de clubs professionnels lors de nos séances, oppositions et rassemblements.'
  },
  {
    icon: <Globe size={28} />,
    title: 'Tournois Nationaux & Internationaux',
    tag: 'Confrontation Élite',
    desc: 'Participation à des tournois majeurs en France et à l’international pour se confronter aux meilleures académies et clubs européens.'
  },
  {
    icon: <Trophy size={28} />,
    title: 'Opportunités de Recrutement',
    tag: 'Passerelle Haut Niveau',
    desc: 'Passerelles directes et recommandations privilégiées vers les centres de formation professionnels (RC Lens, LOSC, VAFC) pour concrétiser le potentiel des joueurs.'
  },
  {
    icon: <Landmark size={28} />,
    title: 'Visites de Stades & Immersion Pro',
    tag: 'Inspiration & Coulisses',
    desc: 'Découverte exclusive des coulisses, vestiaires et enceintes mythiques de grands stades professionnels pour inspirer et faire grandir la passion.'
  }
];

const packItems = [
  { name: 'Maillot Adidas Officiel', desc: 'Personnalisé & floqué NFT Academy' },
  { name: 'Short d\'entraînement Adidas', desc: 'Légèreté, respirabilité & confort maximal' },
  { name: 'Chaussettes de Match Adidas', desc: 'Maintien optimal & durabilité renforcée' },
  { name: 'Pull d\'entraînement Demi-Zip', desc: 'Protection thermique pour les séances d\'hiver' },
  { name: 'Coupe-Vent Performance', desc: 'Protection tous temps & liberté de mouvement' }
];

const cycles = [
  { 
    name: 'Cycle 1', 
    theme: 'Développement Technique & Maîtrise', 
    dates: '02/09/26 au 18/10/26', 
    count: '7 séances',
    focus: 'Coordination, toucher de balle et précision du premier geste.'
  },
  { 
    name: 'Cycle 2', 
    theme: 'Prise d’Information & Lecture de Jeu', 
    dates: '04/11/26 au 20/12/26', 
    count: '7 séances',
    focus: 'Scanning, orientation du corps et anticipation des trajectoires.'
  },
  { 
    name: 'Cycle 3', 
    theme: 'Jeu sous Pression & Vitesse d\'Exécution', 
    dates: '06/01/27 au 21/02/27', 
    count: '7 séances',
    focus: 'Prise de décision rapide dans les espaces réduits et intensité.'
  },
  { 
    name: 'Cycle 4', 
    theme: 'Duel 1v1, Audace & Confiance', 
    dates: '10/03/27 au 18/04/27', 
    count: '6 séances',
    focus: 'Élimination, créativité offensive et solidité dans les duels.'
  },
  { 
    name: 'Cycle 5', 
    theme: 'Performance, Compétition & Matchs Élites', 
    dates: '05/05/27 au 27/06/27', 
    count: '8 séances',
    focus: 'Validation des acquis, oppositions à thème et tournois.'
  }
];

const highlights = [
  'Séances en effectifs réduits (10 à 12 joueurs max) pour une attention individualisée',
  'Méthode Funiño & Jeux Réduits pour multiplier les touches et prises d\'initiatives',
  'Suivi individualisé avec bilans de progression et feedbacks personnalisés',
  'Participation à des matchs et événements élites régionaux et nationaux',
  'Échanges réguliers et continus avec les familles et clubs d\'origine'
];

export default function Program() {
  return (
    <section id="programme" className="section-container" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="section-content">
        {/* En-tête de la page */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-badge">
            Cursus Annuel d'Élite 2026-2027
          </span>
          <h1 className="section-title text-gradient">L'ACADÉMIE NORTH FOOTBALL TRAINING</h1>
          <p className="section-subtitle">
            Un programme intensif de <strong>35 séances</strong> conçu pour les jeunes talents déterminés à franchir un cap technique, cognitif et athlétique.
          </p>
          <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link 
              to="/rejoignez-nous"
              className="btn-glass primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.8rem',
                fontSize: '0.85rem',
                fontWeight: 700
              }}
            >
              <Mail size={16} /> CONTACTEZ-NOUS <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Bloc Catégories, Horaires et Modalités (Sur sélection) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(20, 20, 24, 0.9) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '1.5rem',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '3.5rem',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                <Clock className="text-accent" size={24} />
                <h2 style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', margin: 0, color: '#fff' }}>
                  CATÉGORIES & CRÉNEAUX DU DIMANCHE
                </h2>
              </div>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                Séances hebdomadaires le dimanche matin au Stade Bernard Leroy (Biache-Saint-Vaast)
              </p>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.25)', padding: '0.5rem 1.1rem', borderRadius: '2rem' }}>
              <ShieldCheck size={18} color="#fff" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.12em', color: '#fff', textTransform: 'uppercase' }}>
                SUR SÉLECTION
              </span>
            </div>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '0.85rem', borderLeft: '3px solid #ffffff' }}>
            <strong>Admission sur sélection :</strong> Afin de garantir un niveau de jeu homogène, une intensité d'entraînement élevée et un suivi individualisé optimal, les places sont strictement limitées pour chaque catégorie.
          </p>

          <div className="grid-4" style={{ gap: '1.25rem' }}>
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.3)' }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'rgba(10, 10, 12, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '1.1rem',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff', letterSpacing: '0.04em' }}>
                      {cat.category}
                    </span>
                    <span style={{ 
                      fontSize: '0.7rem', 
                      fontWeight: 700, 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.08em', 
                      background: 'rgba(255,255,255,0.1)', 
                      padding: '0.2rem 0.55rem', 
                      borderRadius: '12px',
                      color: 'rgba(255,255,255,0.85)'
                    }}>
                      {cat.badge}
                    </span>
                  </div>

                  <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.65rem', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>
                    {cat.age}
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.9rem', marginBottom: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                      <CalendarDays size={16} className="text-accent" />
                      <span>{cat.day}</span>
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', letterSpacing: '0.02em' }}>
                      {cat.time}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginTop: '0.2rem' }}>
                      {cat.duration}
                    </span>
                  </div>

                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.45 }}>
                    {cat.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Opportunités d'Élite & Immersion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-badge">
              Tremplin & Expérience Haut Niveau
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 900, color: '#fff', margin: '0 0 0.75rem 0' }}>
              OPPORTUNITÉS & IMMERSION PROFESSIONNELLE
            </h2>
            <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              L’Académie NFT ne se limite pas à des séances d’entraînement d'excellence : nous créons pour nos académiciens un environnement professionnel avec une exposition directe au monde du football de haut niveau.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.25rem' }}>
            {eliteOpportunities.map((op, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.25)' }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'rgba(15, 15, 18, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '1.2rem',
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.6)'
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
                  {op.icon}
                </div>

                <span style={{ 
                  fontSize: '0.7rem', 
                  fontWeight: 800, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em', 
                  color: 'rgba(255,255,255,0.5)', 
                  marginBottom: '0.4rem' 
                }}>
                  {op.tag}
                </span>

                <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {op.title}
                </h3>

                <p style={{ margin: 0, fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                  {op.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bloc COMPOSITION DU PACK ACADÉMICIEN 2026-2027 (Mise en avant) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(16, 16, 18, 0.95) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '1.5rem',
            padding: 'clamp(1.75rem, 3.5vw, 3rem)',
            marginBottom: '3.5rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
          }}
        >
          {/* Badge Partenariat */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '56px', 
              height: '56px', 
              borderRadius: '16px', 
              background: 'rgba(255,255,255,0.06)', 
              border: '1px solid rgba(255,255,255,0.15)',
              marginBottom: '1rem'
            }}>
              <ShoppingBag size={26} className="text-accent" />
            </div>
            
            <div style={{ display: 'block', marginBottom: '0.5rem' }}>
              <span className="section-badge" style={{ background: 'rgba(255,255,255,0.08)', padding: '0.35rem 1rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                Dotation Officielle • Partenariat Adidas x 11teamsports
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.3rem)', fontWeight: 900, letterSpacing: '-0.01em', marginBottom: '0.75rem', color: '#fff' }}>
              COMPOSITION DU PACK ACADÉMICIEN 2026-2027
            </h2>

            <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Une identité professionnelle pour une exigence partagée. Chaque joueur retenu au sein de la NFT Academy reçoit son <strong>pack complet officiel Adidas</strong>, conçu pour allier confort, élégance et performance en toutes saisons.
            </p>
          </div>

          {/* Grille des 5 pièces du Pack */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '1.2rem',
            marginBottom: '2.5rem'
          }}>
            {packItems.map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '1rem', 
                  padding: '1.25rem', 
                  background: 'rgba(255,255,255,0.03)', 
                  borderRadius: '1rem',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <div style={{ 
                  background: 'rgba(255,255,255,0.12)', 
                  borderRadius: '50%', 
                  padding: '6px', 
                  marginTop: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Check size={16} color="#fff" />
                </div>
                <div>
                  <strong style={{ fontSize: '1.02rem', color: '#fff', display: 'block', marginBottom: '0.25rem' }}>
                    {item.name}
                  </strong>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>
                    {item.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bouton vers la boutique officielle */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
            <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)' }}>
              Besoin de pièces supplémentaires ou d'accessoires ?
            </span>
            <a 
              href="https://www.11teamsports.com/fr-fr/clubshop/north-football-training/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-glass primary"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.8rem 1.8rem',
                fontSize: '0.85rem',
                fontWeight: 700
              }}
            >
              BOUTIQUE OFFICIELLE 11TEAMSPORTS <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Section Les 5 Cycles et L'Expérience NFT */}
        <div className="grid-2" style={{ gap: '2.5rem', marginBottom: '3.5rem' }}>
          {/* Les 5 Cycles */}
          <motion.div 
            className="card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ alignItems: 'flex-start', textAlign: 'left', padding: '2.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CalendarDays className="text-accent" size={32} />
                <div>
                  <h3 style={{ fontSize: '1.6rem', margin: 0 }}>Les 5 Cycles de Progression</h3>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>35 séances annuelles de septembre à juin</span>
                </div>
              </div>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {cycles.map((cycle, i) => (
                <div key={i} style={{ 
                  padding: '1.2rem', 
                  background: 'rgba(255,255,255,0.03)', 
                  borderRadius: '0.8rem',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <strong style={{ color: '#fff', fontSize: '1.05rem' }}>{cycle.name} : {cycle.theme}</strong>
                    <span style={{ 
                      background: 'rgba(255,255,255,0.1)', 
                      padding: '0.2rem 0.6rem', 
                      borderRadius: '12px', 
                      fontSize: '0.75rem', 
                      fontWeight: 600 
                    }}>
                      {cycle.count}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                    <span>{cycle.dates}</span>
                  </div>
                  <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>
                    {cycle.focus}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* L'Expérience NFT Academy & Infrastructures */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <motion.div 
              className="card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ alignItems: 'flex-start', textAlign: 'left', padding: '2.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Sparkles className="text-accent" size={32} />
                <h3 style={{ fontSize: '1.6rem', margin: 0 }}>L’Expérience NFT Academy</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {highlights.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                    <CheckCircle2 size={18} style={{ color: '#fff', flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ textAlign: 'center', padding: '2.5rem', justifyContent: 'center' }}
            >
              <MapPin size={40} className="text-accent" style={{ marginBottom: '1rem' }} />
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.3rem' }}>
                Infrastructures Haut de Gamme
              </span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>STADE BERNARD LEROY</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                City stade extérieur nouvelle génération
              </p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.4rem' }}>
                62118 - Biache-Saint-Vaast
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section Candidater / Participer aux détections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: 'center',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '1.5rem',
            padding: '3rem 2rem'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.1)', padding: '0.4rem 1rem', borderRadius: '20px', marginBottom: '1rem' }}>
            <Target size={16} color="#fff" />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Inscriptions & Renseignements</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1rem', color: '#fff' }}>
            PRÊT À REJOINDRE L'ÉLITE NFT ?
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem auto', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Les détections pour la promotion 2026-2027 sont ouvertes pour les catégories U6, U7, U8 et U9. Contactez notre staff technique pour poser vos questions ou candidater.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <Link 
              to="/rejoignez-nous"
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
              <MessageSquare size={18} /> CONTACTEZ-NOUS <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
