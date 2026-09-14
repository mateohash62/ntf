import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Mon enfant peut-il continuer à jouer et s’entraîner dans son club habituel ?',
    a: 'Absolument ! La NFT Academy est une structure de développement individuel 100% complémentaire au club. Les séances sont spécifiquement programmées pour ne pas interférer avec les plannings de matchs officiels du week-end.'
  },
  {
    q: 'Quelles sont les catégories d’âge et générations concernées pour la saison 2026-2027 ?',
    a: 'Pour la saison 2026-2027, la NFT Academy accueille 4 générations de joueurs : de la catégorie U6 à U9 (enfants nés entre 2018 et 2021). Des stages et séances privées sont également proposés pour d’autres tranches d’âge.'
  },
  {
    q: 'Où se déroulent les entraînements et sur quel type de terrain ?',
    a: 'Toutes les séances se déroulent au Stade Bernard Leroy à Biache-Saint-Vaast (62118), sur un city stade extérieur nouvelle génération parfaitement adapté au jeu rapide, aux petits espaces et à la répétition technique.'
  },
  {
    q: 'Combien de séances sont planifiées sur l’année et comment s’organise le cursus ?',
    a: 'Le cursus annuel comprend 35 séances d’entraînement intensives, structurées en 5 cycles pédagogiques progressifs de septembre à juin. Des bilans individuels réguliers permettent de mesurer l’évolution de chaque joueur.'
  },
  {
    q: 'Comment les joueurs sont-ils évalués et accompagnés ?',
    a: 'Chaque académicien bénéficie d’un suivi individualisé par notre équipe d’éducateurs formés en centres professionnels. Nous définissons des axes de travail précis (technique, tactique, motricité, mental) et partageons des retours continus avec les parents.'
  },
  {
    q: 'L’équipement officiel Adidas est-il obligatoire et peut-on commander des pièces supplémentaires ?',
    a: 'Chaque joueur inscrit reçoit le Pack Académicien officiel Adidas personnalisé. Une boutique officielle en ligne avec notre partenaire 11teamsports permet de commander des pièces supplémentaires et tenues supporters à tarifs préférentiels.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-container" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="section-content" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-badge">
            Questions Fréquentes
          </span>
          <h2 className="section-title text-gradient">VOS QUESTIONS, NOS RÉPONSES</h2>
          <p className="section-subtitle">
            Découvrez tout ce qu’il faut savoir sur le fonctionnement, les exigences et la vie à la NFT Academy.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card"
              style={{ padding: '0', overflow: 'hidden', alignItems: 'stretch', textAlign: 'left' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontFamily: 'inherit',
                  textAlign: 'left'
                }}
              >
                <strong style={{ paddingRight: '1rem' }}>{faq.q}</strong>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
