import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  FileText, 
  ShoppingCart, 
  ClipboardList, 
  Baby, 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  User, 
  Phone, 
  MessageSquare,
  AlertCircle,
  Loader2
} from 'lucide-react';

const links = [
  {
    title: 'SÉANCES PERSONNALISÉES (1-ON-1)',
    desc: 'Coaching individuel haute intensité sur-mesure',
    url: 'https://calendly.com/northfootballtraining/1heure?back=1&month=2026-08',
    icon: <Calendar />,
    badge: 'Populaire'
  },
  {
    title: 'INSCRIPTION STAGES NFT',
    desc: 'Stages vacances intensifs de perfectionnement',
    url: 'https://forms.monday.com/forms/9e06b08c9d8a5a00d6ae10040d282492?r=euc1',
    icon: <ClipboardList />,
    badge: 'Places limitées'
  },
  {
    title: 'BABY CAMP (ÉVEIL DU FOOTBALLEUR)',
    desc: 'Initiation motricité & coordination pour les plus jeunes',
    url: 'https://forms.monday.com/forms/03a3176fe99d8499520def4a9c645fed?r=euc1',
    icon: <Baby />,
  },
  {
    title: 'BROCHURE OFFICIELLE ACADÉMIE',
    desc: 'Tout savoir sur le cursus annuel et la méthode NFT',
    url: 'https://drive.google.com/file/d/1bWIx81vTXJPKr4PgEHL6WOic7yUcjBqA/view?usp=sharing',
    icon: <FileText />,
  },
  {
    title: 'BOUTIQUE OFFICIELLE NFT',
    desc: 'Packs officiels Adidas & équipements supporters',
    url: 'https://www.11teamsports.com/fr-fr/clubshop/north-football-training/',
    icon: <ShoppingCart />,
  }
];

