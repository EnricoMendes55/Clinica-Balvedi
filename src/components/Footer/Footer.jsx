import { imgUrl } from '../../utils/assets'
import s from './Footer.module.css'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const navLinks = [
  { label: 'Sobre a Clínica', id: 'sobre' },
  { label: 'Especialistas', id: 'especialistas' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Planos', id: 'planos' },
  { label: 'Qualidade de Vida', id: 'qualidade-de-vida' },
  { label: 'FAQ', id: 'faq' },
]

const contactLinks = [
  { label: 'Agendar Consulta', id: 'contato' },
  { label: 'Consulta Online', id: 'consulta-online' },
  { label: 'Localização', id: 'localizacao' },
  { label: '(11) 99999-9999', href: 'tel:+5511999999999' },
  { label: 'contato@clinicabalvedi.com.br', href: 'mailto:contato@clinicabalvedi.com.br' },
]

const socialLinks = [
  {
    label: 'Instagram Clínica',
    href: 'https://www.instagram.com/clinicabalvedi/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook Clínica',
    href: 'https://www.facebook.com/p/Balvedi-Cl%C3%ADnica-Integrada-100088599975105/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram Dr. Michel',
    href: 'https://www.instagram.com/drmichelbalvedi/',
    icon: <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>M</span>,
  },
  {
    label: 'Instagram Dra. Larissa',
    href: 'https://www.instagram.com/larissabalvedi/',
    icon: <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>L</span>,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.top}>
          <div className={s.brand}>
            <a href="#hero" className={s.logo} onClick={e => { e.preventDefault(); scrollTo('hero') }}>
              <img src={imgUrl('Logo Balvedi.png')} alt="Logo Clínica Balvedi" />
              <span className={s.logoText}>Clínica <span>Balvedi</span></span>
            </a>
            <p className={s.brandDesc}>
              Medicina integrativa e nutrição personalizada para quem valoriza saúde com qualidade de vida.
            </p>
            <div className={s.socials}>
              {socialLinks.map(sl => (
                <a
                  key={sl.label}
                  href={sl.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.socialLink}
                  aria-label={sl.label}
                >
                  {sl.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className={s.colTitle}>Navegação</p>
            <div className={s.colLinks}>
              {navLinks.map(l => (
                <button key={l.id} className={s.colLink} onClick={() => scrollTo(l.id)}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className={s.colTitle}>Contato</p>
            <div className={s.colLinks}>
              {contactLinks.map(l =>
                l.href ? (
                  <a key={l.label} href={l.href} className={s.colLink}>{l.label}</a>
                ) : (
                  <button key={l.label} className={s.colLink} onClick={() => scrollTo(l.id)}>
                    {l.label}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <p className={s.colTitle}>Endereço</p>
            <div className={s.colLinks}>
              <span className={s.colLink} style={{ cursor: 'default' }}>
                Rua das Palmeiras, 450<br />Sala 12 — Jardins<br />São Paulo – SP
              </span>
            </div>
          </div>
        </div>

        <div className={s.bottom}>
          <p className={s.copyright}>
            © {year} Clínica Balvedi. Todos os direitos reservados.<br />
            Desenvolvido por <a href="https://github.com/EnricoMendes55" target="_blank" rel="noopener noreferrer">Enrico Mendes</a>.
          </p>
          <div className={s.badges}>
            <span className={s.badge}>LGPD Compliant</span>
            <span className={s.badge}>Site Seguro</span>
            <span className={s.badge}>CFM Registrado</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
