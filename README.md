# Portfólio — Wellington José

Portfólio pessoal desenvolvido com **HTML, CSS e JavaScript puro** (sem frameworks).  
Design premium com glassmorphism, animações de scroll, efeito typewriter, carrosseis de projetos e certificados, e formulário de contato via EmailJS.

---

## Sumário

1. [O que cada pasta faz](#o-que-cada-pasta-faz)
2. [O que cada arquivo faz](#o-que-cada-arquivo-faz)
3. [Como Abrir o Projeto](#como-abrir-o-projeto)
4. [Alterações Comuns — Guia Rápido](#alterações-comuns--guia-rápido)
   - [Mudar texto da página](#mudar-texto-da-página)
   - [Trocar a foto de perfil](#trocar-a-foto-de-perfil)
   - [Adicionar um Projeto](#adicionar-um-projeto)
   - [Adicionar uma Skill/Tecnologia](#adicionar-uma-skilltecnologia)
   - [Adicionar um Certificado](#adicionar-um-certificado)
   - [Mudar as cores do site](#mudar-as-cores-do-site)
   - [Editar o formulário de contato](#editar-o-formulário-de-contato)
   - [Editar o efeito typewriter](#editar-o-efeito-typewriter)
5. [Funções do JavaScript — o que cada uma faz](#funções-do-javascript--o-que-cada-uma-faz)
6. [Seções do CSS — o que cada uma controla](#seções-do-css--o-que-cada-uma-controla)
7. [EmailJS — Configuração completa](#emailjs--configuração-completa)
8. [Deploy no GitHub Pages](#deploy-no-github-pages)
9. [Dependências Externas](#dependências-externas)
10. [Avisos Importantes](#avisos-importantes)

---

## O que cada pasta faz

```
Meuportfolio/
│
├── assets/          ← Tudo que o site usa: estilos, lógica e imagens
│   ├── css/         ← Aparência visual do site (cores, tamanhos, animações)
│   ├── js/          ← Comportamento do site (dados, animações, envio de e-mail)
│   └── imgs/        ← Todas as imagens usadas no site
│       └── certs/   ← Somente as fotos dos certificados do carrossel
│
├── node_modules/    ← Pacotes instalados pelo npm (EmailJS local). NÃO EDITAR.
│                       Gerado automaticamente — pode ser apagado e recriado com "npm install"
│
└── (raiz)           ← index.html, README.md, package.json ficam aqui
```

### Regra de ouro sobre as pastas

| Pasta | O que colocar lá | O que NÃO colocar |
|-------|-----------------|-------------------|
| `assets/imgs/` | Fotos do Hero, logos de skills, screenshots de projetos | Certificados |
| `assets/imgs/certs/` | Somente fotos dos certificados | Qualquer outra coisa |
| `assets/css/` | Somente `style.css` | Scripts JS, imagens |
| `assets/js/` | Somente `script.js` | Estilos CSS, imagens |
| `node_modules/` | Nada — gerenciado pelo npm | Qualquer arquivo manual |

---

## O que cada arquivo faz

### `index.html` — Estrutura da página

Define as seções visíveis no site. **Raramente precisa ser editado** — a maioria dos conteúdos (projetos, skills, certificados) é gerada automaticamente pelo JavaScript.

**Quando editar o `index.html`:**
- Mudar o nome ou bio do Hero (seção início)
- Mudar os textos da seção "Sobre Mim"
- Mudar os números animados (projetos, anos, dedicação)
- Adicionar links sociais na seção de contato
- Mudar o título da aba do navegador (`<title>`)

**Quando NÃO editar:**
- Para adicionar projetos, skills ou certificados → edite `script.js`
- Para mudar cores ou espaçamentos → edite `style.css`

---

### `assets/css/style.css` — Aparência visual

Controla **tudo que você vê**: cores, tamanhos, fontes, animações, layout responsivo.  
Está organizado em seções comentadas para facilitar a localização.

**Quando editar o `style.css`:**
- Mudar cores do site
- Ajustar tamanhos de fonte
- Modificar animações
- Corrigir layout em mobile ou tablet

---

### `assets/js/script.js` — Lógica e dados

Contém os **arrays de dados** (projetos, skills, certificados) e as **funções** que animam e constroem o site.

**Quando editar o `script.js`:**
- Adicionar, remover ou editar projetos
- Adicionar, remover ou editar skills
- Adicionar, remover ou editar certificados
- Mudar as frases do efeito typewriter
- Mudar o e-mail de destino do formulário

---

### `assets/imgs/eu.jpag.jpg` — Foto de perfil

Foto exibida no Hero. O nome tem um typo (`.jpag` em vez de `.jpg`) — **este é o nome real do arquivo, não renomeie**.  
Para trocar a foto, substitua o arquivo mantendo **exatamente** este nome.

---

### `assets/imgs/delphi.png` e `assets/imgs/claude.png`

Logos de tecnologias que não estão disponíveis no Devicons.  
Para adicionar mais logos assim, salve a imagem em `assets/imgs/` e registre no array `skills` em `script.js`.

---

### `assets/imgs/certs/*.png`

Fotos dos certificados exibidas no carrossel. Cada arquivo corresponde a um objeto no array `certificados` em `script.js`.

**Arquivos atuais:**

| Arquivo | Certificado |
|---------|-------------|
| `diploma-estacio.png` | Diploma ADS — Universidade Estácio de Sá |
| `alura-logica.png` | Lógica de Programação com JavaScript — Alura |
| `git-github.png` | Versionamento de Código com Git e GitHub — DIO |
| `css-nerdin.png` | CSS — NerdIn Vagas de TI |
| `aws-set2024.png` | AWS Discovery Day — Set/2024 |
| `aws-abr2024.png` | AWS Discovery Day — Abr/2024 |

---

### `package.json` — Configuração do npm

Define as dependências do projeto para uso local. Atualmente só contém o EmailJS para testes locais.  
**Não precisa ser editado.**

### `node_modules/` — Pacotes npm

Gerado automaticamente pelo comando `npm install`. **Nunca edite arquivos dentro desta pasta.**  
Se a pasta for apagada acidentalmente, execute `npm install` na raiz do projeto para recriá-la.

---

## Como Abrir o Projeto

**Opção 1 — VS Code com Live Server (recomendado):**
1. Instale a extensão **Live Server** no VS Code
2. Clique com o botão direito em `index.html`
3. Selecione *Open with Live Server*
4. O site abre automaticamente e atualiza ao salvar qualquer arquivo

**Opção 2 — Terminal:**
```bash
npx serve .
```
Execute dentro da pasta do projeto. Acesse `http://localhost:3000`.

**Opção 3 — Direto no navegador:**
Abra o arquivo `index.html` diretamente. Funciona para visualização, mas o EmailJS pode não funcionar sem servidor.

---

## Alterações Comuns — Guia Rápido

### Mudar texto da página

| O que mudar | Onde está |
|-------------|-----------|
| Título da aba do navegador | `index.html` → tag `<title>` |
| Texto de saudação ("Olá, me chamo") | `index.html` → `.hero-greeting` |
| Nome no Hero | `index.html` → `.hero-name` |
| Bio curta no Hero | `index.html` → `.hero-bio` |
| Frases do typewriter | `script.js` → array `typewriterTextos` |
| Texto "Sobre Mim" | `index.html` → parágrafos `<p>` dentro de `.about-text` |
| Números animados (projetos, anos) | `index.html` → atributo `data-target` nos `.stat-number` |
| Texto da seção Contato | `index.html` → parágrafos dentro de `.contact-info` |
| Ano no rodapé | Automático — atualiza sozinho via JavaScript |

---

### Trocar a foto de perfil

1. Salve a nova foto com o nome **exato**: `eu.jpag.jpg` (atenção ao typo — é `.jpag`, não `.jpg`)
2. Coloque em `assets/imgs/`
3. Substitua o arquivo existente

> A foto aparece no Hero com animação de flutuação e anel rotativo.

---

### Adicionar um Projeto

> Arquivo: `assets/js/script.js` — array `projetos`

**Passo 1 — Salve a imagem do projeto:**
```
assets/imgs/nome-do-projeto.png
```

**Passo 2 — Adicione o objeto no array:**

```js
const projetos = [
  // ... projetos existentes ...

  {
    titulo:    'Nome do Projeto',
    descricao: 'Descrição curta. O que o projeto faz e qual problema resolve.',
    imagem:    'assets/imgs/nome-do-projeto.png',
    tags:      ['HTML', 'CSS', 'JavaScript'],
    github:    'https://github.com/wellingtonJS1212/repo',
    demo:      '',   // URL da demo — deixe '' para não exibir o botão
  },
];
```

**Referência dos campos:**

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| `titulo` | Sim | Nome exibido sobre a imagem do card |
| `descricao` | Sim | Texto abaixo — exibido em até 3 linhas |
| `imagem` | Sim | Caminho da imagem a partir da raiz |
| `tags` | Sim | Tecnologias usadas — aparecem como badges |
| `github` | Não | URL do GitHub — deixe `''` para ocultar |
| `demo` | Não | URL da demo ao vivo — deixe `''` para ocultar |

O card aparece automaticamente no carrossel de projetos, sem editar o HTML.

---

### Adicionar uma Skill/Tecnologia

> Arquivo: `assets/js/script.js` — array `skills`

O sistema suporta **dois tipos** de ícone:

#### Tipo A — Devicon (tecnologias populares)

1. Acesse **[devicon.dev](https://devicon.dev)**, pesquise a tecnologia, copie a classe CSS
2. Adicione no array:

```js
{ nome: 'TypeScript', icone: 'devicon-typescript-plain colored' }
```

> Adicione `colored` no final para usar a cor oficial da tecnologia.

#### Tipo B — Imagem customizada (ex: Delphi, Claude)

1. Salve o logo em `assets/imgs/nome.png`
2. Adicione no array usando `imagem` em vez de `icone`:

```js
{ nome: 'Delphi', imagem: 'assets/imgs/delphi.png' }
```

**Importante:** use **ou** `icone` **ou** `imagem` — nunca os dois ao mesmo tempo.

---

### Adicionar um Certificado

> Arquivo: `assets/js/script.js` — array `certificados`

**Passo 1 — Salve a foto do certificado:**
```
assets/imgs/certs/nome-do-certificado.png
```

> **Atenção no Windows:** ao salvar pelo "Salvar como", não adicione `.png` manualmente — o Windows pode gerar `arquivo.png.png`. Verifique o nome antes de confirmar.

**Passo 2 — Adicione o objeto no array:**

```js
const certificados = [
  // ... certificados existentes ...

  {
    titulo:      'Nome do Curso',
    instituicao: 'Nome da Instituição',
    data:        'Mês Ano',        // ex: 'Mar 2025'
    horas:       '10h',            // deixe '' para não exibir
    tags:        ['JavaScript'],
    imagem:      'assets/imgs/certs/nome-do-certificado.png',
    validacao:   '',               // URL de verificação (apenas registrada, não exibida)
    codigo:      '',               // código do certificado (apenas registrado, não exibido)
  },
];
```

**Referência dos campos:**

| Campo | Exibido no site | Descrição |
|-------|-----------------|-----------|
| `titulo` | Sim | Nome do curso — aparece sobre a imagem |
| `instituicao` | Sim | Aparece no rodapé do card em azul |
| `data` | Sim | Mês e ano de conclusão |
| `horas` | Sim | Carga horária em destaque ciano — omita se não houver |
| `tags` | Sim | Badges coloridos sobre a imagem |
| `imagem` | Sim | Foto do certificado |
| `validacao` | Não | URL de validação — guardada no código para referência |
| `codigo` | Não | Código do certificado — guardado no código para referência |

---

### Mudar as cores do site

> Arquivo: `assets/css/style.css` — bloco `:root` no topo do arquivo

Para mudar a paleta de cores **do site inteiro**, edite apenas estas variáveis:

```css
:root {
  --clr-primary:       #4f46e5;   /* azul-índigo — botões, destaques, tags */
  --clr-primary-light: #6366f1;   /* azul claro — hover, links, typewriter, dots */
  --clr-secondary:     #7c3aed;   /* roxo — gradientes dos títulos */
  --clr-accent:        #06b6d4;   /* ciano — carga horária, botão Demo */

  --clr-bg:            #0f172a;   /* fundo escuro principal */
  --clr-bg-alt:        #1e293b;   /* fundo das seções alternadas (Sobre, Certificados) */

  --clr-text:          #e2e8f0;   /* texto principal claro */
  --clr-text-muted:    #94a3b8;   /* texto secundário cinza */
}
```

Mude uma cor e **todo o site atualiza automaticamente**.

---

### Editar o formulário de contato

O formulário tem 4 campos: **Nome**, **E-mail**, **Mensagem** e **Pergunta**.

**Para mudar o e-mail de destino:**
```js
// assets/js/script.js — topo do arquivo
const EMAIL_DESTINO = 'seu-email@exemplo.com';
```

**Para adicionar ou remover campos:**  
Edite o HTML dentro de `<form id="contato-form">` em `index.html`, e adicione a variável correspondente no objeto `dados` dentro de `initContato()` em `script.js`.

**Para mudar as mensagens de validação:**  
Edite os textos dentro da função `initContato()` em `script.js` — seção "Validação campo a campo".

---

### Editar o efeito typewriter

> Arquivo: `assets/js/script.js` — array `typewriterTextos`

```js
const typewriterTextos = [
  'Desenvolvedor Full Stack',
  'Desenvolvedor Front-End',
  'Apaixonado por Tecnologia',
];
```

Cada string é digitada e apagada em loop infinito. Adicione ou remova frases à vontade.  
Para mudar a velocidade de digitação, edite o valor `90` (em ms) no `setInterval` dentro de `initTypewriter()`.

---

## Funções do JavaScript — o que cada uma faz

> Arquivo: `assets/js/script.js`

| Função | O que faz |
|--------|-----------|
| `renderProjetos()` | Lê o array `projetos` e gera os cards HTML no carrossel |
| `renderSkills()` | Lê o array `skills` e gera os ícones na grade de tecnologias |
| `renderCertificados()` | Lê o array `certificados` e gera os cards no carrossel |
| `initCarrossel(config)` | Ativa setas e dots em qualquer carrossel — usado em Projetos e Certificados |
| `initTypewriter()` | Anima o texto digitado/apagado no Hero usando `typewriterTextos` |
| `initReveal()` | Detecta quando elementos entram na tela e aplica animação de aparecimento |
| `initNav()` | Controla a navbar: fundo ao rolar, menu hambúrguer no mobile |
| `atualizarLinkAtivo()` | Destaca o link do menu correspondente à seção visível |
| `initContadores()` | Anima os números (projetos, anos, dedicação) ao entrar na tela |
| `setFooterYear()` | Coloca o ano atual no rodapé automaticamente |
| `initContato()` | Inicializa o EmailJS, valida campos e envia o formulário |

**Ordem de inicialização (DOMContentLoaded):**
```
renderSkills → renderProjetos → renderCertificados →
initCarrossel (projetos) → initCarrossel (certificados) →
initTypewriter → initReveal → initNav → initContadores →
setFooterYear → initContato
```

> A ordem importa: os dados precisam ser renderizados antes do carrossel ser ativado.

---

## Seções do CSS — o que cada uma controla

> Arquivo: `assets/css/style.css`

| Seção no arquivo | O que controla |
|------------------|----------------|
| `DESIGN TOKENS` | Variáveis `:root` — cores, espaçamentos, bordas, sombras, transições |
| `BASE` | Reset geral, `body`, `img`, `a`, `ul` |
| `UTILITÁRIOS` | `.container` (largura máxima), `.section` (padding), `.section-header`, `.section-tag`, `.section-title` |
| `BOTÕES` | `.btn`, `.btn--primary` (gradiente), `.btn--outline` (transparente), `.btn--full` |
| `ANIMAÇÃO DE REVEAL` | `.reveal` (invisível) → `.reveal.visible` (aparece ao rolar) |
| `NAV` | Barra fixa, logo WJ., links com sublinhado animado, menu hambúrguer mobile |
| `HERO` | Layout lado a lado, blobs animados, nome com gradiente, foto com anel rotativo e flutuação |
| `SOBRE` | Grid bio + skills, contadores animados, grade de ícones |
| `PROJETOS` | Carrossel, cards estilo magazine com título sobre imagem, botões GitHub e Demo |
| `CARROSSEL COMPARTILHADO` | `.carousel-arrow` (setas), `.carousel-dot` (indicadores) — usados em Projetos e Certificados |
| `CERTIFICADOS` | Carrossel, cards magazine, tags sobre imagem, rodapé com instituição e data |
| `CONTATO` | Grid dois lados, formulário com glassmorphism, validação visual (campo-erro, shake) |
| `FOOTER` | Rodapé com coração pulsando e ano dinâmico |
| `RESPONSIVO ≤ 900px` | Tablet: hero empilhado, grids de 1 coluna, 2 cards no carrossel |
| `RESPONSIVO ≤ 600px` | Mobile: hambúrguer visível, menu deslizante, 1 card no carrossel, botões full-width |

---

## EmailJS — Configuração completa

O formulário usa **[EmailJS](https://www.emailjs.com)** — envia e-mails sem backend.

### Credenciais ativas (em `script.js` → função `initContato`):

```js
emailjs.init('fa_1Fc8TKQUlOaVQL');                          // Public Key
emailjs.send('service_zxf677u', 'template_o7dsb9d', dados)  // Service ID + Template ID
```

### Configuração do template no painel EmailJS:

| Campo | Valor |
|-------|-------|
| **Para (To)** | `wellingtonefraim@hotmail.com` |
| **Assunto** | `Novo contato pelo portfólio — {{nome}}` |
| **De Nome** | `{{nome}}` |
| **Responder a** | `{{email}}` — permite responder direto ao visitante |

### Variáveis enviadas pelo formulário:

| Variável | De onde vem | Conteúdo |
|----------|-------------|----------|
| `nome` | Campo Nome | Nome do visitante |
| `email` | Campo E-mail | E-mail do visitante |
| `mensagem` | Campo Mensagem | Texto da mensagem |
| `pergunta` | Campo Pergunta | Pergunta do visitante |
| `to_email` | `EMAIL_DESTINO` | E-mail de destino (fixo) |

### Como atualizar as credenciais:

1. Acesse [emailjs.com](https://www.emailjs.com) e faça login
2. **Email Services** → copie o **Service ID**
3. **Email Templates** → copie o **Template ID**
4. **Account** → copie a **Public Key**
5. Substitua os três valores na função `initContato()` em `script.js`

### Problemas comuns:

| Erro | Causa | Solução |
|------|-------|---------|
| `400 — Service ID not found` | Service ID desatualizado | Copie o ID atual em Email Services e atualize `script.js` |
| `412 — Gmail API` | Conta Gmail desconectada | Email Services → clique no serviço → Reconnect Account |
| Formulário não envia | EmailJS não inicializou | Verifique se o `<script>` do EmailJS está no `<head>` do `index.html` |

> **Atenção:** ao reconectar o Gmail no EmailJS, o Service ID pode mudar. Sempre verifique e atualize em `script.js`.

---

## Deploy no GitHub Pages

O portfólio está publicado e acessível em:

```
https://wellingtonJS1212.github.io/Meuportfolio/
```

O repositório no GitHub fica em:

```
https://github.com/wellingtonJS1212/Meuportfolio
```

---

### Como atualizar o site após qualquer alteração

Toda vez que fizer uma mudança no projeto (adicionar projeto, certificado, corrigir texto, etc.), execute estes 3 comandos no terminal dentro da pasta do projeto:

```bash
git add .
git commit -m "descrição clara do que foi alterado"
git push origin main
```

O site atualiza automaticamente em **~1 minuto** após o push.

**Exemplos de mensagens de commit:**
```bash
git commit -m "adiciona projeto Lista de Tarefas"
git commit -m "adiciona certificado React — DIO"
git commit -m "atualiza texto da seção Sobre Mim"
git commit -m "corrige foto de perfil"
```

---

### Como publicar pela primeira vez em um repositório novo

Se precisar recriar o repositório ou publicar em uma conta diferente:

**1. Crie o repositório no GitHub:**
- Acesse **[github.com/new](https://github.com/new)**
- **Repository name:** `Meuportfolio` (ou o nome que preferir)
- Marque **Public**
- **NÃO** marque nenhuma opção de inicializar (sem README, sem .gitignore)
- Clique em **Create repository**

**2. Conecte o projeto local ao novo repositório:**
```bash
git remote set-url origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push origin main
```

**3. Ative o GitHub Pages:**
- No repositório → **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: `main` — Pasta: `/ (root)`
- Clique em **Save**

**4. Aguarde ~2 minutos e acesse:**
```
https://SEU-USUARIO.github.io/NOME-DO-REPO/
```

---

### Verificar se o site está no ar

Para confirmar que o site está funcionando, acesse a URL acima no navegador.  
Se retornar erro 404, verifique se o GitHub Pages foi ativado corretamente em **Settings → Pages**.

---

## Dependências Externas

Todas carregadas via CDN — sem instalação local necessária para o site funcionar.

| Biblioteca | Versão | Uso | Onde fica |
|------------|--------|-----|-----------|
| Google Fonts (Poppins) | latest | Tipografia de todo o site | `index.html` → `<head>` |
| Devicons | 2.15.1 | Ícones das tecnologias na seção Skills | `index.html` → `<head>` |
| EmailJS | 4.x | Envio de e-mails pelo formulário | `index.html` → `<head>` |

Para atualizar uma dependência, troque a URL no `<head>` do `index.html`.

---

## Avisos Importantes

### Nunca renomeie `eu.jpag.jpg`
O arquivo da foto de perfil tem `.jpag` (typo) no nome — este é o nome real referenciado no HTML. Renomear quebra a foto do Hero.

### Cuidado com extensão dupla no Windows
Ao salvar imagens pelo "Salvar como", o Windows às vezes adiciona `.png` mesmo o nome já tendo. Resultado: `arquivo.png.png`. O site não encontra o arquivo. Sempre verifique o nome real antes de salvar.

### Pasta `node_modules/` é gerada automaticamente
Se aparecer na pasta e causar confusão, pode ignorar. Ela não vai para o GitHub (está no `.gitignore`) e pode ser recriada com `npm install` a qualquer momento.

### O carrossel precisa do render antes de inicializar
Sempre que adicionar uma nova seção com carrossel, certifique-se de chamar a função de render **antes** de chamar `initCarrossel()` no `DOMContentLoaded`. A ordem importa.

### Scripts na ordem certa
O `<script src="emailjs CDN">` deve ficar no `<head>` **antes** de `script.js`. Se o EmailJS for carregado depois, o formulário não funciona.
