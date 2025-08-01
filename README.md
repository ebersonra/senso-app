# Psicologia Senso - Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/c8488858-5fe4-4495-ac74-c70dced9df44/deploy-status)](https://app.netlify.com/projects/psicologiasenso/deploys)
[![Version](https://img.shields.io/github/v/release/ebersonra/senso-app?sort=semver)](https://github.com/ebersonra/senso-app/releases)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/ebersonra/senso-app/release.yml?branch=main)](https://github.com/ebersonra/senso-app/actions)
[![License](https://img.shields.io/badge/license-Proprietary-red)](#📄-Licença)

Website institucional moderno e responsivo para a Clínica Senso - Instituto de Clínica Psicológica. Desenvolvido com HTML5, CSS3 e JavaScript vanilla, oferecendo uma experiência profissional e otimizada para apresentar os serviços de psicoterapia online e presencial.

## 🎯 Sobre o Projeto

A Clínica Senso oferece atendimento psicológico especializado com base em Terapia Analítica Junguiana, Terapia Existencial Fenomenológica e Terapia Cognitivo-Comportamental. Este website foi desenvolvido para apresentar os serviços da clínica de forma acessível e profissional, proporcionando uma primeira experiência acolhedora aos pacientes.

## ✨ Características Principais

- **Design Profissional**: Interface moderna com elementos glassmorphism e tipografia elegante (fonte CreatoDisplay)
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile com breakpoints otimizados
- **Performance Otimizada**: 
  - Minificação automática de CSS e JavaScript com hash versionado
  - Compressão de imagens com formato WebP e fallback
  - Preload de recursos críticos e lazy loading
- **Acessibilidade**: Navegação por teclado, ARIA labels e estrutura semântica
- **SEO Otimizado**: Meta tags completas e estrutura HTML semântica
- **PWA Ready**: Favicon completo, manifest.json e suporte offline
- **Versionamento Automático**: Versão dinâmica no footer atualizada via CI/CD
- **Deploy Tag-Based**: Deploy automatizado apenas para releases (tags v*)

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica com ARIA labels para acessibilidade
- **CSS3**: Estilos modernos com Flexbox, Grid, variáveis CSS e glassmorphism
- **JavaScript (ES6+)**: 
  - Router SPA para navegação sem reload
  - Sistema de versionamento dinâmico
  - Detecção de suporte WebP automática
  - Gerenciamento de formulários e navegação
- **Swiper.js**: Carrossel responsivo para apresentação de tratamentos

### Tipografia e Assets
- **CreatoDisplay**: Família tipográfica personalizada em formato WOFF2
- **Otimização de Imagens**: Conversão WebP com fallback JPEG/PNG
- **Compressão de Imagens**: Scripts Python para otimização automática

### Ferramentas de Build
- **Node.js/npm**: Gerenciamento de dependências e scripts de build
- **Terser**: Minificação e otimização de JavaScript
- **clean-css-cli**: Minificação de CSS
- **DOMPurify**: Sanitização de conteúdo (segurança)

### Deploy e Hospedagem
- **Netlify**: Hospedagem com CDN global e compressão automática
- **GitHub Actions**: Workflows automatizados para release e deploy
- **Tag-based Deploy**: Deploy em produção apenas para tags versionadas
- **Release Automation**: Versionamento automático com GitHub Releases

## 📁 Estrutura do Projeto

```
senso-app/
├── index.html                    # Página principal
├── manifest.json                 # Configuração PWA
├── netlify.toml                  # Configuração de deploy
├── package.json                  # Dependências e scripts
├── _headers                      # Headers HTTP da Netlify
├── _redirects                    # Regras de redirect
├── 
├── static/                       # Assets estáticos
│   ├── css/
│   │   ├── style.css            # CSS principal
│   │   └── style.min.{hash}.css # CSS minificado com hash (gerado)
│   ├── js/
│   │   ├── main.js              # JavaScript principal (router, forms, UI)
│   │   ├── config.js            # Configurações da aplicação
│   │   ├── version.js           # Arquivo de versão (atualizado via CI/CD)
│   │   ├── webp-detect.js       # Detecção de suporte WebP
│   │   └── main.min.{hash}.js   # JS minificado com hash (gerado)
│   └── fonts/                   # Família CreatoDisplay (WOFF/WOFF2)
│
├── img/                         # Imagens organizadas por seção
│   ├── bg/                      # Backgrounds (desktop/mobile)
│   ├── cards/                   # Ícones dos tratamentos
│   ├── favicon/                 # Conjunto completo de favicons
│   ├── logo/                    # Logotipos da clínica
│   └── uploads/                 # Fotos da equipe e sobre
│
├── docs/                        # Documentação
│   ├── content.md               # Conteúdo textual do site
│   ├── FORM_CONFIG.md           # Documentação de formulários
│   └── LEGAL_PAGES_README.md    # Páginas legais
│
├── compressed_images/           # Imagens processadas
├── *.py                         # Scripts de otimização de imagem
└── *.html                       # Páginas legais (cookies, termos, etc.)
```

## 🚀 Como Executar Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/[ebersonra]/senso-app.git
   cd senso-app
   ```

2. **Instale as dependências de desenvolvimento**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   # Site disponível em http://localhost:8081
   ```

4. **Scripts disponíveis**:
   ```bash
   npm run build          # Build completo (CSS + JS)
   npm run minify-css     # Minifica apenas CSS
   npm run minify-js      # Minifica apenas JavaScript  
   npm run lint           # Verificação de código (ESLint)
   npm run format         # Formatação de código (Prettier)
   npm run dev            # Servidor local na porta 8081
   ```

## ⚙️ Release e Deploy

### 🏷️ Sistema de Release Automatizado
O projeto usa um sistema de release baseado em tags:

- **Trigger Manual**: Workflow `release.yml` via GitHub Actions
- **Versionamento**: Bump automático (patch, minor, major)
- **Deploy**: Apenas tags `v*` fazem deploy em produção

### 🔄 Processo de Release
1. **Manual Trigger**: Executa workflow de release via GitHub UI
2. **Version Bump**: Atualiza `package.json` e `static/js/version.js`
3. **Git Tag**: Cria tag versionada (ex: `v1.3.9`)
4. **Push**: Envia mudanças e tag para repositório
5. **Deploy Trigger**: Tag `v*` trigga workflow de deploy automaticamente

### 🚀 Processo de Build e Deploy
1. **Cache Dependencies**: NPM cache para builds mais rápidos
2. **Minificação**: CSS e JS com hash versionado para cache busting
3. **Build Directory**: Cria `/dist` com assets otimizados
4. **HTML Update**: Substitui referências pelos arquivos com hash
5. **Netlify Deploy**: Deploy em produção com alias da versão

### 📋 Configurações
- **Headers HTTP**: Cache otimizado e headers de segurança
- **Redirects**: SPAs e redirecionamentos de páginas legais
- **Environment**: Produção com assets minificados e hash versionado

## 🔧 Desenvolvimento e Manutenção

### 📝 Conteúdo do Site
- **Texto e Informações**: Editar `docs/content.md` ou diretamente no `index.html`
- **Imagens da Equipe**: Substituir arquivos em `img/uploads/`
- **Ícones dos Tratamentos**: Substituir em `img/cards/`
- **Versão do Site**: Atualizada automaticamente via `static/js/version.js`

### 🎨 Estilos e Comportamento
- **CSS Principal**: `static/css/style.css`
- **JavaScript Modular**:
  - `static/js/main.js` - Router SPA, forms, navegação
  - `static/js/config.js` - Configurações da aplicação
  - `static/js/version.js` - Versionamento dinâmico
  - `static/js/webp-detect.js` - Detecção de formato de imagem

### 🏷️ Sistema de Releases
```bash
# Via GitHub Actions (recomendado)
1. Acesse Actions tab no GitHub
2. Execute "Create Release and Bump Version"
3. Escolha tipo: patch/minor/major
4. Deploy automático será triggerado

# Manual (local)
npm version patch  # ou minor/major
git push --follow-tags
```

### 🖼️ Otimização de Imagens
Scripts Python disponíveis para processamento:
```bash
python3 compress_images.py      # Compressão geral com WebP
python3 image_splitter.py       # Divisão de imagens grandes
python3 resize_logo.py          # Redimensionamento de logos
python3 generate_favicons.py    # Geração de favicons completa
```

### 📄 Páginas Legais
- **Política de Privacidade**: `politica-privacidade.html`
- **Termos de Uso**: `termos-uso.html`
- **Código de Ética**: `codigo-etica.html`
- **Cookies**: `cookies.html`

### 🐛 Debug e Monitoramento
- **Build Logs**: Disponíveis no GitHub Actions
- **Deploy Status**: Badge do Netlify no topo do README
- **Version Display**: Versão atual visível no footer do site

## 👥 Equipe de Psicólogos

### Heloisa do Vale - CRP: 08/40879
Especialista em **Terapia Cognitivo-Comportamental (TCC)**

### Rafael Stoco Pereira - CRP: 08/42222  
Especialista em **Psicologia Analítica Junguiana**

### André Borges O. Santos - CRP: 08/40954
Especialista em **Psicologia Existencial Fenomenológica**

## 📍 Informações da Clínica

**SENSO – Instituto de Clínica Psicológica**

- **Website**: [psicologiasenso.com.br](https://psicologiasenso.com.br/)
- **Horário**: Segunda à Sexta das 8h às 22h
- **Localização**: MAB Centro Médico - Rua da Paz, 195, 3º andar, sala 324, Centro - Curitiba/PR
- **Atendimento**: Presencial e Online (Google Meet, WhatsApp)

## 📊 Status do Projeto

# Psicologia Senso - Website

- **Status**: ✅ Produção
- **Deploy**: Tag-based via GitHub Actions + Netlify
- **Performance**: Otimizado para Web Vitals
- **Versionamento**: Dinâmico via CI/CD
- **Architecture**: SPA com Router customizado

## 📄 Licença

Este projeto foi desenvolvido para a clínica de psicologia Senso. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para promover bem-estar emocional e saúde mental**
