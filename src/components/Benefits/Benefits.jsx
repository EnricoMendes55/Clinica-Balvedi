import { motion } from 'framer-motion'
import s from './Benefits.module.css'

const benefits = [
  { icon: '👥', title: 'Atendimento humanizado', desc: 'Cada paciente é único. Dedicamos tempo genuíno para entender sua história e objetivos.' },
  { icon: '🔬', title: 'Baseado em evidências', desc: 'Protocolos atualizados, com suporte científico e medicina de precisão.' },
  { icon: '🤝', title: 'Equipe multidisciplinar', desc: 'Médico e nutricionista integrados para um cuidado verdadeiramente completo.' },
  { icon: '📱', title: 'Suporte contínuo', desc: 'Contato facilitado e retornos regulares para garantir seu progresso.' },
  { icon: '🏆', title: 'Resultados comprovados', desc: 'Mais de 1.200 pacientes que transformaram sua saúde e qualidade de vida.' },
]

export default function Benefits() {
  return (
    <section id="vantagens" className={s.section}>
      <div className={s.bg} aria-hidden />
      <div className={`container ${s.inner}`}>
        <motion.div
          className={s.content}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">Por que nos escolher</span>
          <h2 className="section-title">
            Vantagens que fazem<br />
            <span className="gradient-text">toda a diferença</span>
          </h2>
          <div className="divider" />
          <div className={s.list}>
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className={s.item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={s.itemIcon}>{b.icon}</div>
                <div className={s.itemText}>
                  <p className={s.itemTitle}>{b.title}</p>
                  <p className={s.itemDesc}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={s.visual}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={s.metricCard}>
            <div className={s.metricNum}>98%</div>
            <div className={s.metricLabel}>Índice de satisfação dos pacientes</div>
          </div>
          <div className={s.metricsRow}>
            <div className={s.metricCard}>
              <div className={s.metricNum}>+1.2k</div>
              <div className={s.metricLabel}>Pacientes atendidos</div>
            </div>
            <div className={s.metricCard}>
              <div className={s.metricNum}>8+</div>
              <div className={s.metricLabel}>Anos de experiência</div>
            </div>
          </div>
          <div className={s.quote}>
            <p className={s.quoteText}>
              "Saúde não é um destino, é uma jornada. E cada passo, quando dado com o
              suporte certo, nos aproxima de uma vida mais plena e significativa."
            </p>
            <p className={s.quoteAuthor}>— Dr. Michel Balvedi</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
