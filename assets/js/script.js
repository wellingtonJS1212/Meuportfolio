/* ================================================
   DADOS DO PORTFÓLIO
   ─────────────────────────────────────────────
   Edite apenas os arrays abaixo para atualizar
   o conteúdo do site sem tocar no HTML/CSS.
================================================ */

/* ── PROJETOS ──────────────────────────────────
   Como adicionar um novo projeto:
   1. Copie o bloco { ... } de um projeto existente
   2. Cole-o no final do array (antes do "]")
   3. Preencha os campos:
      - titulo   : nome do projeto
      - descricao: descrição curta (2-3 frases)
      - imagem   : caminho da imagem em assets/imgs/projects/
      - tags     : array de tecnologias usadas
      - github   : URL do repositório (ou "" para ocultar)
      - demo     : URL da demo ao vivo (ou "" para ocultar)
──────────────────────────────────────────────── */
const projetos = [
  {
    titulo: 'Lista de Contatos',
    descricao: 'Aplicação web para organizar e proteger contatos corporativos de forma simples e eficiente.',
    imagem: 'assets/imgs/lista-contato.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/wellingtonJS1212',
    demo: '',
  },
  {
    titulo: 'Site de Cursos',
    descricao: 'Plataforma de cursos online para proporcionar oportunidades de aprendizado e evolução de carreira.',
    imagem: 'assets/imgs/site-cursos.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/wellingtonJS1212',
    demo: '',
  },
  {
    titulo: 'Site de Planos',
    descricao: 'Landing page de planos de operadora com comparativo de preços e benefícios para os clientes.',
    imagem: 'assets/imgs/planos-operadora.png',
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/wellingtonJS1212',
    demo: '',
  },
];

/* ── SKILLS ────────────────────────────────────
   Como adicionar uma nova skill:
   1. Copie um objeto { nome, icone } existente
   2. Cole no final do array (antes do "]")
   3. Preencha:
      - nome : nome exibido abaixo do ícone
      - icone: classe do devicon (veja: devicon.dev)
──────────────────────────────────────────────── */
const skills = [
  { nome: 'HTML5',      icone: 'devicon-html5-plain colored' },
  { nome: 'CSS3',       icone: 'devicon-css3-plain colored' },
  { nome: 'JavaScript', icone: 'devicon-javascript-plain colored' },
  { nome: 'React',      icone: 'devicon-react-original colored' },
  { nome: 'Node.js',    icone: 'devicon-nodejs-plain colored' },
  { nome: 'Git',        icone: 'devicon-git-plain colored' },
  { nome: 'GitHub',     icone: 'devicon-github-original' },
  { nome: 'Figma',      icone: 'devicon-figma-plain colored' },
  { nome: 'Delphi',      imagem: 'assets/imgs/delphi.png' },
  { nome: 'Claude Code', imagem: 'assets/imgs/claude.png' },
];

/* ── CERTIFICADOS ──────────────────────────────
   Como adicionar um novo certificado:
   1. Copie um bloco { ... } existente
   2. Cole no final do array (antes do "]")
   3. Preencha os campos:
      - titulo     : nome do curso / certificação
      - instituicao: quem emitiu
      - data       : mês e ano (ex: "Abr 2024")
      - horas      : carga horária (ou "" para ocultar)
      - tags       : array de tecnologias
      - validacao  : URL de verificação (ou "" para ocultar)
      - codigo     : código do certificado (ou "")
──────────────────────────────────────────────── */
const certificados = [
  {
    titulo: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    instituicao: 'Universidade Estácio de Sá',
    data: 'Set 2025',
    horas: '',
    tags: ['Graduação', 'ADS'],
    imagem: 'assets/imgs/certs/diploma-estacio.png',
    validacao: 'https://consultadiploma.estacio.br/diploma/163.163.c6809231c38d',
    codigo: '163.163.c6809231c38d',
  },
  {
    titulo: 'Lógica de Programação: com JavaScript',
    instituicao: 'Alura',
    data: 'Abr 2026',
    horas: '6h',
    tags: ['JavaScript', 'Lógica'],
    imagem: 'assets/imgs/certs/alura-logica.png',
    validacao: '',
    codigo: '',
  },
  {
    titulo: 'Versionamento de Código com Git e GitHub',
    instituicao: 'DIO',
    data: 'Mar 2025',
    horas: '2h',
    tags: ['Git', 'GitHub'],
    imagem: 'assets/imgs/certs/git-github.png',
    validacao: '',
    codigo: 'ECBAN29X',
  },
  {
    titulo: 'CSS',
    instituicao: 'NerdIn Vagas de TI',
    data: 'Jan 2025',
    horas: '',
    tags: ['CSS', 'Frontend'],
    imagem: 'assets/imgs/certs/css-nerdin.png',
    validacao: 'https://www.nerdin.com.br',
    codigo: '',
  },
  {
    titulo: 'Computação em Nuvem | AWS Discovery Day',
    instituicao: 'Estácio + Ka Solution',
    data: 'Set 2024',
    horas: '5h',
    tags: ['AWS', 'Cloud'],
    imagem: 'assets/imgs/certs/aws-set2024.png',
    validacao: 'https://www.kasolution.com.br/certificado',
    codigo: '09960-78407',
  },
  {
    titulo: 'Computação em Nuvem | AWS Discovery Day',
    instituicao: 'Estácio + Ka Solution',
    data: 'Abr 2024',
    horas: '5h',
    tags: ['AWS', 'Cloud'],
    imagem: 'assets/imgs/certs/aws-abr2024.png',
    validacao: 'https://www.kasolution.com.br/certificado',
    codigo: '13504-75551',
  },
];

