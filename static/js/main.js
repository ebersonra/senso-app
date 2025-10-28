// Router para remover extensões .html das URLs
class SimpleRouter {
    constructor() {
        this.routes = {
            'politica-privacidade': 'politica-privacidade.html',
            'termos-uso': 'termos-uso.html',
            'codigo-etica': 'codigo-etica.html',
            'cookies': 'cookies.html',
            'login': 'login.html',
            'dashboard': 'dashboard.html'
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
        // Atualizar versão do site
        updateVersionInfo();
        
        // Atualizar datas nas páginas legais
        updateLegalDates();
        initNavMenu();
        
        // Inicializar botões de formulário
        initFormButtons();
        
        // Inicializar links de redes sociais
        initSocialLinks();
        
        // Inicializar botão do WhatsApp
        initWhatsAppButton();
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

// Função para processar botões de formulário
function initFormButtons() {
    const formButtons = document.querySelectorAll('.btn-destaque[data-form-url]');
    
    formButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Enviar evento de conversão para Google Ads
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-17413746282/CTAButtonClick',
                    'event_callback': function() {
                        window.open(SITE_CONFIG.CONTACT.WHATSAPP, '_blank');
                    }
                });
                
                // Fallback: abrir WhatsApp após 1 segundo
                setTimeout(function() {
                    window.open(SITE_CONFIG.CONTACT.WHATSAPP, '_blank');
                }, 1000);
            } else {
                window.open(SITE_CONFIG.CONTACT.WHATSAPP, '_blank');
            }
        });
    });
}

// Função para processar links de redes sociais
function initSocialLinks() {
    const instagramLink = document.querySelector('[data-instagram-link]');
    
    if (instagramLink) {
        instagramLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Enviar evento para Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'social_click', {
                    'event_category': 'Social Media',
                    'event_label': 'Instagram',
                    'event_callback': function() {
                        window.open(SITE_CONFIG.SOCIAL_MEDIA.INSTAGRAM, '_blank');
                    }
                });
                
                // Fallback
                setTimeout(function() {
                    window.open(SITE_CONFIG.SOCIAL_MEDIA.INSTAGRAM, '_blank');
                }, 500);
            } else {
                window.open(SITE_CONFIG.SOCIAL_MEDIA.INSTAGRAM, '_blank');
            }
        });
    }
}

// Função para processar o botão flutuante do WhatsApp
function initWhatsAppButton() {
    const whatsappLink = document.querySelector('[data-whatsapp-link]');
    
    if (whatsappLink) {
        whatsappLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ocultar o badge ao clicar
            const badge = document.getElementById('whatsappBadge');
            if (badge) {
                badge.classList.add('hidden');
                // Salvar no localStorage que o badge foi clicado
                localStorage.setItem('whatsappBadgeClicked', 'true');
            }
            
            // Enviar evento de conversão para Google Ads
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-17413746282/WhatsAppClick',
                    'event_callback': function() {
                        // Abrir WhatsApp após enviar o evento
                        window.open(SITE_CONFIG.CONTACT.WHATSAPP, '_blank');
                    }
                });
                
                // Fallback: abrir WhatsApp após 1 segundo mesmo se o evento não retornar
                setTimeout(function() {
                    window.open(SITE_CONFIG.CONTACT.WHATSAPP, '_blank');
                }, 1000);
            } else {
                // Se gtag não estiver disponível, abrir WhatsApp normalmente
                window.open(SITE_CONFIG.CONTACT.WHATSAPP, '_blank');
            }
        });
    }
    
    // Gerenciar a visibilidade do badge
    const badge = document.getElementById('whatsappBadge');
    if (badge) {
        const wasClicked = localStorage.getItem('whatsappBadgeClicked');
        
        if (wasClicked === 'true') {
            // Se já clicou, ocultar o badge inicialmente
            badge.classList.add('hidden');
            badge.style.display = 'none';
            
            // Reaparecer após 5 minutos (300000ms) para lembrar o usuário
            setTimeout(() => {
                badge.style.display = 'flex';
                badge.classList.remove('hidden');
                // Limpar o localStorage para mostrar novamente
                localStorage.removeItem('whatsappBadgeClicked');
            }, 300000);
        } else {
            // Mostrar o badge após 2 segundos
            setTimeout(() => {
                badge.style.display = 'flex';
            }, 2000);
        }
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

// ===== MENU HAMBURGUER MODERNO =====
function initNavMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    if (navToggle && navMenu && navOverlay) {
        // Remove listeners antigos
        navToggle.onclick = null;
        navOverlay.onclick = null;
        navMenu.querySelectorAll('a').forEach(link => link.onclick = null);
        function closeMenu() {
            navMenu.classList.remove('open');
            navOverlay.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
        function openMenu() {
            navMenu.classList.add('open');
            navOverlay.classList.add('open');
            navToggle.classList.add('active');
            navToggle.setAttribute('aria-expanded', 'true');
            // Foco no primeiro link do menu
            const firstLink = navMenu.querySelector('a');
            if (firstLink) firstLink.focus();
        }
        navToggle.addEventListener('click', function () {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            if (expanded) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        navOverlay.addEventListener('click', closeMenu);
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        // Fechar menu com ESC
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') closeMenu();
        });
    }
}

// Função para atualizar a versão do site
function updateVersionInfo() {
    const versionElement = document.getElementById('version-display');
    if (versionElement) {
        // Tenta pegar da variável global definida durante o build
        if (typeof SITE_VERSION !== 'undefined') {
            versionElement.textContent = SITE_VERSION;
        }
        // Fallback: mantém versão atual se variável não estiver disponível
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateFooterYear();
    updateLegalDates();
    updateVersionInfo();
    new SimpleRouter();
    initNavMenu();
    initFormButtons();
    initSocialLinks();
    initWhatsAppButton();
});