# Psicologia Senso - Website

Site moderno e responsivo para a clínica de psicologia Senso, desenvolvido com HTML5, CSS3 e JavaScript.

## 🎯 Sobre o Projeto

Este projeto é um website institucional para a clínica de psicologia Senso, apresentando informações sobre tratamentos, serviços e equipe de profissionais. O site foi desenvolvido com foco em design moderno, responsividade e experiência do usuário.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional
- **Totalmente Responsivo**: Adaptado para todos os dispositivos
- **Logo em Destaque**: Section0 com logo de 800px no desktop
- **Carrossel Interativo**: Apresentação dinâmica dos tratamentos
- **Navegação Suave**: Transições fluidas entre seções
- **Performance Otimizada**: Imagens comprimidas e código otimizado
- **Favicon Completo**: Baseado na logo da clínica
- **PWA Ready**: Suporte para Progressive Web App

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript**: Interatividade e funcionalidades dinâmicas
- **Swiper.js**: Biblioteca para carrossel responsivo
- **Glassmorphism**: Efeito visual moderno nos cards
- **PIL (Python)**: Geração de favicons em múltiplos tamanhos

## 📁 Estrutura do Projeto

```
senso-app/
├── index.html              # Página principal
├── manifest.json           # Manifest para PWA
├── static/
│   ├── css/
│   │   └── style.css       # Estilos CSS
│   └── js/
│       └── main.js         # JavaScript do carrossel
├── img/
│   ├── bg/
│   │   ├── part_0.jpg      # Imagem de fundo seção 0
│   │   ├── part_1.jpg      # Imagem de fundo seção 1
│   │   ├── part_2.jpg      # Imagem de fundo seção 2
│   │   ├── part_3.jpg      # Imagem de fundo seção 3
│   │   ├── part_4.jpg      # Imagem de fundo seção 4
│   │   └── part_5.jpg      # Imagem de fundo seção 5
│   ├── logo/
│   │   └── logo_senso_nova.png  # Logo da clínica
│   └── favicon/
│       ├── favicon.ico     # Favicon principal
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── favicon-48x48.png
│       ├── favicon-64x64.png
│       ├── favicon-128x128.png
│       ├── apple-touch-icon.png
│       ├── android-chrome-192x192.png
│       └── android-chrome-512x512.png
└── README.md               # Documentação do projeto
```

## 🎨 Seções do Site

### 0. Logo e Apresentação (Section0)
- **Logo centralizada**: 800px no desktop, responsiva
- **Tagline**: "Cuidando da sua saúde mental com excelência e humanidade"
- **Indicador de scroll**: Animação de bounce
- **Animações**: fadeInUp para logo e tagline

### 1. Sobre Nós
- Apresentação da clínica
- Filosofia de trabalho
- Valores e missão

### 2. Tratamentos (Carrossel)
- **10 cards interativos** com efeito glassmorphism
- Ansiedade e estresse
- Depressão e luto
- Transtornos de personalidade
- Conflitos familiares
- Autoestima e bullying
- Compulsões alimentares
- Dificuldades acadêmicas
- Controle emocional
- Influência digital
- Identidade de gênero

### 3. Serviços
- Acolhimento e suporte
- Psicoterapia online e presencial
- Atendimento personalizado

### 4. Equipe
- **Heloisa do Vale** - CRP: 08/40879
- **Rafael Stoco Pereira** - CRP: 08/42222
- **André Borges O. Santos** - CRP: 08/40954

### 5. Agendamento
- Chamada para ação
- Informações de contato

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   cd senso-app
   ```

2. **Abra o arquivo index.html**:
   - Duplo clique no arquivo `index.html`
   - Ou use um servidor local:
   ```bash
   python3 -m http.server 8000
   # Acesse: http://localhost:8000
   ```

## 📱 Responsividade

O site é totalmente responsivo e se adapta aos seguintes breakpoints:

### **Desktop (1200px+)**
- Logo: 800px
- Tagline: 2rem
- Carrossel: 3 slides visíveis

### **Laptop (1024px)**
- Logo: 600px
- Tagline: 1.8rem

### **Tablet (768px)**
- Logo: 400px
- Tagline: 1.4rem
- Carrossel: 2 slides visíveis

### **Mobile (480px)**
- Logo: 280px
- Tagline: 1.1rem
- Carrossel: 1 slide visível

### **Mobile Pequeno (360px)**
- Logo: 220px
- Tagline: 1rem

## 🎯 Funcionalidades

### Carrossel de Tratamentos
- Efeito coverflow 3D
- Navegação por botões e paginação
- Autoplay responsivo
- Touch/swipe em dispositivos móveis
- Cards com efeito glassmorphism

### Navegação
- Links internos suaves
- Botões de call-to-action
- Navegação por teclado
- Indicador de scroll animado

### Performance
- Imagens otimizadas (< 800KB cada)
- CSS e JS minificados
- Carregamento assíncrono
- Favicons em múltiplos formatos

### PWA (Progressive Web App)
- Manifest.json configurado
- Ícones para diferentes dispositivos
- Suporte para instalação como app
- Theme color personalizada

## 🖼️ Favicon

Sistema completo de favicon baseado na logo da clínica:

- **Favicon.ico**: Formato tradicional
- **PNG múltiplos tamanhos**: 16x16 até 128x128
- **Apple Touch Icon**: 180x180 para iOS
- **Android Chrome**: 192x192 e 512x512
- **Compatibilidade total**: Todos os navegadores e dispositivos

## 🔧 Personalização

### Cores e Estilos
Edite o arquivo `static/css/style.css` para personalizar:
- Cores do tema
- Tipografia
- Espaçamentos
- Efeitos visuais
- Tamanhos responsivos

### Conteúdo
Modifique o arquivo `index.html` para atualizar:
- Textos e informações
- Imagens de fundo
- Links e contatos
- Seções e estrutura

### Funcionalidades
Ajuste o arquivo `static/js/main.js` para:
- Configurar o carrossel
- Adicionar animações
- Implementar novas funcionalidades

### Favicon
Para gerar novos favicons:
```bash
# Instalar Pillow
pip3 install Pillow

# Executar script de geração
python3 generate_favicon.py
```

## 📞 Contato

Para mais informações sobre a clínica Senso:
- **Website**: [psicologiasenso.com.br](https://psicologiasenso.com.br/)
- **Localização**: [Endereço da clínica]
- **Telefone**: [Número de contato]

## 📄 Licença

Este projeto foi desenvolvido para a clínica de psicologia Senso. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para o bem-estar emocional**