/* ── E-MAIL DE DESTINO DO FORMULÁRIO ──────────
   Mensagens do formulário chegam neste endereço.
   Lembre-se de configurar também no EmailJS:
   emailjs.com → Email Templates → To Email
──────────────────────────────────────────────── */
const EMAIL_DESTINO = 'wellingtonefraim@hotmail.com';

/* ── TEXTOS DO TYPEWRITER ──────────────────────
   Adicione ou remova frases do array abaixo.
──────────────────────────────────────────────── */
const typewriterTextos = [
  'Desenvolvedor Full Stack',
  'Desenvolvedor Front-End',
  'Apaixonado por Tecnologia',
];

/* ================================================
   RENDERIZAÇÃO DE PROJETOS
================================================ */
function renderProjetos() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const svgGithub = `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>`;

  const svgDemo = `
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>`;

  grid.innerHTML = projetos
    .map(
      (p) => `
    <article class="project-card">
      <div class="project-img-wrapper">
        <img src="${p.imagem}" alt="${p.titulo}" class="project-img" loading="lazy" width="400" height="220">
        <div class="project-overlay" aria-hidden="true"></div>
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${p.titulo}</h3>
      </div>
      <div class="project-body">
        <p class="project-desc">${p.descricao}</p>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link project-link--github">${svgGithub} GitHub</a>` : ''}
          ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener noreferrer" class="project-link project-link--demo">${svgDemo} Demo</a>` : ''}
        </div>
      </div>
    </article>`
    )
    .join('');
}

/* ================================================
   RENDERIZAÇÃO DE CERTIFICADOS
================================================ */
function renderCertificados() {
  const grid = document.getElementById('certs-grid');
  if (!grid) return;

  grid.innerHTML = certificados
    .map(
      (c) => `
    <article class="cert-card">
      <div class="cert-img-wrapper">
        <img src="${c.imagem}" alt="Certificado: ${c.titulo}" class="cert-img" loading="lazy" width="400" height="280"
             onerror="this.style.display='none';this.parentElement.querySelector('.cert-placeholder').style.display='flex'">
        <div class="cert-placeholder" style="display:none"></div>
        <div class="cert-img-overlay" aria-hidden="true"></div>
        <div class="cert-tags">
          ${c.tags.map((t) => `<span class="cert-tag">${t}</span>`).join('')}
        </div>
        <h3 class="cert-title">${c.titulo}</h3>
      </div>
      <div class="cert-body">
        <p class="cert-inst">${c.instituicao}</p>
        <div class="cert-meta">
          <span class="cert-date">${c.data}</span>
          ${c.horas ? `<span class="cert-hours">${c.horas}</span>` : ''}
        </div>
      </div>
    </article>`
    )
    .join('');
}

/* ================================================
   RENDERIZAÇÃO DE SKILLS
================================================ */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = skills
    .map(
      (s) => `
    <div class="skill-item" role="listitem">
      ${s.imagem
        ? `<img src="${s.imagem}" alt="${s.nome}" class="skill-img" width="30" height="30">`
        : `<i class="${s.icone}" aria-hidden="true"></i>`}
      <span class="skill-name">${s.nome}</span>
    </div>`
    )
    .join('');
}

/* ================================================
   CARROSSEL GENÉRICO
   Usado em Projetos e Certificados
================================================ */
function initCarrossel({ trackId, prevId, nextId, dotsId, cardClass }) {
  const track = document.getElementById(trackId);
  const prev  = document.getElementById(prevId);
  const next  = document.getElementById(nextId);
  const dots  = document.getElementById(dotsId);
  if (!track || !prev || !next || !dots) return;

  const cards = track.querySelectorAll(cardClass);
  const GAP   = 24;

  function visivel() {
    return window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
  }

  function setCardWidths() {
    const v      = visivel();
    const trackW = track.parentElement.offsetWidth - 88 - 32;
    const cardW  = (trackW - GAP * (v - 1)) / v;
    cards.forEach((c) => (c.style.width = cardW + 'px'));
  }
  setCardWidths();
  window.addEventListener('resize', setCardWidths, { passive: true });

  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Item ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dots.appendChild(dot);
  });

  function cardWidth() {
    return (cards[0]?.offsetWidth || 0) + GAP;
  }

  function currentIdx() {
    return Math.round(track.scrollLeft / cardWidth());
  }

  function goTo(idx) {
    track.scrollTo({ left: idx * cardWidth(), behavior: 'smooth' });
  }

  function update() {
    const idx = currentIdx();
    dots.querySelectorAll('.carousel-dot').forEach((d, i) =>
      d.classList.toggle('active', i === idx)
    );
    prev.disabled = idx === 0;
    next.disabled = idx >= cards.length - 1;
  }

  prev.addEventListener('click', () => goTo(Math.max(0, currentIdx() - 1)));
  next.addEventListener('click', () => goTo(Math.min(cards.length - 1, currentIdx() + 1)));
  track.addEventListener('scroll', update, { passive: true });
  update();
}

/* ================================================
   EFEITO TYPEWRITER
================================================ */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  let textoIdx = 0;
  let charIdx  = 0;
  let apagando = false;
  let pausado  = false;

  function tick() {
    if (pausado) return;

    const texto = typewriterTextos[textoIdx];

    if (!apagando) {
      charIdx++;
      el.textContent = texto.slice(0, charIdx);
      if (charIdx === texto.length) {
        pausado = true;
        setTimeout(() => { pausado = false; apagando = true; }, 2200);
      }
    } else {
      charIdx--;
      el.textContent = texto.slice(0, charIdx);
      if (charIdx === 0) {
        apagando = false;
        textoIdx = (textoIdx + 1) % typewriterTextos.length;
      }
    }
  }

  setInterval(tick, 90);
}

/* ================================================
   SCROLL REVEAL (IntersectionObserver)
================================================ */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/* ================================================
   NAV — scroll + menu mobile
================================================ */
function initNav() {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  const links  = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    atualizarLinkAtivo();
  }, { passive: true });

  toggle.addEventListener('click', () => {
    const aberto = toggle.classList.toggle('open');
    menu.classList.toggle('open', aberto);
    toggle.setAttribute('aria-expanded', aberto);
  });

  links.forEach((link) =>
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

function atualizarLinkAtivo() {
  const scrollY   = window.scrollY + 100;
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  sections.forEach((sec) => {
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach((l) => l.classList.remove('active'));
      const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}

/* ================================================
   ANIMAÇÃO DE CONTADORES
================================================ */
function initContadores() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el      = entry.target;
        const target  = +el.dataset.target;
        const sufixo  = el.dataset.suffix || '';
        const duracao = 1400;
        const passo   = target / (duracao / 16);
        let atual     = 0;

        const timer = setInterval(() => {
          atual += passo;
          if (atual >= target) {
            el.textContent = target + sufixo;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(atual);
          }
        }, 16);

        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.stat-number').forEach((el) => observer.observe(el));
}

/* ================================================
   TOGGLE DARK / LIGHT THEME (inspirado no Bedimcode)
   Salva preferência no localStorage
================================================ */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
  }

  btn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

/* ================================================
   CURSOR PERSONALIZADO
   Bolinha exata + anel transparente com lerp suave
================================================ */
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.body.classList.add('custom-cursor');

  let mx = window.innerWidth  / 2;
  let my = window.innerHeight / 2;
  let rx = mx, ry = my;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
    dot.classList.add('visible');
    ring.classList.add('visible');
  });

  document.addEventListener('mouseleave', () => {
    dot.classList.remove('visible');
    ring.classList.remove('visible');
  });

  /* Anel segue com interpolação suave (lerp 12%) */
  (function loop() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  /* Expande levemente ao passar em elementos interativos */
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, input, textarea, .project-card, .cert-card, .skill-item')) {
      ring.classList.add('is-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, input, textarea, .project-card, .cert-card, .skill-item')) {
      ring.classList.remove('is-hover');
    }
  });
}

/* ================================================
   SCROLL-UP — botão de voltar ao topo (padrão Bedimcode)
================================================ */
function initScrollUp() {
  const btn = document.getElementById('scroll-up');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY >= 400);
  }, { passive: true });
}

/* ================================================
   ANO NO FOOTER
================================================ */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ================================================
   FORMULÁRIO DE CONTATO (EmailJS)
================================================ */
function initContato() {
  emailjs.init('fa_1Fc8TKQUlOaVQL');

  const form   = document.getElementById('contato-form');
  const status = document.getElementById('status');
  const btn    = document.getElementById('btn_form');
  if (!form) return;

  const btnHTML = btn.innerHTML; // preserva o SVG + texto original

  const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function limparErros() {
    form.querySelectorAll('.form-group').forEach((g) => g.classList.remove('campo-erro'));
    status.textContent = '';
    status.style.color = '';
  }

  function marcarErro(id, msg) {
    const el = document.getElementById(id);
    if (el) el.closest('.form-group').classList.add('campo-erro');
    if (msg) {
      status.textContent = msg;
      status.style.color = '#ef4444';
    }
  }

  /* Remove erro do campo assim que o usuário começa a digitar */
  form.querySelectorAll('input, textarea').forEach((campo) => {
    campo.addEventListener('input', () => {
      campo.closest('.form-group').classList.remove('campo-erro');
      if (status.style.color === 'rgb(239, 68, 68)') {
        status.textContent = '';
        status.style.color = '';
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    limparErros();

    const dados = {
      to_email: EMAIL_DESTINO,
      nome:     document.getElementById('nome').value.trim(),
      email:    document.getElementById('email').value.trim(),
      mensagem: document.getElementById('mensagem').value.trim(),
      pergunta: document.getElementById('pergunta').value.trim(),
    };

    /* Validação campo a campo */
    let valido = true;

    if (!dados.nome) {
      marcarErro('nome', 'Informe seu nome.');
      valido = false;
    }
    if (!dados.email) {
      marcarErro('email', valido ? 'Informe seu e-mail.' : '');
      valido = false;
    } else if (!reEmail.test(dados.email)) {
      marcarErro('email', valido ? 'E-mail inválido. Ex: voce@email.com' : '');
      valido = false;
    }
    if (!dados.mensagem) {
      marcarErro('mensagem', valido ? 'Escreva uma mensagem.' : '');
      valido = false;
    }
    if (!dados.pergunta) {
      marcarErro('pergunta', valido ? 'Escreva sua pergunta.' : '');
      valido = false;
    }

    if (!valido) return;

    btn.disabled  = true;
    btn.innerHTML = 'Enviando...';

    emailjs
      .send('service_zxf677u', 'template_o7dsb9d', dados)
      .then(() => {
        status.textContent = 'Mensagem enviada! Responderei em breve.';
        status.style.color = '#22c55e';
        form.reset();
      })
      .catch(() => {
        status.textContent = 'Erro ao enviar. Tente novamente.';
        status.style.color = '#ef4444';
      })
      .finally(() => {
        btn.disabled  = false;
        btn.innerHTML = btnHTML; // restaura SVG + texto
      });
  });
}

/* ================================================
   INICIALIZAÇÃO
   Ordem importa: dados → reveal → interações
================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjetos();
  renderCertificados();
  initCarrossel({ trackId: 'projects-grid', prevId: 'proj-prev',  nextId: 'proj-next',  dotsId: 'projects-dots', cardClass: '.project-card' });
  initCarrossel({ trackId: 'certs-grid',    prevId: 'certs-prev', nextId: 'certs-next', dotsId: 'certs-dots',    cardClass: '.cert-card'    });
  initThemeToggle();
  initCursor();
  initTypewriter();
  initReveal();
  initNav();
  initScrollUp();
  initContadores();
  setFooterYear();
  initContato();
});
