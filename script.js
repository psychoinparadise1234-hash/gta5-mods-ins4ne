// Smooth scroll for navigation links
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

// Navbar glow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 0 15px rgba(57, 255, 20, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animate mod cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'pixelSlideIn 0.5s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all mod cards and tutorial steps
document.querySelectorAll('.mod-card, .tutorial-step').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Add slide animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pixelSlideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Tutorial code copy functionality
document.querySelectorAll('.tutorial-step pre').forEach((preElement) => {
    const codeElement = preElement.querySelector('code');
    if (codeElement) {
        const copyBtn = document.createElement('button');
        copyBtn.textContent = 'COPY';
        copyBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #39ff14;
            color: #1a1a2e;
            border: 2px solid #39ff14;
            padding: 0.4rem 0.8rem;
            cursor: pointer;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            font-size: 0.8rem;
            transition: all 0.2s ease;
        `;
        
        copyBtn.onmouseover = () => {
            copyBtn.style.boxShadow = '0 0 15px rgba(57, 255, 20, 0.8)';
        };
        
        copyBtn.onmouseout = () => {
            copyBtn.style.boxShadow = 'none';
        };
        
        copyBtn.onclick = () => {
            const text = codeElement.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'COPIED!';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                }, 2000);
            });
        };
        
        preElement.style.position = 'relative';
        preElement.appendChild(copyBtn);
    }
});

// Pixel animation on mod cards hover
document.querySelectorAll('.mod-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.2s ease';
    });
});

// Add keyboard glow effect
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        document.body.style.textShadow = '0 0 10px rgba(57, 255, 20, 0.3)';
        setTimeout(() => {
            document.body.style.textShadow = 'none';
        }, 100);
    }
});

// Add loading animation on page load
window.addEventListener('load', () => {
    const title = document.querySelector('.pixel-title');
    if (title) {
        title.style.textShadow = '0 0 30px rgba(57, 255, 20, 0.8), 0 0 60px rgba(57, 255, 20, 0.6)';
    }
});

// Smooth button interactions
document.querySelectorAll('.pixel-button').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.letterSpacing = '0.2em';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.letterSpacing = '0.1em';
    });
});

// Tutorial step numbering animation
document.querySelectorAll('.step-number').forEach((stepNum, index) => {
    stepNum.style.animation = `popIn 0.4s ease-out ${index * 0.1}s forwards`;
});

// Add pop animation
const popStyle = document.createElement('style');
popStyle.textContent = `
    @keyframes popIn {
        from {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
        }
        to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
        }
    }
`;
document.head.appendChild(popStyle);

// Add subtle glow to links
document.querySelectorAll('a').forEach(link => {
    if (link.textContent.includes('Home') || link.textContent.includes('Mods') || link.textContent.includes('Add')) {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 15px rgba(57, 255, 20, 0.8)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    }
});