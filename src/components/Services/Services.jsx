import { motion } from 'framer-motion'
import s from './Services.module.css'

const services = [
  { icon: '🩺', title: 'Consulta Médica Integrativa', desc: 'Avaliação completa que combina medicina convencional e integrativa para diagnóstico e tratamento personalizado.' },
  { icon: '🥦', title: 'Consulta Nutricional', desc: 'Plano alimentar individualizado com base em exames, bioimpedância e objetivos de saúde.' },
  { icon: '📊', title: 'Check-up Preventivo', desc: 'Bateria de exames laboratoriais e avaliações clínicas para prevenção e detecção precoce.' },
  { icon: '🧬', title: 'Medicina de Precisão', desc: 'Protocolos baseados em genética e biomarcadores para resultados mais eficazes.' },
  { icon: '🌿', title: 'Fitoterapia & Suplementação', desc: 'Uso estratégico de plantas medicinais e suplementos com embasamento científico.' },
  { icon: '🧘', title: 'Medicina do Estilo de Vida', desc: 'Abordagem holística que integra sono, movimento, estresse e alimentação no cuidado com a saúde.' },
  { icon: '💉', title: 'Ozonioterapia', desc: 'Terapia com ozônio medicinal para modulação imunológica, dor crônica e rejuvenescimento celular.' },
  { icon: '📱', title: 'Consulta Online', desc: 'Atendimento médico e nutricional por videochamada, com a mesma qualidade da consulta presencial.' },
  { icon: '📋', title: 'Acompanhamento Nutricional', desc: 'Retornos regulares para ajuste do plano alimentar e acompanhamento de evolução e resultados.' },
]

export default function Services() {
  return (
    <section id="servicos" className={s.section}>
      <div className="container">
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Serviços & Programas</span>
          <h2 className="section-title">
            Cuidado completo para cada <span className="gradient-text">fase da sua vida</span>
          </h2>
          <div className="divider" style={{ margin: '1rem auto' }} />
          <p className="section-subtitle">
            Oferecemos uma gama de serviços integrados para cuidar da sua saúde de forma abrangente e personalizada.
          </p>
        </motion.div>

        <div className={s.grid}>
          {services.map((sv, i) => (
            <motion.div
              key={sv.title}
              className={s.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={s.iconWrap}>{sv.icon}</div>
              <h3 className={s.title}>{sv.title}</h3>
              <p className={s.desc}>{sv.desc}</p>
              <span className={s.link}>
                Saiba mais <span>→</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
