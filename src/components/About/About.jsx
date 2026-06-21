import { motion } from 'framer-motion'
import { imgUrl } from '../../utils/assets'
import s from './About.module.css'

const cards = [
  { icon: '🩺', title: 'Medicina Integrativa', text: 'Tratamento que une o melhor da medicina convencional com práticas integrativas.' },
  { icon: '🥗', title: 'Nutrição Funcional', text: 'Planos alimentares personalizados para cada fase da sua vida.' },
  { icon: '📋', title: 'Check-up Completo', text: 'Avaliações periódicas para prevenção e promoção da saúde.' },
  { icon: '💬', title: 'Acompanhamento Contínuo', text: 'Suporte constante entre consultas para garantir seu progresso.' },
]

export default function About() {
  return (
    <section id="sobre" className={s.section}>
      <div className={`container ${s.inner}`}>
        <motion.div
          className={s.visual}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={s.imageStack}>
            <img
              className={s.imgMain}
              src={imgUrl('Logo Balvedi.jpg')}
              alt="Clínica Balvedi"
              loading="lazy"
            />
          </div>
          <div className={s.badge}>
            <div className={s.badgeNum}>2016</div>
            <div className={s.badgeLabel}>Fundada em</div>
          </div>
        </motion.div>

        <motion.div
          className={s.content}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">Sobre a Clínica</span>
          <h2 className="section-title">
            Saúde integral, cuidado<br />
            <span className="gradient-text">personalizado</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            A Clínica Balvedi nasceu da visão de que saúde verdadeira vai além do tratamento
            de sintomas. Fundada pelo casal Michel e Larissa Balvedi, a clínica oferece uma
            abordagem integrativa única, combinando medicina de precisão com nutrição
            funcional para transformar a qualidade de vida dos nossos pacientes.
          </p>
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>
            Com ambiente acolhedor e tecnologia de ponta, cada consulta é uma jornada
            rumo ao seu melhor eu — com atenção, escuta genuína e protocolos
            baseados em evidências.
          </p>

          <div className={s.cards}>
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                className={s.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={s.cardIcon}>{c.icon}</div>
                <h3 className={s.cardTitle}>{c.title}</h3>
                <p className={s.cardText}>{c.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
