import { motion } from 'framer-motion'
import s from './LifeQuality.module.css'

const tips = [
  { emoji: '💧', title: 'Hidratação é Saúde', text: 'Beber pelo menos 2L de água por dia melhora o metabolismo, a cognição e a disposição.' },
  { emoji: '🌙', title: 'Sono de Qualidade', text: 'Dormir entre 7 e 9 horas regula hormônios, fortalece o sistema imune e protege o cérebro.' },
  { emoji: '🥦', title: 'Cor no Prato', text: 'Alimentos coloridos são ricos em antioxidantes que combatem o envelhecimento celular.' },
  { emoji: '🚶', title: 'Movimento Diário', text: '30 minutos de caminhada por dia reduzem em até 35% o risco de doenças cardiovasculares.' },
  { emoji: '🧠', title: 'Saúde Mental Importa', text: 'Estresse crônico afeta diretamente a imunidade, o peso e a longevidade.' },
  { emoji: '🌿', title: 'Alimentação Antiinflamatória', text: 'Açúcar e ultraprocessados inflamam. Opte por alimentos naturais e ricos em ômega-3.' },
]

export default function LifeQuality() {
  return (
    <section id="qualidade-de-vida" className={s.section}>
      <div className={s.bg} aria-hidden />
      <div className="container">
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Qualidade de Vida</span>
          <h2 className="section-title">
            Pequenas mudanças,<br />
            <span className="gradient-text">grandes transformações</span>
          </h2>
          <div className="divider" style={{ margin: '1rem auto' }} />
          <p className="section-subtitle">
            Saúde é construída no cotidiano. Veja como pequenos hábitos podem transformar profundamente sua vida.
          </p>
        </motion.div>

        <motion.div
          className={s.heroQuote}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className={s.heroQuoteText}>
            A longevidade com qualidade não é sorte — é uma escolha que fazemos todos os dias,
            em cada refeição, em cada noite bem dormida, em cada passo dado.
          </p>
          <p className={s.heroQuoteAuthor}>— Dra. Larissa Balvedi</p>
        </motion.div>

        <div className={s.grid}>
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              className={s.tipCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <span className={s.tipEmoji}>{tip.emoji}</span>
              <h3 className={s.tipTitle}>{tip.title}</h3>
              <p className={s.tipText}>{tip.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={s.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className={s.ctaTitle}>
            Pronto para dar o primeiro passo<br />rumo a uma vida mais saudável?
          </h3>
          <p className={s.ctaDesc}>
            Agende sua consulta e descubra como a Clínica Balvedi pode transformar sua relação com a saúde.
          </p>
          <div className={s.ctaActions}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agendar Consulta →
            </button>
            <button
              className="btn-outline"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Planos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
