import { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import s from './Navbar.module.css'

const links = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Especialistas', id: 'especialistas' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Planos', id: 'planos' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contato', id: 'contato' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (id) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <header className={`${s.navbar} ${scrolled ? s.scrolled : ''}`}>
      <div className={`container ${s.inner}`}>
        <a href="#hero" className={s.logo} onClick={e => { e.preventDefault(); scrollTo('hero') }}>
          <img src="/img/Logo Balvedi.png" alt="Logo Clínica Balvedi" />
          <span className={s.logoText}>Clínica <span>Balvedi</span></span>
        </a>

        <nav className={s.nav} aria-label="Navegação principal">
          {links.map(l => (
            <button key={l.id} className={s.navLink} onClick={() => handleLink(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className={s.actions}>
          <button
            className={s.themeBtn}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className={s.ctaBtn} onClick={() => scrollTo('contato')}>
            Agendar Consulta
          </button>
          <button
            className={`${s.hamburger} ${menuOpen ? s.open : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`${s.mobileMenu} ${menuOpen ? s.open : ''}`}>
        {links.map(l => (
          <button key={l.id} className={s.mobileLink} onClick={() => handleLink(l.id)}>
            {l.label}
          </button>
        ))}
        <button className={s.mobileCta} onClick={() => handleLink('contato')}>
          Agendar Consulta
        </button>
      </div>
    </header>
  )
}
