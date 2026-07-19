// Pi Coding Agent Tutorial - Interactive Features

// Copy code functionality
function copyCode(button) {
  const codeBlock = button.parentElement;
  const code = codeBlock.querySelector('code');

  if (!code) return;

  const text = code.textContent;
  const originalText = button.textContent;

  function showSuccess() {
    button.textContent = '✓ Copiado!';
    button.classList.add('copied');
    button.setAttribute('aria-label', 'Código copiado com sucesso');
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('copied');
      button.setAttribute('aria-label', 'Copiar código');
    }, 2000);
  }

  function fallbackCopy() {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(textArea);
    return ok;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(showSuccess)
      .catch(err => {
        console.error('Failed to copy via clipboard API:', err);
        if (fallbackCopy()) showSuccess();
        else console.error('Copy failed entirely');
      });
  } else {
    if (fallbackCopy()) showSuccess();
    else console.error('Copy not supported in this browser');
  }
}

// Delegate clicks to all copy buttons (avoids inline onclick handlers)
function initCopyButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (btn) copyCode(btn);
  });
}

// Theme toggle functionality
function initThemeToggle() {
  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Alternar tema claro/escuro');
  toggle.setAttribute('aria-pressed', 'false');

  // Load saved theme preference
  const savedTheme = localStorage.getItem('pi-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateToggleText(toggle, savedTheme);
  toggle.setAttribute('aria-pressed', String(savedTheme === 'dark'));

  toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('pi-theme', newTheme);
    updateToggleText(toggle, newTheme);
    toggle.setAttribute('aria-pressed', String(newTheme === 'dark'));
  });

  document.body.appendChild(toggle);

  // Home link (back to landing page with all tutorials)
  const homeLink = document.createElement('a');
  homeLink.className = 'home-link';
  homeLink.href = '../';
  homeLink.setAttribute('aria-label', 'Mais Tutoriais');
  homeLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 01-1.06 1.06l-.69-.69V19.5a.75.75 0 01-.75.75h-3.5a.75.75 0 01-.75-.75V15h-3v4.5a.75.75 0 01-.75.75h-3.5a.75.75 0 01-.75-.75v-6.6l-.69.69a.75.75 0 01-1.06-1.06l8.69-8.69z"/></svg>';
  document.body.appendChild(homeLink);
}

function updateToggleText(toggle, theme) {
  // Botão indica a AÇÃO ao clicar (muda para o tema oposto), não o estado atual.
  toggle.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      smoothScrollTo(targetId);
    });
  });
}

// Smooth scroll to a section by id (returns true if found)
function smoothScrollTo(id) {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    history.replaceState(null, '', `#${id}`);
    return true;
  }
  return false;
}

// Handle direct hash navigation on page load
function handleInitialHashScroll() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;
  // Defer until after paint so layout is ready
  requestAnimationFrame(() => {
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// Scroll to top button
function initScrollToTop() {
  const btn = document.createElement('button');
  btn.className = 'scroll-top-btn';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Voltar ao topo');
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 01-1.06 1.06l-.69-.69V19.5a.75.75 0 01-.75.75h-3.5a.75.75 0 01-.75-.75V15h-3v4.5a.75.75 0 01-.75.75h-3.5a.75.75 0 01-.75-.75v-6.6l-.69.69a.75.75 0 01-1.06-1.06l8.69-8.69z"/></svg>';

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.body.appendChild(btn);

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 300) {
          btn.classList.add('visible');
        } else {
          btn.classList.remove('visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initScrollToTop();
  initSmoothScroll();
  initCopyButtons();
  handleInitialHashScroll();
  
  // Add active state to nav links based on scroll position (throttled via rAF)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');
  let ticking = false;
  
  function updateActiveNav() {
    let current = '';
    const scrollPos = window.scrollY;
    const viewportH = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Special case: near bottom of page — mark the last section active.
    if (scrollPos + viewportH >= docHeight - 4) {
      if (sections.length > 0) {
        current = sections[sections.length - 1].getAttribute('id');
      }
    } else {
      // Pick the latest section whose top is at or above the scroll offset.
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const topFromViewport = rect.top + scrollPos;
        if (scrollPos >= (topFromViewport - 200)) {
          current = section.getAttribute('id');
        }
      }
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateActiveNav);
      ticking = true;
    }
  }, { passive: true });
});

// Removed unused handleExternalLink() — anchors use target="_blank" + rel directly.

// Console welcome message
console.log('%c Pi Coding Agent Tutorial ', 'background: #f97316; color: white; font-size: 16px; padding: 4px 8px; border-radius: 4px;');
console.log('Site tutorial sobre pi - conteúdo baseado em README.md e docs/');