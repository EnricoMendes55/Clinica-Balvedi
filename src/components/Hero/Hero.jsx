import { motion } from 'framer-motion'
import s from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

const BG_IMAGE = 'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=1740&auto=format&fit=crop'

const floatingOrbs = [
  { w: 320, h: 320, top: '15%', left: '5%', delay: 0, duration: 18, color: '#74704b' },
  { w: 200, h: 200, top: '60%', left: '2%', delay: 3, duration: 22, color: '#dce2c6' },
  { w: 260, h: 260, top: '20%', right: '8%', delay: 1.5, duration: 20, color: '#74704b' },
  { w: 140, h: 140, top: '55%', right: '15%', delay: 4, duration: 16, color: '#b1ad99' },
  { w: 80, h: 80, top: '35%', left: '40%', delay: 2, duration: 14, color: '#dce2c6' },
]

const particles = [
  { size: 5, left: '12%', delay: 0, duration: 10 },
  { size: 3, left: '28%', delay: 2.5, duration: 13 },
  { size: 6, left: '52%', delay: 1, duration: 11 },
  { size: 4, left: '68%', delay: 3.5, duration: 9 },
  { size: 3, left: '80%', delay: 0.8, duration: 14 },
  { size: 5, left: '90%', delay: 2, duration: 12 },
  { size: 4, left: '38%', delay: 4, duration: 10 },
]

export default function Hero() {
  return (
    <section id="hero" className={s.hero}>
      {/* Background image */}
      <div
        className={s.bgImage}
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        aria-hidden
      />

      {/* Dark overlay */}
      <div className={s.overlay} aria-hidden />

      {/* Top fade — navbar blend */}
      <div className={s.topFade} aria-hidden />

      {/* Bottom fade — transition to content */}
      <div className={s.bottomFade} aria-hidden />

      {/* Floating ambient orbs */}
      <div className={s.orbs} aria-hidden>
        {floatingOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className={s.orb}
            style={{
              width: orb.w,
              height: orb.h,
              top: orb.top,
              left: orb.left,
              right: orb.right,
              background: `radial-gradient(circle, ${orb.color}44 0%, transparent 70%)`,
            }}
            animate={{
              y: [0, -24, 0],
              scale: [1, 1.08, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className={s.particles} aria-hidden>
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className={s.particle}
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
            }}
            animate={{
              y: [0, -90, -180],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`container ${s.inner}`}>
        <div className={s.content}>
          <motion.div {...fadeUp(0.15)}>
            <span className={s.badge}>
              <span className={s.badgeDot} />
              Medicina Integrativa &amp; Nutrição
            </span>
          </motion.div>

          <motion.h1 className={s.title} {...fadeUp(0.3)}>
            Sua saúde é{' '}
            <span className={s.titleAccent}>nossa maior<br />dedicação</span>
          </motion.h1>

          <motion.p className={s.description} {...fadeUp(0.45)}>
            Na Clínica Balvedi, unimos medicina integrativa e nutrição personalizada
            para oferecer um cuidado completo — porque saúde de verdade vai muito além
            da ausência de doenças.
          </motion.p>

          <motion.div className={s.ctas} {...fadeUp(0.6)}>
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

          <motion.div className={s.stats} {...fadeUp(0.75)}>
            <div className={s.stat}>
              <p className={s.statNum}>+<span>1.200</span></p>
              <p className={s.statLabel}>Pacientes atendidos</p>
            </div>
            <div className={s.statDivider} />
            <div className={s.stat}>
              <p className={s.statNum}><span>8</span> anos</p>
              <p className={s.statLabel}>De experiência</p>
            </div>
            <div className={s.statDivider} />
            <div className={s.stat}>
              <p className={s.statNum}><span>98</span>%</p>
              <p className={s.statLabel}>Satisfação</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={s.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
        role="button"
        tabIndex={0}
        aria-label="Rolar para baixo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
