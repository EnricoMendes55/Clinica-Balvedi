import { motion } from 'framer-motion'
import s from './Location.module.css'

const info = [
  { icon: '📍', label: 'Endereço', text: 'Rua das Palmeiras, 450 — Sala 12\nBairro Jardins, São Paulo – SP\nCEP 01310-100' },
  { icon: '⏰', label: 'Horário de Funcionamento', text: 'Segunda a Sexta: 8h – 18h\nSábado: 8h – 12h' },
  { icon: '📞', label: 'Telefone / WhatsApp', text: '(11) 99999-9999\n(11) 3333-4444' },
  { icon: '✉️', label: 'E-mail', text: 'contato@clinicabalvedi.com.br' },
]

export default function Location() {
  return (
    <section id="localizacao" className={s.section}>
      <div className="container">
        <div className={s.inner}>
          <motion.div
            className={s.content}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">Localização</span>
            <h2 className="section-title">
              Venha nos <span className="gradient-text">visitar</span>
            </h2>
            <div className="divider" />
            <p className="section-subtitle">
              Nossa clínica está situada em um espaço acolhedor e de fácil acesso,
              com estacionamento e acesso para cadeirantes.
            </p>
            <div className={s.infoList}>
              {info.map(item => (
                <div key={item.label} className={s.infoItem}>
                  <span className={s.infoIcon}>{item.icon}</span>
                  <div>
                    <p className={s.infoLabel}>{item.label}</p>
                    <p className={s.infoText} style={{ whiteSpace: 'pre-line' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={s.mapWrapper}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              title="Localização Clínica Balvedi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098!2d-46.655!3d-23.561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjYiUyA0NsKwMzknMTguMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
