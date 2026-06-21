import { useState } from 'react'
import { motion } from 'framer-motion'
import s from './Consultation.module.css'

const features = [
  'Atendimento por videochamada com link exclusivo',
  'Mesma qualidade da consulta presencial',
  'Receituário digital e orientações por escrito',
  'Retorno de resultados e ajustes de conduta',
  'Disponível para todo o Brasil',
]

export default function Consultation() {
  const [type, setType] = useState('medica')
  const [form, setForm] = useState({ name: '', email: '', phone: '', schedule: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="consulta-online" className={s.section}>
      <div className="container">
        <div className={s.inner}>
          <motion.div
            className={s.content}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">Consulta Online</span>
            <h2 className="section-title">
              Cuidado da sua saúde onde<br />
              <span className="gradient-text">quer que você esteja</span>
            </h2>
            <div className="divider" />
            <p className="section-subtitle">
              A Clínica Balvedi oferece atendimento médico e nutricional online com toda
              a qualidade e atenção da consulta presencial. Sua saúde não espera.
            </p>
            <ul className={s.featureList}>
              {features.map(f => (
                <li key={f} className={s.feature}>
                  <span className={s.featureDot} aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
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
                  <div>
                    <h3 className={s.formTitle}>Solicitar Consulta Online</h3>
                    <p className={s.formSubtitle}>Retornaremos em até 24 horas.</p>
                  </div>

                  <div className={s.typeSelect}>
                    <button
                      type="button"
                      className={`${s.typeBtn} ${type === 'medica' ? s.active : ''}`}
                      onClick={() => setType('medica')}
                    >
                      🩺 Consulta Médica
                    </button>
                    <button
                      type="button"
                      className={`${s.typeBtn} ${type === 'nutricional' ? s.active : ''}`}
                      onClick={() => setType('nutricional')}
                    >
                      🥗 Consulta Nutricional
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div className={s.fieldGroup}>
                        <label className={s.label} htmlFor="ol-name">Nome completo</label>
                        <input
                          id="ol-name"
                          className={s.input}
                          name="name"
                          type="text"
                          placeholder="Seu nome"
                          value={form.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div className={s.fieldGroup}>
                        <label className={s.label} htmlFor="ol-email">E-mail</label>
                        <input
                          id="ol-email"
                          className={s.input}
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                        />
                      </div>
                      <div className={s.fieldGroup}>
                        <label className={s.label} htmlFor="ol-phone">WhatsApp</label>
                        <input
                          id="ol-phone"
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
                        <label className={s.label} htmlFor="ol-schedule">Preferência de horário</label>
                        <select
                          id="ol-schedule"
                          className={s.select}
                          name="schedule"
                          value={form.schedule}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Selecione...</option>
                          <option value="manha">Manhã (8h – 12h)</option>
                          <option value="tarde">Tarde (13h – 17h)</option>
                          <option value="noite">Noite (17h – 19h)</option>
                        </select>
                      </div>
                      <div className={s.fieldGroup}>
                        <label className={s.label} htmlFor="ol-message">Motivo da consulta (opcional)</label>
                        <textarea
                          id="ol-message"
                          className={s.textarea}
                          name="message"
                          placeholder="Descreva brevemente o que deseja tratar..."
                          value={form.message}
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        type="submit"
                        className={s.submitBtn}
                        disabled={loading || !form.name || !form.email || !form.phone}
                      >
                        {loading ? 'Enviando...' : 'Solicitar Consulta Online →'}
                      </button>
                      <p className={s.privacyNote}>
                        Suas informações são protegidas e nunca compartilhadas com terceiros.
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  className={s.success}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={s.successIcon}>✅</div>
                  <h3 className={s.successTitle}>Solicitação recebida!</h3>
                  <p className={s.successText}>
                    Obrigado, <strong>{form.name}</strong>! Entraremos em contato em até 24 horas
                    pelo WhatsApp ({form.phone}) para confirmar sua consulta {type === 'medica' ? 'médica' : 'nutricional'}.
                  </p>
                  <button className="btn-outline" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', schedule: '', message: '' }) }}>
                    Nova solicitação
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
