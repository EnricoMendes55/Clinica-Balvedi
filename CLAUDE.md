# Clínica Balvedi — Instruções para o Claude

## Git: automatizar após cada alteração

Após **qualquer conjunto de mudanças no código**, execute automaticamente:

```bash
git add .
git commit -m "<mensagem descritiva da mudança>"
git push origin main
```

Regras para a mensagem de commit:
- Use prefixo: `feat:`, `fix:`, `style:`, `content:` conforme o tipo
- Seja específico: "feat: adicionar seção de depoimentos" em vez de "update"
- Sempre em português

**Não precisa pedir confirmação para rodar esses três comandos** — o deploy é automático via GitHub Actions e o usuário já autorizou essa automação.

## Projeto

- **Stack:** Vite + React 18 + Framer Motion + CSS Modules
- **Repositório:** https://github.com/EnricoMendes55/Clinica-Balvedi
- **Produção:** https://EnricoMendes55.github.io/Clinica-Balvedi/
- **Dev local:** `npm run dev` → http://localhost:5173

## Conteúdo

Todos os textos, endereços, telefones e valores são **fictícios** — serão substituídos pelos dados reais dos proprietários.

## Proprietários

- **Dr. Michel Balvedi** — médico, medicina integrativa
  - Instagram: @drmichelbalvedi | Facebook: @drmichelbalvedi
- **Dra. Larissa Balvedi** — nutricionista
  - Instagram: @larissabalvedi
- **Clínica:** @clinicabalvedi (Instagram e Facebook)

## Estrutura de componentes

```
src/components/
  Navbar/       Hero/         About/        Specialists/
  Services/     Benefits/     Plans/        LifeQuality/
  Consultation/ FAQ/          Location/     LeadCapture/
  ChatBot/      Footer/
src/context/ThemeContext.jsx
src/styles/global.css
```
