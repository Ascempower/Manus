// Main JavaScript file for Choice Insurance website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const setupMobileNav = () => {
        const navItems = document.querySelectorAll(&apos;nav ul li a&apos;);
        
        navItems.forEach(item => {
            item.addEventListener(&apos;click&apos;, function() {
                console.log(&apos;Navigation item clicked:&apos;, this.textContent);
            });
        });
    };

    // Smooth scrolling for anchor links
    const setupSmoothScrolling = () => {
        document.querySelectorAll(&apos;a[href^=&quot;#&quot;]&apos;).forEach(anchor => {
            anchor.addEventListener(&apos;click&apos;, function(e) {
                e.preventDefault();
                const targetId = this.getAttribute(&apos;href&apos;);
                if (targetId === &apos;#&apos;) return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: &apos;smooth&apos;,
                        block: &apos;start&apos;
                    });
                }
            });
        });
    };

    // Form validation (for future implementation)
    const setupFormValidation = () => {
        const forms = document.querySelectorAll(&apos;form&apos;);
        forms.forEach(form => {
            form.addEventListener(&apos;submit&apos;, function(e) {
                e.preventDefault();
                // Placeholder for future form validation
                console.log(&apos;Form submitted&apos;);
                alert(&apos;Thank you for your message! We will get back to you soon.&apos;);
                form.reset();
            });
        });
    };

    // Add animation to service cards
    const animateServiceCards = () => {
        const cards = document.querySelectorAll(&apos;.service-card&apos;);
        const serviceItems = document.querySelectorAll(&apos;.service-item&apos;);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(&apos;animate&apos;);
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
        const elements = document.querySelectorAll(&apos;.animate-fade-in, .animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right&apos;);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.visibility = &apos;visible&apos;;
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            element.style.visibility = &apos;hidden&apos;;
            observer.observe(element);
        });
    };
    
    // Add hover animations
    const setupHoverAnimations = () => {
        const buttons = document.querySelectorAll(&apos;.btn&apos;);
        
        buttons.forEach(button => {
            button.addEventListener(&apos;mouseenter&apos;, function() {
                this.style.transform = &apos;translateY(-3px)&apos;;
                this.style.boxShadow = &apos;0 5px 15px rgba(221, 139, 102, 0.4)&apos;;
            });
            
            button.addEventListener(&apos;mouseleave&apos;, function() {
                this.style.transform = &apos;&apos;;
                this.style.boxShadow = &apos;&apos;;
            });
        });
    };
    
    // Page transition animations
    const setupPageTransitions = () => {
        // Add fade-in animation to the main content
        const main = document.querySelector(&apos;main&apos;);
        if (main) {
            main.style.opacity = &apos;0&apos;;
            main.style.transition = &apos;opacity 0.5s ease&apos;;
            
            setTimeout(() => {
                main.style.opacity = &apos;1&apos;;
            }, 100);
        }
        
        // Add staggered animations to header elements
        const headerElements = document.querySelectorAll(&apos;header .logo, header nav ul li&apos;);
        headerElements.forEach((element, index) => {
            element.style.opacity = &apos;0&apos;;
            element.style.transform = &apos;translateY(-10px)&apos;;
            element.style.transition = &apos;opacity 0.5s ease, transform 0.5s ease&apos;;
            element.style.transitionDelay = `${index * 0.1}s`;
            
            setTimeout(() => {
                element.style.opacity = &apos;1&apos;;
                element.style.transform = &apos;translateY(0)&apos;;
            }, 100);
        });
    };
    
    // Parallax effect for hero and page header sections
    const setupParallaxEffect = () => {
        const hero = document.querySelector(&apos;.hero&apos;);
        const pageHeader = document.querySelector(&apos;.page-header&apos;);
        
        if (hero || pageHeader) {
            window.addEventListener(&apos;scroll&apos;, function() {
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
        const counters = document.querySelectorAll(&apos;.counter&apos;);
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute(&apos;data-target&apos;));
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
