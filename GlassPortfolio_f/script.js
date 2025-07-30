// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('theme-toggle');
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        const icon = this.themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section');
        this.init();
    }

    init() {
        this.setupScrollHandler();
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupActiveLinks();
    }

    setupScrollHandler() {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add scrolled class for navbar styling
            if (scrollTop > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            // Auto-hide navbar on scroll down, show on scroll up
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                this.navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    setupMobileMenu() {
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target)) {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
            }
        });
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navbarHeight = this.navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupActiveLinks() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.setActiveLink(id);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        });

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }

    setActiveLink(activeId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }
}

// Typing Animation
class TypingAnimation {
    constructor() {
        this.init();
    }

    init() {
        // Only animate role typing, not the name
        const roleElement = document.getElementById('typed-role');
        if (roleElement) {
            setTimeout(() => {
                new Typed('#typed-role', {
                    strings: [
                        'IT Student',
                        'AI Enthusiast',
                        'Python Developer',
                        'Data Science Learner',
                        'Problem Solver'
                    ],
                    typeSpeed: 120,
                    backSpeed: 60,
                    backDelay: 2500,
                    loop: true,
                    showCursor: true,
                    cursorChar: '|'
                });
            }, 3200);
        }
    }
}

// Form Handler
class ContactFormHandler {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        try {
            // Show loading state
            this.setFormState('loading');
            
            // Simulate API call (replace with actual endpoint)
            await this.submitForm(data);
            
            // Show success message
            this.showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.form.reset();
            
        } catch (error) {
            // Show error message
            this.showMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
        } finally {
            this.setFormState('normal');
        }
    }

    async submitForm(data) {
        // Simulate API delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success (90% chance)
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Simulated error'));
                }
            }, 2000);
        });
    }

    setFormState(state) {
        const submitButton = this.form.querySelector('button[type="submit"]');
        
        switch (state) {
            case 'loading':
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                this.form.classList.add('loading');
                break;
            case 'normal':
            default:
                submitButton.disabled = false;
                submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                this.form.classList.remove('loading');
                break;
        }
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessages = this.form.querySelectorAll('.success, .error');
        existingMessages.forEach(msg => msg.remove());
        
        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = type;
        messageElement.textContent = message;
        
        // Add message to form
        this.form.appendChild(messageElement);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });

        // Add custom scroll animations
        this.setupCustomAnimations();
    }

    setupCustomAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
}

// Accessibility Manager
class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupARIA();
        this.setupReducedMotion();
    }

    setupKeyboardNavigation() {
        // Escape key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const hamburger = document.getElementById('hamburger');
                const navMenu = document.getElementById('nav-menu');
                
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    }

    setupFocusManagement() {
        // Trap focus in mobile menu when open
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = navMenu.querySelectorAll('a');
        
        hamburger.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                // Focus first link when menu opens
                setTimeout(() => navLinks[0]?.focus(), 100);
            }
        });
    }

    setupARIA() {
        // Add ARIA labels and roles
        const hamburger = document.getElementById('hamburger');
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.setAttribute('aria-expanded', 'false');
        
        const navMenu = document.getElementById('nav-menu');
        navMenu.setAttribute('role', 'navigation');
        
        // Update aria-expanded when menu toggles
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isActive = navMenu.classList.contains('active');
                    hamburger.setAttribute('aria-expanded', isActive.toString());
                }
            });
        });
        
        observer.observe(navMenu, { attributes: true });
    }

    setupReducedMotion() {
        // Respect user's motion preferences
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        const handleReducedMotion = (e) => {
            if (e.matches) {
                document.body.classList.add('reduced-motion');
                // Disable AOS animations
                AOS.init({ disable: true });
            } else {
                document.body.classList.remove('reduced-motion');
            }
        };
        
        mediaQuery.addListener(handleReducedMotion);
        handleReducedMotion(mediaQuery);
    }
}

// SEO and Meta Manager
class SEOManager {
    constructor() {
        this.init();
    }

    init() {
        this.updateMetaTags();
        this.setupStructuredData();
    }