export default function ContactLinks() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'northfcofficiel@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Inscription Académie (U6 - U9)',
    category: 'U8 (Nés en 2019)',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/northfcofficiel@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Site NFT] Nouveau message de ${formData.name} - ${formData.subject}`,
          nom: formData.name,
          email: formData.email,
          telephone: formData.phone || 'Non renseigné',
          sujet: formData.subject,
          categorie: formData.category,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Inscription Académie (U6 - U9)',
          category: 'U8 (Nés en 2019)',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage("Une erreur est survenue lors de l'envoi. Vous pouvez nous écrire directement à l'adresse email.");
      }
    } catch {
      setStatus('error');
      setErrorMessage("Impossible de joindre le serveur d'envoi. Vous pouvez nous écrire directement par email.");
    }
  };

  return (
    <section className="section-container">
      <div className="section-content" style={{ maxWidth: '720px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-badge">
            Contact & Inscriptions • NFT Family
          </span>
          <h1 className="section-title text-gradient">CONTACTEZ-NOUS</h1>
          <p className="section-subtitle">
            Accédez à toutes nos formules de perfectionnement, réservez vos séances ou envoyez-nous un message directement via le formulaire ci-dessous.
          </p>
        </motion.div>

        {/* Section 1 : Liens Rapides & Formulaires */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ marginBottom: '1.25rem', textAlign: 'left' }}>
            <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)', margin: '0 0 1rem 0.5rem' }}>
              Accès Rapides & Réservations en Ligne
            </h3>
          </div>

          <div className="links-container" style={{ gap: '1.2rem' }}>
            {links.map((link, index) => (
              <motion.a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-item card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{ flexDirection: 'row', padding: '1.4rem 1.8rem', textAlign: 'left', alignItems: 'center', position: 'relative' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="link-icon" style={{ marginRight: '1.2rem' }}>
                  {link.icon}
                </div>
                <div className="link-content" style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                    <h3 className="link-title" style={{ fontSize: '1.05rem', margin: 0, letterSpacing: '0.04em' }}>{link.title}</h3>
                    {link.badge && (
                      <span style={{ 
                        background: 'rgba(255,255,255,0.15)', 
                        fontSize: '0.7rem', 
                        fontWeight: 700, 
                        padding: '0.2rem 0.5rem', 
                        borderRadius: '10px',
                        textTransform: 'uppercase',
                        color: '#fff'
                      }}>
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.3 }}>
                    {link.desc}
                  </p>
                </div>
                <div className="link-arrow" style={{ marginLeft: '1rem' }}>
                  <ArrowRight size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Section 2 : Formulaire de Contact Connecté par Email */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(18,18,22,0.95) 100%)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '1.5rem',
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            marginBottom: '2rem',
            boxShadow: '0 25px 50px -15px rgba(0,0,0,0.8)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'left'
          }}
        >
          {/* Header du bloc formulaire */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '12px', 
                background: 'rgba(255,255,255,0.08)', 
                border: '1px solid rgba(255,255,255,0.15)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#fff'
              }}>
                <Mail size={22} />
              </div>
              <div>
                <span style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: 800, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.12em', 
                  color: 'rgba(255,255,255,0.5)', 
                  display: 'block' 
                }}>
                  Formulaire Officiel
                </span>
                <h2 style={{ fontSize: '1.35rem', color: '#fff', margin: 0 }}>
                  ENVOYER UN MESSAGE DIRECT
                </h2>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>
                {emailAddress}
              </span>
              <button
                type="button"
                onClick={copyEmail}
                className="btn-glass"
                style={{
                  padding: '0.4rem 0.75rem',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
                title="Copier l'adresse email"
              >
                {copied ? <Check size={13} color="#4ade80" /> : <Copy size={13} />}
                <span>{copied ? 'Copié' : 'Copier'}</span>
              </button>
            </div>
          </div>

          {/* Message de Succès */}
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                borderRadius: '1.2rem',
                padding: '2rem',
                textAlign: 'center',
                margin: '1rem 0'
              }}
            >
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <Check size={28} color="#4ade80" />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Votre message a été envoyé avec succès !
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                Notre staff technique a bien reçu votre demande et vous répondra dans les plus brefs délais (sous 24h à 48h).
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="btn-glass primary"
                style={{ padding: '0.65rem 1.6rem', fontSize: '0.85rem' }}
              >
                Envoyer un nouveau message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {status === 'error' && (
                <div style={{
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '0.8rem',
                  padding: '0.9rem 1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: '#fca5a5',
                  fontSize: '0.85rem'
                }}>
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Ligne 1 : Nom et Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.75)', marginBottom: '0.5rem' }}>
                    <User size={14} className="text-accent" /> Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: Alexandre Martin"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '0.75rem',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.75)', marginBottom: '0.5rem' }}>
                    <Mail size={14} className="text-accent" /> Adresse Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ex: alexandre.martin@email.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '0.75rem',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Ligne 2 : Téléphone et Sujet */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="phone" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.75)', marginBottom: '0.5rem' }}>
                    <Phone size={14} className="text-accent" /> Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ex: 06 12 34 56 78"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '0.75rem',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.75)', marginBottom: '0.5rem' }}>
                    <MessageSquare size={14} className="text-accent" /> Sujet de la demande *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: '#16161a',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      borderRadius: '0.75rem',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="Inscription Académie (U6 - U9)">Inscription Académie (U6 - U9)</option>
                    <option value="Séances Personnalisées (1v1 / Micro-groupe)">Séances Personnalisées (1v1 / Micro-groupe)</option>
                    <option value="Stages Vacances Scolaires">Stages Vacances Scolaires</option>
                    <option value="Baby Camp (Éveil du footballeur)">Baby Camp (Éveil du footballeur)</option>
                    <option value="Partenariats / Clubs / Autre">Partenariats / Clubs / Autre</option>
                  </select>
                </div>
              </div>

              {/* Ligne 3 : Catégorie d'âge de l'enfant */}
              <div>
                <label htmlFor="category" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.75)', marginBottom: '0.5rem' }}>
                  Catégorie d'âge / Année de naissance du joueur
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#16161a',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="U6 (Nés en 2021)">U6 (Nés en 2021)</option>
                  <option value="U7 (Nés en 2020)">U7 (Nés en 2020)</option>
                  <option value="U8 (Nés en 2019)">U8 (Nés en 2019)</option>
                  <option value="U9 (Nés en 2018)">U9 (Nés en 2018)</option>
                  <option value="Autre catégorie / Plus de 9 ans">Autre catégorie / Plus de 9 ans</option>
                </select>
              </div>

              {/* Ligne 4 : Message */}
              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.75)', marginBottom: '0.5rem' }}>
                  Votre Message / Précisions *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre demande, le profil du joueur, son club actuel ou vos disponibilités..."
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Bouton d'envoi */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
                  <Clock size={14} />
                  <span>Réponse sous 24h à 48h</span>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-glass primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.95rem 2.2rem',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    opacity: status === 'submitting' ? 0.7 : 1
                  }}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>ENVOI EN COURS...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>ENVOYER LE MESSAGE</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
