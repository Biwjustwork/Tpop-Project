// Custom cursor
try { (function () {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  var dot = document.createElement('div');
  dot.className = 'cursor-dot';
  var ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);
  dot.style.opacity = '0';
  ring.style.opacity = '0';

  var mx = window.innerWidth / 2, my = window.innerHeight / 2;
  var rx = mx, ry = my;
  var active = false;

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    if (!active) { active = true; dot.style.opacity = '1'; ring.style.opacity = '1'; }
  });

  setInterval(function () {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  }, 16);

  document.querySelectorAll('a, button, .skill-tag, .project-card').forEach(function (el) {
    el.addEventListener('mouseenter', function () { ring.classList.add('is-hovering'); });
    el.addEventListener('mouseleave', function () { ring.classList.remove('is-hovering'); });
  });
})(); } catch(e) {}

// Matrix rain canvas
try { (function () {
  var canvas = document.getElementById('bg-canvas');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var CHARS = '01#$<>{}[]ABCDEF10';
  var COL = 16;
  var drops = [];

  function resize() {
    canvas.width  = window.innerWidth;
    var hero = canvas.parentElement;
    var h = hero ? hero.offsetHeight : 0;
    canvas.height = h > 0 ? h : window.innerHeight;
    var cols = Math.floor(canvas.width / COL);
    drops = [];
    for (var i = 0; i < cols; i++) {
      drops[i] = -(Math.random() * (canvas.height / COL));
    }
  }

  function draw() {
    ctx.fillStyle = 'rgba(10,10,10,0.18)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = COL + 'px monospace';
    for (var i = 0; i < drops.length; i++) {
      if (Math.random() > 0.55) {
        var bright = Math.random() > 0.75;
        ctx.fillStyle = bright ? 'rgba(0,212,170,0.85)' : 'rgba(0,212,170,0.35)';
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * COL, drops[i] * COL);
      }
      if (drops[i] * COL > canvas.height && Math.random() > 0.97) drops[i] = 0;
      drops[i] += 0.5;
    }
  }

  window.addEventListener('resize', function () { setTimeout(resize, 100); });
  setTimeout(function () { resize(); setInterval(draw, 50); }, 100);
})(); } catch(e) {}

