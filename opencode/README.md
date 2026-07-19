# OpenCode Tutorial Website

Website tutorial ensinando a utilizar o **OpenCode** — agente de IA open source (MIT) para codificação com 75+ provedores de LLM, LSP nativo, multi-plataforma (TUI, Desktop, IDE, Web) e 187K+ estrelas no GitHub.

## 🚀 Como visualizar o site

O site é estático e não requer build. Basta abrir os arquivos HTML no navegador:

```bash
# Opção 1: Abra diretamente no navegador
index.html

# Opção 2: Use um servidor local simples (recomendado)
npx serve .           # Se tiver Node.js
python -m http.server # Se tiver Python
```

### Estrutura do site

```
opencode/
├── index.html                  # Capa + visão geral + hero
├── instalacao.html             # Script curl, npm, Homebrew, Windows, Docker
├── primeiros-passos.html       # Conectar provedor, /init, primeiros comandos
├── providers.html              # 75+ provedores: OAuth, API, locais, gateways
├── modelos.html                # Modelos recomendados, preços Zen, variantes
├── ferramentas.html            # 13 tools built-in, permissões allow/ask/deny
├── agentes.html                # Build, Plan, Explore, Scout, agentes custom
├── interface.html              # TUI, CLI, IDE extension, Web UI
├── personalizacao.html         # Config, temas, AGENTS.md, comandos custom
├── recursos-avancados.html     # LSP, MCP, plugins, SDK, skills, formatters
├── github-integracao.html      # GitHub Actions: issues, PRs, code review
├── enterprise.html             # SSO, governança, compliance, managed settings
├── comunidade.html             # Plugins, projetos, links oficiais
├── assets/
│   ├── css/
│   │   └── style.css           # Tema dark tech + light mode + componentes
│   ├── js/
│   │   └── main.js             # Copiar código, toggle tema, sidebar mobile
│   └── favicon.png             # Favicon oficial do OpenCode
├── shared/
│   └── sidebar.html            # Sidebar reutilizável via fetch()
└── README.md
```

## 🛠️ Tecnologias

- **HTML5 + CSS3** — Site estático puro, sem build
- **JavaScript Vanilla** — Funcionalidades interativas (toggle tema, copiar código)
- **Bootstrap 5** — Via CDN para componentes (accordion, grid, utilitários)
- **Google Fonts** — Inter + JetBrains Mono (tipografia moderna)

## 📝 Conteúdo

| Página | Conteúdo |
|--------|----------|
| **index.html** | Hero com stats (187K⭐), benefícios, diagrama arquitetura, FAQ |
| **instalacao.html** | curl, npm, Homebrew, Windows (Choco/Scoop), Arch, Docker, Desktop App |
| **primeiros-passos.html** | /connect, /init, /models, comandos essenciais, fluxo de trabalho |
| **providers.html** | 75+ provedores: OAuth, Cloud API, Enterprise, Locais, Gateways |
| **modelos.html** | Modelos recomendados, tabela Zen completa (50+), variantes, locais |
| **ferramentas.html** | 13 tools, permissões allow/ask/deny, globs, auto mode, custom tools |
| **agentes.html** | Build/Plan primários, Explore/Scout/General subagentes, config JSON/MD |
| **interface.html** | TUI comandos/atalhos, CLI completa, IDE extension, Web UI, attach |
| **personalizacao.html** | opencode.json schema, temas, AGENTS.md, custom commands |
| **recursos-avancados.html** | LSP 40+ linguagens, MCP local/remoto, plugins, SDK, skills, ACP |
| **github-integracao.html** | GitHub App, workflows YAML, eventos, triagem automática |
| **enterprise.html** | Privacidade, SSO, políticas, managed settings, network |
| **comunidade.html** | 13+ plugins, 6+ projetos, awesome-opencode, links oficiais |

## 🌐 Sobre o OpenCode

> **OpenCode** é um projeto open-source (MIT License) criado pela [Anomaly Innovations](https://anoma.ly).

- ⭐ 187.000+ GitHub stars
- 🍴 23.600+ forks
- 👥 900+ contribuidores
- 📝 15.000+ commits
- 📦 841+ releases (última: v1.18.3)
- 🧑‍💻 7.5M+ desenvolvedores mensais

🔗 **Links oficiais:**
- [Site](https://opencode.ai)
- [Docs](https://opencode.ai/docs)
- [GitHub](https://github.com/anomalyco/opencode)
- [Discord](https://opencode.ai/discord)
- [NPM](https://www.npmjs.com/package/opencode-ai)

## ✨ Features do Site

- 🎨 **Dark Mode Tech** — Gradientes laranja/azul, glow neon, cards glassmorphism
- 📱 **Responsive** — Sidebar fixa no desktop, drawer no mobile
- 📋 **Botão Copiar** — Copia código nos blocos `<pre>` com um clique
- 🌓 **Toggle Tema** — Alternância entre dark/light com persistência
- 🍞 **Breadcrumb** — Mostra nível da página (Iniciante → Intermediário → Avançado)
- 💬 **FAQ Accordion** — Perguntas frequentes no index
- 🔗 **Sidebar Reutilizável** — Carregada via fetch() sem duplicação

## 📚 Fontes de Pesquisa

- Documentação oficial: opencode.ai/docs (todas as seções)
- GitHub: github.com/anomalyco/opencode (stats, releases, README)
- Artigos externos: dev.to, codexpedite.com, producthunt.com, softverdict.com
- Comunidade: Hacker News, Reddit r/opencode
- Último dado verificado: Julho 2026

## 🐛 Problemas ou sugestões?

Participe da comunidade OpenCode:

- [Discord](https://opencode.ai/discord)
- [GitHub Issues](https://github.com/anomalyco/opencode/issues)
- [X (Twitter)](https://x.com/opencode)

---

*Site tutorial criado para facilitar o onboarding de novos usuários ao OpenCode. Não oficial — comunidade.*
