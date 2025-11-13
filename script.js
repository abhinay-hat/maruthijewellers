// =================================
// PRELOADER
// =================================
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 2500);
});

// =================================
// CUSTOM CURSOR
// =================================
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: 'forwards' });
});

// Enlarge cursor on hover
document.querySelectorAll('a, button, .card-image, .product-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'scale(2)';
        cursorOutline.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'scale(1)';
        cursorOutline.style.transform = 'scale(1)';
    });
});

// =================================
// INITIALIZE AOS (Animate On Scroll)
// =================================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// =================================
// HEADER SCROLL EFFECT
// =================================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// =================================
// MOBILE MENU TOGGLE
// =================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// =================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// =================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            }
        }
    });
});

// =================================
// ACTIVE NAVIGATION LINK ON SCROLL
// =================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// =================================
// ADD TO CART ANIMATION
// =================================
const cartButtons = document.querySelectorAll('.btn-cart');
const cartIcon = document.querySelector('.fa-shopping-cart');
let cartCount = 0;

cartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        // Add animation to cart icon
        cartIcon.classList.add('cart-animation');
        cartCount++;

        // Create floating notification
        createFloatingNotification('Added to cart!');

        // Change button text temporarily
        const originalText = this.textContent;
        this.textContent = '✓ Added!';
        this.style.backgroundColor = '#2ecc71';
        this.style.color = 'white';
        this.style.borderColor = '#2ecc71';

        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
            this.style.color = '';
            this.style.borderColor = '';
            cartIcon.classList.remove('cart-animation');
        }, 2000);
    });
});

// =================================
// FLOATING NOTIFICATION
// =================================
function createFloatingNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, var(--gold), #b8965a);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// =================================
// NEWSLETTER FORM SUBMISSION
// =================================
const newsletterForm = document.querySelector('.newsletter-form');
const emailInput = newsletterForm ? newsletterForm.querySelector('input[type="email"]') : null;
const subscribeButton = newsletterForm ? newsletterForm.querySelector('button') : null;

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value;

        if (email && validateEmail(email)) {
            createFloatingNotification('Successfully subscribed!');
            subscribeButton.textContent = '✓ Subscribed!';
            subscribeButton.style.backgroundColor = '#2ecc71';
            emailInput.value = '';

            // Confetti effect
            createConfetti();

            setTimeout(() => {
                subscribeButton.textContent = 'Subscribe';
                subscribeButton.style.backgroundColor = '';
            }, 3000);
        } else {
            emailInput.style.border = '2px solid #e74c3c';
            emailInput.placeholder = 'Please enter a valid email';
            setTimeout(() => {
                emailInput.style.border = '';
                emailInput.placeholder = 'Enter your email address';
            }, 2000);
        }
    });
}

// =================================
// EMAIL VALIDATION
// =================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// =================================
// CONFETTI EFFECT
// =================================
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = '✦';
            confetti.style.cssText = `
                position: fixed;
                top: 100px;
                right: ${Math.random() * 200 + 50}px;
                color: var(--gold);
                font-size: ${Math.random() * 20 + 10}px;
                pointer-events: none;
                z-index: 10000;
                animation: confettiFall 2s ease-out forwards;
            `;
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }, i * 30);
    }
}

// =================================
// SCROLL TO TOP BUTTON
// =================================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--gold), #b8965a);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 5px 20px rgba(201, 168, 106, 0.4);
    transition: all 0.3s;
    z-index: 1000;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1)';
    this.style.boxShadow = '0 10px 30px rgba(201, 168, 106, 0.6)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 5px 20px rgba(201, 168, 106, 0.4)';
});

// =================================
// ADD CSS ANIMATIONS
// =================================
const style = document.createElement('style');
style.textContent = `
    @keyframes cart-bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }

    .cart-animation {
        animation: cart-bounce 0.5s ease;
    }


    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }

    @keyframes confettiFall {
        0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translateY(500px) rotate(720deg);
        }
    }

    img {
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }

    img.fade-in {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// =================================
// LAZY LOADING IMAGES
// =================================
const images = document.querySelectorAll('img');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('fade-in');
            observer.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(image => {
    imageObserver.observe(image);
});

// =================================
// SEARCH FUNCTIONALITY
// =================================
const searchIcon = document.querySelector('.fa-search');
if (searchIcon) {
    searchIcon.addEventListener('click', () => {
        const searchTerm = prompt('What are you looking for?');
        if (searchTerm) {
            createFloatingNotification(`Searching for: ${searchTerm}`);
            // In production, this would trigger actual search
        }
    });
}

// =================================
// PARALLAX EFFECT ON SCROLL
// =================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image-circle');

    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// =================================
// PRODUCT CARD TILT EFFECT
// =================================
const productCards = document.querySelectorAll('.product-card, .category-card');

productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// =================================
// CONSOLE WELCOME MESSAGE
// =================================
console.log('%c✨ Welcome to Maruti Jewellers! ✨',
    'background: linear-gradient(135deg, #1a4d4d, #c9a86a); color: white; font-size: 24px; padding: 20px; border-radius: 10px; font-weight: bold;');
console.log('%c🌐 Website: maruthijewellers.in',
    'color: #1a4d4d; font-size: 16px; font-weight: bold;');
console.log('%c💎 Crafting Excellence Since 1980',
    'color: #c9a86a; font-size: 14px; font-style: italic;');

// =================================
// PAGE TRANSITION EFFECT
// =================================
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
