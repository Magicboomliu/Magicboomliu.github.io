// Cool Interactive Features for Homepage

// Create page loader
(function() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div style="font-size: 1.2em; font-weight: 600;">Loading...</div>
        </div>
    `;
    document.body.insertBefore(loader, document.body.firstChild);
    
    // Hide loader when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
            setTimeout(function() {
                loader.remove();
            }, 500);
        }, 500);
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all publication divs
    document.querySelectorAll('.page__content > div').forEach(el => {
        observer.observe(el);
    });

    // Observe list items (news, experience)
    document.querySelectorAll('.page__content ul li').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Add sparkle effect on hover for publication cards
    const publicationCards = document.querySelectorAll('.page__content > div[style*="display: flex"]');
    
    publicationCards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            createSparkle(e.currentTarget);
        });
    });

    function createSparkle(element) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #667eea, transparent);
            border-radius: 50%;
            pointer-events: none;
            animation: sparkleAnimation 1s ease-out forwards;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            z-index: 10;
        `;
        element.style.position = 'relative';
        element.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    // Add CSS for sparkle animation
    if (!document.getElementById('sparkle-style')) {
        const style = document.createElement('style');
        style.id = 'sparkle-style';
        style.textContent = `
            @keyframes sparkleAnimation {
                0% {
                    opacity: 1;
                    transform: scale(0) translateY(0);
                }
                50% {
                    opacity: 0.8;
                    transform: scale(1.5) translateY(-20px);
                }
                100% {
                    opacity: 0;
                    transform: scale(0.5) translateY(-40px);
                }
            }
            
            .animate-in {
                animation: fadeInUp 0.8s ease-out !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Parallax effect for images
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.page__content img');
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            const yPos = -(scrolled * speed / 10);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Add typing effect to page title
    const pageTitle = document.querySelector('.page__title');
    if (pageTitle) {
        const text = pageTitle.textContent;
        pageTitle.textContent = '';
        pageTitle.style.opacity = '1';
        
        let index = 0;
        const typeSpeed = 50;
        
        function typeWriter() {
            if (index < text.length) {
                pageTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, typeSpeed);
            }
        }
        
        setTimeout(typeWriter, 300);
    }

    // Add hover effect for news items
    const newsItems = document.querySelectorAll('.page__content ul li');
    newsItems.forEach(item => {
        // Create a gradient blob effect
        item.addEventListener('mouseenter', function(e) {
            const blob = document.createElement('div');
            blob.className = 'hover-blob';
            blob.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(102, 126, 234, 0.3), transparent);
                border-radius: 50%;
                pointer-events: none;
                top: ${e.offsetY - 50}px;
                left: ${e.offsetX - 50}px;
                animation: blobAnimation 0.6s ease-out forwards;
                z-index: 0;
            `;
            
            if (getComputedStyle(this).position === 'static') {
                this.style.position = 'relative';
            }
            
            this.appendChild(blob);
            
            setTimeout(() => {
                blob.remove();
            }, 600);
        });
    });

    // Add blob animation CSS
    if (!document.getElementById('blob-style')) {
        const blobStyle = document.createElement('style');
        blobStyle.id = 'blob-style';
        blobStyle.textContent = `
            @keyframes blobAnimation {
                0% {
                    opacity: 0;
                    transform: scale(0);
                }
                50% {
                    opacity: 1;
                    transform: scale(1.5);
                }
                100% {
                    opacity: 0;
                    transform: scale(2);
                }
            }
        `;
        document.head.appendChild(blobStyle);
    }

    // Add floating particles in background
    function createParticles() {
        const particleCount = 20;
        const particles = document.createElement('div');
        particles.className = 'particles-container';
        particles.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 4 + 2;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            const leftPos = Math.random() * 100;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.6));
                border-radius: 50%;
                bottom: -10px;
                left: ${leftPos}%;
                animation: floatUp ${duration}s ${delay}s infinite ease-in;
                opacity: 0.3;
            `;
            
            particles.appendChild(particle);
        }
        
        document.body.insertBefore(particles, document.body.firstChild);
    }

    // Add particle animation CSS
    if (!document.getElementById('particle-style')) {
        const particleStyle = document.createElement('style');
        particleStyle.id = 'particle-style';
        particleStyle.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.3;
                }
                90% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(particleStyle);
    }

    createParticles();

    // Create and add back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);

    // Show/hide back to top button on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Scroll to top on button click
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add keyboard navigation for back to top button
    backToTopButton.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // Add console message for fun
    console.log('%c👋 Welcome to my homepage!', 'font-size: 20px; color: #667eea; font-weight: bold;');
    console.log('%c🚀 Built with Jekyll & enhanced with custom CSS/JS', 'font-size: 14px; color: #764ba2;');
    console.log('%c💡 Tip: Check out the cool hover effects!', 'font-size: 12px; color: #4a5568;');
});