    updateMetaTags() {
        // Dynamic meta tag updates based on section
        const sections = document.querySelectorAll('.section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.updatePageMeta(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    updatePageMeta(sectionId) {
        const metaDescriptions = {
            'home': 'Personal Portfolio - Full Stack Developer showcasing skills, projects, and experience',
            'about': 'About Me - Learn more about my background, experience, and passion for development',
            'skills': 'Skills & Technologies - Explore my technical expertise and proficiencies',
            'projects': 'Featured Projects - Discover my latest work and development projects',
            'experience': 'Experience & Education - My professional journey and educational background',
            'certifications': 'Professional Certifications - View my credentials and achievements',
            'contact': 'Contact Me - Get in touch for collaboration and opportunities'
        };

        const description = metaDescriptions[sectionId];
        if (description) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', description);
            }
        }
    }

    setupStructuredData() {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Your Name",
            "jobTitle": "Full Stack Developer",
            "description": "Passionate full-stack developer with expertise in modern web technologies",
            "url": window.location.href,
            "sameAs": [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername"
            ],
            "knowsAbout": [
                "JavaScript",
                "React",
                "Node.js",
                "Python",
                "Web Development",
                "Frontend Development",
                "Backend Development"
            ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }
}

// Main Application
class PortfolioApp {
    constructor() {
        this.components = {};
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        try {
            // Initialize core components
            this.components.themeManager = new ThemeManager();
            this.components.navigationManager = new NavigationManager();
            this.components.typingAnimation = new TypingAnimation();
            this.components.contactFormHandler = new ContactFormHandler();
            this.components.scrollAnimations = new ScrollAnimations();
            this.components.accessibilityManager = new AccessibilityManager();
            this.components.seoManager = new SEOManager();
            
            // Initialize performance monitor
            this.components.performanceMonitor = new PerformanceMonitor();

            console.log('Portfolio app initialized successfully!');
        } catch (error) {
            console.error('Error initializing portfolio app:', error);
        }
    }

    isLowEndDevice() {
        return navigator.hardwareConcurrency <= 2 || 
               navigator.deviceMemory <= 2 ||
               /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
}

// Initialize the application
const portfolioApp = new PortfolioApp();

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
}

// Glassmorphism Preloader Animation
(function() {
  var preloader = document.getElementById('glass-preloader');
  var glass = document.querySelector('.glass-preloader-glass');
  var messageEl = document.getElementById('preloader-message');
  var cursorEl = document.getElementById('preloader-cursor');
  var mainContent = document.getElementById('main-content');
  var greetings = [
    'Hello from [OM]!!!',
    'नमस्ते',
    'Bonjour',
    'Hola',
    'નમસ્તે'
  ];
  var timings = [600, 200, 200, 200, 200];
  var shown = false;

  // Only show preloader on first load
  if (localStorage.getItem('om_preloader_shown')) {
    if (preloader) preloader.style.display = 'none';
    if (mainContent) mainContent.style.display = '';
    return;
  }
  localStorage.setItem('om_preloader_shown', '1');

  if (!preloader || !glass || !messageEl || !cursorEl || !mainContent) return;
  mainContent.style.display = 'none';
  preloader.style.display = 'flex';

  function showGlass() {
    glass.classList.add('preloader-glass-in');
  }
  function showMessage(msg) {
    messageEl.textContent = msg;
    messageEl.classList.add('preloader-message-in');
    cursorEl.style.display = '';
  }
  function hideMessage() {
    messageEl.classList.remove('preloader-message-in');
    cursorEl.style.display = 'none';
  }
  function runSequence() {
    let i = 0;
    function next() {
      if (i > 0) hideMessage();
      if (i < greetings.length) {
        setTimeout(function() {
          showMessage(greetings[i]);
          i++;
          setTimeout(next, timings[i-1]);
        }, i === 0 ? 100 : 0);
      } else {
        // Exit animation
        setTimeout(function() {
          glass.classList.remove('preloader-glass-in');
          preloader.classList.add('preloader-exit');
          setTimeout(function() {
            preloader.style.display = 'none';
            if (mainContent) mainContent.style.display = '';
          }, 800);
        }, 400);
      }
    }
    next();
  }
  setTimeout(function() {
    showGlass();
    setTimeout(runSequence, 350);
  }, 100);
})();
