# Psicologia Senso - Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/c8488858-5fe4-4495-ac74-c70dced9df44/deploy-status)](https://app.netlify.com/projects/psicologiasenso/deploys)

Site moderno, responsivo e otimizado para a clínica de psicologia Senso, desenvolvido com HTML5, CSS3, JavaScript e um fluxo de CI/CD automatizado com GitHub Actions para deploy na Netlify.

## 🎯 Sobre o Projeto

Este projeto é um website institucional para a clínica de psicologia Senso. O foco foi criar uma experiência de usuário fluida e profissional, com design moderno, performance otimizada e um backend de deploy robusto e automatizado.

## ✨ Características Principais

- **Design Moderno e Coeso**: Interface limpa com containers de vidro e paleta de cores consistente.
- **Totalmente Responsivo**: Adaptado para todos os dispositivos, de desktops a celulares.
- **Carrossel Interativo e Automático**: Apresentação dinâmica dos tratamentos com ícones, autoplay e loop infinito.
- **Performance Otimizada**: Minificação automática de CSS e JavaScript durante o deploy.
- **CI/CD com GitHub Actions**: Build e deploy automatizados na Netlify a cada push na branch `main`.
- **Favicon Completo e PWA Ready**: Suporte completo para ícones e Progressive Web App.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível.
- **CSS3**: Estilos modernos com Flexbox, Grid e Variáveis CSS para theming.
- **JavaScript (ES6+)**: Interatividade e funcionalidades dinâmicas.
- **Swiper.js**: Biblioteca para o carrossel responsivo.
- **Node.js/npm**: Gerenciamento de dependências de desenvolvimento.
- **Terser**: Ferramenta para minificar e ofuscar JavaScript.
- **clean-css-cli**: Ferramenta para minificar CSS.
- **GitHub Actions**: Automação de CI/CD para build e deploy.
- **Netlify**: Hospedagem e plataforma de deploy.

## 📁 Estrutura do Projeto

```
senso-app/
├── .github/workflows/      # Workflows do GitHub Actions
│   └── build-and-deploy.yml
├── index.html              # Página principal
├── static/
│   ├── css/style.css       # Estilos CSS (desenvolvimento)
│   └── js/main.js          # JavaScript (desenvolvimento)
├── img/                    # Imagens (backgrounds, logo, ícones)
├── package.json            # Dependências e scripts de build
├── netlify.toml            # Configuração de deploy da Netlify
└── README.md               # Documentação
```

## 🚀 Como Executar Localmente

1.  **Clone o repositório**:
    ```bash
    git clone [url-do-repositorio]
    cd senso-app
    ```

2.  **Instale as dependências de desenvolvimento**:
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    # O site estará disponível em http://localhost:8000
    ```

## ⚙️ Build e Deploy (CI/CD)

O projeto está configurado com um fluxo de **Integração e Deploy Contínuo (CI/CD)** usando GitHub Actions.

-   **Gatilho**: O workflow é acionado a cada `push` na branch `main`.
-   **Processo**:
    1.  O código é verificado.
    2.  As dependências são instaladas.
    3.  O CSS é minificado para `style.min.css`.
    4.  O JavaScript é minificado e ofuscado para `main.min.js`.
    5.  Uma pasta `dist` é criada com todos os arquivos prontos para produção.
    6.  O `index.html` na pasta `dist` é atualizado para usar os arquivos `.min`.
    7.  A pasta `dist` é enviada para a Netlify.

Este processo garante que apenas código otimizado seja publicado, melhorando a performance do site sem trabalho manual.

## 🔧 Personalização

### Conteúdo e Estilos
-   **Conteúdo HTML**: Edite `index.html`.
-   **Estilos CSS**: Edite `static/css/style.css`.
-   **Lógica JavaScript**: Edite `static/js/main.js`.

Após qualquer alteração, basta fazer o `commit` e `push` para a branch `main`, e o GitHub Actions cuidará do resto.

### Configuração de Build
-   **Comandos de Minificação**: Podem ser ajustados no `package.json`.
-   **Workflow do CI/CD**: A lógica do build pode ser modificada em `.github/workflows/build-and-deploy.yml`.

## 📞 Contato

Para mais informações sobre a clínica Senso:
- **Website**: [psicologiasenso.com.br](https://psicologiasenso.com.br/)
- **Localização**: [Endereço da clínica]
- **Telefone**: [Número de contato]

## 📄 Licença

Este projeto foi desenvolvido para a clínica de psicologia Senso. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para o bem-estar emocional**
