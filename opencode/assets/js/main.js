document.addEventListener('DOMContentLoaded', function() {
  initThemeToggle();
  initHomeLink();
  initCodeCopyButtons();
  loadSharedComponents();
});

function initThemeToggle() {
  const savedTheme = localStorage.getItem('opencode-theme') || 'dark';
  document.documentElement.setAttribute('data-bs-theme', savedTheme);

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    updateThemeIcon(savedTheme);

    toggleBtn.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('opencode-theme', newTheme);
      updateThemeIcon(newTheme);

      this.style.transform = 'scale(1.1) rotate(180deg)';
      setTimeout(() => {
        this.style.transform = '';
      }, 300);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const icon = theme === 'dark'
    ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" /></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" /></svg>';

  toggleBtn.innerHTML = icon;
}

function initHomeLink() {
  const homeLink = document.createElement('a');
  homeLink.className = 'home-link';
  homeLink.href = '../index.html';
  homeLink.setAttribute('aria-label', 'Mais Tutoriais');
  homeLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 01-1.06 1.06l-.69-.69V19.5a.75.75 0 01-.75.75h-3.5a.75.75 0 01-.75-.75V15h-3v4.5a.75.75 0 01-.75.75h-3.5a.75.75 0 01-.75-.75v-6.6l-.69.69a.75.75 0 01-1.06-1.06l8.69-8.69z"/></svg>';

  homeLink.addEventListener('click', function() {
    this.style.transform = 'scale(1.1) rotate(360deg)';
    setTimeout(() => {
      this.style.transform = '';
    }, 300);
  });

  document.body.appendChild(homeLink);
}

function initCodeCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach(function(codeBlock) {
    const pre = codeBlock.parentElement;

    if (pre.querySelector('.copy-btn')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.textContent = 'Copiar';
    button.setAttribute('aria-label', 'Copiar código');

    button.addEventListener('click', function() {
      const code = codeBlock.textContent;

      navigator.clipboard.writeText(code).then(function() {
        button.textContent = 'Copiado!';
        button.classList.add('copied');

        setTimeout(function() {
          button.textContent = 'Copiar';
          button.classList.remove('copied');
        }, 2000);
      }).catch(function(err) {
        console.error('Erro ao copiar:', err);
        button.textContent = 'Erro';
        setTimeout(function() {
          button.textContent = 'Copiar';
        }, 2000);
      });
    });

    wrapper.appendChild(button);
  });
}

function initSidebarHighlight() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

  sidebarLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function initMobileMenu() {
  if (window._mobileMenuInitialized) return;
  window._mobileMenuInitialized = true;

  document.addEventListener('click', function(e) {
    const toggle = e.target.closest('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (toggle && sidebar) {
      sidebar.classList.toggle('show');
      const open = sidebar.classList.contains('show');
      toggle.style.opacity = open ? '0' : '';
      toggle.style.visibility = open ? 'hidden' : '';
      toggle.style.pointerEvents = open ? 'none' : '';
    } else if (sidebar && sidebar.classList.contains('show') &&
               !e.target.closest('.sidebar') &&
               !e.target.closest('.mobile-menu-toggle')) {
      sidebar.classList.remove('show');
      const t = document.querySelector('.mobile-menu-toggle');
      if (t) {
        t.style.opacity = '';
        t.style.visibility = '';
        t.style.pointerEvents = '';
      }
    }
  });
}

function loadSharedComponents() {
  const sidebarPlaceholder = document.getElementById('sidebar-placeholder');

  if (sidebarPlaceholder) {
    fetch('shared/sidebar.html')
      .then(response => response.text())
      .then(html => {
        sidebarPlaceholder.innerHTML = html;
        initSidebarHighlight();
        initMobileMenu();
      })
      .catch(err => console.error('Erro ao carregar sidebar:', err));
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

function updateBreadcrumb() {
  const pages = {
    'index.html': { level: 'Início', category: 'home' },
    'instalacao.html': { level: 'Iniciante', category: 'beginner' },
    'primeiros-passos.html': { level: 'Iniciante', category: 'beginner' },
    'providers.html': { level: 'Iniciante', category: 'beginner' },
    'modelos.html': { level: 'Intermediário', category: 'intermediate' },
    'ferramentas.html': { level: 'Intermediário', category: 'intermediate' },
    'agentes.html': { level: 'Intermediário', category: 'intermediate' },
    'interface.html': { level: 'Intermediário', category: 'intermediate' },
    'personalizacao.html': { level: 'Intermediário', category: 'intermediate' },
    'recursos-avancados.html': { level: 'Avançado', category: 'advanced' },
    'github-integracao.html': { level: 'Avançado', category: 'advanced' },
    'enterprise.html': { level: 'Avançado', category: 'advanced' },
    'comunidade.html': { level: 'Referência', category: 'reference' }
  };

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pageInfo = pages[currentPage];

  if (pageInfo) {
    const breadcrumb = document.querySelector('.breadcrumb-progress');
    if (breadcrumb) {
      const levels = ['Início', 'Iniciante', 'Intermediário', 'Avançado'];
      const currentLevel = pageInfo.level;

      breadcrumb.innerHTML = levels.map((level, index) => {
        const isActive = level === currentLevel || (currentLevel === 'Referência' && level === 'Avançado');
        const classes = isActive ? 'level active' : 'level';
        const separator = index < levels.length - 1 ? '<span class="separator">→</span>' : '';
        return `<span class="${classes}">${level}</span>${separator}`;
      }).join(' ');
    }
  }
}

if (document.querySelector('.breadcrumb-progress')) {
  updateBreadcrumb();
}

window.addEventListener('load', function() {
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 50);
});
