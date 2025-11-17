document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Elementos do DOM (Header, Hamburguer, ScrollToTop)
    const header = document.getElementById('main-header');
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    let lastScrollTop = 0; 

    // 2. LÓGICA DO MENU HAMBÚRGUER (TOGGLE)
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('is-active'); 
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('is-active');
            });
        });
    }

    // 3. LÓGICA DO COMPORTAMENTO DE SCROLL (HEADER DINÂMICO) E SCROLL TO TOP
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
            const headerHeight = header.offsetHeight;

            // Header sumindo/aparecendo
            if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
                header.style.top = `-${headerHeight}px`;
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('is-active');
                }
            } else {
                header.style.top = '0';
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
            
            // Botão Voltar ao Topo
            if (currentScroll > 400) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        }, false);
    }
    
    // Funcionalidade Voltar ao Topo
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- 4. LÓGICA DO CARROSSEL SWIPER.JS ---
    
    // Configurações Comuns de Autoplay
    const autoplayConfig = {
        delay: 5000, // 5 segundos
        disableOnInteraction: false, 
    };

    // Configurações de Responsividade
    const responsiveBreakpoints = {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    };
    
    // 4.1. CARROSSEL FACIAL
    new Swiper('.facial-swiper', {
        loop: true, 
        autoplay: autoplayConfig,
        
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: responsiveBreakpoints,

        pagination: {
            el: '.pagination-facial',
            clickable: true,
        },
        navigation: {
            nextEl: '.next-facial',
            prevEl: '.prev-facial',
        },
    });

    // 4.2. CARROSSEL CORPORAL
    new Swiper('.corporal-swiper', {
        loop: true, 
        autoplay: autoplayConfig,

        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: responsiveBreakpoints,

        pagination: {
            el: '.pagination-corporal',
            clickable: true,
        },
        navigation: {
            nextEl: '.next-corporal',
            prevEl: '.prev-corporal',
        },
    });
});