/**
 * PixelPulse Studio - Central JavaScript Logic
 * Features: Web Audio API SFX, Dark/Light Theme Toggle, Game Iframe Tab Switcher, Dynamic Canvas Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Web Audio API Synth SFX Engine ---
  class SoundEffects {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    }

    playTabSwitch() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    }

    playRetroPowerup() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(330, now + 0.05);
      osc.frequency.setValueAtTime(440, now + 0.1);
      osc.frequency.setValueAtTime(660, now + 0.15);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    }
  }

  const sfx = new SoundEffects();

  // Attach sound triggers to buttons
  document.querySelectorAll('button, .btn, .nav-link, .tab-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      // Subtle hover tone if user interacts
    });
    btn.addEventListener('click', () => {
      sfx.playClick();
    });
  });

  // --- Sound Toggle Toggle ---
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      sfx.enabled = !sfx.enabled;
      if (sfx.enabled) sfx.playRetroPowerup();
      showToast(sfx.enabled ? '🔊 Audio SFX Enabled' : '🔇 Audio SFX Muted');
      soundToggleBtn.innerHTML = sfx.enabled 
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;
    });
  }

  // --- Theme Toggle (Dark/Light) ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
        showToast('Theme switched to LIGHT mode');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        showToast('Theme switched to DARK mode');
      }
    });
  }

  // --- Game Showcase Iframe Tab Switcher ---
  const tabBtns = document.querySelectorAll('.tab-btn[data-game-src]');
  const gameIframe = document.getElementById('gameIframe');
  const gameTitleDisplay = document.getElementById('gameTitleDisplay');

  if (tabBtns.length > 0 && gameIframe) {
    tabBtns.forEach(tab => {
      tab.addEventListener('click', () => {
        tabBtns.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        sfx.playTabSwitch();

        const src = tab.getAttribute('data-game-src');
        const title = tab.getAttribute('data-game-title');

        if (src) {
          gameIframe.src = src;
        }
        if (title && gameTitleDisplay) {
          gameTitleDisplay.textContent = title;
        }
      });
    });

    // Deep-link: auto-select a game via ?game=<key> (e.g. index.html?game=plu#showcase)
    const gameKey = new URLSearchParams(window.location.search).get('game');
    if (gameKey) {
      const target = document.querySelector(`.tab-btn[data-game-src*="game_${gameKey}"]`);
      if (target) target.click();
    }
  }

  // --- Game Demo Click-to-Play Overlay ---
  const startPlayBtn = document.getElementById('startPlayBtn');
  const playOverlay = document.getElementById('playOverlay');
  const demoIframe = document.getElementById('gameIframe');

  if (startPlayBtn && playOverlay && demoIframe) {
    startPlayBtn.addEventListener('click', () => {
      const src = startPlayBtn.getAttribute('data-game-src') || demoIframe.getAttribute('data-src');
      if (src) {
        demoIframe.src = src;
        demoIframe.classList.remove('hidden');
      }
      playOverlay.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        playOverlay.classList.add('hidden');
      }, 300);
    });
  }

  // --- Game Showcase Fullscreen Toggle ---
  const fullscreenToggleBtn = document.getElementById('fullscreenToggleBtn');
  const gameViewportWrapper = document.querySelector('.game-viewport-wrapper');

  if (fullscreenToggleBtn && gameViewportWrapper) {
    fullscreenToggleBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        if (gameViewportWrapper.requestFullscreen) {
          gameViewportWrapper.requestFullscreen();
        } else if (gameViewportWrapper.webkitRequestFullscreen) {
          gameViewportWrapper.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }

  // --- Game Viewport Theater / Fit Window Mode Toggle ---
  const theaterToggleBtn = document.getElementById('theaterToggleBtn');
  if (theaterToggleBtn && gameViewportWrapper) {
    const toggleTheater = () => {
      const isTheater = gameViewportWrapper.classList.toggle('theater-mode');
      document.body.classList.toggle('theater-active', isTheater);
      
      theaterToggleBtn.innerHTML = isTheater
        ? `<span class="material-symbols-outlined text-[20px]">close_fullscreen</span> Exit Theater`
        : `<span class="material-symbols-outlined text-[20px]">open_in_full</span> Theater Mode`;

      if (isTheater) {
        showToast('📺 Theater Mode Enabled (Press ESC to exit)');
      }
    };

    theaterToggleBtn.addEventListener('click', toggleTheater);

    // Escape key listener to exit theater mode
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && gameViewportWrapper.classList.contains('theater-mode')) {
        toggleTheater();
      }
    });
  }

  // --- Header Scroll Effect ---
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- Nav Scroll-Spy (underline the section currently in view) ---
  const homeLink = document.querySelector('.nav-link[href="index.html"]');
  const spySections = [...document.querySelectorAll('.nav-link[href^="#"]')]
    .map(link => ({ link, section: document.querySelector(link.getAttribute('href')) }))
    .filter(s => s.section);

  if (spySections.length > 0) {
    const updateActiveNav = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current = null;
      spySections.forEach(s => {
        if (s.section.offsetTop <= scrollPos) current = s;
      });

      if (homeLink) homeLink.classList.remove('active');
      spySections.forEach(s => s.link.classList.remove('active'));

      if (current) current.link.classList.add('active');
      else if (homeLink) homeLink.classList.add('active');
    };

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
  }

  // --- Hero Pixel Canvas Animation ---
  const canvas = document.getElementById('heroPixelCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.parentElement.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement.clientHeight || 240);

    const particles = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.floor(Math.random() * 4) + 3, // Pixel square size
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        color: Math.random() > 0.5 ? '#00f0ff' : '#ff007f'
      });
    }

    function animateCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Draw grid pattern in canvas
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 16;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render pixel particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = p.color;
        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
      });

      requestAnimationFrame(animateCanvas);
    }

    animateCanvas();
  }

  // --- Helper Toast Notification ---
  function showToast(message) {
    let toast = document.getElementById('toastNotification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotification';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // ==========================================================================
  // Interactive Animation Engine (Scroll Reveal, Counter, 3D Tilt, Cyber FX)
  // ==========================================================================

  // --- 1. Scroll Reveal with IntersectionObserver ---
  const revealObserverOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-reveal-delay') || 0;
        
        setTimeout(() => {
          el.classList.add('is-revealed');
        }, parseInt(delay, 10));

        observer.unobserve(el);
      }
    });
  }, revealObserverOptions);

  // Auto-register elements with [data-reveal]
  document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
  });

  // Auto-stagger children inside containers with [data-reveal-group]
  document.querySelectorAll('[data-reveal-group]').forEach(group => {
    const step = parseInt(group.getAttribute('data-reveal-step') || '120', 10);
    const children = group.querySelectorAll('[data-reveal]');
    children.forEach((child, index) => {
      if (!child.hasAttribute('data-reveal-delay')) {
        child.setAttribute('data-reveal-delay', index * step);
      }
    });
  });

  // --- 2. Animated Number Counter ---
  const counterObserverOptions = {
    threshold: 0.3
  };

  const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

  const animateCounter = (el) => {
    const targetAttr = el.getAttribute('data-counter-target');
    if (!targetAttr) return;

    // Extract numeric part, prefix, and suffix (e.g., "100K+", "4+", "100%", "99.9%")
    const match = targetAttr.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
    if (!match) return;

    const prefix = match[1] || '';
    const targetNum = parseFloat(match[2]);
    const suffix = match[3] || '';
    const isFloat = targetNum % 1 !== 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    el.classList.add('counter-animating');

    const updateFrame = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentVal = targetNum * easedProgress;

      const formattedVal = isFloat ? currentVal.toFixed(1) : Math.floor(currentVal);
      el.textContent = `${prefix}${formattedVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      } else {
        el.textContent = `${prefix}${targetNum}${suffix}`;
        el.classList.remove('counter-animating');
        el.classList.add('counter-complete');
      }
    };

    requestAnimationFrame(updateFrame);
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, counterObserverOptions);

  document.querySelectorAll('[data-counter-target]').forEach(el => {
    counterObserver.observe(el);
  });

  // --- 3. Interactive 3D Card Tilt Effect ---
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg
      const rotateY = ((x - centerX) / centerX) * 8;  // Max 8 deg

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      
      const tiltXPercent = ((x / rect.width) * 100).toFixed(1);
      const tiltYPercent = ((y / rect.height) * 100).toFixed(1);
      card.style.setProperty('--tilt-x', `${tiltXPercent}%`);
      card.style.setProperty('--tilt-y', `${tiltYPercent}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });


  // --- 4. Skill & Progress Fill Bars ---
  const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-progress-width') || '100%';
        bar.style.width = targetWidth;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.progress-fill-bar').forEach(bar => progressObserver.observe(bar));
});


