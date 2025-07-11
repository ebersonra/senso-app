// Router para remover extensões .html das URLs
class SimpleRouter {
    constructor() {
        this.routes = {
            'politica-privacidade': 'politica-privacidade.html',
            'termos-uso': 'termos-uso.html',
            'codigo-etica': 'codigo-etica.html',
            'cookies': 'cookies.html'
        };
        
        this.init();
    }
    
    init() {
        // Interceptar cliques em links internos
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && this.isInternalLink(link.href) && !link.target) {
                e.preventDefault();
                this.navigateTo(link.href);
            }
        });
        
        // Lidar com navegação do browser (back/forward)
        window.addEventListener('popstate', (e) => {
            this.handleRoute();
        });
        
        // Lidar com a rota inicial
        this.handleRoute();
    }
    
    isInternalLink(href) {
        const url = new URL(href, window.location.origin);
        const currentUrl = new URL(window.location.href);
        
        // Se for um link âncora na mesma página, não interceptar
        if (url.pathname === currentUrl.pathname && url.hash) {
            return false;
        }
        
        // Verificar se é um link interno e se corresponde a uma rota conhecida
        return url.origin === currentUrl.origin && 
               this.routes.hasOwnProperty(this.getRouteFromUrl(url.pathname));
    }
    
    getRouteFromUrl(pathname) {
        // Remover barra inicial e extensão .html se existir
        let route = pathname.replace(/^\//, '').replace(/\.html$/, '');
        return route || 'index';
    }
    
    navigateTo(url) {
        const urlObj = new URL(url, window.location.origin);
        const route = this.getRouteFromUrl(urlObj.pathname);
        
        if (this.routes[route]) {
            // Atualizar a URL sem recarregar a página
            const newUrl = window.location.origin + '/' + route + urlObj.hash;
            window.history.pushState({ route }, '', newUrl);
            
            // Carregar o conteúdo da página
            this.loadPage(this.routes[route], urlObj.hash);
        } else {
            // Se não for uma rota conhecida, navegar normalmente
            window.location.href = url;
        }
    }
    
    handleRoute() {
        const route = this.getRouteFromUrl(window.location.pathname);
        const hash = window.location.hash;
        
        if (this.routes[route]) {
            this.loadPage(this.routes[route], hash);
        } else if (route === 'index' || route === '') {
            // Página inicial
            this.loadPage('index.html', hash);
        } else {
            // Rota não encontrada
            this.show404();
        }
    }
    
    loadPage(pagePath, hash = '') {
        fetch(pagePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Página não encontrada');
                }
                return response.text();
            })
            .then(html => {
                // Extrair apenas o conteúdo do body
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.body.innerHTML;
                
                // Substituir o conteúdo da página
                document.body.innerHTML = newContent;
                
                // Re-executar scripts necessários
                this.reinitializeScripts();
                
                // Scroll para a seção específica se houver hash
                if (hash) {
                    setTimeout(() => {
                        const element = document.querySelector(hash);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 100);
                } else {
                    // Scroll para o topo se não houver hash
                    window.scrollTo(0, 0);
                }
            })
            .catch(error => {
                console.error('Erro ao carregar página:', error);
                this.show404();
            });
    }
    
    reinitializeScripts() {
        // Re-executar scripts necessários após carregar nova página
        if (typeof Swiper !== 'undefined') {
            // Re-inicializar Swiper se existir
            const swiperContainer = document.querySelector('.swiper');
            if (swiperContainer) {
                var swiper = new Swiper(".mySwiper", {
                    effect: "coverflow",
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: "auto",
                    loop: true,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }
                });
            }
        }
        
        // Atualizar ano no footer
        updateFooterYear();
        
        // Atualizar datas nas páginas legais
        updateLegalDates();
    }
    
    show404() {
        document.body.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                text-align: center;
                padding: 2rem;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                font-family: 'Creato Display', Arial, sans-serif;
            ">
                <h1 style="font-size: 4rem; margin-bottom: 1rem;">404</h1>
                <h2 style="font-size: 2rem; margin-bottom: 2rem;">Página não encontrada</h2>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">
                    A página que você está procurando não existe.
                </p>
                <a href="/" style="
                    display: inline-block;
                    padding: 1rem 2rem;
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    text-decoration: none;
                    border-radius: 30px;
                    font-weight: bold;
                    transition: background 0.3s ease;
                " onmouseover="this.style.background='rgba(255,255,255,0.3)'" 
                   onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                    Voltar ao início
                </a>
            </div>
        `;
    }
}

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
}); 

// Atualiza automaticamente o ano do copyright no footer
function updateFooterYear() {
    const yearSpan = document.getElementById('footer-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Atualizar datas nas páginas legais
function updateLegalDates() {
    const currentDate = document.getElementById('current-date');
    if (currentDate) {
        currentDate.textContent = new Date().toLocaleDateString('pt-BR');
    }
    
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        lastUpdated.textContent = new Date().toLocaleDateString('pt-BR');
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    updateFooterYear();
    updateLegalDates();
    new SimpleRouter();
}); 