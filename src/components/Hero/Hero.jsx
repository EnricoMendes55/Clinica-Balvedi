import { motion } from 'framer-motion'
import s from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay },
})

export default function Hero() {
  return (
    <section id="hero" className={s.hero}>
      <div className={s.bg} aria-hidden>
        <div className={`${s.orb} ${s.orb1}`} />
        <div className={`${s.orb} ${s.orb2}`} />
      </div>

      <div className={`container ${s.inner}`}>
        <div className={s.content}>
          <motion.div {...fadeUp(0.1)}>
            <span className={s.badge}>Medicina Integrativa &amp; Nutrição</span>
          </motion.div>

          <motion.h1 className={s.title} {...fadeUp(0.2)}>
            Sua saúde é{' '}
            <span className={s.titleAccent}>nossa maior<br />dedicação</span>
          </motion.h1>

          <motion.p className={s.description} {...fadeUp(0.3)}>
            Na Clínica Balvedi, unimos medicina integrativa e nutrição personalizada
            para oferecer um cuidado completo — porque saúde de verdade vai muito além
            da ausência de doenças.
          </motion.p>

          <motion.div className={s.ctas} {...fadeUp(0.4)}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agendar Consulta →
            </button>
            <button
              className="btn-outline"
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça a Clínica
            </button>
          </motion.div>

          <motion.div className={s.stats} {...fadeUp(0.5)}>
            <div className={s.stat}>
              <p className={s.statNum}>+<span>1.200</span></p>
              <p className={s.statLabel}>Pacientes atendidos</p>
            </div>
            <div className={s.stat}>
              <p className={s.statNum}><span>8</span> anos</p>
              <p className={s.statLabel}>De experiência</p>
            </div>
            <div className={s.stat}>
              <p className={s.statNum}><span>98</span>%</p>
              <p className={s.statLabel}>Satisfação</p>
            </div>
          </motion.div>
        </div>

        <motion.div className={s.imageWrapper} {...fadeIn(0.35)}>
          <div className={s.imageGrid}>
            <div className={s.imgCard}>
              <img
                src="/img/Michel.jpg"
                alt="Dr. Michel Balvedi — Médico"
                loading="eager"
              />
              <div className={s.nameTag}>
                <p>Dr. Michel Balvedi</p>
                <span>Medicina Integrativa</span>
              </div>
            </div>
            <div className={s.imgCard}>
              <img
                src="/img/Larissa.webp"
                alt="Dra. Larissa Balvedi — Nutricionista"
                loading="eager"
              />
              <div className={s.nameTag}>
                <p>Dra. Larissa Balvedi</p>
                <span>Nutricionista</span>
              </div>
            </div>
            <div className={s.imgCard}>
              <div className={s.logoCard}>
                <img src="/img/Logo Balvedi.png" alt="Logo Clínica Balvedi" />
                <p>Clínica Balvedi</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className={s.scrollIndicator}
        onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
        role="button"
        tabIndex={0}
        aria-label="Rolar para baixo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
