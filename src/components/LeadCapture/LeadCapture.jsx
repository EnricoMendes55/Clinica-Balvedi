import { useState } from 'react'
import { motion } from 'framer-motion'
import s from './LeadCapture.module.css'

export default function LeadCapture() {
  const [form, setForm] = useState({ name: '', phone: '', interest: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1000)
  }

  return (
    <section id="contato" className={s.section}>
      <div className={s.bg} aria-hidden />
      <div className={`container ${s.inner}`}>
        <motion.div
          className={s.content}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">Agende sua Consulta</span>
          <h2 className="section-title">
            O primeiro passo para<br />
            <span className="gradient-text">uma vida mais saudável</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas
            para confirmar seu agendamento. Simples, rápido e sem compromisso.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['Sem burocracia — resposta em até 24h', 'Atendimento presencial ou online', 'Consulta inicial sem compromisso de plano'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={s.form}>
            {!submitted ? (
              <>
                <h3 className={s.formTitle}>Quero agendar uma consulta</h3>
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className={s.fieldGroup}>
                    <label className={s.label} htmlFor="lc-name">Seu nome</label>
                    <input
                      id="lc-name"
                      className={s.input}
                      name="name"
                      type="text"
                      placeholder="Nome completo"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className={s.fieldGroup}>
                    <label className={s.label} htmlFor="lc-phone">WhatsApp</label>
                    <input
                      id="lc-phone"
                      className={s.input}
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                    />
                  </div>
                  <div className={s.fieldGroup}>
                    <label className={s.label} htmlFor="lc-interest">Tenho interesse em</label>
                    <select
                      id="lc-interest"
                      className={s.select}
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="medica">Consulta Médica</option>
                      <option value="nutricional">Consulta Nutricional</option>
                      <option value="ambas">Ambas</option>
                      <option value="plano">Conhecer os Planos</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className={s.submitBtn}
                    disabled={loading || !form.name || !form.phone || !form.interest}
                  >
                    {loading ? 'Enviando...' : 'Quero ser contactado →'}
                  </button>
                  <p className={s.privacyNote}>
                    Seus dados são protegidos. Não enviamos spam.
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                className={s.success}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className={s.successIcon}>🌿</div>
                <h3 className={s.successTitle}>Recebemos seu contato!</h3>
                <p className={s.successText}>
                  Obrigado, <strong>{form.name}</strong>! Nossa equipe entrará em contato
                  pelo WhatsApp em breve para confirmar seu agendamento.
                </p>
                <button
                  className="btn-outline"
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', interest: '' }) }}
                >
                  Novo contato
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
