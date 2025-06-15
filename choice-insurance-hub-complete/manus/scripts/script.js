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
                // Placeholder for future form validation
                console.log('Form submitted');
            });
        });
    };

    // Initialize all functions
    setupMobileNav();
    setupSmoothScrolling();
    setupFormValidation();

    // Add animation to service cards
    const animateServiceCards = () => {
        const cards = document.querySelectorAll('.service-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    };
    
    // Call animation function
    animateServiceCards();
    
    console.log('Choice Insurance website initialized');
});
