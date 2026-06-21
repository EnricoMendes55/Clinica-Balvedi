import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import s from './ChatBot.module.css'

const STEPS = {
  GREETING: 'GREETING',
  ASK_NAME: 'ASK_NAME',
  ASK_PHONE: 'ASK_PHONE',
  ASK_INTEREST: 'ASK_INTEREST',
  DONE: 'DONE',
}

const botMsg = text => ({ from: 'bot', text })
const userMsg = text => ({ from: 'user', text })

const interestOptions = [
  { label: '🩺 Consulta Médica', value: 'Consulta Médica' },
  { label: '🥗 Consulta Nutricional', value: 'Consulta Nutricional' },
  { label: '📋 Conhecer os Planos', value: 'Conhecer os Planos' },
  { label: '❓ Tenho dúvidas', value: 'Tenho dúvidas' },
]

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [showBubble, setShowBubble] = useState(true)
  const [step, setStep] = useState(STEPS.GREETING)
  const [messages, setMessages] = useState([
    botMsg('Olá! Sou a assistente virtual da Clínica Balvedi. 😊'),
    botMsg('Como posso te ajudar hoje?'),
  ])
  const [input, setInput] = useState('')
  const [leadData, setLeadData] = useState({ name: '', phone: '', interest: '' })
  const [showOptions, setShowOptions] = useState(true)
  const messagesRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(false), 5000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages])

  const addMsg = msg => setMessages(m => [...m, msg])

  const sendText = (text) => {
    if (!text.trim()) return
    addMsg(userMsg(text))
    setInput('')
    processStep(text.trim())
  }

  const processStep = (value) => {
    setTimeout(() => {
      if (step === STEPS.GREETING) {
        setStep(STEPS.ASK_NAME)
        addMsg(botMsg(`Ótimo! Vou te ajudar a agendar. Qual é o seu nome? 😊`))
        setShowOptions(false)
      } else if (step === STEPS.ASK_NAME) {
        setLeadData(d => ({ ...d, name: value }))
        setStep(STEPS.ASK_PHONE)
        addMsg(botMsg(`Prazer, ${value}! Qual é o seu número de WhatsApp?`))
      } else if (step === STEPS.ASK_PHONE) {
        setLeadData(d => ({ ...d, phone: value }))
        setStep(STEPS.ASK_INTEREST)
        setShowOptions(true)
        addMsg(botMsg('Perfeito! O que você tem interesse?'))
      }
    }, 600)
  }

  const handleInterest = (interest) => {
    addMsg(userMsg(interest))
    setShowOptions(false)
    setLeadData(d => ({ ...d, interest }))
    setTimeout(() => {
      setStep(STEPS.DONE)
      const waLink = `https://wa.me/5511999999999?text=Oi!%20Me%20chamo%20${encodeURIComponent(leadData.name)}%20e%20tenho%20interesse%20em%20${encodeURIComponent(interest)}.`
      addMsg(botMsg(`Perfeito! 🎉 Vamos entrar em contato com você no WhatsApp (${leadData.phone}) em breve!`))
      addMsg({ from: 'bot', text: 'Ou clique abaixo para falar direto com nossa equipe:', link: waLink })
    }, 600)
  }

  const handleGreeting = (opt) => {
    addMsg(userMsg(opt.label.replace(/^.{2}/, '').trim()))
    if (opt.value === 'Tenho dúvidas') {
      setShowOptions(false)
      setTimeout(() => {
        addMsg(botMsg('Sem problema! Pode me contar sua dúvida que eu anoto para a equipe. Primeiro, qual é o seu nome?'))
        setStep(STEPS.ASK_NAME)
      }, 600)
    } else {
      setLeadData(d => ({ ...d, interest: opt.value }))
      setShowOptions(false)
      setTimeout(() => {
        addMsg(botMsg('Ótimo! Vou te ajudar a agendar. Qual é o seu nome?'))
        setStep(STEPS.ASK_NAME)
      }, 600)
    }
  }

  return (
    <div className={s.widget}>
      <AnimatePresence>
        {showBubble && !open && (
          <motion.div
            className={s.bubble}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            Precisa de ajuda? 👋
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className={s.chat}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={s.chatHeader}>
              <div className={s.chatHeaderInfo}>
                <img className={s.avatarImg} src="/img/Logo Balvedi.png" alt="Assistente Balvedi" />
                <div>
                  <p className={s.chatName}>Assistente Balvedi</p>
                  <p className={s.chatStatus}>● Online agora</p>
                </div>
              </div>
              <button className={s.closeBtn} onClick={() => setOpen(false)} aria-label="Fechar chat">✕</button>
            </div>

            <div className={s.messages} ref={messagesRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`${s.msg} ${msg.from === 'bot' ? s.bot : s.user}`}>
                  {msg.text}
                  {msg.link && (
                    <a
                      href={msg.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block', marginTop: '0.5rem', color: '#fff', fontWeight: 700, textDecoration: 'underline', fontSize: '0.82rem' }}
                    >
                      Falar pelo WhatsApp →
                    </a>
                  )}
                </div>
              ))}

              {showOptions && step === STEPS.GREETING && (
                <div className={s.options}>
                  {interestOptions.map(opt => (
                    <button key={opt.value} className={s.optBtn} onClick={() => handleGreeting(opt)}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {showOptions && step === STEPS.ASK_INTEREST && (
                <div className={s.options}>
                  {interestOptions.map(opt => (
                    <button key={opt.value} className={s.optBtn} onClick={() => handleInterest(opt.value)}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {step !== STEPS.DONE && step !== STEPS.GREETING && step !== STEPS.ASK_INTEREST && (
              <div className={s.inputRow}>
                <input
                  className={s.chatInput}
                  placeholder="Digite sua resposta..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendText(input)}
                  autoFocus
                />
                <button className={s.sendBtn} onClick={() => sendText(input)} aria-label="Enviar">
                  →
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button className={s.toggleBtn} onClick={() => setOpen(o => !o)} aria-label="Abrir chat">
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>
    </div>
  )
}
