import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare } from 'lucide-react';

const reviews = [
  {
    author: 'Parent de Lucas (U8)',
    rating: 5,
    date: 'Saison 2025-2026',
    comment: 'Une progression technique spectaculaire en seulement quelques mois. Lucas a pris une confiance incroyable sur le terrain de son club. Les coachs sont à la fois très exigeants et ultra bienveillants.',
    highlight: 'Prise de confiance & progrès technique'
  },
  {
    author: 'Parent de Yanis (Recruté VAFC U9)',
    rating: 5,
    date: 'Saison 2025-2026',
    comment: 'La NFT Academy a été un véritable tremplin pour mon fils. Le travail sur les appuis, le premier contrôle et la vision de jeu lui a permis d’intégrer le centre de formation de Valenciennes FC. Merci à toute l’équipe !',
    highlight: 'Tremplin vers le centre pro'
  },
  {
    author: 'Parent de Mathis (U7)',
    rating: 5,
    date: 'Saison 2025-2026',
    comment: 'Le format en petits groupes et la qualité des séances font toute la différence. Rien à voir avec les entraînements de club classiques : ici, l’enfant touche le ballon des centaines de fois par séance.',
    highlight: 'Répétition & intensité maximale'
  },
  {
    author: 'Parent d’Arthur (U9)',
    rating: 5,
    date: 'Saison 2025-2026',
    comment: 'Des éducateurs diplômés et passionnés qui savent transmettre les valeurs du haut niveau : rigueur, respect, plaisir et dépassement de soi. Mon fils attend sa séance du mercredi avec impatience !',
    highlight: 'Excellence pédagogique & valeurs'
  }
];

export default function Reviews() {
  return (
    <section id="avis" className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 1rem', borderRadius: '20px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <MessageSquare size={16} className="text-accent" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
              Témoignages & Retours
            </span>
          </div>
          <h2 className="section-title text-gradient">LES AVIS DE LA NFT FAMILY</h2>
          <p className="section-subtitle">
            Découvrez les retours et expériences des parents et jeunes joueurs qui progressent au sein de notre académie chaque semaine.
          </p>
        </motion.div>

        <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ textAlign: 'left', alignItems: 'flex-start', padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {[...Array(rev.rating)].map((_, starIdx) => (
                      <Star key={starIdx} size={16} fill="#ffd700" color="#ffd700" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                    {rev.date}
                  </span>
                </div>

                <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.06)', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {rev.highlight}
                </div>

                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', margin: 0 }}>
                  <Quote size={20} style={{ opacity: 0.3, display: 'inline-block', marginRight: '6px', verticalAlign: 'top' }} />
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', width: '100%' }}>
                <strong style={{ fontSize: '0.9rem', color: '#fff', display: 'block' }}>{rev.author}</strong>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Membre NFT Academy</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
