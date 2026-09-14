import { motion } from 'framer-motion';
import { FileCheck, CheckCircle2 } from 'lucide-react';

const terms = [
  {
    title: 'Engagement & Assiduité',
    desc: 'L\'académicien s\'engage à être ponctuel et présent à chaque séance. Toute absence doit être signalée au staff au moins 24h à l\'avance.'
  },
  {
    title: 'Respect & Esprit Sportif',
    desc: 'Le respect des coéquipiers, des éducateurs, des installations et du matériel est une règle fondamentale et non négociable de la NFT Academy.'
  },
  {
    title: 'Tenue Officielle Adidas',
    desc: 'Le port du pack officiel NFT (fourni lors de l\'inscription) est obligatoire à chaque séance pour maintenir l\'unité et l\'exigence collective.'
  },
  {
    title: 'Complémentarité Club',
    desc: 'L\'inscription à la NFT Academy ne se substitue pas à la licence en club. L\'académicien continue d\'honorer ses engagements avec son club d\'origine.'
  },
  {
    title: 'Dépassement & Mentalité Positive',
    desc: 'Chaque joueur vient pour progresser et sortir de sa zone de confort. L\'écoute, l\'effort maximal et la bienveillance sont les maîtres-mots.'
  },
  {
    title: 'Sécurité & Droit à l\'Image',
    desc: 'Les séances sont encadrées par des professionnels diplômés. Les autorisations de soins et droits à l\'image sont validés lors de l\'adhésion.'
  }
];

export default function Conditions() {
  return (
    <section id="conditions" className="section-container">
      <div className="section-content" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 1rem', borderRadius: '20px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <FileCheck size={16} className="text-accent" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
              Règlement & Charte
            </span>
          </div>
          <h2 className="section-title text-gradient">CONDITIONS & CHARTE ACADÉMIE</h2>
          <p className="section-subtitle">
            L'excellence commence par un cadre clair, des valeurs partagées et le respect mutuel.
          </p>
        </motion.div>

        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          {terms.map((item, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ textAlign: 'left', alignItems: 'flex-start', padding: '1.8rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <CheckCircle2 size={20} color="#fff" style={{ opacity: 0.9, flexShrink: 0 }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: '#fff' }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
