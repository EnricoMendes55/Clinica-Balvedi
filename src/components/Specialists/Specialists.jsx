import { motion } from 'framer-motion'
import s from './Specialists.module.css'

const specialists = [
  {
    name: 'Dr. Michel Balvedi',
    role: 'Médico — Medicina Integrativa',
    photo: '/img/Michel.jpg',
    bio: 'Médico especialista em medicina integrativa e longevidade, Dr. Michel Balvedi combina o rigor da medicina baseada em evidências com uma abordagem humanizada. Pós-graduado em nutrologia e medicina do estilo de vida, ele acredita que cada paciente é único e merece um protocolo personalizado.',
    credentials: ['CRM 123456', 'Medicina Integrativa', 'Nutrologia', 'Longevidade'],
    instagram: 'https://www.instagram.com/drmichelbalvedi/',
    facebook: 'https://www.facebook.com/drmichelbalvedi/',
  },
  {
    name: 'Dra. Larissa Balvedi',
    role: 'Nutricionista — Nutrição Funcional',
    photo: '/img/Larissa.webp',
    bio: 'Nutricionista especializada em nutrição funcional e comportamento alimentar, Dra. Larissa Balvedi transforma a relação das pessoas com a comida. Com formação em nutrição clínica e fitoterápicos, ela desenvolve planos alimentares que respeitam a individualidade e promovem saúde de dentro para fora.',
    credentials: ['CRN 654321', 'Nutrição Funcional', 'Comportamento Alimentar', 'Fitoterápicos'],
    instagram: 'https://www.instagram.com/larissabalvedi/',
    facebook: null,
  },
]

export default function Specialists() {
  return (
    <section id="especialistas" className={s.section}>
      <div className="container">
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Nossa Equipe</span>
          <h2 className="section-title">
            Especialistas que <span className="gradient-text">transformam vidas</span>
          </h2>
          <div className="divider" style={{ margin: '1rem auto' }} />
          <p className="section-subtitle">
            Dois especialistas, uma missão: cuidar de você de forma completa, integrada e humana.
          </p>
        </motion.div>

        <div className={s.grid}>
          {specialists.map((sp, i) => (
            <motion.article
              key={sp.name}
              className={s.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={s.photo}>
                <img src={sp.photo} alt={sp.name} loading="lazy" />
                <div className={s.photoOverlay} aria-hidden />
              </div>
              <div className={s.body}>
                <p className={s.role}>{sp.role}</p>
                <h3 className={s.name}>{sp.name}</h3>
                <p className={s.bio}>{sp.bio}</p>
                <div className={s.credentials}>
                  {sp.credentials.map(c => (
                    <span key={c} className={s.tag}>{c}</span>
                  ))}
                </div>
                <div className={s.social}>
                  <span className={s.socialLabel}>Redes:</span>
                  <a
                    href={sp.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.socialLink}
                    aria-label={`Instagram de ${sp.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {sp.facebook && (
                    <a
                      href={sp.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.socialLink}
                      aria-label={`Facebook de ${sp.name}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
