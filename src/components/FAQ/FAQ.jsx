import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import s from './FAQ.module.css'

const faqs = [
  {
    q: 'O que é medicina integrativa?',
    a: 'Medicina integrativa é uma abordagem que combina as melhores práticas da medicina convencional com terapias complementares baseadas em evidências, considerando o ser humano de forma holística — corpo, mente e estilo de vida.',
  },
  {
    q: 'Como funciona a consulta online?',
    a: 'Após o agendamento, você recebe um link de videochamada seguro. A consulta tem a mesma qualidade do atendimento presencial, com emissão de receitas digitais, pedidos de exames e orientações por escrito.',
  },
  {
    q: 'Qual a diferença entre nutrição funcional e dieta convencional?',
    a: 'A nutrição funcional vai além do emagrecimento. Ela investiga a causa dos desequilíbrios orgânicos — inflamação, deficiências nutricionais, microbiota intestinal — e usa a alimentação como ferramenta de tratamento.',
  },
  {
    q: 'Posso cancelar meu plano a qualquer momento?',
    a: 'Sim! Nossos planos não têm fidelidade. Você pode cancelar ou trocar de plano a qualquer momento sem multas ou burocracia.',
  },
  {
    q: 'Os planos cobrem consultas presenciais e online?',
    a: 'Sim. Todos os planos incluem a escolha entre consulta presencial (na nossa unidade) ou online por videochamada, conforme sua preferência e disponibilidade.',
  },
  {
    q: 'É possível atender crianças e idosos?',
    a: 'Claro! Atendemos pacientes de todas as idades. Dr. Michel possui formação em medicina de família e o cuidado com idosos é uma das nossas especialidades, com protocolos específicos de longevidade.',
  },
  {
    q: 'Como são os pagamentos dos planos?',
    a: 'O pagamento é mensal, por cartão de crédito ou débito, com renovação automática. O boleto também está disponível mediante solicitação.',
  },
  {
    q: 'A clínica aceita planos de saúde?',
    a: 'Atualmente trabalhamos com consultas particulares. Entretanto, emitimos recibo para reembolso nos planos que cobrem consultas médicas e de nutrição. Consulte seu plano de saúde.',
  },
]

function Item({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${s.item} ${open ? s.open : ''}`}>
      <button
        className={s.question}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className={s.questionText}>{faq.q}</span>
        <span className={s.icon} aria-hidden>+</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className={s.answer}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={s.answerInner}>{faq.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className={s.section}>
      <div className="container">
        <div className={s.inner}>
          <motion.div
            className={s.header}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Dúvidas Frequentes</span>
            <h2 className="section-title">
              Perguntas que todo paciente <span className="gradient-text">costuma fazer</span>
            </h2>
            <div className="divider" style={{ margin: '1rem auto' }} />
            <p className="section-subtitle">
              Não encontrou sua dúvida? Entre em contato — estamos sempre prontos para ajudar.
            </p>
          </motion.div>

          <motion.div
            className={s.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {faqs.map(faq => (
              <Item key={faq.q} faq={faq} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
