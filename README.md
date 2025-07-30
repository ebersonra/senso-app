# Psicologia Senso - Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/c8488858-5fe4-4495-ac74-c70dced9df44/deploy-status)](https://app.netlify.com/projects/psicologiasenso/deploys)

Website institucional moderno e responsivo para a Clínica Senso - Instituto de Clínica Psicológica. Desenvolvido com HTML5, CSS3 e JavaScript vanilla, oferecendo uma experiência profissional e otimizada para apresentar os serviços de psicoterapia online e presencial.

## 🎯 Sobre o Projeto

A Clínica Senso oferece atendimento psicológico especializado com base em Terapia Analítica Junguiana, Terapia Existencial Fenomenológica e Terapia Cognitivo-Comportamental. Este website foi desenvolvido para apresentar os serviços da clínica de forma acessível e profissional, proporcionando uma primeira experiência acolhedora aos pacientes.

## ✨ Características Principais

- **Design Profissional**: Interface moderna com elementos glassmorphism e tipografia elegante (fonte CreatoDisplay)
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile com breakpoints otimizados
- **Performance Otimizada**: 
  - Minificação automática de CSS e JavaScript
  - Compressão de imagens com formato WebP
  - Preload de recursos críticos
- **Acessibilidade**: Navegação por teclado, ARIA labels e estrutura semântica
- **SEO Otimizado**: Meta tags completas e estrutura HTML semântica
- **PWA Ready**: Favicon completo, manifest.json e suporte offline
- **Deploy Automatizado**: Integração contínua com Netlify

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica com ARIA labels para acessibilidade
- **CSS3**: Estilos modernos com Flexbox, Grid, variáveis CSS e glassmorphism
- **JavaScript (ES6+)**: Funcionalidades dinâmicas e detecção de suporte WebP
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
- **Netlify**: Hospedagem com CDN global
- **Netlify.toml**: Configuração de deploy e redirects
- **GitHub**: Controle de versão e integração contínua

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
│   │   └── style.min.css        # CSS minificado (gerado)
│   ├── js/
│   │   ├── main.js              # JavaScript principal
│   │   ├── config.js            # Configurações
│   │   ├── webp-detect.js       # Detecção de suporte WebP
│   │   └── main.min.js          # JS minificado (gerado)
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
   git clone https://github.com/[seu-usuario]/senso-app.git
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
   npm run lint           # Verificação de código
   npm run format         # Formatação de código
   ```

## ⚙️ Build e Deploy

### Deploy Automático via Netlify
O projeto usa deploy contínuo diretamente integrado com o GitHub:

- **Gatilho**: Push na branch `main` ou `feature/*`
- **Build Command**: `npm run build` (via `package.json`)
- **Publish Directory**: `dist/` (configurado no `netlify.toml`)

### Processo de Build
1. **Minificação CSS**: `cleancss` converte `style.css` → `style.min.css`
2. **Minificação JS**: `terser` converte `main.js` → `main.min.js`
3. **Otimização de Imagens**: Scripts Python para conversão WebP
4. **Compressão**: Gzip e Brotli automáticos via Netlify

### Configurações de Deploy
- **Headers HTTP**: Configurados via `_headers` (cache, security)
- **Redirects**: Regras definidas em `_redirects`
- **Environment**: Produção otimizada com assets minificados

## 🔧 Customização e Manutenção

### Conteúdo do Site
- **Texto e Informações**: Editar `docs/content.md` ou diretamente no `index.html`
- **Imagens da Equipe**: Substituir arquivos em `img/uploads/`
- **Ícones dos Tratamentos**: Substituir em `img/cards/`

### Estilos e Comportamento
- **CSS Principal**: `static/css/style.css`
- **JavaScript**: `static/js/main.js`
- **Configurações**: `static/js/config.js`

### Otimização de Imagens
Scripts Python disponíveis para processamento:
```bash
python3 compress_images.py      # Compressão geral
python3 image_splitter.py       # Divisão de imagens grandes
python3 resize_logo.py          # Redimensionamento de logos
python3 generate_favicons.py    # Geração de favicons
```

### Páginas Legais
- **Política de Privacidade**: `politica-privacidade.html`
- **Termos de Uso**: `termos-uso.html`
- **Código de Ética**: `codigo-etica.html`
- **Cookies**: `cookies.html`

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

- **Versão Atual**: 1.3.0
- **Status**: ✅ Produção
- **Deploy**: Automático via Netlify
- **Performance**: Otimizado para Web Vitals

## 📄 Licença

Este projeto foi desenvolvido para a clínica de psicologia Senso. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para promover bem-estar emocional e saúde mental**
