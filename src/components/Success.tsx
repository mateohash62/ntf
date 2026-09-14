import { motion } from 'framer-motion';
import { Trophy, Star, ArrowUpRight } from 'lucide-react';

const players = [
  { 
    name: 'Adam Chaval', 
    promo: 'Promotion 2025-2026', 
    club: 'Valenciennes FC (VAFC U9)',
    image: '/images/img_29.png',
    quote: 'Progression technique & confiance en duel 1v1'
  },
  { 
    name: 'Milan Garcarz', 
    promo: 'Promotion 2025-2026', 
    club: 'Valenciennes FC (VAFC U9)',
    image: '/images/img_30.png',
    quote: 'Vitesse de décision & motricité d’élite'
  },
  { 
    name: 'Jules Baclet', 
    promo: 'Promotion 2025-2026', 
    club: 'Valenciennes FC (VAFC U9)',
    image: '/images/img_31.png',
    quote: 'Intelligence de jeu & premier contrôle orienté'
  }
];

export default function Success() {
  return (
    <section id="succes" className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 1rem', borderRadius: '20px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Trophy size={16} className="text-accent" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
              Passerelles Professionnelles
            </span>
          </div>
          <h2 className="section-title text-gradient">DES SUCCÈS CONCRETS DÈS LA SAISON 1</h2>
          <p className="section-subtitle">
            La NFT Academy est un catalyseur de talent. En combinant exigence technique et développement du caractère, nous créons un pont direct vers le football de haut niveau.
          </p>
        </motion.div>

        <div className="grid-3" style={{ gap: '2rem', marginBottom: '3rem' }}>
          {players.map((player, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              style={{ padding: '0', overflow: 'hidden', textAlign: 'left', alignItems: 'flex-start' }}
            >
              <div style={{ width: '100%', height: '360px', background: 'var(--glass-border)', position: 'relative' }}>
                <img 
                  src={player.image} 
                  alt={player.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
                
                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', padding: '0.4rem 0.8rem', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Star size={14} style={{ color: '#ffd700' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>RECRUTÉ</span>
                </div>

                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                  <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.2rem 0', fontWeight: 800, color: '#fff' }}>{player.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: 0 }}>{player.promo}</p>
                </div>
              </div>

              <div style={{ padding: '1.5rem', width: '100%', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{player.club}</span>
                  <ArrowUpRight size={18} style={{ opacity: 0.6 }} />
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, fontStyle: 'italic' }}>
                  « {player.quote} »
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid rgba(255,255,255,0.08)', 
            borderRadius: '1rem', 
            padding: '2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>
            Rejoignez une académie qui produit des résultats tangibles
          </h4>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
            Notre objectif n'est pas uniquement de former des footballeurs, mais de leur donner toutes les clés pour franchir des paliers, prendre du plaisir et concrétiser leurs rêves sportifs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
