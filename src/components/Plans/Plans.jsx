import { motion } from 'framer-motion'
import s from './Plans.module.css'

const plans = [
  {
    name: 'Essencial',
    price: '290',
    desc: 'Ideal para quem está começando a cuidar da saúde com acompanhamento profissional.',
    features: [
      '1 consulta médica por trimestre',
      '1 consulta nutricional por trimestre',
      'Avaliação de bioimpedância',
      'Plano alimentar inicial',
      'Acesso ao portal do paciente',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    price: '590',
    desc: 'Acompanhamento completo para quem quer transformar a saúde de forma sustentável.',
    features: [
      '2 consultas médicas por trimestre',
      '2 consultas nutricionais por trimestre',
      'Check-up laboratorial semestral',
      'Plano alimentar personalizado e revisado',
      'Suporte via mensagem entre consultas',
      'Desconto em exames parceiros',
    ],
    featured: true,
  },
  {
    name: 'Elite',
    price: '990',
    desc: 'O máximo em cuidado preventivo e longevidade para quem não abre mão do melhor.',
    features: [
      'Consultas médicas ilimitadas',
      'Consultas nutricionais ilimitadas',
      'Check-up completo trimestral',
      'Protocolos de longevidade personalizados',
      'Atendimento prioritário e online',
      'Programa de suplementação incluso',
    ],
    featured: false,
  },
]

export default function Plans() {
  const scrollToContact = () => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="planos" className={s.section}>
      <div className="container">
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Planos de Saúde</span>
          <h2 className="section-title">
            Invista na sua <span className="gradient-text">qualidade de vida</span>
          </h2>
          <div className="divider" style={{ margin: '1rem auto' }} />
          <p className="section-subtitle">
            Planos mensais com acompanhamento contínuo. Cancele quando quiser, sem fidelidade.
          </p>
        </motion.div>

        <div className={s.grid}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`${s.card} ${plan.featured ? s.featured : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {plan.featured && <span className={s.popularBadge}>Mais Popular</span>}
              <div>
                <p className={s.planName}>{plan.name}</p>
                <div className={s.price}>
                  <span className={s.priceCurrency}>R$</span>
                  <span className={s.priceValue}>{plan.price}</span>
                  <span className={s.pricePeriod}>/mês</span>
                </div>
              </div>
              <p className={s.description}>{plan.desc}</p>
              <ul className={s.features}>
                {plan.features.map(f => (
                  <li key={f} className={s.feature}>
                    <span className={s.featureCheck}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={s.planBtn} onClick={scrollToContact}>
                Quero esse plano
              </button>
            </motion.div>
          ))}
        </div>

        <p className={s.note}>
          * Valores fictícios para fins de apresentação. Consulte disponibilidade e condições.
        </p>
      </div>
    </section>
  )
}
