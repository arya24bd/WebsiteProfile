// ====== SMOOTH SCROLL BEHAVIOR ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ====== BUTTON SHOW MESSAGE DENGAN MODAL MEWAH ======
const btnShowMessage = document.getElementById("btnShowMessage");

btnShowMessage.addEventListener("click", () => {
    showModal(
        "Halo! 👋",
        "Saya Muhammad Arya Fahrezi, seorang web developer dan UI/UX enthusiast dari Politeknik Caltex Riau. Terima kasih sudah berkunjung di website profil saya! 🎉"
    );
});

// ====== MODAL FUNCTION YANG MEWAH ======
function showModal(title, message) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3>${title}</h3>
                <div class="modal-line"></div>
            </div>
            <p>${message}</p>
            <button class="modal-btn">Tutup</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add premium styles
    if (!document.querySelector('style[data-modal-premium]')) {
        const style = document.createElement('style');
        style.setAttribute('data-modal-premium', 'true');
        style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(15, 23, 42, 0.7);
                backdrop-filter: blur(5px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                animation: fadeInOverlay 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            
            @keyframes fadeInOverlay {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            
            .modal-content {
                background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
                padding: 50px;
                border-radius: 25px;
                max-width: 550px;
                width: 90%;
                box-shadow: 0 25px 70px rgba(16, 185, 129, 0.3),
                            0 0 50px rgba(16, 185, 129, 0.1);
                position: relative;
                overflow: hidden;
                animation: slideUpModal 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                border: 1px solid rgba(16, 185, 129, 0.2);
            }
            
            .modal-content::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #10b981, #fbbf24);
            }
            
            @keyframes slideUpModal {
                from {
                    opacity: 0;
                    transform: translateY(50px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            .modal-header {
                margin-bottom: 20px;
            }
            
            .modal-content h3 {
                color: #10b981;
                font-size: 1.9rem;
                margin-bottom: 15px;
                font-weight: 800;
                letter-spacing: -0.5px;
            }
            
            .modal-line {
                width: 60px;
                height: 4px;
                background: linear-gradient(90deg, #10b981, #fbbf24);
                border-radius: 2px;
            }
            
            .modal-content p {
                color: #64748b;
                line-height: 1.8;
                margin-bottom: 30px;
                font-size: 1.05rem;
                font-weight: 500;
            }
            
            .modal-close {
                position: absolute;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(251, 191, 36, 0.05));
                border: 2px solid rgba(16, 185, 129, 0.2);
                font-size: 2rem;
                cursor: pointer;
                color: #10b981;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                width: 45px;
                height: 45px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .modal-close:hover {
                background: linear-gradient(135deg, #10b981, #fbbf24);
                color: white;
                transform: scale(1.15) rotate(90deg);
                border-color: #10b981;
            }
            
            .modal-btn {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 14px 40px;
                border: none;
                border-radius: 25px;
                font-size: 1.05rem;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                width: 100%;
                box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
                letter-spacing: 0.5px;
            }
            
            .modal-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 15px 50px rgba(16, 185, 129, 0.4);
                background: linear-gradient(135deg, #059669 0%, #047857 100%);
            }
            
            .modal-btn:active {
                transform: translateY(-1px);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Close modal events
    const closeBtn = modal.querySelector('.modal-close');
    const modalBtn = modal.querySelector('.modal-btn');
    
    const closeModal = () => {
        modal.style.animation = 'fadeOutModal 0.3s ease-out';
        setTimeout(() => modal.remove(), 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    modalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Close with ESC key
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
}

// ====== ADD FADEOUT ANIMATION ======
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeOutModal {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);

// ====== INTERSECTION OBSERVER UNTUK ANIMASI SCROLL ======
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s both`;
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});

// ====== SKILL TAGS ANIMATION ======
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animation = `slideUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.08}s both`;
    
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ====== INFO CARDS PREMIUM RIPPLE EFFECT ======
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add premium ripple styles
if (!document.querySelector('style[data-ripple-premium]')) {
    const rippleStyle = document.createElement('style');
    rippleStyle.setAttribute('data-ripple-premium', 'true');
    rippleStyle.textContent = `
        .info-card {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, rgba(16, 185, 129, 0.4) 100%);
            transform: scale(0);
            animation: rippleAnimation 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            pointer-events: none;
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        }
        
        @keyframes rippleAnimation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// ====== WISH CARDS INTERACTIVE ======
document.querySelectorAll('.wish-card').forEach((card, index) => {
    card.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s both`;
    
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
});

// ====== TIMELINE ANIMATION ======
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.animation = `slideUp 0.6s ease-out ${0.2 + index * 0.15}s both`;
});

// ====== BUTTON HOVER EFFECTS ======
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ====== SCROLL REVEAL ANIMATION ======
window.addEventListener('load', () => {
    document.querySelectorAll('h2').forEach((heading, index) => {
        heading.style.animation = `slideUp 0.8s ease-out ${index * 0.1}s both`;
    });
});

// ====== CONSOLE GREETING YANG MEWAH ======
console.clear();
console.log('%c╔════════════════════════════════════════════════════════════╗', 'color: #10b981; font-weight: bold; font-size: 14px;');
console.log('%c║                                                            ║', 'color: #10b981; font-weight: bold; font-size: 14px;');
console.log('%c║      Selamat datang di Website Profil Muhammad Arya        ║', 'color: #10b981; font-weight: bold; font-size: 14px;');
console.log('%c║                                                            ║', 'color: #10b981; font-weight: bold; font-size: 14px;');
console.log('%c╚════════════════════════════════════════════════════════════╝', 'color: #10b981; font-weight: bold; font-size: 14px;');
console.log('%cHalo! 👋', 'font-size: 20px; color: #10b981; font-weight: bold;');
console.log('%cTerima kasih sudah mengunjungi website profil saya!', 'font-size: 14px; color: #fbbf24; font-weight: 600;');
console.log('%c🌿 Built with passion and modern web technologies', 'font-size: 13px; color: #06b6d4; font-style: italic;');

// ====== PARALLAX EFFECT UNTUK HERO ======
window.addEventListener('scroll', () => {
    const hero = document.querySelector('header.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// ====== PAGE PERFORMANCE MONITORING ======
window.addEventListener('load', () => {
    console.log('%c⚡ Website Performance Info:', 'color: #10b981; font-weight: bold; font-size: 14px;');
    
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    
    console.log(`%c⏱️  Page Load Time: ${pageLoadTime}ms`, 'color: #fbbf24; font-weight: 600;');
    console.log('%c✅ Website Loaded Successfully!', 'color: #10b981; font-weight: bold; font-size: 14px;');
});

// ====== DARK MODE TOGGLE (OPTIONAL) ======
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDark.matches) {
    console.log('%c🌙 Dark Mode Detected', 'color: #10b981; font-weight: bold;');
}