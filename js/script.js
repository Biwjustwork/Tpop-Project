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
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      showToast(`Theme switched to ${newTheme.toUpperCase()} mode`);
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
}})
