// Main JavaScript file for Choice Insurance website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const setupMobileNav = () => {
        const navItems = document.querySelectorAll('nav ul li a');
        
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                console.log('Navigation item clicked:', this.textContent);
            });
        });
    };

    // Smooth scrolling for anchor links
    const setupSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // Form validation (for future implementation)
    const setupFormValidation = () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                // Placeholder for future form validation
                console.log('Form submitted');
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            });
        });
    };

    // Add animation to service cards
    const animateServiceCards = () => {
        const cards = document.querySelectorAll('.service-card');
        const serviceItems = document.querySelectorAll('.service-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            observer.observe(card);
        });
        
        serviceItems.forEach(item => {
            observer.observe(item);
        });
    };
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.visibility = 'visible';
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            element.style.visibility = 'hidden';
            observer.observe(element);
        });
    };
    
    // Add hover animations
    const setupHoverAnimations = () => {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 5px 15px rgba(221, 139, 102, 0.4)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    };
    
    // Page transition animations
    const setupPageTransitions = () => {
        // Add fade-in animation to the main content
        const main = document.querySelector('main');
        if (main) {
            main.style.opacity = '0';
            main.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                main.style.opacity = '1';
            }, 100);
        }
        
        // Add staggered animations to header elements
        const headerElements = document.querySelectorAll('header .logo, header nav ul li');
        headerElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(-10px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.transitionDelay = `${index * 0.1}s`;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        });
    };
    
    // Parallax effect for hero and page header sections
    const setupParallaxEffect = () => {
        const hero = document.querySelector('.hero');
        const pageHeader = document.querySelector('.page-header');
        
        if (hero || pageHeader) {
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
                
                if (hero) {
                    hero.style.backgroundPosition = `50% ${scrollPosition * 0.4}px`;
                }
                
                if (pageHeader) {
                    pageHeader.style.backgroundPosition = `50% ${scrollPosition * 0.4}px`;
                }
            });
        }
    };
    
    // Animate counter for statistics (can be added to about page)
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // ms
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    updateCounter();
                    observer.unobserve(counter);
                }
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    };

    // Initialize all functions
    setupMobileNav();
    setupSmoothScrolling();
    setupFormValidation();
    animateServiceCards();
    animateOnScroll();
    setupHoverAnimations();
    setupPageTransitions();
    setupParallaxEffect();
    animateCounters();
    
    console.log('Choice Insurance website initialized with animations');
});
