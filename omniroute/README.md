# OmniRoute Tutorial Website

Website tutorial ensinando a utilizar o **OmniRoute** — um gateway de IA open-source que conecta 265+ providers de IA através de um único endpoint, com fallback automático, compressão de tokens e suporte a MCP/A2A.

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
Site omniroute/
├── index.html              # Capa + visão geral + hero
├── instalacao.html         # npm, Docker, Electron, Arch Linux, Termux
├── primeiros-passos.html   # Dashboard, conectar providers, API key
├── conectar-agentes.html   # Claude Code, Codex, Cursor, Cline, Copilot, OpenCode
├── combos.html             # Auto-Combo + 18 estratégias + quota-share
├── free-tiers.html         # Providers grátis + Free Stack $0
├── compressao.html         # RTK + Caveman, economia de 15-95%
├── mcp-a2a.html            # MCP Server + A2A Protocol
├── proxy-regiao.html       # Proxy 3 níveis + TLS stealth + bypass regional
├── referencias.html        # Comandos CLI, env vars, links oficiais
├── assets/
│   ├── css/
│   │   └── style.css       # Tema dark tech + light mode + componentes
│   ├── js/
│   │   └── main.js         # Copiar código, toggle tema, sidebar mobile
│   └── img/                # Placeholder para screenshots (usamos URLs externas)
└── shared/
    └── sidebar.html        # Sidebar reutilizável via fetch()
```

## 🛠️ Tecnologias

- **HTML5 + CSS3** — Site estático puro, sem build
- **JavaScript Vanilla** — Funcionalidades interativas (toggle tema, copiar código)
- **Bootstrap 5** — Via CDN para componentes (accordion, grid, utilitários)
- **Google Fonts** — Inter + JetBrains Mono (tipografia moderna)

## 🎯 Links externos usados

As imagens dos screenshots do dashboard são carregadas diretamente do GitHub:

- `https://raw.githubusercontent.com/diegosouzapw/OmniRoute/release/v3.8.49/docs/screenshots/*.png`
- `https://raw.githubusercontent.com/diegosouzapw/OmniRoute/release/v3.8.49/docs/diagrams/*.svg`

## 📝 Conteúdo

Cada página cobre um aspecto específico do OmniRoute:

| Página | Conteúdo |
|--------|----------|
| **index.html** | Hero, visão geral, benefícios, diagramas, FAQ geral |
| **instalacao.html** | Métodos de instalação (npm, Docker, Electron, Arch, Termux), CLI, timeouts |
| **primeiros-passos.html** | Dashboard, providers, API keys, combos, segurança |
| **conectar-agentes.html** | Configuração para Claude Code, Codex, Cursor, Cline, Copilot, OpenCode |
| **combos.html** | Auto-Combo (`auto`, `auto/coding`, etc.), 18 estratégias, quota-share, playbooks |
| **free-tiers.html** | Providers grátis ($0), Free Stack template, NVIDIA NIM, Groq, etc.) |
| **compressao.html** | RTK + Caveman, economia de tokens, inflation guard |
| **mcp-a2a.html** | MCP Server (`omniroute --mcp`), A2A Protocol, agent card |
| **proxy-regiao.html** | Proxy 3 níveis, SOCKS5, TLS fingerprint, OAuth remoto |
| **referencias.html** | CLI commands, variáveis de ambiente, endpoints, links oficiais |

## 🌐 Sobre o OmniRoute

> **OmniRoute** é um projeto open-source (MIT License) criado por [diegosouzapw](https://github.com/diegosouzapw).

- ⭐ 19.000+ GitHub stars
- 🌐 265+ providers de IA
- 🆓 90+ tiers gratuitos
- ~1.6 BILLION tokens grátis/mês
- 🔌 Compatível com Claude Code, Codex, Cursor, Cline, Copilot, OpenCode, etc.

🔗 **Links oficiais:**
- [GitHub](https://github.com/diegosouzapw/OmniRoute)
- [Website](https://omniroute.online)
- [NPM Package](https://www.npmjs.com/package/omniroute)
- [Docker Hub](https://hub.docker.com/r/diegosouzapw/omniroute)

## ✨ Features do Site

- 🎨 **Dark Mode Tech** — Gradientes roxo/azul, glow neon, cards glassmorphism
- 📱 **Responsive** — Sidebar fixa no desktop, drawer no mobile
- 📋 **Botão Copiar** — Copia código nos blocos `<pre>` com um clique
- 🌓 **Toggle Tema** — Alternância entre dark/light com persistência
- 🍞 **Breadcrumb** — Mostra nível da página (Iniciante → Intermediário → Avançado)
- 💬 **FAQ Accordion** — Perguntas frequentes em cada página
- 🔗 **Sidebar Reutilizável** — Carregada via fetch() sem duplicação

## 🐛 Problemas ou sugestões?

Abra uma issue no repositório do OmniRoute ou participe dos grupos de comunidade:

- [Discord](https://discord.gg/U47eFqAXCn)
- [Telegram](https://t.me/omnirouteOficial)
- [WhatsApp Global](https://chat.whatsapp.com/JI7cDQ1GyaiDHhVBpLxf8b?mode=gi_t)

---

*Site tutorial criado para facilitar o onboarding de novos usuários ao OmniRoute. Não oficial — comunidade.*