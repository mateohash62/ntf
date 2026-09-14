import { motion } from 'framer-motion';
import { ShoppingBag, Check, ArrowRight } from 'lucide-react';

const packItems = [
  { name: 'Maillot Adidas Officiel', desc: 'Personnalisé & floqué NFT Academy' },
  { name: 'Short d\'entraînement Adidas', desc: 'Légèreté, respirabilité & confort maximal' },
  { name: 'Chaussettes de Match Adidas', desc: 'Maintien optimal & durabilité renforcée' },
  { name: 'Pull d\'entraînement Demi-Zip', desc: 'Protection thermique pour les séances d\'hiver' },
  { name: 'Coupe-Vent Performance', desc: 'Protection tous temps & liberté de mouvement' }
];

export default function Equipment() {
  return (
    <section id="boutique" className="section-container" style={{ position: 'relative', background: 'linear-gradient(180deg, rgba(255,255,255,0.01) 0%, transparent 100%)' }}>
      <div className="section-content" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '56px', 
            height: '56px', 
            borderRadius: '16px', 
            background: 'rgba(255,255,255,0.04)', 
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '1.25rem'
          }}>
            <ShoppingBag size={24} className="text-accent" />
          </div>
          
          <span className="section-badge" style={{ display: 'block' }}>
            Identité Visuelle & Équipement Pro
          </span>
          <h2 className="section-title text-gradient">LE PACK OFFICIEL NFT ACADEMY</h2>
          
          <p className="section-subtitle">
            Une identité commune pour une exigence partagée. En partenariat exclusif avec <strong>Adidas</strong> et <strong>11teamsports</strong>, chaque académicien reçoit une panoplie professionnelle complète conçue pour la performance et le confort tout au long de la saison.
          </p>
        </motion.div>

        <div style={{ 
          background: 'rgba(20, 20, 20, 0.6)', 
          border: '1px solid var(--glass-border)', 
          borderRadius: '1.2rem', 
          padding: '2rem', 
          marginBottom: '2.5rem',
          textAlign: 'left'
        }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', color: '#fff', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Composition du Pack Académicien 2026-2027
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {packItems.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', padding: '0.8rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '50%', padding: '4px', marginTop: '2px' }}>
                  <Check size={14} color="#fff" />
                </div>
                <div>
                  <strong style={{ fontSize: '0.95rem', color: '#fff', display: 'block' }}>{item.name}</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a 
            href="https://www.11teamsports.com/fr-fr/clubshop/north-football-training/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-glass primary"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '0.8rem',
              padding: '1rem 2.5rem',
              fontSize: '0.9rem'
            }}
          >
            ACCÉDER À LA BOUTIQUE OFFICIELLE <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