// Text scramble on section labels
try { (function () {
  var POOL = '!@#$%&<>[]{}01ABCDEFabcdef';
  function scramble(el) {
    var real = el.textContent;
    var revealed = 0;
    var iv = setInterval(function () {
      var out = '';
      for (var i = 0; i < real.length; i++) {
        if (real[i] === ' ') { out += ' '; }
        else if (i < revealed) { out += real[i]; }
        else { out += POOL[Math.floor(Math.random() * POOL.length)]; }
      }
      el.textContent = out;
      revealed += 1.5;
      if (revealed >= real.length) { clearInterval(iv); el.textContent = real; }
    }, 35);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { scramble(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.section-label').forEach(function (el) { io.observe(el); });
  }
})(); } catch(e) {}

// Main
(function () {
  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var header = document.querySelector(".site-header");

  if (toggle && nav && header) {
    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      header.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }
    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("nav-open"));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // Terminal animation
  var termBody = document.getElementById("terminal-body");
  if (termBody) {
    var STEPS = [
      { type: "cmd",      text: "reaper input.lua -o out.lua",           delay: 0   },
      { type: "out",      text: "  Compiling...     [OK]  12ms",         cls: "success", delay: 200 },
      { type: "out",      text: "  Compressing...   [OK]   8ms",         cls: "success", delay: 180 },
      { type: "out",      text: "  Base85 encode... [OK]   3ms",         cls: "success", delay: 180 },
      { type: "out",      text: "  Wrapping...      [OK]   1ms",         cls: "success", delay: 180 },
      { type: "blank",    delay: 80  },
      { type: "result",   text: "[OK] out.lua  (4.2 KB -> 891 B, -78%)", delay: 100 },
      { type: "blank",    delay: 120 },
      { type: "cmd",      text: "cat out.lua",                            delay: 300 },
      { type: "code",     text: "return (function() local t6M, JN, R, t,",        delay: 60 },
      { type: "code",     text: "zQG, s4o, HDu, DOu, f, s2 = string.sub,",        delay: 40 },
      { type: "code",     text: "string.gsub, unpack, {}, pcall, nil,",            delay: 40 },
      { type: "code",     text: "setmetatable, tostring, string.char,",            delay: 40 },
      { type: "code",     text: "string.byte; for tQo = 0, 255 do",               delay: 40 },
      { type: "code",     text: "t[tQo] = f(tQo); end; t = type; do",             delay: 40 },
      { type: "code",     text: "local c65 = true; if zQG(nil) then",             delay: 40 },
      { type: "code",     text: 'c65 = false; end; if t(zQG) ~= "function"',      delay: 40 },
      { type: "code",     text: "then c65 = false; end; if c65 then",             delay: 40 },
      { type: "code",     text: "s4o = 5; else s4o = 1; end; end;",              delay: 40 },
      { type: "code-dim", text: "... (891 bytes)",                                delay: 60 },
      { type: "blank",    delay: 80 },
      { type: "out",      text: 'type "help" for available commands',  cls: "dim", delay: 60 },
      { type: "blank",    delay: 60 },
      { type: "interactive", delay: 80 }
    ];

    function appendLine(html) {
      var el = document.createElement("div");
      el.className = "t-line";
      el.innerHTML = html;
      termBody.appendChild(el);
      termBody.scrollTop = termBody.scrollHeight;
      return el;
    }

    function typeInto(el, text, done) {
      var i = 0;
      var cursor = document.createElement("span");
      cursor.className = "t-cursor";
      el.appendChild(cursor);
      var iv = setInterval(function () {
        if (i < text.length) {
          cursor.insertAdjacentText("beforebegin", text[i]);
          i++;
        } else {
          clearInterval(iv);
          if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
          done();
        }
      }, 38);
    }

    function startInteractive() {
      var cmdHistory = [];
      var histIdx = -1;
      var buf = '';

      // Hidden input captures keyboard on all devices
      var hi = document.createElement('input');
      hi.type = 'text';
      hi.setAttribute('autocomplete', 'off');
      hi.setAttribute('autocorrect', 'off');
      hi.setAttribute('autocapitalize', 'none');
      hi.setAttribute('spellcheck', 'false');
      hi.style.cssText = 'position:fixed;opacity:0;pointer-events:none;width:0;height:0;top:0;left:0;';
      document.body.appendChild(hi);

      function newPrompt() {
        var row = appendLine('<span class="t-prompt">&gt;</span> <span class="t-ibuf"></span><span class="t-cursor"></span>');
        return row;
      }

      var currentRow = newPrompt();

      function getBuf() { return currentRow.querySelector('.t-ibuf'); }

      // Focus hidden input when terminal is clicked
      var termWrap = termBody.closest ? termBody.closest('.terminal') : termBody.parentElement.parentElement;
      if (termWrap) {
        termWrap.style.cursor = 'text';
        termWrap.addEventListener('click', function () { hi.focus(); });
      }
      // Auto-focus after a short delay
      setTimeout(function () { hi.focus(); }, 200);

      function escHtml(s) {
        return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      }

      function out(text, cls) {
        appendLine('<span class="t-out' + (cls ? ' ' + cls : '') + '">' + escHtml(text) + '</span>');
      }
      function blank() { appendLine('&nbsp;'); }

      function processCommand(cmd) {
        var c = cmd.toLowerCase().trim();

        if (c === '') return;

        if (c === 'clear') {
          termBody.innerHTML = '';
          return;
        }

        if (c === 'help') {
          blank();
          out('Available commands:', 'result');
          out('  help       - list commands');
          out('  whoami     - quick intro');
          out('  about      - background & focus');
          out('  skills     - tech & tools');
          out('  projects   - selected projects');
          out('  contact    - get in touch');
          out('  reaper     - about the obfuscator');
          out('  clear      - clear terminal');
          blank();
          return;
        }

        if (c === 'whoami') {
          blank();
          out('Saran Krachangkaew', 'result');
          out('Backend Engineer · Security Researcher · Reverse Engineer');
          out('Based in Chiang Mai, Thailand');
          blank();
          return;
        }

        if (c === 'about') {
          blank();
          out('CAMT DII @ Chiang Mai University', 'result');
          out('Focused on compilers, obfuscation, binary analysis,');
          out('and AI-driven systems. I build things that are fast,');
          out('correct, and hard to reverse.');
          blank();
          return;
        }

        if (c === 'skills') {
          blank();
          out('Languages : Rust, Python, PHP, Lua, SQL', 'result');
          out('AI / ML   : YOLOv8, Computer Vision');
          out('Security  : Reverse Engineering, Bytecode Analysis');
          out('Backend   : REST APIs, Linux');
          blank();
          return;
        }

        if (c === 'projects') {
          blank();
          out('[1] Reaper Obfuscator', 'result');
          out('    Lua 5.1 -> bytecode + LZMA + Base85  |  hajibe.net');
          blank();
          out('[2] AI Vehicle & People Counter');
          out('    YOLOv8 real-time detection from live camera feeds');
          blank();
          out('[3] AI Camera Dashboard');
          out('    CCTV monitoring built for Chiang Mai Province');
          blank();
          return;
        }

        if (c === 'contact') {
          blank();
          out('Email  : saran_krac@cmu.ac.th', 'result');
          out('GitHub : github.com/hajibeza');
          out('Web    : hajibe.net');
          blank();
          return;
        }

        if (c === 'reaper') {
          blank();
          out('Reaper Obfuscator', 'result');
          out('Production-grade Lua 5.1 obfuscator written in Rust.');
          out('Compiles source to bytecode, LZMA-compresses it,');
          out('Base85-encodes the payload, wraps in a self-contained');
          out('Lua loader. Ships with a Monaco-backed web UI.');
          blank();
          out('Try it live -> hajibe.net');
          blank();
          return;
        }

        // Unknown command
        blank();
        out('command not found: ' + escHtml(cmd), 'dim');
        out('type "help" to see available commands');
        blank();
      }

      hi.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          var cmd = buf;
          buf = '';
          hi.value = '';

          // Freeze the current input line
          var bufEl = getBuf();
          if (bufEl) bufEl.textContent = cmd;
          var cur = currentRow.querySelector('.t-cursor');
          if (cur) cur.parentNode.removeChild(cur);

          if (cmd.trim()) { cmdHistory.unshift(cmd); histIdx = -1; }

          processCommand(cmd);
          currentRow = newPrompt();

        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (histIdx < cmdHistory.length - 1) {
            histIdx++;
            buf = cmdHistory[histIdx];
            hi.value = buf;
            var b = getBuf(); if (b) b.textContent = buf;
          }
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (histIdx > 0) { histIdx--; buf = cmdHistory[histIdx]; }
          else { histIdx = -1; buf = ''; }
          hi.value = buf;
          var b = getBuf(); if (b) b.textContent = buf;
        }
      });

      hi.addEventListener('input', function () {
        buf = hi.value;
        var b = getBuf(); if (b) b.textContent = buf;
      });
    }

    function runStep(idx) {
      if (idx >= STEPS.length) return;
      var s = STEPS[idx];
      var next = function () { runStep(idx + 1); };
      setTimeout(function () {
        if (s.type === "blank") {
          appendLine("&nbsp;");
          next();
        } else if (s.type === "interactive") {
          startInteractive();
        } else if (s.type === "cmd") {
          var row = appendLine('<span class="t-prompt">&gt;</span> <span class="t-cmd-text"></span>');
          typeInto(row.querySelector(".t-cmd-text"), s.text, next);
        } else if (s.type === "out") {
          appendLine('<span class="t-out ' + s.cls + '">' + s.text + '</span>');
          next();
        } else if (s.type === "code") {
          appendLine('<span class="t-code">' + s.text + '</span>');
          next();
        } else if (s.type === "code-dim") {
          appendLine('<span class="t-code-dim">' + s.text + '</span>');
          next();
        } else if (s.type === "result") {
          appendLine('<span class="t-out result">' + s.text + '</span>');
          next();
        } else {
          next();
        }
      }, s.delay);
    }

    setTimeout(function () { runStep(0); }, 800);
  }

  // Scroll reveal
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    reveals.forEach(function (el) { el.classList.add("js-reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { io.observe(el); });
  }
})();
