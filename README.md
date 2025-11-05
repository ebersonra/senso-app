# Psicologia Senso - Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/c8488858-5fe4-4495-ac74-c70dced9df44/deploy-status)](https://app.netlify.com/projects/psicologiasenso/deploys)
[![Version](https://img.shields.io/github/v/release/ebersonra/senso-app?sort=semver)](https://github.com/ebersonra/senso-app/releases)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/ebersonra/senso-app/build-and-deploy.yml)](https://github.com/ebersonra/senso-app/actions)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Website institucional moderno e responsivo para a Clínica Senso - Instituto de Clínica Psicológica. Desenvolvido com HTML5, CSS3 e JavaScript vanilla, oferecendo uma experiência profissional e otimizada para apresentar os serviços de psicoterapia online e presencial, com integração Google Analytics e Google Ads.

## 🎯 Sobre o Projeto

A Clínica Senso oferece atendimento psicológico especializado com base em Terapia Analítica Junguiana, Terapia Existencial Fenomenológica e Terapia Cognitivo-Comportamental. Este website foi desenvolvido para apresentar os serviços da clínica de forma acessível e profissional, proporcionando uma primeira experiência acolhedora aos pacientes.

## ✨ Características Principais

- **Design Profissional**: Interface moderna com elementos glassmorphism e tipografia elegante (fonte CreatoDisplay)
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile com breakpoints otimizados
- **Performance Otimizada**: 
  - Minificação automática de CSS e JavaScript com hash versionado para cache busting
  - Compressão de imagens com formato WebP e fallback
  - Preload de recursos críticos e lazy loading
- **Acessibilidade**: Navegação por teclado, ARIA labels e estrutura semântica
- **SEO Otimizado**: Meta tags completas e estrutura HTML semântica
- **PWA Ready**: Favicon completo, manifest.json e suporte offline
- **Versionamento Automático**: Versão dinâmica no footer atualizada via CI/CD
- **Deploy Tag-Based**: Deploy automatizado apenas para releases (tags v*)
- **Marketing Digital**: Integração completa com Google Analytics e Google Ads (GTM)
- **Roteamento SPA**: Sistema de navegação sem reload com URLs limpas

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica com ARIA labels para acessibilidade
- **CSS3**: Estilos modernos com Flexbox, Grid, variáveis CSS e glassmorphism
- **JavaScript (ES6+)**: 
  - Router SPA para navegação sem reload com URLs limpas
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
- **clean-css-cli**: Minificação de CSS com hash versionado
- **DOMPurify**: Sanitização de conteúdo (segurança)

### Marketing Digital
- **Google Tag Manager (GTM)**: Gerenciamento centralizado de tags
- **Google Analytics**: Acompanhamento de visitantes e comportamento
- **Google Ads**: Conversão e remarketing
- **Content Security Policy**: Headers de segurança configurados para suporte a tracking

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
├── _headers                      # Headers HTTP e CSP para Google Ads/Analytics
├── _redirects                    # Regras de redirect para URLs limpas
├── requirements.txt              # Dependências Python para scripts
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
│   │   ├── gtag-init.js         # Inicialização Google Analytics
│   │   ├── gtm-start.js         # Inicialização Google Tag Manager
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
├── .github/workflows/           # GitHub Actions
│   ├── release.yml              # Workflow de release automático
│   └── build-and-deploy.yml     # Workflow de build e deploy
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
   npm run build          # Build completo (CSS + JS) com hash
   npm run minify-css     # Minifica apenas CSS
   npm run minify-js      # Minifica apenas JavaScript  
   npm run build:css      # Build CSS com compressão Brotli e Gzip
   npm run build:js       # Build JS com compressão Brotli e Gzip
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
2. **Minificação**: CSS e JS com hash MD5 versionado para cache busting
3. **Build Directory**: Cria `/dist` com assets otimizados
4. **HTML Update**: Substitui referências pelos arquivos com hash
5. **Netlify Deploy**: Deploy em produção com alias da versão e compressão automática

### 📋 Configurações de Produção
- **Headers HTTP**: Cache otimizado, CSP e headers de segurança
- **Redirects**: SPAs e redirecionamentos de páginas legais sem extensão
- **Environment**: Produção com assets minificados e hash versionado
- **Content Security Policy**: Configurado para Google Analytics, GTM e Google Ads

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
  - `static/js/gtag-init.js` - Google Analytics
  - `static/js/gtm-start.js` - Google Tag Manager

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
# Instalar dependências Python
pip install -r requirements.txt

# Scripts de otimização
python3 compress_images.py      # Compressão geral com WebP (max 800KB)
python3 image_splitter.py       # Divisão de imagens grandes
python3 resize_logo.py          # Redimensionamento de logos
python3 generate_favicons.py    # Geração de favicons completa
./run_compression.sh            # Script bash para compressão automática
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

## 📊 Dashboard Analytics

O projeto inclui um dashboard profissional integrado com Google Ads e Google Analytics 4 para acompanhamento de métricas de performance.

### Funcionalidades do Dashboard

- **🔐 Autenticação Segura**: Sistema de login via Supabase com proteção de rotas
- **📈 Visão Geral**: KPIs principais com indicadores de mudança percentual
- **🎯 Google Ads**: Métricas de campanhas (impressões, cliques, CPC, conversões)
- **📊 Analytics**: Dados de comportamento (sessões, taxa de rejeição, páginas mais acessadas)
- **⚙️ Configurações**: Gerenciamento de conta e preferências
- **🌙 Dark Mode**: Design moderno com tema escuro profissional
- **📱 Responsivo**: Layout otimizado para desktop, tablet e mobile

### Configuração do Dashboard

#### 1. Variáveis de Ambiente

**Opção A: Usando arquivo JavaScript (Recomendado para desenvolvimento)**

Crie um arquivo `static/js/env.js` copiando o exemplo:

```bash
cp static/js/env.example.js static/js/env.js
```

Edite `static/js/env.js` com suas credenciais:

```javascript
window.ENV = {
    SUPABASE_URL: 'https://seu-projeto.supabase.co',
    SUPABASE_ANON_KEY: 'sua-chave-anonima',
    GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',
    GA4_API_KEY: 'sua-api-key',
    GA4_PROPERTY_ID: 'properties/123456789',
    GOOGLE_ADS_CLIENT_ID: 'seu-client-id',
    GOOGLE_ADS_DEVELOPER_TOKEN: 'seu-developer-token',
    GOOGLE_ADS_CUSTOMER_ID: '123-456-7890'
};
```

Depois, adicione no HTML antes dos outros scripts:

```html
<script src="static/js/env.js"></script>
```

**Opção B: Usando variáveis de ambiente do servidor**

Configure as variáveis no seu servidor/hosting e injete via `window.ENV`.

**⚠️ Importante**: 
- Nunca commite `env.js` ou `.env` com credenciais reais
- Use `.env.example` e `env.example.js` como referência
- Em produção, use variáveis de ambiente do servidor

#### 2. Configuração do Supabase

1. Acesse [supabase.com](https://supabase.com) e crie um projeto
2. Vá em **Settings > API**
3. Copie a **URL** e a **anon key**
4. Adicione no arquivo `.env`
5. Crie usuários em **Authentication > Users**

#### 3. Configuração Google Analytics 4

1. Acesse [Google Cloud Console](https://console.cloud.google.com)
2. Crie ou selecione um projeto
3. Ative a **Google Analytics Reporting API v4**
4. Crie uma chave de API
5. No Google Analytics, obtenha o **Property ID**

#### 4. Configuração Google Ads

1. Acesse [Google Ads API Center](https://developers.google.com/google-ads/api)
2. Solicite um **Developer Token**
3. Configure **OAuth 2.0** no Google Cloud Console
4. Obtenha o **Customer ID** no Google Ads

### Acessando o Dashboard

- **Login**: `/login`
- **Dashboard**: `/dashboard` (requer autenticação)
- **Demo**: `/dashboard-demo.html` (sem autenticação, dados simulados)

### Arquivos do Dashboard

- `login.html` - Página de autenticação
- `dashboard.html` - Interface principal do dashboard
- `dashboard-demo.html` - Versão demo para testes
- `404.html` - Página de erro personalizada
- `static/css/dashboard.css` - Estilos do dashboard (16KB)
- `static/js/auth.js` - Gerenciamento de autenticação
- `static/js/dashboard.js` - Lógica e gráficos
- `static/js/google-api.js` - Integração com APIs
- `static/js/supabase-config.js` - Configuração Supabase
- `static/js/login.js` - Lógica do login

### Segurança

- ✅ Autenticação obrigatória para acessar o dashboard
- ✅ Sessões seguras via Supabase
- ✅ Variáveis sensíveis em `.env` (não versionado)
- ✅ Proteção contra XSS com DOMPurify
- ✅ Headers de segurança configurados
- ✅ CodeQL - 0 vulnerabilidades detectadas

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

- **Status**: ✅ Produção
- **Versão Atual**: v1.3.9
- **Deploy**: Tag-based via GitHub Actions + Netlify
- **Performance**: Otimizado para Web Vitals
- **Versionamento**: Dinâmico via CI/CD
- **Architecture**: SPA com Router customizado
- **Marketing**: Google Analytics + Google Ads integrados

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

**Desenvolvido com ❤️ para promover bem-estar emocional e saúde mental**
