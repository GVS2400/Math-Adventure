/* ============================================
   4Y'S REGNEPARTY! — app.js
   ============================================ */

// ── UTILITIES ────────────────────────────────

function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { let t = b; b = a % b; a = t; }
  return a;
}

function parseAnswer(str) {
  const s = str.trim().replace(/\s+/g, '').replace(',', '.');
  if (!s) return null;
  if (s.includes('/')) {
    const parts = s.split('/');
    if (parts.length !== 2) return null;
    const n = parseInt(parts[0], 10), d = parseInt(parts[1], 10);
    if (isNaN(n) || isNaN(d) || d === 0) return null;
    const g = gcd(Math.abs(n), Math.abs(d));
    return `${n / g}/${d / g}`;
  }
  const n = parseFloat(s);
  if (isNaN(n)) return null;
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

function checkAnswer(userInput, correct) {
  const u = parseAnswer(userInput);
  const c = parseAnswer(correct);
  return u !== null && c !== null && u === c;
}

// ── CONFETTI ─────────────────────────────────

function triggerConfetti() {
  const colors = ['#FF6B9D','#FFD700','#00E5FF','#7C3AFF','#27AE60','#FF8C42','#fff'];
  for (let i = 0; i < 72; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const size = 7 + Math.random() * 9;
    el.style.cssText = `
      left:${Math.random() * 100}vw;
      width:${size}px; height:${size}px;
      border-radius:${Math.random() > 0.5 ? '50%' : '3px'};
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-delay:${Math.random() * 0.4}s;
      animation-duration:${1.5 + Math.random() * 1.2}s;
    `;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

// ── BACKGROUND DECORATIONS ───────────────────

function clearDecorations() {
  document.querySelectorAll('.bg-deco').forEach(el => el.remove());
  // Also stop any running slideshow
  if (typeof stopConfigSlideshow === 'function') stopConfigSlideshow();
}

function addDecorations(theme) {
  clearDecorations();

  if (theme === 'kpop') {
    const syms = ['✦','★','✨','✩','⋆','♡','✧'];
    const colors = ['#FFD700','#FF80AA','#D080FF','#fff','#FFB8D8','#FF40C0'];
    for (let i = 0; i < 32; i++) {
      const el = document.createElement('span');
      el.className = 'bg-deco star-deco';
      el.textContent = syms[Math.floor(Math.random() * syms.length)];
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        font-size:${8 + Math.random() * 18}px;
        color:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 5}s;
        animation-duration:${2 + Math.random() * 4}s;
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'gaming') {
    const colors = ['#00C8E0','#7040E0','#FF6B35','#00E888','#FF40B0'];
    for (let i = 0; i < 20; i++) {
      const el = document.createElement('div');
      el.className = 'bg-deco pixel-deco';
      const size = 5 + Math.random() * 18;
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        width:${size}px;height:${size}px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 5}s;
        animation-duration:${2.5 + Math.random() * 3}s;
        box-shadow:0 0 12px currentColor;
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'brawlstars') {
    const colors = ['#FF6B35','#FFD700','#00E888','#FF40B0','#7040E0'];
    for (let i = 0; i < 18; i++) {
      const el = document.createElement('div');
      el.className = 'bg-deco pixel-deco';
      const size = 6 + Math.random() * 16;
      const isSquare = Math.random() > 0.4;
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        width:${size}px;height:${size}px;
        border-radius:${isSquare ? '3px' : '50%'};
        background:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 4}s;
        animation-duration:${2 + Math.random() * 3}s;
        box-shadow:0 0 10px currentColor;
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'football' || theme === 'ronaldo') {
    const emojis = theme === 'ronaldo' ? ['★','✦','⋆','·'] : ['·','✦','⋆','★'];
    const baseColor = theme === 'ronaldo' ? '#FFD700' : '#fff';
    const colors = theme === 'ronaldo'
      ? ['#FFD700','#FFC040','rgba(255,215,0,0.5)']
      : ['rgba(255,255,255,0.6)','rgba(255,255,255,0.3)','rgba(150,220,255,0.4)'];
    for (let i = 0; i < 22; i++) {
      const el = document.createElement('span');
      el.className = 'bg-deco star-deco';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        font-size:${6 + Math.random() * 14}px;
        color:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 6}s;
        animation-duration:${3 + Math.random() * 4}s;
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'anime') {
    const syms = ['◎','○','◯','⊕','◉','·','✦'];
    const colors = ['#FF6040','#FFB020','#FF4060','rgba(255,100,50,0.6)','rgba(255,200,50,0.4)'];
    for (let i = 0; i < 24; i++) {
      const el = document.createElement('span');
      el.className = 'bg-deco star-deco';
      el.textContent = syms[Math.floor(Math.random() * syms.length)];
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        font-size:${8 + Math.random() * 20}px;
        color:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 4}s;
        animation-duration:${1.5 + Math.random() * 3}s;
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'jjk') {
    const syms = ['✦','⋆','·','✧','✩'];
    const colors = ['rgba(140,80,255,0.7)','rgba(180,100,255,0.4)','rgba(100,50,200,0.5)','rgba(255,255,255,0.2)'];
    for (let i = 0; i < 28; i++) {
      const el = document.createElement('span');
      el.className = 'bg-deco star-deco';
      el.textContent = syms[Math.floor(Math.random() * syms.length)];
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        font-size:${6 + Math.random() * 16}px;
        color:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 5}s;
        animation-duration:${2 + Math.random() * 4}s;
        filter:blur(${Math.random() > 0.6 ? '1px' : '0'});
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'geography') {
    const syms = ['·','·','·','○','◦','✦','⋆'];
    const colors = ['rgba(50,200,150,0.6)','rgba(50,180,220,0.5)','rgba(100,220,200,0.4)','rgba(255,255,255,0.3)'];
    for (let i = 0; i < 26; i++) {
      const el = document.createElement('span');
      el.className = 'bg-deco star-deco';
      el.textContent = syms[Math.floor(Math.random() * syms.length)];
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        font-size:${5 + Math.random() * 18}px;
        color:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 6}s;
        animation-duration:${3 + Math.random() * 5}s;
      `;
      document.body.appendChild(el);
    }
  }
}

// ── TEMPLATE SYSTEM ──────────────────────────

function applyTemplate(tmpl, vars) {
  return tmpl.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : `{${k}}`));
}

// ── SHARED MATH DATA ─────────────────────────
// 10 chapter types × 4 difficulty levels × 5 variants
// Access: MATH[type][level][variantIdx]   level: 0=Nem 1=Mellem 2=Svær 3=Nørd

const MATH = {
  plus: [
    [ // Nem
      { vars: { n1: 35,  n2: 29  }, ans: '64'  },
      { vars: { n1: 24,  n2: 38  }, ans: '62'  },
      { vars: { n1: 43,  n2: 26  }, ans: '69'  },
      { vars: { n1: 17,  n2: 52  }, ans: '69'  },
      { vars: { n1: 31,  n2: 47  }, ans: '78'  }
    ],
    [ // Mellem
      { vars: { n1: 48,  n2: 36  }, ans: '84'  },
      { vars: { n1: 57,  n2: 38  }, ans: '95'  },
      { vars: { n1: 64,  n2: 49  }, ans: '113' },
      { vars: { n1: 73,  n2: 28  }, ans: '101' },
      { vars: { n1: 45,  n2: 67  }, ans: '112' }
    ],
    [ // Svær
      { vars: { n1: 186, n2: 247 }, ans: '433' },
      { vars: { n1: 254, n2: 178 }, ans: '432' },
      { vars: { n1: 367, n2: 145 }, ans: '512' },
      { vars: { n1: 429, n2: 263 }, ans: '692' },
      { vars: { n1: 534, n2: 289 }, ans: '823' }
    ],
    [ // Nørd
      { vars: { n1: 2847, n2: 1594 }, ans: '4441'  },
      { vars: { n1: 3628, n2: 2475 }, ans: '6103'  },
      { vars: { n1: 4953, n2: 3287 }, ans: '8240'  },
      { vars: { n1: 5174, n2: 2836 }, ans: '8010'  },
      { vars: { n1: 6293, n2: 4718 }, ans: '11011' }
    ]
  ],
  minus: [
    [ // Nem
      { vars: { n1: 80,  n2: 23  }, ans: '57' },
      { vars: { n1: 74,  n2: 31  }, ans: '43' },
      { vars: { n1: 63,  n2: 28  }, ans: '35' },
      { vars: { n1: 91,  n2: 47  }, ans: '44' },
      { vars: { n1: 85,  n2: 36  }, ans: '49' }
    ],
    [ // Mellem
      { vars: { n1: 120, n2: 47  }, ans: '73' },
      { vars: { n1: 135, n2: 68  }, ans: '67' },
      { vars: { n1: 154, n2: 83  }, ans: '71' },
      { vars: { n1: 147, n2: 59  }, ans: '88' },
      { vars: { n1: 163, n2: 74  }, ans: '89' }
    ],
    [ // Svær
      { vars: { n1: 300, n2: 134 }, ans: '166' },
      { vars: { n1: 425, n2: 178 }, ans: '247' },
      { vars: { n1: 512, n2: 247 }, ans: '265' },
      { vars: { n1: 634, n2: 289 }, ans: '345' },
      { vars: { n1: 751, n2: 368 }, ans: '383' }
    ],
    [ // Nørd
      { vars: { n1: 5000, n2: 2847 }, ans: '2153' },
      { vars: { n1: 7214, n2: 3867 }, ans: '3347' },
      { vars: { n1: 8523, n2: 4796 }, ans: '3727' },
      { vars: { n1: 6341, n2: 2958 }, ans: '3383' },
      { vars: { n1: 9000, n2: 4637 }, ans: '4363' }
    ]
  ],
  gange: [
    [ // Nem
      { vars: { n1: 4,  n2: 6  }, ans: '24'  },
      { vars: { n1: 6,  n2: 4  }, ans: '24'  },
      { vars: { n1: 5,  n2: 7  }, ans: '35'  },
      { vars: { n1: 6,  n2: 9  }, ans: '54'  },
      { vars: { n1: 7,  n2: 4  }, ans: '28'  }
    ],
    [ // Mellem
      { vars: { n1: 8,  n2: 6  }, ans: '48' },
      { vars: { n1: 7,  n2: 8  }, ans: '56' },
      { vars: { n1: 9,  n2: 6  }, ans: '54' },
      { vars: { n1: 6,  n2: 11 }, ans: '66' },
      { vars: { n1: 8,  n2: 9  }, ans: '72' }
    ],
    [ // Svær
      { vars: { n1: 9,  n2: 12 }, ans: '108' },
      { vars: { n1: 11, n2: 13 }, ans: '143' },
      { vars: { n1: 14, n2: 12 }, ans: '168' },
      { vars: { n1: 13, n2: 11 }, ans: '143' },
      { vars: { n1: 15, n2: 14 }, ans: '210' }
    ],
    [ // Nørd
      { vars: { n1: 24, n2: 37 }, ans: '888'  },
      { vars: { n1: 36, n2: 28 }, ans: '1008' },
      { vars: { n1: 47, n2: 53 }, ans: '2491' },
      { vars: { n1: 64, n2: 35 }, ans: '2240' },
      { vars: { n1: 58, n2: 47 }, ans: '2726' }
    ]
  ],
  div: [
    [ // Nem
      { vars: { n1: 48,  n2: 4 }, ans: '12' },
      { vars: { n1: 36,  n2: 3 }, ans: '12' },
      { vars: { n1: 45,  n2: 5 }, ans: '9'  },
      { vars: { n1: 56,  n2: 7 }, ans: '8'  },
      { vars: { n1: 42,  n2: 6 }, ans: '7'  }
    ],
    [ // Mellem
      { vars: { n1: 96,  n2: 4  }, ans: '24' },
      { vars: { n1: 84,  n2: 7  }, ans: '12' },
      { vars: { n1: 90,  n2: 6  }, ans: '15' },
      { vars: { n1: 108, n2: 9  }, ans: '12' },
      { vars: { n1: 72,  n2: 8  }, ans: '9'  }
    ],
    [ // Svær
      { vars: { n1: 156, n2: 6  }, ans: '26' },
      { vars: { n1: 144, n2: 8  }, ans: '18' },
      { vars: { n1: 168, n2: 7  }, ans: '24' },
      { vars: { n1: 195, n2: 5  }, ans: '39' },
      { vars: { n1: 228, n2: 12 }, ans: '19' }
    ],
    [ // Nørd
      { vars: { n1: 2352, n2: 14 }, ans: '168' },
      { vars: { n1: 3108, n2: 12 }, ans: '259' },
      { vars: { n1: 4284, n2: 18 }, ans: '238' },
      { vars: { n1: 5265, n2: 15 }, ans: '351' },
      { vars: { n1: 6552, n2: 24 }, ans: '273' }
    ]
  ],
  frakof: [
    [ // Nem
      { vars: { frac: '1/3', n1: 30 }, ans: '10' },
      { vars: { frac: '1/4', n1: 20 }, ans: '5'  },
      { vars: { frac: '1/2', n1: 24 }, ans: '12' },
      { vars: { frac: '1/5', n1: 25 }, ans: '5'  },
      { vars: { frac: '1/3', n1: 21 }, ans: '7'  }
    ],
    [ // Mellem
      { vars: { frac: '1/3', n1: 60 }, ans: '20' },
      { vars: { frac: '2/3', n1: 30 }, ans: '20' },
      { vars: { frac: '3/4', n1: 40 }, ans: '30' },
      { vars: { frac: '2/5', n1: 40 }, ans: '16' },
      { vars: { frac: '1/4', n1: 60 }, ans: '15' }
    ],
    [ // Svær
      { vars: { frac: '3/4',  n1: 60 }, ans: '45' },
      { vars: { frac: '2/3',  n1: 72 }, ans: '48' },
      { vars: { frac: '3/5',  n1: 75 }, ans: '45' },
      { vars: { frac: '5/8',  n1: 64 }, ans: '40' },
      { vars: { frac: '4/5',  n1: 80 }, ans: '64' }
    ],
    [ // Nørd
      { vars: { frac: '7/8',   n1: 96  }, ans: '84'  },
      { vars: { frac: '5/6',   n1: 84  }, ans: '70'  },
      { vars: { frac: '7/9',   n1: 108 }, ans: '84'  },
      { vars: { frac: '11/12', n1: 120 }, ans: '110' },
      { vars: { frac: '9/10',  n1: 150 }, ans: '135' }
    ]
  ],
  frakp: [
    [ // Nem
      { vars: { f1: '1/5',  f2: '2/5'  }, ans: '3/5'  },
      { vars: { f1: '1/7',  f2: '3/7'  }, ans: '4/7'  },
      { vars: { f1: '2/7',  f2: '3/7'  }, ans: '5/7'  },
      { vars: { f1: '1/9',  f2: '4/9'  }, ans: '5/9'  },
      { vars: { f1: '3/11', f2: '4/11' }, ans: '7/11' }
    ],
    [ // Mellem
      { vars: { f1: '2/8',  f2: '3/8'  }, ans: '5/8'  },
      { vars: { f1: '3/10', f2: '4/10' }, ans: '7/10' },
      { vars: { f1: '2/9',  f2: '5/9'  }, ans: '7/9'  },
      { vars: { f1: '3/7',  f2: '2/7'  }, ans: '5/7'  },
      { vars: { f1: '4/11', f2: '3/11' }, ans: '7/11' }
    ],
    [ // Svær
      { vars: { f1: '4/11', f2: '5/11' }, ans: '9/11'  },
      { vars: { f1: '5/13', f2: '6/13' }, ans: '11/13' },
      { vars: { f1: '7/15', f2: '6/15' }, ans: '13/15' },
      { vars: { f1: '8/17', f2: '7/17' }, ans: '15/17' },
      { vars: { f1: '9/19', f2: '8/19' }, ans: '17/19' }
    ],
    [ // Nørd — same denominator, larger numbers, answer reduces
      { vars: { f1: '7/24',  f2: '11/24' }, ans: '3/4' },
      { vars: { f1: '5/16',  f2: '7/16'  }, ans: '3/4' },
      { vars: { f1: '9/20',  f2: '7/20'  }, ans: '4/5' },
      { vars: { f1: '11/30', f2: '13/30' }, ans: '4/5' },
      { vars: { f1: '13/36', f2: '11/36' }, ans: '2/3' }
    ]
  ],
  omk: [
    [ // Nem
      { vars: { n1: 10, n2: 6  }, ans: '32' },
      { vars: { n1: 7,  n2: 4  }, ans: '22' },
      { vars: { n1: 8,  n2: 5  }, ans: '26' },
      { vars: { n1: 11, n2: 3  }, ans: '28' },
      { vars: { n1: 9,  n2: 6  }, ans: '30' }
    ],
    [ // Mellem
      { vars: { n1: 15, n2: 8  }, ans: '46' },
      { vars: { n1: 12, n2: 9  }, ans: '42' },
      { vars: { n1: 14, n2: 11 }, ans: '50' },
      { vars: { n1: 18, n2: 7  }, ans: '50' },
      { vars: { n1: 16, n2: 10 }, ans: '52' }
    ],
    [ // Svær
      { vars: { n1: 24, n2: 13 }, ans: '74'  },
      { vars: { n1: 28, n2: 17 }, ans: '90'  },
      { vars: { n1: 35, n2: 19 }, ans: '108' },
      { vars: { n1: 42, n2: 23 }, ans: '130' },
      { vars: { n1: 47, n2: 28 }, ans: '150' }
    ],
    [ // Nørd
      { vars: { n1: 125, n2: 87  }, ans: '424'  },
      { vars: { n1: 234, n2: 167 }, ans: '802'  },
      { vars: { n1: 318, n2: 245 }, ans: '1126' },
      { vars: { n1: 456, n2: 389 }, ans: '1690' },
      { vars: { n1: 523, n2: 478 }, ans: '2002' }
    ]
  ],
  areal: [
    [ // Nem
      { vars: { n1: 8, n2: 7 }, ans: '56' },
      { vars: { n1: 6, n2: 9 }, ans: '54' },
      { vars: { n1: 7, n2: 5 }, ans: '35' },
      { vars: { n1: 9, n2: 4 }, ans: '36' },
      { vars: { n1: 6, n2: 8 }, ans: '48' }
    ],
    [ // Mellem
      { vars: { n1: 12, n2: 9  }, ans: '108' },
      { vars: { n1: 11, n2: 10 }, ans: '110' },
      { vars: { n1: 13, n2: 8  }, ans: '104' },
      { vars: { n1: 14, n2: 7  }, ans: '98'  },
      { vars: { n1: 15, n2: 9  }, ans: '135' }
    ],
    [ // Svær
      { vars: { n1: 18, n2: 14 }, ans: '252'  },
      { vars: { n1: 22, n2: 17 }, ans: '374'  },
      { vars: { n1: 26, n2: 19 }, ans: '494'  },
      { vars: { n1: 31, n2: 24 }, ans: '744'  },
      { vars: { n1: 37, n2: 28 }, ans: '1036' }
    ],
    [ // Nørd
      { vars: { n1: 125, n2: 84  }, ans: '10500'  },
      { vars: { n1: 163, n2: 97  }, ans: '15811'  },
      { vars: { n1: 248, n2: 135 }, ans: '33480'  },
      { vars: { n1: 317, n2: 246 }, ans: '77982'  },
      { vars: { n1: 425, n2: 368 }, ans: '156400' }
    ]
  ],
  blandet: [
    [ // Nem
      { vars: { n1: 3, n2: 12, n3: 8  }, ans: '44'  },
      { vars: { n1: 2, n2: 15, n3: 7  }, ans: '37'  },
      { vars: { n1: 4, n2: 8,  n3: 6  }, ans: '38'  },
      { vars: { n1: 3, n2: 9,  n3: 5  }, ans: '32'  },
      { vars: { n1: 5, n2: 6,  n3: 4  }, ans: '34'  }
    ],
    [ // Mellem
      { vars: { n1: 5, n2: 24, n3: 18 }, ans: '138' },
      { vars: { n1: 6, n2: 15, n3: 22 }, ans: '112' },
      { vars: { n1: 7, n2: 12, n3: 16 }, ans: '100' },
      { vars: { n1: 8, n2: 11, n3: 14 }, ans: '102' },
      { vars: { n1: 4, n2: 25, n3: 20 }, ans: '120' }
    ],
    [ // Svær
      { vars: { n1: 8,  n2: 35, n3: 24  }, ans: '304'  },
      { vars: { n1: 9,  n2: 42, n3: 37  }, ans: '415'  },
      { vars: { n1: 7,  n2: 56, n3: 48  }, ans: '440'  },
      { vars: { n1: 6,  n2: 63, n3: 55  }, ans: '433'  },
      { vars: { n1: 11, n2: 48, n3: 63  }, ans: '591'  }
    ],
    [ // Nørd
      { vars: { n1: 24, n2: 137, n3: 284  }, ans: '3572'  },
      { vars: { n1: 35, n2: 248, n3: 519  }, ans: '9199'  },
      { vars: { n1: 47, n2: 365, n3: 728  }, ans: '17883' },
      { vars: { n1: 56, n2: 427, n3: 893  }, ans: '24805' },
      { vars: { n1: 63, n2: 528, n3: 1247 }, ans: '34511' }
    ]
  ],
  finale: [
    [ // Nem
      { vars: { frac: '1/2', n1: 40,  n2: 10 }, ans: '30' },
      { vars: { frac: '1/3', n1: 30,  n2: 5  }, ans: '15' },
      { vars: { frac: '1/4', n1: 24,  n2: 8  }, ans: '14' },
      { vars: { frac: '1/2', n1: 20,  n2: 7  }, ans: '17' },
      { vars: { frac: '1/5', n1: 20,  n2: 6  }, ans: '10' }
    ],
    [ // Mellem
      { vars: { frac: '3/4', n1: 80,  n2: 15 }, ans: '75' },
      { vars: { frac: '2/3', n1: 60,  n2: 18 }, ans: '58' },
      { vars: { frac: '3/5', n1: 50,  n2: 12 }, ans: '42' },
      { vars: { frac: '2/5', n1: 100, n2: 20 }, ans: '60' },
      { vars: { frac: '3/4', n1: 60,  n2: 25 }, ans: '70' }
    ],
    [ // Svær
      { vars: { frac: '3/5', n1: 100, n2: 20 }, ans: '80'  },
      { vars: { frac: '7/8', n1: 80,  n2: 25 }, ans: '95'  },
      { vars: { frac: '5/6', n1: 84,  n2: 32 }, ans: '102' },
      { vars: { frac: '4/5', n1: 120, n2: 36 }, ans: '132' },
      { vars: { frac: '7/9', n1: 108, n2: 43 }, ans: '127' }
    ],
    [ // Nørd
      { vars: { frac: '11/12', n1: 240, n2: 87  }, ans: '307' },
      { vars: { frac: '7/8',   n1: 320, n2: 145 }, ans: '425' },
      { vars: { frac: '13/15', n1: 300, n2: 167 }, ans: '427' },
      { vars: { frac: '9/11',  n1: 264, n2: 193 }, ans: '409' },
      { vars: { frac: '5/7',   n1: 378, n2: 214 }, ans: '484' }
    ]
  ]
};

// ── MATH-TYPE OVERRIDE ────────────────────────
// Inspired by Matematrix-bogens kapitler. Hvis spilleren vælger en specifik
// matematik-type, overskrives kapitlets default lvlData og vi bruger en
// generisk regneopgave-tekst (historien bevares som den er).

const MATH_TYPES = [
  { id: 'mix',   name: 'Random',   icon: '🎲', desc: 'Mix af alt — full chaos' },
  { id: 'plus',  name: 'Plus',     icon: '➕', desc: 'Læg sammen og bygg op' },
  { id: 'minus', name: 'Minus',    icon: '➖', desc: 'Træk fra. Hold styr på resten' },
  { id: 'gange', name: 'Gange',    icon: '✖️', desc: 'Skala op. Mønster gentages' },
  { id: 'div',   name: 'Division', icon: '➗', desc: 'Del fair mellem alle' },
  { id: 'brok',  name: 'Brøker',   icon: '½',  desc: 'Stykker af det hele' },
  { id: 'geo',   name: 'Geometri', icon: '📐', desc: 'Mål rammen — areal & omkreds' }
];

// Resolve which MATH-key to use for a given chapter, given current selectedMathType
function resolveLvlData(chapterIdx, ch) {
  const t = state.selectedMathType;
  if (!t || t === 'mix') return ch.lvlData;
  // Use the arc chapter's lvlData if a TYPE_ARC is active
  const arcCh = TYPE_ARCS[t] && TYPE_ARCS[t][chapterIdx];
  if (arcCh) return arcCh.lvlData;
  return t;
}

// Generic neutral question text used when math-type is overridden.
// Bypasses chapter's questionTemplate so spørgsmålet matcher den valgte type.
function genericQuestion(lvlData, vars) {
  switch (lvlData) {
    case 'plus':    return `Beregn: ${vars.n1} + ${vars.n2} = ?`;
    case 'minus':   return `Beregn: ${vars.n1} − ${vars.n2} = ?`;
    case 'gange':   return `Beregn: ${vars.n1} × ${vars.n2} = ?`;
    case 'div':     return `Beregn: ${vars.n1} ÷ ${vars.n2} = ?`;
    case 'frakof':  return `Hvad er ${vars.frac} af ${vars.n1}?`;
    case 'frakp':   return `Beregn: ${vars.f1} + ${vars.f2} = ?`;
    case 'omk':     return `Et rektangel måler ${vars.n1} × ${vars.n2}. Hvad er omkredsen?`;
    case 'areal':   return `Et rektangel måler ${vars.n1} × ${vars.n2}. Hvad er arealet?`;
    case 'blandet': return `Beregn: ${vars.n1} × ${vars.n2} + ${vars.n3} = ?`;
    case 'finale':  return `Tag ${vars.frac} af ${vars.n1} og læg ${vars.n2} til. Hvad får du?`;
    default:        return '';
  }
}

// Quick "tænkeidé" pr. type — kort, til-the-point, gamer-tone.
const TYPE_NOTES = {
  plus:   'Læg dem sammen. Svaret er større end begge tal.',
  minus:  'Stort tal først. Træk det lille fra.',
  gange:  'Samme tal — bare mange gange. Det er gange.',
  div:    'Del totalen i lige store bunker. Total ÷ antal bunker.',
  frakof: 'Del helheden i nævneren. Tag så tælleren af bunkerne.',
  frakp:  'Samme nævner? Læg tællerne sammen. Nævneren bliver.',
  omk:    'Hele rammen: 2 × (lang + kort).',
  areal:  'Indersiden: længde × bredde. Svar i m² eller cm².',
  blandet:'Gange før plus. Altid. Rækkefølge er alt.',
  finale: 'Brøkdelen først. Læg så det ekstra til.'
};
// ── THEME FLAVOR TOKENS ───────────────────────
// Nøgle-substantiver pr. tema. Bruges som tokens ({hero}, {items}, {place}, …)
// så TYPE_ARCS-historierne får tema-specifik smag uden 480 unikke historier.
const THEME_FLAVORS = {
  kpop: {
    hero: 'YUNA', sidekick: 'PARK', rival: 'BABYMONSTER',
    item: 'armbånd', items: 'armbånd', itemA: 'lyserøde armbånd', itemB: 'blå armbånd',
    squad: 'fans', squadL: 'fan',
    place: 'arenaen', stage: 'scenen', boss: 'showet',
    res: 'lys-enheder', resL: 'lys-enhed', delivery: 'kasse'
  },
  gaming: {
    hero: 'KODA', sidekick: 'BYTE', rival: 'GLITCHZOR',
    item: 'coin', items: 'coins', itemA: 'gold coins', itemB: 'gems',
    squad: 'spillere', squadL: 'spiller',
    place: 'lageret', stage: 'platformen', boss: 'VORTEX',
    res: 'shield-enheder', resL: 'shield', delivery: 'loot-kasse'
  },
  football: {
    hero: 'LUCAS', sidekick: 'MIKKEL', rival: 'modstanderholdet',
    item: 'bold', items: 'bolde', itemA: 'fodbolde', itemB: 'træningsbolde',
    squad: 'fans', squadL: 'fan',
    place: 'stadion', stage: 'banen', boss: 'finalen',
    res: 'mål', resL: 'mål', delivery: 'kasse'
  },
  ronaldo: {
    hero: 'Cristiano', sidekick: 'RAMOS', rival: 'rivalholdet',
    item: 'bold', items: 'bolde', itemA: 'matchbolde', itemB: 'træningsbolde',
    squad: 'spillere', squadL: 'spiller',
    place: 'træningsbanen', stage: 'banen', boss: 'finalen',
    res: 'mål', resL: 'mål', delivery: 'leverance'
  },
  brawlstars: {
    hero: 'Leon', sidekick: 'Crow', rival: 'modstander-holdet',
    item: 'gem', items: 'gems', itemA: 'røde gems', itemB: 'blå gems',
    squad: 'brawlers', squadL: 'brawler',
    place: 'arenaen', stage: 'kamparenaen', boss: 'verdensfinalen',
    res: 'power-ups', resL: 'power-up', delivery: 'Star Drop'
  },
  anime: {
    hero: 'Naruto', sidekick: 'Sasuke', rival: 'fjenden',
    item: 'shuriken', items: 'shuriken', itemA: 'røde shuriken', itemB: 'blå shuriken',
    squad: 'ninjaer', squadL: 'ninja',
    place: 'akademiet', stage: 'træningsbanen', boss: 'Akatsuki',
    res: 'chakra-enheder', resL: 'chakra-enhed', delivery: 'sending'
  },
  jjk: {
    hero: 'Yuji', sidekick: 'Megumi', rival: 'cursed spirit',
    item: 'cursed nail', items: 'cursed nails', itemA: 'curse nails', itemB: 'shikigami-skrifter',
    squad: 'sorcerers', squadL: 'sorcerer',
    place: 'domænet', stage: 'kampzonen', boss: 'Sukuna',
    res: 'cursed energy', resL: 'cursed energy', delivery: 'pakke'
  },
  geography: {
    hero: 'Sofia', sidekick: 'ANDERS', rival: 'CAMILLA',
    item: 'kort', items: 'kort', itemA: 'gamle kort', itemB: 'nye kort',
    squad: 'geografer', squadL: 'geograf',
    place: 'arkivet', stage: 'landet', boss: 'mysteriet',
    res: 'koordinater', resL: 'koordinat', delivery: 'pakke'
  }
};

function getThemeFlavor(themeId) {
  return THEME_FLAVORS[themeId] || THEME_FLAVORS.kpop;
}

// ── TYPE-SPECIFIC STORY ARCS ──────────────────
// Ét sammenhængende 10-kapitel eventyr pr. matematik-type.
// Theme-agnostisk: spilles oven på temaets baggrundsbilleder, men historien
// er bygget op om regne-typen, så den giver mening fra start til slut.
const TYPE_ARCS = {

  // ════════ PLUS ════════ "STACK UP — alt skal lægges sammen"
  plus: [
    { title: 'Stack Up', lvlData: 'plus',
      story: `{hero} står med to stakke {items}. {n1} i den ene stak, {n2} i den anden. Hele {place} venter på den fulde sum.`,
      q: `Hvor mange {items} er der i alt?`,
      ok: `{answer} {items}. Sat. Klar til næste.` },
    { title: 'Double Drop', lvlData: 'plus',
      story: `Første {delivery} ankommer med {n1} {items}. Lige efter kommer endnu en {delivery} med {n2} mere. {place} skal lukkes inden klokken tikker.`,
      q: `Hvor mange {items} er der i alt?`,
      ok: `{answer} {items}. {place} er fyldt op.` },
    { title: 'Squad Merge', lvlData: 'plus',
      story: `Det blå hold har {n1} {squad}. Det røde hold har {n2}. I aften går de ind som én squad.`,
      q: `Hvor mange {squad} er det i alt?`,
      ok: `{answer} {squad} stærke. Det her ender godt.` },
    { title: 'Crowd Check', lvlData: 'plus',
      story: `Højre side af {place}: {n1} {squad}. Venstre side: {n2}. Trommerne starter. Alle på én gang.`,
      q: `Hvor mange {squad} er der i alt?`,
      ok: `{answer} stemmer. Hele {place} ryster.` },
    { title: 'Round 1 + Round 2', lvlData: 'plus',
      story: `{hero} scorer {n1} point i Round 1. I Round 2: {n2} point mere. Scoreboardet begynder at tælle sammen.`,
      q: `Hvad er den samlede score?`,
      ok: `{answer} point. Ny rekord for {hero}.` },
    { title: 'Day + Night Shift', lvlData: 'plus',
      story: `Dagholdet i {place} byggede {n1} {items}. Natholdet smed {n2} mere oveni. Inden solopgang er det hele klar.`,
      q: `Hvor mange {items} er færdige i alt?`,
      ok: `{answer} {items} klar. Project saved.` },
    { title: 'Vault A + Vault B', lvlData: 'plus',
      story: `Vault A i {place}: {n1} {items}. Vault B: {n2}. Hele truckloadet skal i én vogn.`,
      q: `Hvor mange {items} skal lastes i alt?`,
      ok: `{answer} {items}. Full load — let's roll.` },
    { title: 'Warmup + Showtime', lvlData: 'plus',
      story: `{hero} varmer op i {n1} minutter på {stage}. Selve {boss} varer {n2} minutter. Så er det slut.`,
      q: `Hvor mange minutter er det i alt?`,
      ok: `{answer} minutter fra start til drop.` },
    { title: 'Squad Grows', lvlData: 'plus',
      story: `{hero} startede med {n1} {squad} omkring sig. {n2} flere joinede. Det er ikke et hold længere — det er en bølge.`,
      q: `Hvor mange {squad} er der nu i alt?`,
      ok: `{answer} {squad}. Stoppes ikke.` },
    { title: 'The Big Sum', lvlData: 'plus',
      story: `Sidste dør i {place}. To tal: {n1} og {n2}. Læg dem sammen — så åbner den. {hero} står klar.`,
      q: `Hvad er den samlede total?`,
      ok: `{answer}. Døren glider op. GG.` }
  ],

  // ════════ MINUS ════════ "WHAT'S LEFT — noget forsvinder, hold styr på resten"
  minus: [
    { title: 'First Loss', lvlData: 'minus',
      story: `{hero} starter med {n1} {items} i {place}. Allerede dag ét er {n2} brugt op.`,
      q: `Hvor mange {items} er der tilbage?`,
      ok: `{answer} {items} tilbage. Pas på dem nu.` },
    { title: 'Wind Took Them', lvlData: 'minus',
      story: `{n1} {items} lå klar i {place}. Vinduet stod åbent. {n2} af dem røg ud i vinden.`,
      q: `Hvor mange {items} er der tilbage?`,
      ok: `{answer} {items} tilbage. Vi kan stadig.` },
    { title: 'Burned', lvlData: 'minus',
      story: `{hero} startede runden med {n1} forsøg. {n2} er allerede brændt af.`,
      q: `Hvor mange forsøg har {hero} tilbage?`,
      ok: `{answer} forsøg tilbage. Brug dem klogt.` },
    { title: 'Refunded', lvlData: 'minus',
      story: `{place} havde {n1} {items} på lager. {n2} blev sendt retur. Resten gik videre.`,
      q: `Hvor mange {items} blev sendt videre?`,
      ok: `{answer} {items} videresendt. Pengene er hjemme.` },
    { title: 'They Bounced', lvlData: 'minus',
      story: `{place} var fyldt med {n1} {squad}. Pausen kom — {n2} af dem bouncede.`,
      q: `Hvor mange {squad} er tilbage til Round 2?`,
      ok: `{answer} {squad} blev. De er real ones.` },
    { title: 'Crash', lvlData: 'minus',
      story: `På hylden i {place}: {n1} {items}. Nogen åbnede døren for hårdt — {n2} crashede til gulvet.`,
      q: `Hvor mange {items} er stadig hele?`,
      ok: `{answer} {items} intact. Vi fortsætter.` },
    { title: 'Left at Spawn', lvlData: 'minus',
      story: `{hero} tæller sit gear: {n1} {items}. Men {n2} blev hjemme.`,
      q: `Hvor mange {items} har {hero} med?`,
      ok: `{answer} {items} på lommen. Vi improviserer.` },
    { title: 'Queue Drop', lvlData: 'minus',
      story: `Køen foran {place} var {n1} {squad}. {n2} blev trætte og smuttede.`,
      q: `Hvor mange {squad} står stadig i kø?`,
      ok: `{answer} {squad} står stadig. De gav ikke op.` },
    { title: 'Low HP', lvlData: 'minus',
      story: `{hero} startede med {n1} liv. {n2} er gået tabt. Det her er final stretch.`,
      q: `Hvor mange liv har {hero} tilbage?`,
      ok: `{answer} liv. Hver eneste tæller.` },
    { title: 'Final Seconds', lvlData: 'minus',
      story: `{n1} sekunder på uret. {n2} er allerede væk. Sidste push for {hero}.`,
      q: `Hvor mange sekunder er der tilbage?`,
      ok: `{answer} sekunder. Clutch unlocked.` }
  ],

  // ════════ GANGE ════════ "MULTIPLY — mønsteret gentager sig"
  gange: [
    { title: 'Grid Lock', lvlData: 'gange',
      story: `{hero} sætter {n1} rækker op i {place}. Hver række: {n2} stole. Alt skal sidde lige.`,
      q: `Hvor mange stole er der i alt?`,
      ok: `{answer} stole. Perfect grid.` },
    { title: 'Box Pack', lvlData: 'gange',
      story: `{hero} pakker {n1} kasser. Hver kasse skal have {n2} {items}.`,
      q: `Hvor mange {items} pakkes der i alt?`,
      ok: `{answer} {items} pakket. Truck er klar.` },
    { title: 'Table Lock', lvlData: 'gange',
      story: `{n1} borde står i {place}. Hvert bord skal have {n2} pladser.`,
      q: `Hvor mange pladser er der i alt?`,
      ok: `{answer} pladser. Alle gæster covered.` },
    { title: 'Kit Drop', lvlData: 'gange',
      story: `{n1} {squad} står klar. Hver får {n2} {items} til aftenen.`,
      q: `Hvor mange {items} skal bruges i alt?`,
      ok: `{answer} {items}. Alle er klar til kamp.` },
    { title: 'Pattern Loop', lvlData: 'gange',
      story: `Designet i {place} kører i loop {n1} gange. Hvert loop bruger {n2} fliser.`,
      q: `Hvor mange fliser bruger du i alt?`,
      ok: `{answer} fliser. Pattern locked.` },
    { title: 'Stadium Blocks', lvlData: 'gange',
      story: `Tribunen i {place} er splittet i {n1} blokke. Hver blok har {n2} sæder.`,
      q: `Hvor mange sæder er der i alt?`,
      ok: `{answer} sæder. Fully sold out.` },
    { title: 'Tournament Tree', lvlData: 'gange',
      story: `Turneringen har {n1} hold. Hvert hold spiller {n2} kampe.`,
      q: `Hvor mange kampe er der i alt?`,
      ok: `{answer} kampe på listen. Turneringen kører.` },
    { title: 'Scale Up', lvlData: 'gange',
      story: `Mini-modellen i {place} er bygget af {n1} dele. Den fulde version er {n2} gange større.`,
      q: `Hvor mange dele skal der bruges til den store?`,
      ok: `{answer} dele. Bygget i fuld skala.` },
    { title: 'Mass Output', lvlData: 'gange',
      story: `Fabrikken kører {n1} skift. Hvert skift producerer {n2} {items}.`,
      q: `Hvor mange {items} produceres der pr. døgn?`,
      ok: `{answer} {items}. Fabrikken kører på fuld fart.` },
    { title: 'Final Multiplier', lvlData: 'gange',
      story: `{hero}s sidste run: {n1} gentaget {n2} gange. Multiplieren bestemmer alt.`,
      q: `Hvad er det endelige tal?`,
      ok: `{answer}. Run complete. Champion.` }
  ],

  // ════════ DIVISION ════════ "SPLIT FAIR — alle får lige meget"
  div: [
    { title: 'Team Split', lvlData: 'div',
      story: `{n1} {squad} skal opdeles i {n2} hold. Samme antal på hvert hold.`,
      q: `Hvor mange {squad} kommer der på hvert hold?`,
      ok: `{answer} pr. hold. Fair lobby.` },
    { title: 'Loot Drop', lvlData: 'div',
      story: `{hero} har samlet {n1} {items}. De skal deles ligeligt mellem {n2} {squad}.`,
      q: `Hvor mange {items} får hver {squadL}?`,
      ok: `{answer} {items} pr. {squadL}. No drama.` },
    { title: 'Equal Stacks', lvlData: 'div',
      story: `{n1} {items} ligger i {place}. De skal stables i {n2} lige store tårne.`,
      q: `Hvor mange {items} pr. tårn?`,
      ok: `{answer} pr. tårn. Pænt og lige.` },
    { title: 'Per Minute', lvlData: 'div',
      story: `{hero} laver {n1} {items} på {n2} minutter. Tempo: konstant.`,
      q: `Hvor mange {items} laves der pr. minut?`,
      ok: `{answer} pr. minut. {hero} er en maskine.` },
    { title: 'Cut to Length', lvlData: 'div',
      story: `Et bånd er {n1} cm langt. Det skal skæres i stykker à {n2} cm.`,
      q: `Hvor mange stykker bliver det til?`,
      ok: `{answer} stykker. Det går præcis op.` },
    { title: 'Pack Price', lvlData: 'div',
      story: `Kassen i {place} indeholder {n1} kr. Der er {n2} pakker, og alle koster det samme.`,
      q: `Hvad koster én pakke?`,
      ok: `{answer} kr pr. pakke. Regnskabet stemmer.` },
    { title: 'Per Day', lvlData: 'div',
      story: `Holdet rejste {n1} km på {n2} dage. Samme strækning hver dag.`,
      q: `Hvor mange km gik de pr. dag?`,
      ok: `{answer} km pr. dag. Steady pace.` },
    { title: 'Shift Split', lvlData: 'div',
      story: `{n1} timer skal dækkes af {n2} vagter i {place}. Lige lange shifts.`,
      q: `Hvor mange timer er der pr. vagt?`,
      ok: `{answer} timer pr. vagt. Skemaet er låst.` },
    { title: 'Tables Per Server', lvlData: 'div',
      story: `Restauranten har {n1} borde. {n2} tjenere er på vagt. Alle tager lige mange.`,
      q: `Hvor mange borde pr. tjener?`,
      ok: `{answer} borde pr. tjener. Fair shift.` },
    { title: 'Final Split', lvlData: 'div',
      story: `Sidste opgave for {hero}: {n1} {items} skal fordeles ligeligt på {n2} steder.`,
      q: `Hvor mange {items} ender hvert sted med?`,
      ok: `{answer} pr. sted. Helt fair fordeling.` }
  ],

  // ════════ BRØKER ════════ "FRACTIONS — stykker af det hele"
  brok: [
    { title: 'Take Your Cut', lvlData: 'frakof',
      story: `{n1} {items} ligger på bordet i {place}. {hero} må tage {frac} af dem.`,
      q: `Hvor mange {items} skal {hero} have?`,
      ok: `{answer} {items}. Resten til de andre.` },
    { title: 'Stack Slices', lvlData: 'frakp',
      story: `Kagen i {place} er skåret. {hero} har {f1}. {sidekick} har {f2}.`,
      q: `Hvor stor en del af kagen har de tilsammen?`,
      ok: `{answer} af kagen. Næsten det hele.` },
    { title: 'One Third', lvlData: 'frakof',
      story: `{n1} {items} skal deles. {hero} beholder {frac}.`,
      q: `Hvor mange {items} bliver {hero}s?`,
      ok: `{answer} {items}. Resten i bunken.` },
    { title: 'Same Tank', lvlData: 'frakp',
      story: `{hero} fyldte tanken til {f1}. Pumpen tilføjede {f2} mere.`,
      q: `Hvor stor en del af tanken er fyldt?`,
      ok: `{answer} fuld. Næsten ready.` },
    { title: 'Majority Vote', lvlData: 'frakof',
      story: `{n1} {squad} i {place}. {frac} af dem stemte ja.`,
      q: `Hvor mange {squad} stemte ja?`,
      ok: `{answer} ja-stemmer. Clear win.` },
    { title: 'Setlist Drop', lvlData: 'frakp',
      story: `{hero} har styr på {f1} af setlisten. {sidekick} smed {f2} mere på.`,
      q: `Hvor stor en del af setlisten er klar?`,
      ok: `{answer} af setlisten klar. Sidste lille bid kommer let.` },
    { title: 'VIP Pass', lvlData: 'frakof',
      story: `{n1} {squad} står i {place}. {frac} af dem fik VIP-pas.`,
      q: `Hvor mange {squad} er i VIP?`,
      ok: `{answer} VIP'er. De bedste pladser forrest.` },
    { title: 'Painted Together', lvlData: 'frakp',
      story: `{hero} malede {f1} af væggen. {sidekick} tog {f2}.`,
      q: `Hvor stor en del af væggen er færdig?`,
      ok: `{answer} done. Lille rest tilbage.` },
    { title: 'Treasure Cut', lvlData: 'frakof',
      story: `Skatten i {place}: {n1} mønter. {hero} må tage {frac} med sig.`,
      q: `Hvor mange mønter får {hero}?`,
      ok: `{answer} mønter. Lommen er tung.` },
    { title: 'Last Fraction', lvlData: 'frakp',
      story: `{hero} har samlet {f1} af {items}. I sidste øjeblik findes {f2} mere.`,
      q: `Hvor stor en del af {items} har {hero} nu?`,
      ok: `{answer} af det hele. Du gjorde det.` }
  ],

  // ════════ GEOMETRI ════════ "BLUEPRINT — mål rammen, mål gulvet"
  geo: [
    { title: 'Edge Lock', lvlData: 'omk',
      story: `Et rum i {place}: {n1} m langt og {n2} m bredt. Hegnet skal hele vejen rundt.`,
      q: `Hvor mange meter hegn skal {hero} bruge?`,
      ok: `{answer} meter. Sealed all sides.` },
    { title: 'Floor Plan', lvlData: 'areal',
      story: `Gulvet i {place} skal lægges. Rummet er {n1} m langt og {n2} m bredt.`,
      q: `Hvor mange m² gulv skal {hero} bestille?`,
      ok: `{answer} m². Ordret og inde.` },
    { title: 'Stage Lights', lvlData: 'omk',
      story: `{stage} er {n1} m lang og {n2} m bred. Lyskæden skal løbe hele kanten rundt.`,
      q: `Hvor lang skal lyskæden være?`,
      ok: `{answer} m lys. Hele kanten lyser.` },
    { title: 'Pitch Cover', lvlData: 'areal',
      story: `Den nye {stage} er {n1} m lang og {n2} m bred. Den skal dækkes med kunstgræs.`,
      q: `Hvor mange m² græs skal bestilles?`,
      ok: `{answer} m². {stage} åbner i weekenden.` },
    { title: 'Main Hall', lvlData: 'omk',
      story: `Storsalen i {place} er {n1} m lang og {n2} m bred. Snor skal trækkes hele vejen rundt.`,
      q: `Hvor lang skal snoren være?`,
      ok: `{answer} m snor. Området er låst.` },
    { title: 'Red Carpet', lvlData: 'areal',
      story: `Den røde løber til {boss} er {n1} m bred og {n2} m lang.`,
      q: `Hvor stort er tæppets areal i m²?`,
      ok: `{answer} m². Stjernerne kan ankomme.` },
    { title: 'Frame It', lvlData: 'omk',
      story: `Plakaten af {hero} er {n1} cm lang og {n2} cm bred. {sidekick} skal lave en ramme hele vejen rundt.`,
      q: `Hvor mange cm liste skal {sidekick} bruge?`,
      ok: `{answer} cm. Sidder perfekt.` },
    { title: 'Stadium Tier', lvlData: 'areal',
      story: `Den øvre tribune på {place} er {n1} m lang og {n2} m bred.`,
      q: `Hvor stort er tribunens areal i m²?`,
      ok: `{answer} m². Fans inkommer.` },
    { title: 'Final Fence', lvlData: 'omk',
      story: `Sidste område i {place}: {n1} m langt og {n2} m bredt. Hegn rundt hele vejen — sidste rul.`,
      q: `Hvor mange meter hegn skal {hero} bruge?`,
      ok: `{answer} m. Området er secured.` },
    { title: 'Final Floor', lvlData: 'areal',
      story: `Sidste plade til {stage}: {n1} m lang og {n2} m bred. Skal lægges som gulv.`,
      q: `Hvor stort er arealet i m²?`,
      ok: `{answer} m². Run complete. {stage} er bygget.` }
  ]
};

// Resolve which 10-chapter arc to use
function getArcChapter(chapterIdx) {
  const t = state.selectedMathType;
  if (!t || t === 'mix') return null;  // means "use original theme.chapters[idx]"
  const arc = TYPE_ARCS[t];
  if (!arc) return null;
  return arc[chapterIdx];
}

const TYPE_HINTS = {
  plus:   ['Spot de to tal.', 'Plus dem sammen.', 'Tjek: er svaret større end begge?'],
  minus:  ['Stort tal først.', 'Træk det lille fra.', 'Svaret er mindre end startet.'],
  gange:  ['Tænk grupper: n1 × n2.', 'Brug gange-tabellen.', 'Svaret er større end begge.'],
  div:    ['Del totalen i lige store bunker.', 'Total ÷ antal bunker.', 'Tjek: bunke × antal = total?'],
  frakof: ['Del totalen i nævnerens stykker.', 'Tag tælleren af de stykker.', 'Tjek: svar × nævner = total?'],
  frakp:  ['Tjek: er nævnerne ens?', 'Plus tællerne sammen.', 'Nævneren bliver bare stående.'],
  omk:    ['Rektangel: 2 lange + 2 korte sider.', '2 × (lang + kort).', 'Tæl helt rundt om kanten.'],
  areal:  ['Mål gange mål.', 'Areal = l × b.', 'Svar i kvadrat-enheder.'],
  blandet:['Spot gange-stykket først.', 'Beregn det.', 'Læg så plus-tallet til.'],
  finale: ['Find brøkdelen først.', 'Del helheden, tag tælleren af.', 'Læg det ekstra til til sidst.']
};

// Returns 0–4 — consistent per theme+chapter, different across themes
function getVariantIdx(themeId, chapterIdx) {
  const themeOrder = ['kpop','gaming','football','ronaldo','brawlstars','anime','jjk','geography'];
  const tIdx = Math.max(0, themeOrder.indexOf(themeId));
  return (tIdx * 7 + chapterIdx * 3) % 5;
}

// Shared "tænkeidé" pr. kapitel-position (0–9). Bruges når Random-mode er på.
const SHARED_MATH_NOTES = [
  'Læg dem sammen. Svaret er større end begge tal.',
  'Stort tal først. Træk det lille fra.',
  'Samme tal — bare mange gange. Det er gange.',
  'Del totalen i lige store bunker. Total ÷ antal bunker.',
  'Del helheden i nævneren. Tag så tælleren af bunkerne.',
  'Samme nævner? Læg tællerne sammen. Nævneren bliver.',
  'Hele rammen: 2 × (lang + kort).',
  'Indersiden: længde × bredde. Svar i m² eller cm².',
  'Gange før plus. Altid. Rækkefølge er alt.',
  'Brøkdelen først. Læg så det ekstra til.'
];

// Shared hint-trappe pr. kapitel-position (0–9)
const SHARED_HINTS = [
  ['Spot de to tal.', 'Plus dem sammen.', 'Tjek: er svaret større end begge?'],
  ['Stort tal først.', 'Træk det lille fra.', 'Svaret er mindre end startet.'],
  ['Tænk grupper: n1 × n2.', 'Brug gange-tabellen.', 'Svaret er større end begge.'],
  ['Del totalen i lige store bunker.', 'Total ÷ antal bunker.', 'Tjek: bunke × antal = total?'],
  ['Del totalen i nævnerens stykker.', 'Tag tælleren af de stykker.', 'Tjek: svar × nævner = total?'],
  ['Tjek: er nævnerne ens?', 'Plus tællerne sammen.', 'Nævneren bliver bare stående.'],
  ['Rektangel: 2 lange + 2 korte sider.', '2 × (lang + kort).', 'Tæl helt rundt om kanten.'],
  ['Mål gange mål.', 'Areal = l × b.', 'Svar i kvadrat-enheder.'],
  ['Spot gange-stykket først.', 'Beregn det.', 'Læg så plus-tallet til.'],
  ['Find brøkdelen først.', 'Del helheden, tag tælleren af.', 'Læg det ekstra til til sidst.']
];

// ── GAME DATA ─────────────────────────────────

const GAME_DATA = {

  // ════════════════════════════════════════════
  //  K-POP  (Hearts2Hearts · Stray Kids · Babymonster)
  // ════════════════════════════════════════════
  kpop: {
    id: 'kpop', name: 'K-POP', icon: '⭐',
    tagline: 'Spotlight, drop, encore — verdens største scene',
    endingTrophy: '🌟', endingTitle: 'WORLD TOUR · CLOSED',
    endingStory: `Lyset rammer. Ikke smukt — eksplosivt.

Tusindvis af armbånd tænder på én gang. YUNA stopper midt i en linje, smiler og giver mikken til publikum. De synger den uden hende. Det her er det øjeblik, alle husker.

Bagefter sender PARK én besked til hele holdet: »Hvert tal passede. Hver eneste.« Det er hans måde at sige tak.`,
    collectibles: [
      { name: 'YUNA Photocard',      icon: '💗', desc: 'Signeret bag scenen. 1-of-1.' },
      { name: 'Bang Chans Setlist',  icon: '📋', desc: 'Det eneste der overlevede natten.' },
      { name: 'LILI Sketch',         icon: '✏️', desc: 'Aldrig et tal for lidt.' },
      { name: 'JAKE Clipboard',      icon: '📎', desc: 'Ét nik. Det betyder go.' },
      { name: 'MINA Fan-Drop',       icon: '👜', desc: 'Lagt ud med logo opad.' },
      { name: 'SOL Studio Key',      icon: '🔑', desc: 'Beatet var ready klokken 6.' },
      { name: 'PARK Lysmålebånd',    icon: '📏', desc: 'Hver meter målt op.' },
      { name: 'Glow Tæppe',          icon: '✨', desc: 'Sceneslag som et fyrværkeri.' },
      { name: 'MIN-JI VIP Pass',     icon: '💳', desc: 'Et sekund i elevatoren.' },
      { name: 'Hearts2Hearts Stage', icon: '🎭', desc: 'Den nat ingen glemmer.' }
    ],
    chapters: [
      {
        title: 'Lights Up',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Kassen med fan-armbånd ankommer sent. YUNA er stadig vågen — hun har ikke kunnet sove.

{n1} lyserøde armbånd i den ene halvdel. {n2} blå i den anden. Stablet militært. Kassen lugter svagt af vanilje. Ingen ved hvorfor.

»Lyssystemet låser op på den eksakte total,« siger PARK. »No total, no light show.«`,
        questionTemplate: `Der er {n1} lyserøde og {n2} blå armbånd. Hvor mange armbånd er der i alt?`,
        successMsgTemplate: `{answer} armbånd. Et klik. Lyset tænder. MINA siger: »Godt.« Det er hendes ros.`,
        storyBonus: `I det sekund lyset gik på, var der ingen i bygningen, der ikke holdt vejret.`
      },
      {
        title: 'Missing Steps',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Stray Kids havde lagt {n1} dansetrin-kort ud på rehearsal-gulvet. Hvert kort: ét trin.

Så starter ventilationen. Ingen ved præcis hvornår. {n2} kort suges op gennem risten — borte for evigt.

Bang Chan stirrer på hullerne i opstillingen. »Finalen er låst — indtil vi ved, hvad vi faktisk har tilbage.«`,
        questionTemplate: `Der lå {n1} kort. {n2} forsvandt op gennem ventilationen. Hvor mange kort er der tilbage?`,
        successMsgTemplate: `{answer} kort. Nok til finalen — hvis alle husker resten udenad.`,
        storyBonus: `Bang Chan samlede de overlevende kort op ét for ét, som var de et løfte.`
      },
      {
        title: 'Wardrobe Math',
        idx: 2, lvlData: 'gange',
        storyTemplate: `LILI har aldrig sagt »godt nok« i sit liv. Det er ikke disciplin — det er bare ikke i hende.

Babymonster har {n1} dansere på verdensturneen. Hvert show: {n2} outfits pr. danser. Hun står med sin notesbog og venter på det rigtige tal.

»Bestiller jeg ét for lidt,« siger hun, »er det ikke scenen der fejler. Det er mig.«`,
        questionTemplate: `{n1} dansere skal hver have {n2} outfits. Hvor mange outfits er det i alt?`,
        successMsgTemplate: `{answer} outfits. LILI skriver tallet uden at sige noget. Det betyder rigtigt.`,
        storyBonus: `LILI klippede aldrig en eneste tråd, før hun kendte det eksakte tal. Det er ikke forsigtighed. Det er respekt.`
      },
      {
        title: 'Bus Loadout',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} fans i køen foran arenaen. Sikkerhedschef JAKE har {n2} busser klar og en sharpie og en mening om hvordan ting bør gøres.

»Præcis samme antal i hver bus. Ikke én mere. Ikke én mindre. Ikke til forhandling — det er matematik.«

Bagest i køen råber en fan, at hun gerne vil i bus 1. JAKE kigger ikke op fra sin clipboard.`,
        questionTemplate: `{n1} fans fordelt på {n2} busser. Hvor mange pr. bus?`,
        successMsgTemplate: `{answer} pr. bus. JAKE nikker. Det er hans eneste nik i aften.`,
        storyBonus: `Bagest i køen stod en pige, der havde sparet op i seks måneder. Hun kom ind.`
      },
      {
        title: 'Merch Drop',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Stray Kids-butikken lugter af nyt plastik og en form for euforia.

{n1} merchandise-tasker hænger på rækken. MINA står med armene over kors. Hun er ved at give {frac} af dem væk — til fansene udenfor parkeringspladsen, der hørte hele showet gennem betonen.

»De var der alligevel,« siger MINA. »Det tæller.«`,
        questionTemplate: `{n1} tasker i alt. Hvad er {frac} af {n1}?`,
        successMsgTemplate: `{answer} tasker. Nogen udenfor får en gave de ikke så komme.`,
        storyBonus: `MINA foldede ikke taskerne — hun lagde dem ud med logo opad, så alle så det.`
      },
      {
        title: 'Beat Drop',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `SOL sover ikke. Det er ikke en beslutning. Det er bare det, der sker, når et beat ikke vil lade ham være.

{f1} af natten på bassen, indtil den sidder helt nede i maven. {f2} på vokalerne — YUNA i lag på lag, som var hun fire stemmer på én gang.

Tidligt om morgenen løfter han sine headphones. »Okay,« siger han. Det er nok.`,
        questionTemplate: `SOL brugte {f1} af natten på bassen og {f2} på vokalen. Hvor stor en del af natten er det i alt?`,
        successMsgTemplate: `{answer} af natten brugt. Showet har sit beat. SOL falder i søvn smilende.`,
        storyBonus: `SOL lukkede studiedøren stille. Beatet var klar. Det var nok.`
      },
      {
        title: 'Stage Recon',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Sent om natten måler PARK scenen igen. Ikke fordi han er i tvivl. Fordi lysslangen er dyr, og der er ikke plads til ét forkert meter.

Scenen er {n1} m lang og {n2} m bred. Hele kanten skal lyse. Hvert hjørne. Hver mm.

»Hele vejen rundt,« siger han ud i mørket.`,
        questionTemplate: `Scenen er {n1} m lang og {n2} m bred. Hvad er omkredsen?`,
        successMsgTemplate: `{answer} m. PARK ringer leverandøren. Det er fint, han er natugle.`,
        storyBonus: `PARK tog billeder af den tomme scene fra alle vinkler, før lyset kom på. Han ville huske den, før den blev en anden.`
      },
      {
        title: 'Floor Glow',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Det lysende gulvtæppe ankom i en trækasse, der vejede som en hemmelighed.

Stray Kids-scenen: {n1} m lang, {n2} m bred. Tæppet skal dække hele fladen. Når lyset rammer rigtigt, ser det ud som om danserne flyver.

»Jeg skal bruge arealet,« siger tekniker SEON. »Ikke en cirka. Arealet.«`,
        questionTemplate: `Scenen er {n1} m lang og {n2} m bred. Hvad er arealet?`,
        successMsgTemplate: `{answer} m². Trækassen åbnes. Det er smukkere end alle troede.`,
        storyBonus: `Tæppet glødede svagt i kassen, som vidste det allerede, det var vigtigt. Det var det.`
      },
      {
        title: 'Ticket Math',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `MIN-JI har sin jakke på allerede. Hun er aldrig sen — hun er præcis, og der er forskel.

Babymonster-arenaen: {n1} VIP-sektioner × {n2} sæder + {n3} ståpladser bagerst til presse, der altid er der og altid har for mange kameraer.

»Jeg har {n3} sekunder i elevatoren. Giv mig totalen inden dørene lukker.«`,
        questionTemplate: `{n1} sektioner med {n2} sæder + {n3} ståpladser. Hvor mange pladser i alt?`,
        successMsgTemplate: `{answer} pladser. MIN-JI logger det og træder ind. Dørene lukker.`,
        storyBonus: `MIN-JI stoppede et sekund i elevatoren før dørene lukkede. Det sekund hørte ingen til.`
      },
      {
        title: 'Encore Night',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Sidste show. Hearts2Hearts lukker verdensturneen.

{frac} af de {n1} fans med backstage-pas er mødt op. De andre sendte blomster. Alle {n2} crew-medlemmer er der — også dem der sagde de ville tage fri.

YUNA kigger ud bag tæppet. »Hvor mange er vi?« hvisker hun. Det er aftenens vigtigste spørgsmål.`,
        questionTemplate: `Tag {frac} af {n1} fans og læg {n2} crew til. Hvor mange er backstage?`,
        successMsgTemplate: `{answer} mennesker. YUNA lukker øjnene ét sekund. Så går hun på.`,
        storyBonus: `YUNA tog et åndedrag bag tæppet. Det er det eneste tidspunkt, hun er bange. Og det er okay.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  GAMING  (KODA · BYTE · PIXEL QUEST)
  // ════════════════════════════════════════════
  gaming: {
    id: 'gaming', name: 'GAMING', icon: '🎮',
    tagline: 'En kode ad gangen — VORTEX kan tages ned',
    endingTrophy: '🏆', endingTitle: 'PIXEL QUEST · CLEARED',
    endingStory: `VORTEX faldt. Ikke langsomt og filmisk. Bare stille — som et tal der endelig passer ind i ligningen.

Et sekund var der ingenting. Bare KODA, en tom level og en cursor der blinkede.

Så sagde BYTE: »Pixel Quest fuldført.« Pause. »Du var det bedste kode, jeg har analyseret.« Det er eneste gang BYTE har sagt noget smukt. KODA gemte det.`,
    collectibles: [
      { name: 'BYTEs Første Sync',     icon: '💾', desc: 'Første "Godt." Ever.' },
      { name: 'KODAs Emergency Shield',icon: '🛡️', desc: 'Holdt mod alt.' },
      { name: 'GLITCHZOR Token',       icon: '👾', desc: 'Du stod imod. Beviset.' },
      { name: 'Gold Gem Chest',        icon: '💎', desc: 'Lukket fair.' },
      { name: 'Secret Formula #47',    icon: '📜', desc: 'Den eneste der virkelig betyder noget.' },
      { name: 'Power Crystal',         icon: '⚡', desc: 'Grønt for første gang i timer.' },
      { name: 'Platform Master Badge', icon: '🏗️', desc: 'Bygget op fra ground zero.' },
      { name: 'Diamond Foundation',    icon: '💠', desc: '"Perfekt." Første gang nogensinde.' },
      { name: 'Legendary Quest Badge', icon: '🏅', desc: 'Det lille quest. Det vigtigste.' },
      { name: 'VORTEX Eye',           icon: '👁️', desc: 'Hvad så det inden det faldt?' }
    ],
    chapters: [
      {
        title: 'First Portal',
        idx: 0, lvlData: 'plus',
        storyTemplate: `KODA logger ind en torsdag eftermiddag. Intet er som det plejer.

Lageret er mørkt og stille. {n1} guld-coins ligger i hjørnet. {n2} coins gemmer sig bag en dør der blinker gult — den slags dør, man hverken ignorerer eller åbner for hurtigt.

»Portalen unlocker kun på den fulde total,« siger BYTE. »Ikke de fleste mønter. Alle.«`,
        questionTemplate: `{n1} coins ligger i lageret og {n2} ligger bag døren. Hvor mange coins er der i alt?`,
        successMsgTemplate: `{answer} coins. Portalen blinker grønt. BYTE siger »Godt.« Første gang nogensinde.`,
        storyBonus: `Portalen stod åben i præcis syv sekunder. KODA gik igennem i det sjette. Tæt nok.`
      },
      {
        title: 'Shield Down',
        idx: 1, lvlData: 'minus',
        storyTemplate: `{n1} shield-enheder. Det lød som meget. Det lød som nok.

Det er den slags ting, man tænker — lige før DRONESWARM-7. Angrebet tog {n2} enheder, hurtigt og hårdt. Shield-måleren blinker rødt og betyder det.

»Status?« spørger BYTE. Lavt. Roligt. Som om det rigtige tal kan ændre noget.`,
        questionTemplate: `KODA havde {n1} shield. Angrebet tog {n2}. Hvor meget shield er der tilbage?`,
        successMsgTemplate: `Shield {answer}. Nødporten holder. BYTEs stemme lyder en smule lettet. Den indrømmer det aldrig.`,
        storyBonus: `BYTE holdt en pause på 0,3 sekunder før skadesrapporten. Den pause betød noget.`
      },
      {
        title: 'Boss Wave',
        idx: 2, lvlData: 'gange',
        storyTemplate: `GLITCHZOR spawner waves som vejret spawner regn. Personligt? Nej. Mange? Ja.

{n1} waves. {n2} fjender pr. wave. BYTE starter en sætning: »Det svarer til—« og stopper bevidst. BYTE vil have, KODA selv siger tallet.

KODA tager et dybt åndedrag. Ikke muligt i et spil. Kroppen glemmer det nogle gange.`,
        questionTemplate: `{n1} waves med {n2} fjender i hver. Hvor mange fjender er der i alt?`,
        successMsgTemplate: `{answer} fjender. KODA hæver skjoldet. Strategien er klar.`,
        storyBonus: `KODA talte fjenderne. Det er det, man gør, når man ikke har tid til at være bange.`
      },
      {
        title: 'Loot Split',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} gems. Lyder simpelt — men det er det ikke, når {n2} spillere kigger på kisten samtidig.

Gems er ikke bare valuta i Pixel Quest. De er bevis på at have overlevet. Den digitale kontrakt, paragraf 7: »Alle gems splittes ligeligt.« Lov. Retfærdighed.

KODA tog den første.`,
        questionTemplate: `{n1} gems skal deles ligeligt mellem {n2} spillere. Hvor mange gems får hver spiller?`,
        successMsgTemplate: `{answer} gems hver. Et lysglimt fra kisten — som tak.`,
        storyBonus: `Kisten lukkede sig stille. Som vidste den, det var fair.`
      },
      {
        title: 'Active Spells',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Biblioteket lugter af gammelt papir og pixel-partikler — BYTEs ord. KODA siger bare støv.

{n1} besværgelser. De fleste grå, lukkede, døde. Men {frac} er aktive — lyser, vibrerer, som om de venter. De gemmer koden til udgangen.

»Aktive er nøglen,« siger BYTE. Uret i hjørnet tikker anderledes nu.`,
        questionTemplate: `Der er {n1} besværgelser. {frac} af dem er aktive. Hvor mange er aktive?`,
        successMsgTemplate: `{answer} aktive. En af dem åbner sig. Koden viser sig.`,
        storyBonus: `En af dem var anderledes end de andre. KODA gemte den separat. Det var den vigtigste.`
      },
      {
        title: 'Energy Bar',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Energibaren sidder midt på HUD'en og nægter at blive ignoreret.

{f1} brugt på sprint. {f2} på attack. En blinkende linie skriger: »Læg dem sammen, eller jeg slukker for charge.« Direkte for en energibar.

»Det er ment alvorligt,« siger BYTE.`,
        questionTemplate: `KODA brugte {f1} af energien på sprint og {f2} på attack. Hvor stor en del er brugt i alt?`,
        successMsgTemplate: `{answer}. Charging starter med et hum. KODA kan trække vejret.`,
        storyBonus: `Baren ramte grønt for første gang i timer. KODA mærkede det i hele kroppen.`
      },
      {
        title: 'Wall Build',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Platformen er {n1} blokke lang, {n2} bred. KODA elsker den — første sted i Pixel Quest der føltes hjem.

Så kommer fjenderne langs kanten. Stille. Som om de har al tid.

»Mur,« siger BYTE. »Hele vejen rundt. Vi skal bruge det totale antal blokke.«`,
        questionTemplate: `Platformen er {n1} blokke lang og {n2} blokke bred. Hvad er omkredsen?`,
        successMsgTemplate: `{answer} blokke. Muren rejser sig. Platformen holder.`,
        storyBonus: `Den første blok sad skævt. KODA fjernede den og startede forfra. Det er det, man gør.`
      },
      {
        title: 'Diamond Floor',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Diamantblokke er det smukkeste i Pixel Quest. KODAs mening. BYTE er enig — kalder det dog »visuel datavurdering«.

Den nye base: {n1} blokke lang, {n2} bred. KODA står med sin tablet. Hvis fundamentet er forkert, er basen forkert.

»Arealet,« siger BYTE lavt. »For en sikkerheds skyld.«`,
        questionTemplate: `Gulvet er {n1} blokke langt og {n2} blokke bredt. Hvad er arealet?`,
        successMsgTemplate: `{answer} blokke. Fundamentet er lagt. BYTE siger »Perfekt.« Første gang.`,
        storyBonus: `BYTE registrerede, at KODAs hænder rystede da fundamentet sad. Den noterede det ikke videre. Den behøvede ikke.`
      },
      {
        title: 'XP Stack',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `{n1} quests på én session. Ikke planen — men KODA stoppede ikke, fordi det hver gang føltes som: én mere.

Hvert quest: {n2} XP. Øverst på skærmen i lille tekst: +{n3} bonus for perfect run. BYTE læste det op med en stemme der lød en smule stolt.

KODA sagde ikke noget. Men noget i brystet løftede sig.`,
        questionTemplate: `{n1} quests à {n2} XP + {n3} bonus. Hvor meget XP i alt?`,
        successMsgTemplate: `{answer} XP! En dungeon-dør glider op. Den har aldrig været åbnet før.`,
        storyBonus: `Det var ikke det store quest der talte mest. Det var det næstsidste — det stille.`
      },
      {
        title: 'Final Boss · VORTEX',
        idx: 9, lvlData: 'finale',
        storyTemplate: `VORTEX er bare... der. Det behøver ikke sige noget. Det er stort nok.

»Ét angreb,« siger BYTE — lavt som altid, men med noget i stemmen denne gang. »Præcis {frac} af dine {n1} base damage points, plus {n2} bonus fra de power-ups du gemte.« Pause. »Gem dem ikke i dag.«

KODA kigger på VORTEX. Løfter våbnet.`,
        questionTemplate: `Tag {frac} af {n1} skadepunkter og læg {n2} bonus til. Hvad er det totale angreb?`,
        successMsgTemplate: `{answer}! Et glimt. Et brag. VORTEX falder. BYTE siger ingenting — første gang nogensinde.`,
        storyBonus: `VORTEX kiggede på KODA ét sekund før det faldt. Ingen ved, hvad det så. Måske bedst sådan.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  FODBOLD  (FCK · MIKKEL · LUCAS · DITTE)
  // ════════════════════════════════════════════
  football: {
    id: 'football', name: 'FODBOLD', icon: '⚽',
    tagline: 'Tribune, taktik og det afgørende spark',
    endingTrophy: '🥇', endingTitle: 'FCK · CHAMPIONS',
    endingStory: `LUCAS løber mod bolden. Alt andet falder væk — tribunen, lyden, vejret, alle de øjeblikke der ledte herhen.

Bolden går i nettet med en lyd, ingen hører — fordi alle skriger.

Bagefter sidder MIKKEL alene på det tomme stadion og kigger ud på græsset i lang tid. »Det var godt regnet,« siger han stille. DITTE hørte det. Hun sagde det videre.`,
    collectibles: [
      { name: 'FCK Matchday Program', icon: '📰', desc: 'Natten tribunen brusede.' },
      { name: 'Billet #1',            icon: '🎫', desc: 'Hun stod der fra klokken 7.' },
      { name: 'MIKKEL Training Plan', icon: '📋', desc: 'Session 3 har to streger under.' },
      { name: 'Stats Book',           icon: '📊', desc: 'Han tager altid en kopi med hjem.' },
      { name: 'Tackle Replay',        icon: '🎞️', desc: 'Det 13. minut. Spillet om og om.' },
      { name: 'FREJ GPS Watch',       icon: '⌚', desc: '0,5 sekunder før alle andre.' },
      { name: 'OSCAR Gloves',         icon: '🧤', desc: 'Klar klokken 14.37.' },
      { name: 'New Pitch Approval',   icon: '🏟️', desc: 'Et nyt kapitel for FCK.' },
      { name: 'Topscorer Trophy',     icon: '🏆', desc: 'Sæson for historiebogen.' },
      { name: 'Match Ball',           icon: '⚽', desc: 'LUCAS sparkede. FCK vandt.' }
    ],
    chapters: [
      {
        title: 'Stadium Roar',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Det er en af de dage, hvor luften på stadion lugter af noget der er ved at ske.

{n1} fans i nordlige tribune med røde tørklæder. {n2} fans i sydlige med hvide bannere og den slags stilhed, der kun opstår når noget rigtigt vigtigt er om at ske.

Kaptajn LUCAS kigger ud fra omklædningsrummet. Træner MIKKEL siger: »Man kender altid sine fans. Det er det første.«`,
        questionTemplate: `{n1} fans står i nordtribunen og {n2} i sydtribunen. Hvor mange fans er der i alt?`,
        successMsgTemplate: `{answer} fans. MIKKEL skriver det med et smil. Han smiler ikke igen før kampen.`,
        storyBonus: `LUCAS lukkede døren og stod stille med øjnene lukket i ti sekunder. Hans ritual. Nu er det tid.`
      },
      {
        title: 'Ticket Crunch',
        idx: 1, lvlData: 'minus',
        storyTemplate: `{n1} billetter. Lød som rigeligt — men billetter forsvinder stille, før man opdager det.

{n2} blev allerede sendt til presse, sponsorer og folk-der-kender-folk. Salgschef SOFIA står ved lugen og kigger på køen udenfor.

»Hurtigt — hvad har vi faktisk tilbage?«`,
        questionTemplate: `Der var {n1} billetter. {n2} er allerede solgt. Hvor mange billetter er der tilbage?`,
        successMsgTemplate: `{answer} billetter. SOFIA åbner lugen. Køen begynder at flytte sig.`,
        storyBonus: `Den første i køen havde stået der siden klokken 7. SOFIA vidste det. Lugen åbnede med det samme.`
      },
      {
        title: 'Drill Day',
        idx: 2, lvlData: 'gange',
        storyTemplate: `MIKKEL tegner cirkler på whiteboardet. Store cirkler, der hænger i luften som løfter.

»{n1} spillere,« siger han. »{n2} ekstra sessioner pr. mand. Det er forskellen på at tabe og vinde på mandag.«

Assistent DITTE holder blyanten klar. MIKKEL er god til at vente. DITTE er god til at skrive.`,
        questionTemplate: `{n1} spillere skal hver have {n2} ekstra sessioner. Hvor mange sessioner i alt?`,
        successMsgTemplate: `{answer} sessioner. DITTE booker banerne. MIKKEL tegner endnu en cirkel.`,
        storyBonus: `DITTE skrev SESSION 3 med to streger under. Den er altid den vigtigste.`
      },
      {
        title: 'Goal Stats',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} mål fra de sidste kampe. MIKKEL vil fordele dem ligeligt på {n2} hold i bogen — for at se hvem der scorede, og hvem der bare stod tæt på.

»Kun med præcise tal kender man sig selv,« siger han. Den slags sætning man ikke kan modsige, og som MIKKEL siger mindst én gang om ugen.`,
        questionTemplate: `{n1} mål skal fordeles ligeligt på {n2} hold. Hvor mange mål pr. hold?`,
        successMsgTemplate: `{answer} mål pr. hold. Stat er ren. MIKKEL er tilfreds.`,
        storyBonus: `MIKKEL lagde pennen og kiggede på tallene længe. Derefter tog han en kopi med hjem.`
      },
      {
        title: 'Perfect Tackles',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Analysecoach TORBEN har set optagelserne tre gange. Ikke fordi han er i tvivl — men fordi nogle ting fortjener tre gennemsyn.

{n1} tackles fra sidste kampe. {frac} af dem var perfekte: timing, vinkel og evnen til at tage bolden uden at ramme manden.

»Kun perfekte tackles bygger vi taktikken på. Jeg vil vide det eksakte antal.«`,
        questionTemplate: `Der var {n1} tackles. {frac} af dem var perfekte. Hvor mange perfekte tackles er det?`,
        successMsgTemplate: `{answer} perfekte. TORBEN skriver dem i taktikbogen med to streger under.`,
        storyBonus: `TORBEN spillede tacklen fra det 13. minut igen. Den var noget særligt. Han vidste det straks.`
      },
      {
        title: 'Heatmap',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `GPS-uret på FREJs arm fanger alt: skridt, fart, position — og de {f1} af kampen han brugte i forreste angrebsposition, klar til at modtage.

Og de {f2} han brugte midt på banen, lavt og roligt — som én der ved, kampe afgøres i de sekunder ingen kigger.

TORBEN samler tallene. »Hans samlede active share?«`,
        questionTemplate: `FREJ var {f1} af kampen i angreb og {f2} på midtbanen. Hvor stor en del af kampen i alt?`,
        successMsgTemplate: `{answer} aktiv. TORBEN nikker. »Han bærer finalen.«`,
        storyBonus: `GPS-uret registrerede, at FREJ stoppede et halvt sekund før hans bedste afleveringer. Det er hemmeligheden.`
      },
      {
        title: 'Keeper Ritual',
        idx: 6, lvlData: 'omk',
        storyTemplate: `OSCAR varmer op på samme måde hver gang: én runde rundt om straffesparksfeltet. Hverken mere eller mindre. Ikke overtro, siger han. Matematik.

Feltet er {n1} × {n2} m. OSCAR står i hjørnet og kigger ud over græsset. Regner distancen. Trækker vejret. Løber.`,
        questionTemplate: `Feltet er {n1} m langt og {n2} m bredt. Hvad er omkredsen?`,
        successMsgTemplate: `{answer} m. OSCAR løber sin runde. Han er klar.`,
        storyBonus: `OSCAR kom tilbage med det blik, der kun betyder ét: nu er jeg klar.`
      },
      {
        title: 'New Training Pitch',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Kommunens papir ligger på direktør HANSENs bord. Ser kedeligt ud — betyder at FCK får lov at bygge noget nyt.

Den nye bane: {n1} × {n2} m. HANSEN skal skrive arealet i rubrikken, før ansøgningen kan sendes.

Han holder pennen. Venter på tallet.`,
        questionTemplate: `Banen er {n1} m lang og {n2} m bred. Hvad er arealet?`,
        successMsgTemplate: `{answer} m². HANSEN udfylder rubrikken. FCK får sin bane.`,
        storyBonus: `HANSEN underskrev og foldede ansøgningen. Det er en ny bane. Det er et nyt kapitel.`
      },
      {
        title: 'Top Scorer',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `LUCAS scorer mål som andre spiser morgenmad — naturligt og gerne tidligt.

{n1} kampe i sæsonens første halvdel, {n2} mål pr. kamp i snit. Plus {n3} straffespark sat ind med den slags ro, der gør tilskuerne tavse — ikke kede, men fordi de ikke kan tro det.

Journalisten vil have totalen. Nu.`,
        questionTemplate: `{n1} kampe med {n2} mål pr. kamp + {n3} ekstra. Hvor mange mål i alt?`,
        successMsgTemplate: `{answer} mål. Historisk sæson. Journalisten glemmer sin deadline.`,
        storyBonus: `Journalisten glemte sin deadline. Det sker kun, når historien er god nok til det.`
      },
      {
        title: 'Penalty Shootout',
        idx: 9, lvlData: 'finale',
        storyTemplate: `2-2 efter forlænget tid. Straffespark.

Den slags stilling, der siger: intet er afgjort. Alt er muligt. Bedst og værst på samme tid.

{frac} af FCKs {n1} truppe-spillere er aktive og klar. De {n2} ungdomsspillere er rejst med og venter i kit. MIKKEL kigger på listen: »Hvem har jeg at vælge mellem?«`,
        questionTemplate: `Tag {frac} af {n1} truppe-spillere og læg {n2} unge til. Hvor mange mulige skytter er der?`,
        successMsgTemplate: `{answer} mulige skytter. LUCAS træder frem. Scorer. FCK vinder.`,
        storyBonus: `LUCAS stod på pletten og talte til elleve. Bare én gang. Stille men tydeligt. Så sparkede han.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  RONALDO  (Cristiano · JORGE · RAMOS)
  // ════════════════════════════════════════════
  ronaldo: {
    id: 'ronaldo', name: 'RONALDO', icon: '⚽',
    tagline: 'Legenden bygges ét mål ad gangen',
    endingTrophy: '🏅', endingTitle: 'GOAT MODE · UNLOCKED',
    endingStory: `Der er rekorder der brydes med jubel, fotografer og champagne. Og der er rekorder der brydes stille — alene på en træningsbane klokken seks om morgenen, og man ved det, men ingen andre gør endnu.

Cristiano løfter trofæet. Blitzene eksploderer. JORGE nikker med lukkede øjne — som én der vidste det hele tiden.

Hvert tal her var rigtigt. Hvert mål var sandt. Rekorden tilhører nu dig.`,
    collectibles: [
      { name: 'CR7 Morning Schedule',  icon: '📋', desc: 'Klokken 6.23. Den første tæller.' },
      { name: 'JORGE Notebook',        icon: '📓', desc: 'Bundlinjen er tom — den venter.' },
      { name: 'Touch Record',          icon: '⚽', desc: 'Den 108. er altid den bedste.' },
      { name: 'UCL Trophy',            icon: '🏆', desc: 'Pakket med mest omhu.' },
      { name: 'Header Record',         icon: '🏅', desc: 'Tredive meters løb. Ingen filmede.' },
      { name: '"Komplet" Stamp',       icon: '✅', desc: 'RAMOS sagde det én gang.' },
      { name: 'Private Pitch Key',     icon: '🔑', desc: 'Hegnet kom op. Han var allerede på banen.' },
      { name: 'Turf Certificate',      icon: '📜', desc: 'Leveret præcis til tiden.' },
      { name: 'UCL Record Plaque',     icon: '🌟', desc: 'Den sidst fundne vejer tungest.' },
      { name: 'Captain Armband',       icon: '💛', desc: 'Han var allerede der.' }
    ],
    chapters: [
      {
        title: 'Dawn Drill',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Cristiano er på banen tidligt om morgenen. Ikke fordi nogen bad ham. Fordi det er det eneste tidspunkt, hvor det er stille nok til at arbejde.

I går: {n1} mål i venstre halvdel, {n2} i højre. Hele banen. Systematisk. Præcist.

Træner RAMOS noterer alt. Han vil have totalen før Cristiano siger ét ord.`,
        questionTemplate: `{n1} mål i venstre + {n2} mål i højre halvdel. Hvor mange mål i alt?`,
        successMsgTemplate: `{answer} mål. Cristiano smiler. New PB. Igen.`,
        storyBonus: `Det første mål faldt tidligt. RAMOS noterede tidspunktet. Det er altid det første der tæller.`
      },
      {
        title: 'Program Check',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Ugens program: {n1} tekniske drills. Hver designet til at gøre én ting lidt bedre end i går.

{n2} er færdige. Fysioterapeut JORGE sidder med notesbogen og kigger ud på banen, hvor Cristiano stadig løber. Ikke fordi han skal. Fordi han er den slags.

»Hvad er der tilbage inden rest day?«`,
        questionTemplate: `Der var {n1} øvelser i programmet. {n2} er gennemført. Hvor mange er tilbage?`,
        successMsgTemplate: `{answer} drills. JORGE justerer skemaet. Cristiano løber videre.`,
        storyBonus: `JORGE lod nederste linje stå tom — til de øvelser der endnu ikke er opfundet.`
      },
      {
        title: 'Touch Drill',
        idx: 2, lvlData: 'gange',
        storyTemplate: `RAMOS har aldrig mødt en, der kunne gentage samme spark {n2} gange og have det bedre med sig selv til sidst end ved start.

Cristiano kører {n1} sessions. {n2} touches pr. session — perfekte, kontrollerede, som var bolden en del af kroppen.

»Total til statistikbogen,« siger RAMOS. »For eftertiden.«`,
        questionTemplate: `{n1} sessions med {n2} touches i hver. Hvor mange touches i alt?`,
        successMsgTemplate: `{answer} touches. RAMOS skriver det ned: »Nok til en legend.«`,
        storyBonus: `Den 108. touch var den bedste. Det er altid den seneste der er bedst. Det er ikke tilfældigt.`
      },
      {
        title: 'Trophy Logistics',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} trofæer skal fra depot til udstilling. PEDRO troede de var lette — de er mange, ikke tunge.

{n2} sikrede transportkasser klar. PEDRO åbner aldrig en kasse, før han ved præcis hvad der skal i den.

»Samme antal i hver. Ingen favoritter.«`,
        questionTemplate: `{n1} trofæer skal fordeles ligeligt i {n2} kasser. Hvor mange trofæer pr. kasse?`,
        successMsgTemplate: `{answer} pr. kasse. PEDRO pakker dem i bomuld.`,
        storyBonus: `PEDRO lagde ekstra bomuld under det mest ridsede trofæ. Ikke det sværeste. Det med længst rejse.`
      },
      {
        title: 'Header Goals',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `»Det er ikke held,« siger Cristiano til RAMOS en aften. »Det er timing. Det er matematik.«

Han har scoret {n1} mål den sæson. {frac} var headers fra corners — den teknik han har øvet i tusindvis af timer, den han er mest stolt af.

RAMOS vil vide det eksakte tal.`,
        questionTemplate: `Cristiano scorede {n1} mål. {frac} af dem var headers. Hvor mange headers er det?`,
        successMsgTemplate: `{answer} headers. »Timing og matematik,« siger Cristiano. Han har ret.`,
        storyBonus: `Det var ikke headeren der var imponerende. Det var de tredive meters løb før — som ingen filmede.`
      },
      {
        title: 'Two-Footed',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Analytikerne har studeret hvert eneste mål. Igen og igen. Fra alle vinkler.

{f1} af dem scoret med venstre. {f2} med højre. RAMOS kigger på tallene og siger ingenting længe.

Til sidst: »Han er komplet.« Det er hans største ros. Den eneste ros han giver.`,
        questionTemplate: `{f1} af målene er scoret med venstre fod og {f2} med højre. Hvor stor en del er det i alt?`,
        successMsgTemplate: `{answer} af målene. »Komplet,« gentager RAMOS. Én gang er nok.`,
        storyBonus: `RAMOS lagde pennen efter ordet »komplet«. Den sætning har han sparet på i mange år.`
      },
      {
        title: 'Private Pitch',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Banen bag huset er {n1} m lang og {n2} m bred. Det er der, Cristiano øver, når ingen kigger — og ingen kigger nogensinde, for det er privat.

Men hegnet skal op. Hele vejen rundt. Leverandøren vil have totallængden før han sender tilbud.

»Hele vejen rundt. Intet hul.«`,
        questionTemplate: `Banen er {n1} m lang og {n2} m bred. Hvad er omkredsen?`,
        successMsgTemplate: `{answer} m hegn. Banen er sealed. Nu er den kun hans.`,
        storyBonus: `Hegnet kom op på en søndag. Cristiano var ikke hjemme. Han var på banen. Den anden bane.`
      },
      {
        title: 'Turf Order',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Kunstgræsleverandøren sælger kun pr. m². Det er det eneste rigtige, siger han — præcision er alt.

Banen: {n1} × {n2} m. JORGE venter på svaret før han ringer og bestiller. Det her gættes ikke.`,
        questionTemplate: `Banen er {n1} m lang og {n2} m bred. Hvad er arealet?`,
        successMsgTemplate: `{answer} m². Tæppet bestilt. Leveret næste morgen.`,
        storyBonus: `Tæppet ankom til tiden. Det er præcis det, Cristiano forventer. Af alle — og sig selv først.`
      },
      {
        title: 'UCL Numbers',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `UEFA-journalisten har en liste med rekorder. De fleste linjer er udfyldte. Men øverste linje — Cristianos samlede Champions League-mål — er tom.

{n1} sæsoner × {n2} mål pr. sæson + {n3} ekstra fra kvalifikationer, som folk glemmer at tælle med.

»Dem tæller vi,« siger journalisten. »Alle mål tæller.«`,
        questionTemplate: `{n1} sæsoner à {n2} mål + {n3} ekstra. Hvor mange UCL-mål i alt?`,
        successMsgTemplate: `{answer} UCL-mål. Journalisten skriver det ind. Rekorden er official.`,
        storyBonus: `Det seneste tal var det største. Det senest fundne vejer altid tungest.`
      },
      {
        title: 'The Final',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Finalen som alt har ledt op til.

{frac} af de {n1} udvalgte spillere er klar og opvarmede. De {n2} reserver på sidelinjen er stille, fokuserede, klar.

RAMOS kigger på Cristiano. Cristiano kigger på banen. »Hvad er vores samlede styrke?«`,
        questionTemplate: `Tag {frac} af {n1} udvalgte spillere og læg {n2} reserver til. Hvor mange er klar?`,
        successMsgTemplate: `{answer} klar. Cristiano træder frem. Resten siger sig selv.`,
        storyBonus: `RAMOS kiggede på Cristiano før finalen. Cristiano kiggede ikke tilbage. Han var allerede der.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  BRAWL STARS  (Leon · Shelly · Spike · Mortis · Crow)
  // ════════════════════════════════════════════
  brawlstars: {
    id: 'brawlstars', name: 'BRAWL STARS', icon: '🎮',
    tagline: 'Gems, chaos og det vildeste squad i spillet',
    endingTrophy: '🏆', endingTitle: 'WORLD CHAMPIONS',
    endingStory: `Leon skreg: »JEG SAGDE DET!« Ingen ved præcis hvad han sagde — men alle ved han sagde det.

Shelly grinte og græd samtidig, fordi det godt kan lade sig gøre. Spike tællede sine resterende power-ups, fordi han ikke vidste hvad han ellers skulle gøre med hænderne. Mortis holdt en tale ingen lyttede til, men alle trængte til.

Og Crow — Crow der aldrig viste noget — stod midt i arenaen med konfetti i håret. Smilede ét sekund. Det var nok.`,
    collectibles: [
      { name: 'Crow Score Log',         icon: '🖤', desc: 'Hans version af et smil.' },
      { name: 'Spike Gem Vault',        icon: '🌵', desc: 'Tjekket to gange ekstra.' },
      { name: 'Mortis Cane Pin',        icon: '💀', desc: 'Angreb nr. 248.' },
      { name: 'Fair Loot Badge',        icon: '⚖️', desc: 'Ingen favoritter.' },
      { name: 'Leon Star Power',        icon: '👻', desc: 'Den bedste — ikke den stærkeste.' },
      { name: 'Shelly Match Report',    icon: '📊', desc: 'Crow læser den mest.' },
      { name: 'Cactus Defense Plan',    icon: '🌿', desc: 'Sydøst-hjørnet altid først.' },
      { name: 'Arena Cornerstone',      icon: '🪨', desc: 'Shelly lagde den første.' },
      { name: 'World Final Pass',       icon: '🎟️', desc: 'Udsolgt.' },
      { name: 'Champion Trophy',        icon: '🏆', desc: '»Jeg sagde det!« – Leon' }
    ],
    chapters: [
      {
        title: 'Trophy Hunt',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Leon viser aldrig sin score — han viser den ved at vinde.

Denne sæson: {n1} trofæer med usynlige moves og perfekt timing. Shelly har {n2} — vundet med Shotgun, god musik og den slags ro der er farligst.

Crow sidder øverst på leaderboardet og kigger ned. »Tilsammen? Tallet. Nu.«`,
        questionTemplate: `Leon har {n1} trofæer og Shelly har {n2}. Hvor mange trofæer i alt?`,
        successMsgTemplate: `{answer} trofæer. Crow nikker. New squad record.`,
        storyBonus: `Crow lod fingeren hvile over tastaturet ét sekund efter han indtastede tallet. Det er hans smil.`
      },
      {
        title: 'Spike Inventory',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Spike er præcis. Alle ved det. Han tæller. Han dobbelttjekker. Alligevel står han i Gem Grab og ved ikke hvad han har.

Han startede med {n1} gems. Brugte {n2} på at upgrade kaktusstorme — »nødvendige upgrades«. Crow tørt: »Nødvendige.«

»Hvad har du tilbage?«`,
        questionTemplate: `Spike havde {n1} gems og brugte {n2}. Hvor mange gems er der tilbage?`,
        successMsgTemplate: `{answer} gems. »Nok,« siger Spike. Crow tier. Det betyder ja.`,
        storyBonus: `Spike tjekkede sin vault to gange mere efter han sagde nok. Det er hans måde at slappe af.`
      },
      {
        title: 'Mortis Training',
        idx: 2, lvlData: 'gange',
        storyTemplate: `»Jeg er ready,« siger Mortis, da Crow foreslår ekstra træning.

»Du øver dig alligevel,« siger Crow.

Mortis kører {n1} træningsrunder med spadestokken. {n2} angreb pr. runde — det hurtige, drejende mørke-attack han har brugt år på. Han indrømmer aldrig at han elsker det.`,
        questionTemplate: `{n1} runder med {n2} angreb i hver. Hvor mange angreb i alt?`,
        successMsgTemplate: `{answer} angreb. Mortis lander i skyggen. »Not bad,« siger Crow.`,
        storyBonus: `Mortis nikkede til sig selv ved angreb 248. Det er det tætteste han kommer på at indrømme progress.`
      },
      {
        title: 'Loot Split',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} gems i kisten. Alle fem brawlers kiggede på dem samtidig. Et sekund af pinlig stilhed.

Crow rømmer sig. »{n2} brawlers. Splittet ligeligt. Det er loven.«

»Hvem laver den lov?« spørger Leon.

»Jeg,« siger Crow.`,
        questionTemplate: `{n1} gems skal deles ligeligt mellem {n2} brawlers. Hvor mange får hver brawler?`,
        successMsgTemplate: `{answer} gems hver. Leon synes ikke det er nok. Det er det.`,
        storyBonus: `Leon holdt om sine gems og sagde ingenting. Det er Leons måde at sige tak. Alle ved det.`
      },
      {
        title: 'Leons Star Drops',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Leon har en Star Drop-vault, som ingen må røre. Slet ikke Crow.

{n1} power-ups derinde. Men {frac} er aktive — resten låst, grå, useless til næste Brawl. Leon vil vide præcist hvad han kan bruge. Det er det eneste tidspunkt han er helt seriøs.`,
        questionTemplate: `Leon har {n1} power-ups. {frac} af dem er aktive. Hvor mange er aktive?`,
        successMsgTemplate: `{answer} aktive. Leon forsvinder. Literally.`,
        storyBonus: `Den power-up Leon valgte var ikke den stærkeste. Det var den han er bedst med. Der er forskel.`
      },
      {
        title: 'Shelly Stats',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Efter hver kamp pulls Crow stats. Hans hobby. Han ved det er underligt.

Shellys seneste: {f1} af tiden på Shotgun-attack — direkte, præcise, lidt over the top. {f2} på Super, som hun altid timer perfekt.

»Total active share,« siger Crow og åbner sin notesbog.`,
        questionTemplate: `Shelly brugte {f1} af kampen på Shotgun og {f2} på sin Super. Hvor stor en del af kampen i alt?`,
        successMsgTemplate: `{answer} af kampen. »MVP,« siger Crow. Shelly hørte det. Sagde ikke noget videre.`,
        storyBonus: `Crow gemte Shellys stats i sin private mappe. Han har stats på alle. Hendes læser han mest.`
      },
      {
        title: 'Cactus Wall',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Spike er i gang før nogen beder ham. Hans problem. Eller styrke. Afhænger af hvem du spørger.

Den nye arena: {n1} × {n2} m. Hele kanten skal have kaktus — en grøn, pigget defense mod alt der prøver at komme ind.

»Hvor mange meter?« spørger Crow.
»Alle af dem,« siger Spike.`,
        questionTemplate: `Arenaen er {n1} m lang og {n2} m bred. Hvad er omkredsen?`,
        successMsgTemplate: `{answer} m kaktus. Arenaen er låst. Spike er tilfreds.`,
        storyBonus: `Spike satte den første kaktus i sydøst-hjørnet. Det er altid det vigtigste hjørne.`
      },
      {
        title: 'Arena Build',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Squad bygger en ny arena. Crow har skitsen. Leon har en mening. Mortis har en mening om Leons mening. Shelly siger ingenting og er den eneste der faktisk arbejder.

Gulvarealet: {n1} × {n2} m. Leverandøren sælger kun pr. m² — og skal bruge det eksakte tal inden næste morgen.`,
        questionTemplate: `Gulvet er {n1} m langt og {n2} m bredt. Hvad er arealet?`,
        successMsgTemplate: `{answer} m². Stenene bestilles. Shelly lægger den første.`,
        storyBonus: `Shelly lagde den første sten. Ingen sagde noget. Nogen burde have sagt tak. Det er nok at de ved det.`
      },
      {
        title: 'World Final Arena',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `World Finals. Arenaen: {n1} sektioner × {n2} sæder + {n3} standing til dem der er for hyped til at sidde — og det er de fleste.

Arrangørens største frygt: én billet for meget. Crow tæller. Langsomt. Præcist.`,
        questionTemplate: `{n1} sektioner med {n2} sæder + {n3} ståpladser. Hvor mange pladser i alt?`,
        successMsgTemplate: `{answer} pladser. Sold out. Crow håbede på det.`,
        storyBonus: `Crow dobbelt-tjekkede kapaciteten før systemet lukkede. Man tjekker, når noget er for vigtigt til at gætte.`
      },
      {
        title: 'Grand Final',
        idx: 9, lvlData: 'finale',
        storyTemplate: `World Final. Ti minutter.

Crow står alene i gangen bag arenaen og tæller. Ikke for nogen. Bare fordi tal beroliger ham, og han er — han indrømmer det aldrig — nervøs.

{frac} af de {n1} qualificerede brawlers er mødt op. De {n2} nye unlockede brawlers er der også. »Hvad er vores samlede styrke?« spørger han sig selv.`,
        questionTemplate: `Tag {frac} af {n1} brawlers og læg {n2} nye til. Hvad er den samlede styrke?`,
        successMsgTemplate: `{answer} brawlers. Crow trækker vejret. Går ind. Vinder.`,
        storyBonus: `Crow gik ind i arenaen og sagde ingenting. Det er det, man gør, når ord ikke er store nok.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  ANIME  (Naruto · Goku · Luffy · Sasuke · Kakashi)
  // ════════════════════════════════════════════
  anime: {
    id: 'anime', name: 'ANIME', icon: '🎌',
    tagline: 'Tre legender. Ét quest. Ubegrænset chakra.',
    endingTrophy: '⭐', endingTitle: 'TRAINING ARC · COMPLETE',
    endingStory: `»Vi var ikke gode nok,« siger Naruto.

»Vi var præcis gode nok,« siger Goku.

»Det er det samme,« siger Luffy og spiser tre riceballs.

Kakashi står et stykke væk og kigger på dem. Han siger intet. Det behøver han ikke. Du clearede alle ti levels — fra første chakra til final hit. Heltene overlevede fordi tallene passede. Det er hemmeligheden bag enhver kamp.`,
    collectibles: [
      { name: 'Portal Key',              icon: '🚪', desc: '»GODT!« – Luffys fulde analyse.' },
      { name: 'Rayleighs Schedule',      icon: '📜', desc: 'Luffy regnede igen. Rigtigt.' },
      { name: 'Kakashis Star',           icon: '⭐', desc: 'Den eneste han har givet.' },
      { name: 'Irukas Tech Sheet',       icon: '📋', desc: 'Alle med. Ingen glemt.' },
      { name: 'Super Saiyan Cert',       icon: '⚡', desc: 'Gohan gemte øjeblikket.' },
      { name: 'Analysis Vest',           icon: '👘', desc: 'Kakashi beholder den.' },
      { name: 'Konoha Patrol Order',     icon: '🌿', desc: 'Tilbage præcis til tid.' },
      { name: 'Hokage Signature',        icon: '📜', desc: 'Noget nyt begynder.' },
      { name: 'Bench Ticket',            icon: '🎫', desc: 'Bænken ved siden af Sasuke.' },
      { name: '"Enough" Medal',          icon: '🎖️', desc: 'De sværeste ord at sige.' }
    ],
    chapters: [
      {
        title: 'Three Heroes Meet',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Naruto ankommer først. Goku kommer flyvende og lander lidt for hårdt. Luffy falder ned fra et træ og siger »Godt møde!« selvom der ikke var aftalt noget møde.

Naruto har {n1} chakra-enheder fra en dag med Shadow Clone-træning. Goku har {n2} ki-enheder fra gravity chamberet. Den hemmelige port åbner kun for dem tilsammen.

»Vi har brug for hinanden,« siger Kakashi fra ingenting. »Og vi har brug for det totale tal.«`,
        questionTemplate: `Naruto har {n1} energienheder og Goku har {n2}. Hvor mange enheder i alt?`,
        successMsgTemplate: `{answer} units. Porten brager op. Luffy er allerede gået igennem.`,
        storyBonus: `Luffy strakte armene ud på den anden side. »GODT!« råbte han. Hans fulde analyse.`
      },
      {
        title: 'Luffy Endurance',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Luffy tæller ikke. Det er Zoros problem. Sanjis problem. Alle andres problem.

Men Rayleigh har lagt et program: {n1} battle rounds. »Dem laver du alle. Eller du er ikke ready.«

{n2} runder er done. Luffy kigger på tallet og regner hurtigt — for én gangs skyld.`,
        questionTemplate: `Programmet har {n1} kamprunder. {n2} er gennemført. Hvor mange runder er tilbage?`,
        successMsgTemplate: `{answer} rounds. Luffy ruller ærmerne. »Det er ingenting!« Det er det ikke.`,
        storyBonus: `Luffy regnede forkert første gang. Sagde det ikke til nogen. Regnede igen. Fik rigtigt. Nok.`
      },
      {
        title: 'Sasuke Reps',
        idx: 2, lvlData: 'gange',
        storyTemplate: `Sasuke siger ikke meget. Faktum.

Han øver {n1} forskellige jutsus. For at kroppen husker dem præcist — ikke godt nok, præcist — gentager han hver {n2} gange i træk. Uden pause. Uden klagen.

Kakashi kigger på ham fra distance og noterer det. Ikke fordi han har brug for det. Fordi det fortjener det.`,
        questionTemplate: `{n1} jutsus med {n2} gentagelser i hver. Hvor mange gentagelser i alt?`,
        successMsgTemplate: `{answer} reps. Sasukes krop husker hvert step.`,
        storyBonus: `Kakashi satte en stjerne ved Sasukes navn. Det er eneste gang han nogensinde gør det.`
      },
      {
        title: 'Ninja Academy',
        idx: 3, lvlData: 'div',
        storyTemplate: `Iruka-sensei er den slags lærer, der aldrig giver op på nogen. Hans største styrke. Grunden til at han sjældent sover godt.

{n1} ninja-teknikker skal undervises denne måned. {n2} hold. Iruka vil give dem præcis det samme — ikke mere til de stærke, ikke mindre til dem der kæmper.

»Fair er fair. Det er det første en ninja lærer. Det er det vigtigste.«`,
        questionTemplate: `{n1} teknikker skal fordeles ligeligt på {n2} hold. Hvor mange teknikker pr. hold?`,
        successMsgTemplate: `{answer} pr. hold. Iruka nikker. Nu kan han sove.`,
        storyBonus: `Iruka-sensei sov godt den nat. Det sker, når tallene passer og ingen er glemt.`
      },
      {
        title: 'Goku Transformation',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Goku har {n1} ki-enheder. Lyder som meget. Er meget.

Men Super Saiyan Blue kræver {frac} — præcist den mængde kroppen lige akkurat kan holde. Resten gemmes til Ultra Instinct: den form ingen planlægger, men som af og til er eneste vej.

Goku lukker øjnene. »Regn det for mig,« siger han til Gohan.`,
        questionTemplate: `Goku har {n1} ki-enheder. Super Saiyan Blue kræver {frac} af dem. Hvor meget ki bruges?`,
        successMsgTemplate: `{answer} ki. Lyset eksploderer. Super Saiyan Blue · activated.`,
        storyBonus: `Gohan kiggede på Goku og sagde ingenting. Nogle øjeblikke registrerer man bare og gemmer.`
      },
      {
        title: 'Battle Pattern',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Kakashi analyserer altid. Det adskiller en god ninja fra en overlevelses-strateg.

Narutos seneste kamp: {f1} på Shadow Clone Jutsu — mange kopier, meget kaos, præcis som Naruto. {f2} på Rasengan — hurtigt, præcist, som Naruto aldrig ser ud til at turde, men altid gør.

»Total active share. Det fortæller mig noget vigtigt.«`,
        questionTemplate: `Naruto brugte {f1} af kampen på Shadow Clone og {f2} på Rasengan. Hvor stor en del af kampen i alt?`,
        successMsgTemplate: `{answer} af kampen. »Han giver alt,« siger Kakashi. Det var alt der skulle siges.`,
        storyBonus: `Kakashi foldede analysen og lagde den i sin vest. Den beholder han. Det er det vigtigste.`
      },
      {
        title: 'Konoha Border',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Kakashi patruljerer Konohas yderzone: {n1} × {n2} m. Én runde pr. shift — hverken mere eller mindre. Ikke distance — disciplin.

Han beregner distancen alene i hjørnet med det rolige blik. Så løber han.`,
        questionTemplate: `Zonen er {n1} m lang og {n2} m bred. Hvad er omkredsen?`,
        successMsgTemplate: `{answer} m. Kakashi er tilbage om syv minutter. Præcis.`,
        storyBonus: `Kakashi kom tilbage præcis til forventet tid. Det er det, der adskiller en ninja fra alle andre.`
      },
      {
        title: 'New Academy',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Hokage underskriver ikke uden de eksakte tal. Iruka ved det. Han har vidst det i ti år.

Den nye træningszone: {n1} × {n2} m. Iruka skal indberette arealet før ansøgningen kan sendes.

»Arealet,« siger han til sig selv og tager pennen.`,
        questionTemplate: `Området er {n1} m langt og {n2} m bredt. Hvad er arealet?`,
        successMsgTemplate: `{answer} m². Hokage underskriver. Det nye akademi kan bygges.`,
        storyBonus: `Hokage underskrev og kiggede ud ad vinduet længe bagefter. Det gør man, når noget nyt begynder.`
      },
      {
        title: 'Chunin Exam',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `Chunin-eksamenen er årets vigtigste event. Naruto kom for sent. Luffy kom til den forkerte by. Goku kom til tiden men satte sig på den forkerte bænk.

{n1} hold × {n2} deltagere + {n3} jonin-mestre som specialdommere — alle på tid, fordi dommere er sådan.

Arrangøren skal bruge totalen.`,
        questionTemplate: `{n1} hold med {n2} deltagere + {n3} mestre. Hvor mange er der i alt?`,
        successMsgTemplate: `{answer} mennesker. Turneringen kan starte. Naruto er stadig forsinket.`,
        storyBonus: `Naruto satte sig på den forkerte bænk. Det var bænken ved siden af Sasuke. Den rigtige.`
      },
      {
        title: 'Final Showdown',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Fjenden er ikke set i hundrede år. Normalt tegn på at man ikke bør møde den.

{frac} af de {n1} udvalgte ninjaer er mødt op og klar. De {n2} jonin-mestre er der alle — de er den slags der altid er der, selvom det er håbløst.

Kakashi tæller stille. »Vores samlede styrke. Før vi beslutter noget.«`,
        questionTemplate: `Tag {frac} af {n1} ninjaer og læg {n2} mestre til. Hvor mange fightere?`,
        successMsgTemplate: `{answer} fightere. Kakashi nikker. »Nok.« Det er hans bedste ord.`,
        storyBonus: `Kakashi sagde »nok« og mente det. De sværeste ord at sige. De vigtigste at høre.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  JJK — JUJUTSU KAISEN  (Yuji · Megumi · Nobara · Gojo)
  // ════════════════════════════════════════════
  jjk: {
    id: 'jjk', name: 'JJK', icon: '🧙',
    tagline: 'En mission ingen burde klare. De klarer den.',
    endingTrophy: '💜', endingTitle: 'SUKUNA · DEFEATED',
    endingStory: `Sukuna faldt.

Yuji landede på brostenene og slog knæene. Megumi kom løbende, sagde ingenting, rakte hånden ud. Nobara sagde: »Jeg vidste det.« Det var hendes måde at sige: jeg var bange hele vejen.

Gojo stod på taget og kiggede ned. Han smilede bag sit blindfold — men denne gang anderledes. Lignede stolthed. »Tallene passede,« sagde han ud i vinden. »Det gør de altid, når man tror på dem.«`,
    collectibles: [
      { name: 'Sealed Door Mark',    icon: '🔮', desc: 'Den åndede. Ikke muligt.' },
      { name: 'Nobara Empty Box',    icon: '📦', desc: 'Nok. Det er venskab.' },
      { name: 'Nanami Coffee Cup',   icon: '☕', desc: 'Kaffe i et rystende rum.' },
      { name: 'YAGA Whiteboard',     icon: '📋', desc: 'Han lod diagrammet stå.' },
      { name: 'Divergent Fist Mark', icon: '👊', desc: 'Hold cursed energy inde. Sværeste øvelse.' },
      { name: 'Nanami Report',       icon: '📄', desc: 'Læser den aldrig igen. Gemmer den.' },
      { name: 'Barrier Certificate', icon: '🛡️', desc: 'Lød som ingenting. Sad rigtigt.' },
      { name: 'YAGA Notebook',       icon: '📓', desc: 'Ét minut for sent = warning.' },
      { name: 'New Sorcerer Badge',  icon: '✨', desc: 'Mange nok til at bære ansvar.' },
      { name: 'Sukuna Broken Seal',  icon: '💜', desc: 'Gojo kom ned. Sagde intet.' }
    ],
    chapters: [
      {
        title: 'Sealed Door',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Yuji finder den forseglede dør sent om natten. Han ringer ikke til Gojo — ikke fordi han ikke vil, men fordi Gojo allerede ved det. Han ved altid.

Yuji har {n1} cursed energy fra dagen. Megumi dukker op kort efter med {n2} fra Shikigami-træning. Døren summer lavt, som var den i tvivl.

»Tilsammen åbner den,« siger Megumi. »Vi skal bare finde det rigtige tal.«`,
        questionTemplate: `Yuji har {n1} cursed energy og Megumi har {n2}. Hvor mange enheder i alt?`,
        successMsgTemplate: `{answer} cursed energy. Døren vibrerer. Åbner sig.`,
        storyBonus: `Døren lød som den åndede da den åbnede. Ikke muligt. Det skete alligevel.`
      },
      {
        title: 'Nobara Counts',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Nobara siger altid, hun ikke er nervøs. Løgn. Men den slags løgn, der hjælper én igennem.

Hun startede med {n1} cursed nails. Burde have været nok. Men denne cursed spirit er anderledes — sticky og creepy — og krævede {n2} søm bare for at blive bundet midlertidigt.

»Hvad har du tilbage?« hvisker Megumi. Nobara kigger ned. Tæller.`,
        questionTemplate: `Nobara havde {n1} cursed nails og brugte {n2}. Hvor mange er der tilbage?`,
        successMsgTemplate: `{answer} søm. »Nok,« siger Nobara. Det var ikke meget — men nok.`,
        storyBonus: `Nobara kiggede på sin tomme kasse ét sekund for længe. Megumi vendte blikket væk. Det er venskab.`
      },
      {
        title: 'Gojo Domain',
        idx: 2, lvlData: 'gange',
        storyTemplate: `Gojo Satoru er verdens stærkeste sorcerer. Han siger det ikke. Det er bare fakta.

Han øver Infinite Void {n1} gange i træk. Hver aktivering: {n2} cursed energy-enheder. Nanami sidder i hjørnet med kaffe og notesbog — nogen skal holde styr.

»Det totale energy-forbrug,« siger Nanami uden at kigge op. »Det er vigtigt. Selvom det ikke føles sådan.«`,
        questionTemplate: `{n1} aktiveringer med {n2} cursed energy hver. Hvor mange enheder i alt?`,
        successMsgTemplate: `{answer} units. Gojos domain er nu uovervindeligt.`,
        storyBonus: `Nanami drak sin kaffe langsomt. Han er den eneste, der kan drikke kaffe i et rystende rum.`
      },
      {
        title: 'Mission Split',
        idx: 3, lvlData: 'div',
        storyTemplate: `YAGA smiler ikke ofte. Han smiler heller ikke sjældent. Hans ansigt er svært at læse.

{n1} missioner af varierende farlighed. {n2} hold. YAGA står ved whiteboardet og tegner linjer.

»Ingen hold skal føle sig som favoritter. Ingen skal føle sig snydt. Fordel ligeligt.«`,
        questionTemplate: `{n1} missioner skal fordeles ligeligt på {n2} hold. Hvor mange missioner pr. hold?`,
        successMsgTemplate: `{answer} pr. hold. YAGA godkender og sletter sine linjer.`,
        storyBonus: `YAGA lod diagrammet stå. Det så rigtigt ud.`
      },
      {
        title: 'Divergent Fist',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Black Flash er det angreb ingen kan planlægge. Det sker, når timing er præcis — og kroppen kan bære det.

Yuji har {n1} cursed energy. {frac} skal bruges til Divergent Fist — angrebet der vender cursed energy mod cursed spirits. Resten holdes i reserve til det øjeblik ingen kan forudsige.

»Det her tænker du dig ikke til,« siger Gojo. »Du regner det ud. Så gør du det bare.«`,
        questionTemplate: `Yuji har {n1} cursed energy. Divergent Fist kræver {frac} af det. Hvor meget skal bruges?`,
        successMsgTemplate: `{answer} units. Divergent Fist · activated. Teknikken sidder.`,
        storyBonus: `Yuji holdt sin energi inde. Det er den sværeste øvelse. Den vigtigste.`
      },
      {
        title: 'Megumi Stats',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Nanami analyserer altid efter en mission. Hans måde at sørge for at næste mission bliver bedre.

Megumis seneste: {f1} på Shikigami-besværgelser, {f2} på direkte combat. Nanami lægger pennen og kigger på tallene længe.

»Det totale active share fortæller mig, hvornår du er farligst. Og hvornår du er sårbar.«`,
        questionTemplate: `Megumi brugte {f1} af kampen på Shikigami og {f2} på combat. Hvor stor en del af kampen i alt?`,
        successMsgTemplate: `{answer} af kampen. Nanami skriver det. Megumi er effektiv.`,
        storyBonus: `Nanami tog rapporten med hjem. Læser den aldrig. Gemmer den altid.`
      },
      {
        title: 'Barrier Setup',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Et sealed cursed domain er ikke bare et rum. Det er et løfte om at intet slipper ud.

Domænet: {n1} × {n2} m. Sorcererne skal sætte en barriere op rundt om hele yderkanten, før de træder ind. Nanami folder hænderne og bruger sin fakta-stemme:

»Barriere = omkreds. Beregn det før vi går videre.«`,
        questionTemplate: `Domænet er {n1} m langt og {n2} m bredt. Hvad er omkredsen?`,
        successMsgTemplate: `{answer} m barriere. Ingen cursed spirits slipper ud. Missionen kan starte.`,
        storyBonus: `Barrieren lød som ingenting. Tegnet på at den sidder rigtigt.`
      },
      {
        title: 'New District',
        idx: 7, lvlData: 'areal',
        storyTemplate: `YAGA møder aldrig op uden tallene. En af de ting Yuji lærte hurtigt — og en af de ting han prøver at huske.

Det nye sorcerer-distrikt: {n1} × {n2} m. YAGA tjekker notesbogen. Rubrikken er tom. Mødet er om en time.

Han er ikke i godt humør. Det er han sjældent. Der er altid en grund.`,
        questionTemplate: `Distriktet er {n1} m langt og {n2} m bredt. Hvad er arealet?`,
        successMsgTemplate: `{answer} m². YAGA udfylder rubrikken. Mødet kan begynde.`,
        storyBonus: `YAGA mødte præcis til tiden. Ikke et minut for tidligt. Det er hans version af en warning.`
      },
      {
        title: 'Sorcerer Promotion',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `Tokyo Jujutsu High er ikke et sted, man søger ind for et godt liv. Det er et sted, man havner, fordi man allerede er marked af cursed energy.

{n1} afdelinger × {n2} sorcerers + {n3} nye assistent-sorcerers, der lige har bestået første eksamen — med det blandede udtryk af lettelse og bekymring der altid følger.

YAGA kigger på tallene. »Total. Nu ser vi hvad vi har.«`,
        questionTemplate: `{n1} afdelinger med {n2} sorcerers + {n3} assistenter. Hvor mange i alt?`,
        successMsgTemplate: `{answer} sorcerers. »Nok,« siger YAGA. »Mere end nok.«`,
        storyBonus: `Den nyeste assistent kiggede på listen. Mange folk til at bære ansvaret. Nok.`
      },
      {
        title: 'Sukuna',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Øjeblikket alt har ledt op til.

Sukuna er ikke som andre cursed spirits. Han er ikke bange. Han venter — og det er det, der er skræmmende.

{frac} af de {n1} Grade-1 sorcerers er mødt. De {n2} nyuddannede står bag frontlinjen, fingre klar, vejrtrækning kontrolleret. Gojo tæller hurtigt. »Vores samlede styrke. Nu.«`,
        questionTemplate: `Tag {frac} af {n1} sorcerers og læg {n2} nyuddannede til. Hvor mange er klar?`,
        successMsgTemplate: `{answer} sorcerers klar. Gojo nikker. Sukuna møder sin match.`,
        storyBonus: `Gojo kom ned fra taget ti minutter senere. Han sagde intet om hvad han havde set.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  GEOGRAFI  (Explorer Sofia · ANDERS · CAMILLA)
  // ════════════════════════════════════════════
  geography: {
    id: 'geography', name: 'GEOGRAFI', icon: '🌍',
    tagline: 'Et halvt kort. Et mysterium. Én pige der ikke giver op.',
    endingTrophy: '🌐', endingTitle: 'EXPEDITION · HOME',
    endingStory: `Koordinaterne peger midt i søen. Sofia kigger ned i det stille, mørke vand — og forstår det ikke. Og forstår det så alt på én gang.

Mormors landsby. Sænket under dæmningen for 40 år siden. Det var ikke et skattekort. Det var en sti tegnet tilbage til et hjem, der ikke findes mere.

ANDERS lægger hånden på hendes skulder og siger ingenting. CAMILLA — embedsmanden der prøvede at stoppe dem hele vejen — siger til sidst: »Det er min families landsby også.« Det er det eneste hun siger. Det er nok.`,
    collectibles: [
      { name: 'Half Map',             icon: '🗺️', desc: 'Lande forstår sig via hinanden.' },
      { name: 'Mountain Trail Mark',  icon: '🏔️', desc: 'Første gang ANDERS sagde »vi«.' },
      { name: 'Province List',        icon: '🏙️', desc: 'Sidste koordinat var unknown.' },
      { name: 'CAMILLA Decree',       icon: '📜', desc: 'Hun kiggede ét sekund for længe.' },
      { name: 'Forest Map',           icon: '🌳', desc: 'Fodnoten sluttede midt i.' },
      { name: 'ANDERS Pointer',       icon: '📍', desc: '»Alle steder er forbundet.«' },
      { name: 'Border Map',           icon: '🗺️', desc: 'Han kendte kortet. Nu ved Sofia.' },
      { name: 'UNESCO Doc 1984',      icon: '📰', desc: 'Den eneste artikel. Nogensinde.' },
      { name: 'Road Network',         icon: '🛤️', desc: 'ANDERS vidste. Han ventede.' },
      { name: 'Expedition Badge',     icon: '🧭', desc: 'Kortet tæt mod hjertet.' }
    ],
    chapters: [
      {
        title: 'Map in the Attic',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Sofia finder halvdelen af et gammelt kort i sin mormors loft. Den anden halvdel er revet af og aldrig fundet. Kortet viser to lande, der støder op mod hinanden — og på bagsiden står der med blyant: »Lande kan ikke forstå sig selv uden at kende hinanden.«

Land 1: {n1} tusind indbyggere. Land 2: {n2} tusind. ANDERS siger hun ikke må tage kortet med i skole. Han mener det ikke.`,
        questionTemplate: `Land 1 har {n1} tusind indbyggere. Land 2 har {n2} tusind. Hvor mange tusind i alt?`,
        successMsgTemplate: `{answer} tusind. Sofia opdaterer notesbogen. Kortet begynder at give mening.`,
        storyBonus: `Sofia holdt kortet mod lyset. Bag tallene var en form — én hun ikke kunne placere.`
      },
      {
        title: 'Mountain Trail',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Kortet peger mod bjergene i syd. Der starter rejsen — og der ligger den manglende halvdel måske.

Fra start til bjergets fod: {n1} km. Sofia har allerede tilbagelagt {n2} på en sti, der burde have heddet »stien der snyder dig«.

ANDERS kigger op på toppen: »Hvor langt er der igen?« Han spørger altid det.`,
        questionTemplate: `Der er {n1} km til bjerget. Sofia har gået {n2}. Hvor mange km er der tilbage?`,
        successMsgTemplate: `{answer} km. Sofia sætter farten op. Bjerget venter.`,
        storyBonus: `Det var første gang, ANDERS sagde »vi« om et projekt. Sofia bemærkede det. Hun sagde det ikke.`
      },
      {
        title: 'Province Cities',
        idx: 2, lvlData: 'gange',
        storyTemplate: `Det store land på kortets venstre halvdel er splittet i {n1} provinser med gamle navne, de fleste svære at udtale. ANDERS har kortlagt, at hver provins har præcis {n2} byer — ikke cirka, præcis.

»For at tegne det rigtige kort skal man kende totalen,« siger han. Han kigger på Sofia. Sofia kigger på kortet. Ingen siger hvad de tænker.`,
        questionTemplate: `{n1} provinser med {n2} byer i hver. Hvor mange byer i alt?`,
        successMsgTemplate: `{answer} byer. ANDERS prikker dem ind. Kortet begynder at leve.`,
        storyBonus: `ANDERS prikkede alle bynavne ind og stoppede ved den sidste. Den lå på koordinater han ikke kendte.`
      },
      {
        title: 'CAMILLA Decree',
        idx: 3, lvlData: 'div',
        storyTemplate: `CAMILLA fra indenrigsministeriet vil ikke fortælle hvad hun søger. »Politisk krav,« siger hun. »{n1} kommuner fordeles ligeligt i {n2} regioner. Det er alt jeg kan sige.«

Hun kigger på Sofia på den måde voksne gør, når de prøver at regne ud hvad et barn ved. Sofia siger ingenting. Men noterer CAMILLAs navn.`,
        questionTemplate: `{n1} kommuner skal fordeles ligeligt på {n2} regioner. Hvor mange kommuner pr. region?`,
        successMsgTemplate: `{answer} pr. region. CAMILLA underskriver. Noget i blikket skifter.`,
        storyBonus: `CAMILLA kiggede på Sofia ét sekund for længe, før hun gik. Det er det, der sker, når man ved mere end man siger.`
      },
      {
        title: 'Protected Forest',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Landet har {n1} tusind km². {frac} er fredet skov — beskyttet for evigt, ifølge en fodnote. Fodnoten var revet halvt af. Kun de to ord stod tilbage: »for evigt«.

Sofia regner præcist hvad {frac} af {n1} tusind er. Mærker, at der er noget midt i det fredede område, som ikke kommer med på de nyeste kort.`,
        questionTemplate: `Landet er {n1} tusind km². {frac} af det er fredet skov. Hvor mange tusind km² er fredet?`,
        successMsgTemplate: `{answer} tusind km² fredet. Sofia markerer det. Cirkler et punkt midt i.`,
        storyBonus: `Fodnoten sluttede midt i en sætning. Nogen havde revet den af. Eller den var aldrig færdig.`
      },
      {
        title: 'Continent Share',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `»Hvad er det egentlig du leder efter?« spørger ANDERS en dag, da kortet ligger udbredt over hele skolebænken.

Sofia kigger op: »Noget der er forsvundet.«

ANDERS er stille et øjeblik. Så tager han pegestokken frem. »Europa dækker {f1} af jordens land. Asien {f2}.« Ikke et svar. Men et hint.`,
        questionTemplate: `Europa dækker {f1} af Jordens land og Asien dækker {f2}. Hvor stor en del er det i alt?`,
        successMsgTemplate: `{answer} af jorden. ANDERS nikker. »Du er tæt på. Meget tæt.«`,
        storyBonus: `»Alle steder er forbundet,« sagde ANDERS. Det lød som geografi. Det var noget andet.`
      },
      {
        title: 'Border Line',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Det lille land i kortets sydvest-hjørne er {n1} km langt og {n2} km bredt. En gammel embedsmand derfra ringer til CAMILLA tre gange om ugen — og stopper altid, når han hører Sofias stemme i baggrunden.

»Hvert kilometer grænse skal dækkes,« skulle han have sagt. Sofia regner grænselinjens længde og noterer: Han kender kortet.`,
        questionTemplate: `Landet er {n1} km langt og {n2} km bredt. Hvor lang er grænsen hele vejen rundt?`,
        successMsgTemplate: `{answer} km. Sofia har svaret. Mangler bare: hvad gemmer de?`,
        storyBonus: `Den gamle embedsmand lagde røret før Sofia sagde farvel. Det gør folk, når de er bange for at sige for meget.`
      },
      {
        title: 'Lost Park',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Sofia finder en gammel avisartikel om en nationalpark, planlagt på præcis de koordinater kortet peger mod. Parken blev aldrig til noget — men UNESCO's ansøgning ligger stadig i arkiverne.

Parken: {n1} × {n2} km. »UNESCO godkender ikke,« stod der, »uden det eksakte areal.«

»Det eksakte areal,« gentager Sofia. Det udtryk dukker op overalt.`,
        questionTemplate: `Parken er {n1} km lang og {n2} km bred. Hvad er arealet?`,
        successMsgTemplate: `{answer} km². Sofia finder ansøgningen og folder den ud. Det her var et sted en gang.`,
        storyBonus: `Artiklen var fra 1984. Den eneste artikel om stedet. Den eneste der nogensinde blev skrevet.`
      },
      {
        title: 'Road Network',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `Kortet viser mere end grænser. Det viser hvordan ting hænger sammen — veje, ruter, forbindelser. En hel verden i miniature.

Landet: {n1} store trafikknudepunkter × {n2} buslinjer fra hvert + {n3} ekspresruter på tværs.

»Det er som et netværk,« siger ANDERS stille. »Alle veje fører ét sted hen.« Han siger det til sig selv. Sofia hører det.`,
        questionTemplate: `{n1} knudepunkter med {n2} buslinjer + {n3} ekspresruter. Hvor mange ruter i alt?`,
        successMsgTemplate: `{answer} ruter. Alle peger mod det samme sted. Nu ved Sofia hvor.`,
        storyBonus: `ANDERS sagde ingenting om hvor han troede ruterne ledte hen. Han kendte svaret. Han ventede på Sofia fandt det.`
      },
      {
        title: 'Expedition Squad',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Koordinaterne er præcise. Det er det eneste Sofia er sikker på.

{frac} af de {n1} udvalgte geografer fra universitetet kommer med. De {n2} studerende fra ANDERS' klasse er også med — rygsække pakket, kort rullet, vejrtrækning rolig.

Sofia tæller stille. Siger ingenting om hvad hun tror de finder. Fordi hun ikke er sikker. Og fordi man ikke siger den slags, før man er der.`,
        questionTemplate: `Tag {frac} af {n1} geografer og læg {n2} studerende til. Hvor mange er på ekspeditionen?`,
        successMsgTemplate: `{answer} medlemmer. Holdet sætter af. Kortet fører dem frem.`,
        storyBonus: `Sofia lagde kortet i jakkelommen, tæt mod hjertet. Det bedste sted at bære noget man er bange for at miste.`
      }
    ]
  }

};

// ── SOUND ─────────────────────────────────────

let _audioCtx = null;

function _getCtx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return _audioCtx;
}

function playSound(type) {
  if (!state.soundEnabled) return;
  try {
    const ctx = _getCtx();
    const t   = ctx.currentTime;

    if (type === 'complete') {
      // Victory fanfare — five separate notes
      [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0.25, t + i * 0.12);
        g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.12 + 0.4);
        o.start(t + i * 0.12); o.stop(t + i * 0.12 + 0.5);
      });
      return;
    }

    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);

    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, t);
      osc.frequency.setValueAtTime(659.25, t + 0.10);
      osc.frequency.setValueAtTime(783.99, t + 0.20);
      gain.gain.setValueAtTime(0.28, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
      osc.start(t); osc.stop(t + 0.6);

    } else if (type === 'perfect') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, t);
      osc.frequency.setValueAtTime(783.99, t + 0.08);
      osc.frequency.setValueAtTime(1046.5, t + 0.16);
      osc.frequency.setValueAtTime(1318.5, t + 0.24);
      gain.gain.setValueAtTime(0.30, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);
      osc.start(t); osc.stop(t + 0.70);

    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, t);
      osc.frequency.exponentialRampToValueAtTime(100, t + 0.22);
      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
      osc.start(t); osc.stop(t + 0.30);

    } else if (type === 'collect') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880,  t);
      osc.frequency.setValueAtTime(1108, t + 0.12);
      osc.frequency.setValueAtTime(1320, t + 0.24);
      osc.frequency.setValueAtTime(1760, t + 0.36);
      gain.gain.setValueAtTime(0.20, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);
      osc.start(t); osc.stop(t + 0.70);

    } else if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(600, t + 0.06);
      gain.gain.setValueAtTime(0.10, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      osc.start(t); osc.stop(t + 0.10);
    }
  } catch (e) { /* Audio unsupported */ }
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  try { localStorage.setItem('regneparty_sound', state.soundEnabled ? '1' : '0'); } catch (e) {}
  const btn = document.getElementById('sound-btn');
  if (btn) btn.textContent = state.soundEnabled ? '🔊' : '🔇';
  if (state.soundEnabled) playSound('click');
}

// ── DYNAMIC THEME IMAGE LIBRARY ───────────────
// Multiple cinematic backdrops per theme. Different image picks per chapter
// + slideshow on the level-select screen for a more "alive" feel.
const THEME_BGS = {
  kpop:       ['img/bg/kpop/bg-1.png', 'img/bg/kpop/bg-2.png', 'img/bg/kpop/bg-3.png', 'img/bg/kpop/bg-4.png', 'img/bg/kpop/bg-5.png'],
  gaming:     ['img/bg/gaming/bg-1.png', 'img/bg/gaming/bg-2.png', 'img/bg/gaming/bg-3.png', 'img/bg/gaming/bg-4.png'],
  football:   ['img/bg/football/bg-1.png', 'img/bg/football/bg-2.png', 'img/bg/football/bg-3.png', 'img/bg/football/bg-4.png'],
  ronaldo:    ['img/bg/ronaldo/bg-1.png', 'img/bg/ronaldo/bg-2.png', 'img/bg/ronaldo/bg-3.png'],
  brawlstars: ['img/bg/brawlstars/bg-1.png', 'img/bg/brawlstars/bg-2.png'],
  anime:      ['img/bg/anime/bg-1.png'],
  jjk:        ['img/bg/jjk/bg-1.png', 'img/bg/jjk/bg-2.png', 'img/bg/jjk/bg-3.png'],
  geography:  ['img/bg/geography/bg-1.png', 'img/bg/geography/bg-2.png', 'img/bg/geography/bg-3.png', 'img/bg/geography/bg-4.png']
};
// Fallback to legacy single-image path if subfolder is missing.
function getThemeBgs(themeId) {
  return (THEME_BGS[themeId] && THEME_BGS[themeId].length)
    ? THEME_BGS[themeId]
    : [`img/bg/bg-${themeId}.png`];
}
// Pick the bg for a specific chapter index (deterministic so the same chapter always shows same bg)
function getChapterBg(themeId, chapterIdx) {
  const arr = getThemeBgs(themeId);
  return arr[chapterIdx % arr.length];
}
// Hero (theme-card) bg = first image
function getThemeHeroBg(themeId) { return getThemeBgs(themeId)[0]; }

// ── STATE ─────────────────────────────────────

const state = {
  screen: 'home',            // 'home' | 'level-select' | 'chapter' | 'complete'
  theme: null,
  chapter: 0,
  chapterPhase: 'story',     // 'story' | 'math' — split each chapter in two
  selectedLevel: null,       // 0=Nem 1=Mellem 2=Svær 3=Nørd — math difficulty
  selectedStoryLevel: null,  // 0=Kort 1=Normal 2=Dyb — story reading depth
  selectedMathType: null,    // null/'mix' = book curriculum, ellers 'plus'|'minus'|'gange'|'div'|'brok'|'geo'
  answered: false,
  hintOpen: false,
  wrongCount: 0,
  streak: 0,
  sessionScore: 0,
  previousHighscore: 0,    // snapshot of theme highscore when run started
  isNewHighscore: false,   // set true when run beats previousHighscore
  runMistakes: 0,          // total wrong answers across the entire 10-chapter run (for perfect-run flag)
  soundEnabled: (typeof localStorage !== 'undefined' && localStorage.getItem('regneparty_sound') === '0') ? false : true,
  progress: loadProgress(),
  collected: loadCollected(),
  bestStats: loadBestStats()
};

// Progress shape: { themeId: { chapter, bestLevel, lastLevel, lastStoryLevel, lastMathType, highscore, lastScore } }
function blankProgress() {
  return { chapter: 0, bestLevel: null, lastLevel: null, lastStoryLevel: null, lastMathType: null, highscore: 0, lastScore: 0 };
}
function getThemeProgress(themeId) {
  return state.progress[themeId] || blankProgress();
}
function saveThemeProgress(themeId, patch) {
  const cur = getThemeProgress(themeId);
  const merged = { ...cur, ...patch };
  if (patch.bestLevel !== undefined) {
    merged.bestLevel = (cur.bestLevel === null || patch.bestLevel > cur.bestLevel)
      ? patch.bestLevel : cur.bestLevel;
  }
  if (patch.highscore !== undefined) {
    merged.highscore = Math.max(cur.highscore || 0, patch.highscore);
  }
  state.progress[themeId] = merged;
  saveProgress();
}

// Total highscore across all themes
function getTotalHighscore() {
  return Object.values(state.progress).reduce((sum, p) => sum + (p.highscore || 0), 0);
}

// ── RANK / LEAGUE TIERS ───────────────────────
// Tiered like an esports league. Each tier has 3 sub-divisions (III → II → I).
// Thresholds chosen so a strong run on one theme (~1800) lands you in Sølv,
// completing all 8 themes well lands you in Platin/Diamant.
const RANK_TIERS = [
  { name: 'Bronze',  short: 'B', color: '#c08b5c', glow: '#ffb47a', min:     0 },
  { name: 'Sølv',    short: 'S', color: '#c9d3e1', glow: '#ffffff', min:  1000 },
  { name: 'Guld',    short: 'G', color: '#ffcc4d', glow: '#ffd87a', min:  3000 },
  { name: 'Platin',  short: 'P', color: '#7ce3d4', glow: '#a6fff0', min:  6000 },
  { name: 'Diamant', short: 'D', color: '#a48bff', glow: '#d6c5ff', min: 10000 },
  { name: 'Master',  short: 'M', color: '#ff5b7c', glow: '#ffb0c8', min: 14000 }
];

function getRankInfo(points) {
  let tier = RANK_TIERS[0], next = RANK_TIERS[1];
  for (let i = RANK_TIERS.length - 1; i >= 0; i--) {
    if (points >= RANK_TIERS[i].min) {
      tier = RANK_TIERS[i];
      next = RANK_TIERS[i + 1] || null;
      break;
    }
  }
  // Sub-divisions inside a tier (III / II / I as you climb)
  const span = next ? (next.min - tier.min) : 1;
  const into = Math.max(0, points - tier.min);
  const pct  = next ? Math.min(100, Math.round((into / span) * 100)) : 100;
  let division = 'III';
  if (next) {
    if (into >= span * 2 / 3) division = 'I';
    else if (into >= span / 3) division = 'II';
  } else {
    division = '★';
  }
  return { tier, next, into, span, pct, division, points };
}

// Best-ever stats (across all sessions, all themes)
function loadBestStats() {
  try {
    const raw = localStorage.getItem('regneparty_best_stats');
    return raw ? JSON.parse(raw) : { bestStreak: 0 };
  } catch (e) { return { bestStreak: 0 }; }
}
function saveBestStats() {
  try { localStorage.setItem('regneparty_best_stats', JSON.stringify(state.bestStats)); }
  catch (e) {}
}
function bumpBestStreak(currentStreak) {
  if (currentStreak > (state.bestStats.bestStreak || 0)) {
    state.bestStats.bestStreak = currentStreak;
    saveBestStats();
    return true;
  }
  return false;
}

// Theme is "Perfect Run"-able: completed AND no mistakes recorded across the run.
// We track this via a simple flag stored on theme progress.
function getThemeIsPerfect(themeId) {
  return !!(state.progress[themeId] && state.progress[themeId].perfectRun);
}

function loadProgress() {
  try {
    const raw = localStorage.getItem('regneparty_progress');
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    const out = {};
    for (const [k, v] of Object.entries(parsed)) {
      out[k] = typeof v === 'number'
        ? { chapter: v, bestLevel: null, lastLevel: null, lastStoryLevel: null }
        : { chapter: 0, bestLevel: null, lastLevel: null, lastStoryLevel: null, ...v };
    }
    return out;
  } catch (e) { return {}; }
}

function saveProgress() {
  try { localStorage.setItem('regneparty_progress', JSON.stringify(state.progress)); }
  catch (e) { /* ignore */ }
}

function loadCollected() {
  try {
    const raw = localStorage.getItem('regneparty_collected');
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (e) { return new Set(); }
}

function saveCollected() {
  try {
    localStorage.setItem('regneparty_collected', JSON.stringify([...state.collected]));
  } catch (e) { /* ignore */ }
}

// ── RENDER ────────────────────────────────────

function render() {
  const app = document.getElementById('app');
  document.body.dataset.theme = state.theme || '';

  const doRender = () => {
    if (state.screen === 'home') {
      clearDecorations();
      app.innerHTML = renderHome();
    } else if (state.screen === 'level-select') {
      clearDecorations();
      app.innerHTML = renderLevelSelect();
      startConfigSlideshow();
    } else if (state.screen === 'chapter') {
      app.innerHTML = renderChapter();
      addDecorations(state.theme);
      requestAnimationFrame(() => {
        const input = document.getElementById('answer-input');
        if (input && !state.answered) input.focus();
      });
    } else if (state.screen === 'complete') {
      app.innerHTML = renderComplete();
      addDecorations(state.theme);
      setTimeout(() => { triggerConfetti(); playSound('complete'); }, 400);
    }
    requestAnimationFrame(() => {
      app.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
      app.style.opacity    = '1';
      app.style.transform  = 'translateY(0)';
    });
  };

  if (app.innerHTML.trim()) {
    app.style.transition = 'opacity 0.14s ease, transform 0.14s ease';
    app.style.opacity    = '0';
    app.style.transform  = 'translateY(8px)';
    setTimeout(doRender, 145);
  } else {
    doRender();
  }
}

function renderHome() {
  const levelNames = ['Nem','Mellem','Svær','Nørd'];

  // Aggregate stats for the gamified topbar
  const totalPoints    = getTotalHighscore();
  const rank           = getRankInfo(totalPoints);
  const cardsCollected = state.collected.size;
  const bestStreak     = (state.bestStats && state.bestStats.bestStreak) || 0;

  // Custom display order — football and ronaldo placed furthest apart (slot 1 and slot 8)
  const HOME_ORDER = ['ronaldo', 'kpop', 'gaming', 'brawlstars', 'anime', 'jjk', 'geography', 'football'];
  const orderedThemes = HOME_ORDER.map(id => GAME_DATA[id]).filter(Boolean);
  const bars = orderedThemes.map((theme, idx) => {
    const p    = getThemeProgress(theme.id);
    const done = p.chapter;
    let progressLabel = '';
    if (done >= 10) {
      const lvlStr = p.bestLevel !== null ? ` · ${levelNames[p.bestLevel]}` : '';
      progressLabel = `<span class="theme-bar-progress done">✓ CLEARED${lvlStr}</span>`;
    } else if (done > 0) {
      progressLabel = `<span class="theme-bar-progress">RUN ${done + 1} / 10</span>`;
    } else {
      progressLabel = `<span class="theme-bar-progress">NEW · UNLOCKED</span>`;
    }

    const numCollected = Array.from({ length: 10 }, (_, i) => state.collected.has(`${theme.id}_${i}`)).filter(Boolean).length;
    const collectLabel = numCollected > 0
      ? `<span class="theme-bar-collect">${numCollected}/10 ✦</span>`
      : '';

    const hasDone  = done >= 10;
    const hasStart = done > 0 && done < 10;
    const hi       = p.highscore || 0;
    const isPerfect = !!p.perfectRun;
    return `
      <button class="theme-card ${theme.id} ${isPerfect ? 'is-perfect' : ''}" data-action="select-theme" data-payload="${theme.id}" aria-label="Pick ${theme.name}">
        <img class="theme-card-img" src="${getThemeHeroBg(theme.id)}" alt="" />
        <div class="theme-card-sweep" aria-hidden="true"></div>
        <div class="theme-card-grain" aria-hidden="true"></div>
        <div class="theme-card-glow"  aria-hidden="true"></div>
        <div class="theme-card-overlay" aria-hidden="true"></div>
        ${hasDone  ? '<span class="theme-card-badge done">✓</span>' : ''}
        ${hasStart ? `<span class="theme-card-badge progress">${done}/10</span>` : ''}
        ${hi > 0  ? `<span class="theme-card-hiscore">🏆 ${hi}</span>` : ''}
        ${isPerfect ? '<span class="theme-card-perfect" title="Perfect Run — clearet uden fejl">⚡ PERFECT</span>' : ''}
        <div class="theme-card-body">
          <span class="theme-card-title">${theme.name}</span>
          <span class="theme-card-tagline">${theme.tagline}</span>
        </div>
      </button>`;
  }).join('');

  const soundIcon = state.soundEnabled ? '🔊' : '🔇';

  // Particle stars
  const particles = Array.from({length: 28}, (_, i) =>
    `<span class="hp-particle hp-p${(i % 6) + 1}" style="--d:${(i * 0.41) % 7}s; --x:${((i * 53) % 100)}%; --y:${((i * 79) % 100)}%"></span>`
  ).join('');

  return `
    <div class="home-screen">

      <!-- Atmosphere -->
      <div class="home-stage" aria-hidden="true">
        <div class="hp-aurora"></div>
        <div class="hp-rays"></div>
        <div class="hp-particles">${particles}</div>
      </div>

      <!-- Top bar: rank | THE MATH ARENA | counter chips -->
      <header class="home-topbar arena-topbar">
        <!-- LEFT: rank tile -->
        <div class="arena-rank" title="Din rank · ${rank.points} pts">
          <div class="rank-tile" style="--rank-color:${rank.tier.color}; --rank-glow:${rank.tier.glow};">
            <span class="rank-tile-div">${rank.division}</span>
            <span class="rank-tile-letter">${rank.tier.short}</span>
          </div>
          <div class="rank-info">
            <span class="rank-name">${rank.tier.name.toUpperCase()}</span>
            <span class="rank-bar"><span class="rank-bar-fill" style="width:${rank.pct}%; background:linear-gradient(90deg, ${rank.tier.color}, ${rank.tier.glow});"></span></span>
            <span class="rank-points">${rank.next ? `${rank.points} / ${rank.next.min} pts` : `${rank.points} pts · MAX`}</span>
          </div>
        </div>

        <!-- CENTER: official arena title -->
        <div class="arena-title-wrap" aria-label="The Math Arena">
          <div class="arena-title-row">
            <span class="arena-title-bar arena-title-bar-l" aria-hidden="true"></span>
            <h1 class="arena-title">THE MATH ARENA</h1>
            <span class="arena-title-bar arena-title-bar-r" aria-hidden="true"></span>
          </div>
          <div class="arena-subtitle">
            <span class="arena-sub-pill">GVS · MATH LEAGUE</span>
            <span class="arena-sub-dot">●</span>
            <span class="arena-sub-season">SEASON 1</span>
          </div>
        </div>

        <!-- RIGHT: counter chips -->
        <div class="arena-stats">
          <div class="stat-chip stat-trophy" title="Total points på tværs af alle worlds">
            <span class="stat-icon">🏆</span><span class="stat-num">${totalPoints}</span>
          </div>
          <div class="stat-chip stat-cards" title="Drops samlet">
            <span class="stat-icon">✦</span><span class="stat-num">${cardsCollected}<span class="stat-num-total">/80</span></span>
          </div>
          <div class="stat-chip stat-streak" title="Længste streak nogensinde">
            <span class="stat-icon">🔥</span><span class="stat-num">${bestStreak}</span>
          </div>
          <button class="sound-btn arena-sound-btn" id="sound-btn" data-action="toggle-sound" title="Lyd on/off">${soundIcon}</button>
        </div>
      </header>

      <!-- Full-bleed game catalog -->
      <nav class="theme-catalog" aria-label="Pick din world">${bars}</nav>
    </div>`;
}

function renderLevelSelect() {
  const theme = GAME_DATA[state.theme];
  const themeProgress = getThemeProgress(state.theme);
  const themeHi = themeProgress.highscore || 0;

  // Default selectedMathType so '🎲 Random' looks chosen on first visit
  if (state.selectedMathType === null) state.selectedMathType = 'mix';

  // Cards collected for this theme (out of 10)
  let themeCardsCollected = 0;
  for (let i = 0; i < 10; i++) {
    if (state.collected.has(`${state.theme}_${i}`)) themeCardsCollected++;
  }

  const lvlNames   = ['Easy', 'Normal', 'Hard', 'Insane'];
  const lvlBadges  = ['★', '★★', '★★★', '★★★★'];
  const storyNames = ['Quick', 'Normal', 'Deep'];
  const storyBadges = ['✦', '✦✦', '✦✦✦'];

  // ── SLOT 1: SVÆRHEDSGRAD ────────────────────────
  const mathOpts = [
    { name: 'Easy',   desc: 'Små tal. God til warm-up.',          ex: `${MATH.plus[0][0].vars.n1} + ${MATH.plus[0][0].vars.n2}` },
    { name: 'Normal', desc: 'Originaltallene fra storyen.',        ex: `${MATH.plus[1][0].vars.n1} + ${MATH.plus[1][0].vars.n2}` },
    { name: 'Hard',   desc: 'Store tal. Tunge brøker.',            ex: `${MATH.plus[2][0].vars.n1} + ${MATH.plus[2][0].vars.n2}` },
    { name: 'Insane', desc: 'Ekstreme tal. Top tier only.',         ex: `${MATH.plus[3][0].vars.n1} + ${MATH.plus[3][0].vars.n2}` }
  ];
  const mathChoices = mathOpts.map((lv, i) => {
    const active = state.selectedLevel === i ? 'active' : '';
    return `<button class="loadout-tile ${active}" data-action="select-level" data-payload="${i}" aria-label="Difficulty ${lv.name}">
      <span class="lo-tile-rank">${lvlBadges[i]}</span>
      <span class="lo-tile-name">${lv.name}</span>
      <span class="lo-tile-meta">${lv.ex}</span>
    </button>`;
  }).join('');

  // ── SLOT 2: HISTORIE ────────────────────────────
  const storyOpts = [
    { name: 'Quick',  desc: 'Skip cutscene. Lige ind i action.' },
    { name: 'Normal', desc: 'Full story mode. Anbefalet.' },
    { name: 'Deep',   desc: 'Extended cut med extra detaljer.' }
  ];
  const storyChoices = storyOpts.map((lv, i) => {
    const active = state.selectedStoryLevel === i ? 'active' : '';
    return `<button class="loadout-tile ${active}" data-action="select-story-level" data-payload="${i}" aria-label="Story mode ${lv.name}">
      <span class="lo-tile-rank">${storyBadges[i]}</span>
      <span class="lo-tile-name">${lv.name}</span>
      <span class="lo-tile-meta">${lv.desc}</span>
    </button>`;
  }).join('');

  // ── SLOT 3: MATEMATIK-TYPE ──────────────────────
  const currentType = state.selectedMathType || 'mix';
  const typeChoices = MATH_TYPES.map(t => {
    const active = currentType === t.id ? 'active' : '';
    const isRandom = t.id === 'mix' ? 'is-random' : '';
    return `<button class="loadout-tile lo-tile-type ${active} ${isRandom}" data-action="select-math-type" data-payload="${t.id}" aria-label="Math mode ${t.name}">
      <span class="lo-tile-rank">${t.icon}</span>
      <span class="lo-tile-name">${t.name}</span>
      <span class="lo-tile-meta">${t.desc}</span>
    </button>`;
  }).join('');

  // ── BUILD SUMMARY (lever match-setup feel) ──────
  const lvlChosen   = state.selectedLevel !== null;
  const storyChosen = state.selectedStoryLevel !== null;
  const typeChosen  = !!state.selectedMathType;
  const ready = lvlChosen && storyChosen && typeChosen;

  const lvlSummary   = lvlChosen   ? `${lvlBadges[state.selectedLevel]} ${lvlNames[state.selectedLevel]}` : '— pick —';
  const storySummary = storyChosen ? `${storyBadges[state.selectedStoryLevel]} ${storyNames[state.selectedStoryLevel]}` : '— pick —';
  const typeMeta     = MATH_TYPES.find(t => t.id === currentType) || MATH_TYPES[0];
  const typeSummary  = typeChosen  ? `${typeMeta.icon} ${typeMeta.name}` : '— pick —';

  // What this build means: short flavor sentence
  const buildFlavor = ready
    ? (currentType === 'mix'
        ? `Random mode — alle regnetyper på shuffle.`
        : `${typeMeta.name}-only run — 10 levels designet til ${typeMeta.name.toLowerCase()}.`)
    : `Lås alle 3 slots for at starte.`;

  return `
    <div class="config-screen-v2">

      <!-- Fullscreen slideshow background -->
      <div class="config-bg" aria-hidden="true">
        ${getThemeBgs(theme.id).map((src, i) => `<img src="${src}" alt="" class="config-bg-slide ${i === 0 ? 'active' : ''}" data-slide-index="${i}" />`).join('')}
        <div class="config-bg-grain"></div>
        <div class="config-bg-overlay"></div>
        <div class="config-bg-vignette"></div>
      </div>

      <!-- Match-setup hero -->
      <header class="match-hero">
        <button class="back-btn match-hero-back" data-action="go-home">← Lobby</button>
        <div class="match-hero-meta">
          <span class="match-hero-eyebrow">RUN SETUP</span>
          <h1 class="match-hero-title">${theme.name}</h1>
          <span class="match-hero-tagline">${theme.tagline || ''}</span>
        </div>
        <div class="match-hero-stats">
          <div class="match-stat">
            <span class="match-stat-label">HIGHSCORE</span>
            <span class="match-stat-val">${themeHi > 0 ? `🏆 ${themeHi}` : '— none —'}</span>
          </div>
          <div class="match-stat">
            <span class="match-stat-label">DROPS</span>
            <span class="match-stat-val">✦ ${themeCardsCollected}<span class="match-stat-sub">/10</span></span>
          </div>
        </div>
      </header>

      <!-- Build-your-game loadout grid -->
      <main class="loadout-stack">

        <section class="loadout-slot ${lvlChosen ? 'is-set' : ''}">
          <div class="loadout-slot-head">
            <span class="loadout-num">01</span>
            <span class="loadout-cat">Difficulty</span>
            <span class="loadout-current">${lvlSummary}</span>
          </div>
          <div class="loadout-tiles four-up">${mathChoices}</div>
        </section>

        <section class="loadout-slot ${storyChosen ? 'is-set' : ''}">
          <div class="loadout-slot-head">
            <span class="loadout-num">02</span>
            <span class="loadout-cat">Story Mode</span>
            <span class="loadout-current">${storySummary}</span>
          </div>
          <div class="loadout-tiles three-up">${storyChoices}</div>
        </section>

        <section class="loadout-slot ${typeChosen ? 'is-set' : ''}">
          <div class="loadout-slot-head">
            <span class="loadout-num">03</span>
            <span class="loadout-cat">Math Mode</span>
            <span class="loadout-current">${typeSummary}</span>
          </div>
          <div class="loadout-tiles seven-up">${typeChoices}</div>
        </section>

      </main>

      <!-- Sticky deploy bar -->
      <footer class="match-deploy">
        <div class="match-deploy-summary">
          <span class="match-deploy-label">YOUR BUILD</span>
          <span class="match-deploy-build">${lvlSummary} <span class="match-deploy-sep">·</span> ${storySummary} <span class="match-deploy-sep">·</span> ${typeSummary}</span>
          <span class="match-deploy-flavor">${buildFlavor}</span>
        </div>
        <button class="deploy-btn ${ready ? 'ready' : ''}" data-action="start-adventure" ${ready ? '' : 'disabled'} aria-disabled="${!ready}">
          <span class="deploy-btn-label">${ready ? 'Start Run' : 'Lås alle 3'}</span>
          <span class="deploy-btn-arrow">${ready ? '→' : '·'}</span>
        </button>
      </footer>

    </div>`;
}

function renderProgressDots(currentIdx) {
  return Array.from({ length: 10 }, (_, i) => {
    let cls = 'dot';
    if (i < currentIdx) cls += ' completed';
    else if (i === currentIdx) cls += ' current';
    return `<div class="${cls}"></div>`;
  }).join('');
}

function renderChapter() {
  const theme    = GAME_DATA[state.theme];
  const origCh   = theme.chapters[state.chapter];
  const arcCh    = (state.selectedMathType && state.selectedMathType !== 'mix')
                     ? (TYPE_ARCS[state.selectedMathType] && TYPE_ARCS[state.selectedMathType][state.chapter])
                     : null;
  const isOverride = !!arcCh;
  // The "active" chapter source: arc if override, otherwise the theme's original chapter
  const ch         = arcCh || origCh;
  const variantIdx = getVariantIdx(state.theme, state.chapter);
  const lvlData    = isOverride ? arcCh.lvlData : origCh.lvlData;
  const mathData = MATH[lvlData][state.selectedLevel][variantIdx];
  const isLast   = state.chapter === 9;
  const n        = state.chapter + 1;
  const stars      = ['★', '★★', '★★★', '★★★★'][state.selectedLevel];
  const levelName  = ['Easy', 'Normal', 'Hard', 'Insane'][state.selectedLevel];
  const storyLabel = ['Quick', 'Normal', 'Deep'][state.selectedStoryLevel ?? 1];
  const typeMeta   = MATH_TYPES.find(t => t.id === (state.selectedMathType || 'mix')) || MATH_TYPES[0];
  const typeLabel  = `${typeMeta.icon} ${typeMeta.name}`;
  const nextLabel = isLast ? 'Se finalen →' : 'Næste level →';

  // Build story + question. Arc chapters use {q,story,ok}; original chapters use templates.
  // Flet tema-tokens ind i vars så type-arc historierne får tema-specifik smag pr. tema.
  const themeVars = isOverride ? getThemeFlavor(state.theme) : {};
  const allVars   = { ...themeVars, ...mathData.vars };
  const storyTemplate = isOverride ? arcCh.story : origCh.storyTemplate;
  const questionTemplate = isOverride ? arcCh.q  : origCh.questionTemplate;
  const story    = applyTemplate(storyTemplate, allVars);
  const question = applyTemplate(questionTemplate, allVars);
  const chapterTitle = isOverride ? applyTemplate(arcCh.title, themeVars) : origCh.title;
  const mathNote = isOverride ? (TYPE_NOTES[lvlData] || SHARED_MATH_NOTES[origCh.idx]) : SHARED_MATH_NOTES[origCh.idx];
  const hints    = isOverride ? (TYPE_HINTS[lvlData] || SHARED_HINTS[origCh.idx]) : SHARED_HINTS[origCh.idx];

  // Story depth based on selectedStoryLevel
  const rawParagraphs = story.split('\n\n').filter(p => p.trim());
  const sl = state.selectedStoryLevel ?? 1;
  let storyParagraphs;
  if (sl === 0) {
    // Kort: first paragraph only
    storyParagraphs = `<p>${rawParagraphs[0].trim()}</p>`;
  } else if (sl === 1) {
    // Normal: all paragraphs
    storyParagraphs = rawParagraphs.map(p => `<p>${p.trim()}</p>`).join('');
  } else {
    // Dyb: all paragraphs + bonus sentence
    storyParagraphs = rawParagraphs.map(p => `<p>${p.trim()}</p>`).join('');
    if (!isOverride && origCh.storyBonus) {
      storyParagraphs += `<p class="story-bonus">${origCh.storyBonus}</p>`;
    }
  }

  const posterWords = chapterTitle
    .split(' ')
    .map(w => `<span class="ch-poster-word">${w}</span>`)
    .join('');

  const hintSteps = hints.map((s, i) => `
    <div class="hint-step">
      <span class="hint-num">${i + 1}</span>
      <span>${s}</span>
    </div>`).join('');

  const phase = state.chapterPhase || 'story';

  const storyPanel = `
    <div class="ch-panel ch-panel-story">
      <span class="ch-phase-tag">▶ Cutscene</span>
      <h2 class="ch-title">${chapterTitle}</h2>
      <div class="story-text">${storyParagraphs}</div>
      <button class="ch-continue-btn" data-action="read-story-done">
        Skip til mission →
      </button>
    </div>`;

  const mathPanel = `
    <div class="ch-panel ch-panel-math">
      <button class="back-to-story-btn" data-action="back-to-story" type="button">← Replay cutscene</button>
      <span class="ch-phase-tag math">⚔ Mission</span>
      <p class="question-text">${question}</p>
      <div class="math-note">
        <span class="math-note-label">Tip</span>
        <span class="math-note-body">${mathNote}</span>
      </div>
      <form class="answer-form" id="answer-form" novalidate>
        <input
          type="text"
          id="answer-input"
          class="answer-input"
          placeholder="Drop dit svar…"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          inputmode="decimal"
          ${state.answered ? 'readonly' : ''}
        />
        <button type="submit" class="submit-btn" ${state.answered ? 'disabled' : ''}>Lock in</button>
      </form>
      <div class="feedback" id="feedback"></div>
      <div class="answer-explanation" id="answer-explanation"></div>
      <div class="hint-section ${state.hintOpen ? 'open' : ''}" id="hint-section">
        <div class="hint-box">
          <div class="hint-title">Strategi</div>
          ${hintSteps}
        </div>
      </div>
      <div class="card-actions">
        <button class="hint-btn" data-action="toggle-hint" id="hint-btn">
          ${state.hintOpen ? 'Skjul strategi' : 'Vis strategi'}
        </button>
        <button class="skip-btn ${state.wrongCount >= 4 ? 'visible' : ''}" data-action="skip-chapter" id="skip-btn">
          Skip · ingen drop
        </button>
        <button class="next-btn ${state.answered ? 'visible' : ''}" data-action="next-chapter" id="next-btn">
          ${nextLabel}
        </button>
      </div>
    </div>`;

  return `
    <div class="chapter-screen phase-${phase}">

      <!-- Cinematic backdrop image — varies per chapter for "mere dynamik" -->
      <div class="chapter-bg" aria-hidden="true" key="${state.theme}-${state.chapter}">
        <img src="${getChapterBg(state.theme, state.chapter)}" alt="" class="chapter-bg-img" />
        <div class="chapter-bg-grain"></div>
        <div class="chapter-bg-sweep"></div>
        <div class="chapter-bg-overlay"></div>
      </div>

      <!-- Topbar -->
      <div class="chapter-topbar">
        <button class="back-btn" data-action="go-home">← Lobby</button>
        <span class="ch-meta">LEVEL ${n} / 10 &nbsp;·&nbsp; ${theme.icon} ${theme.name} &nbsp;·&nbsp; ${stars} ${levelName} &nbsp;·&nbsp; 📖 ${storyLabel} &nbsp;·&nbsp; ${typeLabel}${state.streak >= 2 ? `&nbsp;·&nbsp;<span class="streak-badge active" id="streak-display">🔥 ${state.streak}</span>` : `<span class="streak-badge hidden" id="streak-display">🔥 ${state.streak}</span>`}</span>
        <div class="ch-score-cluster">
          <span class="ch-score-chip" id="score-chip" title="Score live">💎 <strong>${state.sessionScore}</strong></span>
          ${state.previousHighscore > 0 ? `<span class="ch-highscore-chip ${state.sessionScore > state.previousHighscore ? 'beat' : ''}" title="Highscore to beat">🏆 ${state.previousHighscore}</span>` : ''}
          <div class="progress-dots">${renderProgressDots(state.chapter)}</div>
        </div>
      </div>

      <!-- Centered single-panel stage -->
      <div class="ch-stage">
        ${phase === 'story' ? storyPanel : mathPanel}
      </div>

    </div>`;
}

function renderComplete() {
  const theme = GAME_DATA[state.theme];
  const storyParagraphs = theme.endingStory
    .split('\n\n')
    .filter(p => p.trim())
    .map(p => `<p>${p.trim()}</p>`)
    .join('');

  const collGrid = (theme.collectibles || []).map((item, i) => {
    const collected = state.collected.has(`${state.theme}_${i}`);
    return `<div class="coll-item ${collected ? 'collected' : 'locked'}" title="${collected ? item.desc : '???'}">
      <div class="coll-icon">${collected ? item.icon : '❓'}</div>
      <div class="coll-name">${collected ? item.name : '???'}</div>
    </div>`;
  }).join('');

  // Score panel
  const finalScore   = state.sessionScore;
  const prevHi       = state.previousHighscore || 0;
  const isNew        = state.isNewHighscore;
  const diff         = finalScore - prevHi;
  const completedTypeId = state.selectedMathType || 'mix';
  const completedType   = MATH_TYPES.find(t => t.id === completedTypeId) || MATH_TYPES[0];
  const completedLvl    = ['Easy','Normal','Hard','Insane'][state.selectedLevel ?? 1];
  const modeBadge       = `<div class="complete-mode-chips">
    <span class="complete-mode-chip">${completedType.icon} ${completedType.name}</span>
    <span class="complete-mode-chip">${['★','★★','★★★','★★★★'][state.selectedLevel ?? 1]} ${completedLvl}</span>
  </div>`;
  const scorePanel = `
    <div class="complete-score-panel ${isNew ? 'new-highscore' : ''}">
      ${isNew ? `<div class="score-banner">🏆 NEW HIGHSCORE</div>` : (prevHi > 0 ? `<div class="score-banner muted">Run complete</div>` : `<div class="score-banner muted">Første run — sæt highscoren</div>`)}
      ${modeBadge}
      <div class="score-final">
        <span class="score-label">Score</span>
        <span class="score-value">${finalScore}</span>
      </div>
      ${prevHi > 0 ? `
        <div class="score-prev">
          <span class="score-prev-label">Forrige highscore</span>
          <span class="score-prev-value">${prevHi}</span>
        </div>
        <div class="score-diff ${diff > 0 ? 'pos' : (diff < 0 ? 'neg' : 'eq')}">
          ${diff > 0 ? `▲ +${diff} pts` : (diff < 0 ? `▼ ${diff} pts — comeback time` : `Tied · stadig din rekord`)}
        </div>
      ` : ''}
      <button class="replay-btn" data-action="replay-theme">Run again — beat din score</button>
    </div>`;

  return `
    <div class="complete-screen">
      <div class="complete-bg" aria-hidden="true">
        <img src="${getThemeBgs(state.theme)[getThemeBgs(state.theme).length - 1]}" alt="" />
        <div class="complete-bg-overlay"></div>
      </div>
      <div class="complete-left">
        <img class="complete-icon" src="img/icons/icon-${state.theme}.png" alt="" />
        <span class="complete-trophy">${theme.endingTrophy}</span>
        <h2 class="complete-title">${theme.endingTitle}</h2>
        ${scorePanel}
      </div>
      <div class="complete-right">
        <div class="complete-story">${storyParagraphs}</div>
        <button class="home-btn" data-action="go-home">← Pick næste world</button>
      </div>
      <div class="complete-collection">
        <div class="coll-title">Drop set · ${(theme.collectibles || []).filter((_, i) => state.collected.has(`${state.theme}_${i}`)).length}/10 unlocked</div>
        <div class="coll-grid">${collGrid}</div>
      </div>
    </div>`;
}

// ── ACTIONS ───────────────────────────────────

function selectTheme(themeId) {
  const p = getThemeProgress(themeId);
  state.theme              = themeId;
  state.selectedLevel      = p.lastLevel ?? null;
  state.selectedStoryLevel = p.lastStoryLevel ?? null;
  state.selectedMathType   = p.lastMathType ?? 'mix';
  state.answered           = false;
  state.hintOpen           = false;
  state.wrongCount         = 0;
  state.screen             = 'level-select';
  render();
}

// Just highlight the choice — don't navigate yet
function selectLevel(lvl) {
  state.selectedLevel = parseInt(lvl, 10);
  render();
}

function selectStoryLevel(lvl) {
  state.selectedStoryLevel = parseInt(lvl, 10);
  render();
}

function selectMathType(typeId) {
  const valid = MATH_TYPES.some(t => t.id === typeId);
  state.selectedMathType = valid ? typeId : 'mix';
  render();
}

// Both chosen → launch
function startAdventure() {
  if (state.selectedLevel === null || state.selectedStoryLevel === null) return;
  const p        = getThemeProgress(state.theme);
  // Only reset the run if we're starting from chapter 0; otherwise we're resuming mid-progress
  const resuming = p.chapter > 0 && p.chapter < 10;
  state.chapter  = p.chapter >= 10 ? 0 : p.chapter;
  state.chapterPhase = 'story';
  state.answered = false; state.hintOpen = false; state.wrongCount = 0;
  state.streak   = 0;     state.sessionScore = 0;
  state.runMistakes       = 0;
  state.previousHighscore = p.highscore || 0;
  state.isNewHighscore    = false;
  state.screen   = 'chapter';
  saveThemeProgress(state.theme, { lastLevel: state.selectedLevel, lastStoryLevel: state.selectedStoryLevel, lastMathType: state.selectedMathType || 'mix' });
  render();
}

function goHome() {
  state.screen             = 'home';
  state.theme              = null;
  state.chapterPhase       = 'story';
  state.selectedLevel      = null;
  state.selectedStoryLevel = null;
  state.selectedMathType   = null;
  state.answered           = false;
  state.hintOpen           = false;
  state.wrongCount         = 0;
  state.streak             = 0;
  state.sessionScore       = 0;
  render();
}

function nextChapter() {
  const next = state.chapter + 1;
  if (next >= 10) {
    const prevHi = state.previousHighscore || 0;
    state.isNewHighscore = state.sessionScore > prevHi;
    const isPerfectRun = (state.runMistakes === 0);
    const patch = {
      chapter: 10,
      bestLevel: state.selectedLevel,
      highscore: state.sessionScore,
      lastScore: state.sessionScore
    };
    if (isPerfectRun) patch.perfectRun = true;
    saveThemeProgress(state.theme, patch);
    state.isPerfectRun = isPerfectRun;
    state.screen = 'complete';
    render();
  } else {
    saveThemeProgress(state.theme, { chapter: next, bestLevel: state.selectedLevel });
    state.chapter      = next;
    state.chapterPhase = 'story';
    state.answered     = false;
    state.hintOpen     = false;
    state.wrongCount   = 0;
    render();
  }
}

function replayTheme() {
  // Reset chapter pointer to 0 for this theme so the player can re-run for a new highscore
  if (!state.theme) return;
  saveThemeProgress(state.theme, { chapter: 0 });
  // Snapshot current highscore to beat
  const p = getThemeProgress(state.theme);
  state.previousHighscore = p.highscore || 0;
  state.isNewHighscore    = false;
  state.chapter           = 0;
  state.chapterPhase      = 'story';
  state.answered          = false;
  state.hintOpen          = false;
  state.wrongCount        = 0;
  state.streak            = 0;
  state.sessionScore      = 0;
  state.runMistakes       = 0;
  state.screen            = 'chapter';
  render();
}

function readStoryDone() {
  state.chapterPhase = 'math';
  render();
}

function backToStory() {
  state.chapterPhase = 'story';
  render();
}

function toggleHint() {
  state.hintOpen = !state.hintOpen;
  const section = document.getElementById('hint-section');
  const btn     = document.getElementById('hint-btn');
  if (section) section.classList.toggle('open', state.hintOpen);
  if (btn)     btn.textContent = state.hintOpen ? 'Skjul tænkevej' : 'Vis tænkevej';
}

const wrongMessages = [
  'Ikke helt. Prøv igen — du har det.',
  'Tæt på! Kig på tipset nedenunder.',
  'Næsten. Læs opgaven én gang til.',
  'Du er på sporet. Brug tænkevej-knappen.'
];

function handleAnswerSubmit() {
  if (state.answered || state.selectedLevel === null) return;
  const input    = document.getElementById('answer-input');
  const feedback = document.getElementById('feedback');
  if (!input || !feedback || !input.value.trim()) return;

  const origCh     = GAME_DATA[state.theme].chapters[state.chapter];
  const arcCh      = (state.selectedMathType && state.selectedMathType !== 'mix')
                       ? (TYPE_ARCS[state.selectedMathType] && TYPE_ARCS[state.selectedMathType][state.chapter])
                       : null;
  const isOverride = !!arcCh;
  const ch         = arcCh || origCh;
  const variantIdx = getVariantIdx(state.theme, state.chapter);
  const lvlData    = isOverride ? arcCh.lvlData : origCh.lvlData;
  const mathData   = MATH[lvlData][state.selectedLevel][variantIdx];

  if (checkAnswer(input.value, mathData.ans)) {
    state.answered = true;
    const isPerfect  = (state.wrongCount === 0);
    state.streak++;
    bumpBestStreak(state.streak);
    // Base × perfect-bonus × streak-bonus
    const base        = [10, 20, 35, 60][state.selectedLevel];
    const perfectMult = isPerfect ? 2 : 1;
    // Streak bonus: 3-in-a-row = ×1.25, 5+ = ×1.5
    let streakMult = 1;
    if (state.streak >= 5)      streakMult = 1.5;
    else if (state.streak >= 3) streakMult = 1.25;
    state.sessionScore += Math.round(base * perfectMult * streakMult);

    // Show combo flash when streak hits multiplier threshold
    if (state.streak === 3 || state.streak === 5 || state.streak === 8 || state.streak === 10) {
      showComboFlash(state.streak, streakMult);
    }

    const themeVars = isOverride ? getThemeFlavor(state.theme) : {};
    const successMsg = isOverride
      ? applyTemplate(arcCh.ok, { ...themeVars, ...mathData.vars, answer: mathData.ans })
      : applyTemplate(origCh.successMsgTemplate, { ...mathData.vars, answer: mathData.ans });
    input.classList.add('correct');
    feedback.textContent = (isPerfect ? '⚡ FIRST TRY · ' : '✓ ') + successMsg;
    feedback.className   = 'feedback success' + (isPerfect ? ' perfect' : '');

    // Show math explanation
    const expEl = document.getElementById('answer-explanation');
    if (expEl) {
      const note = isOverride ? (TYPE_NOTES[lvlData] || SHARED_MATH_NOTES[origCh.idx]) : SHARED_MATH_NOTES[origCh.idx];
      expEl.innerHTML = `<span class="exp-label">Sådan landede du svaret</span>${note}`;
      expEl.classList.add('visible');
    }

    document.querySelector('.submit-btn')?.setAttribute('disabled', '');
    input.readOnly = true;
    updateStreakDisplay();
    bumpScoreChip();
    triggerConfetti();
    playSound(isPerfect ? 'perfect' : 'correct');

    // Collectible reveal — nextBtn shown after modal dismisses
    const collectKey = `${state.theme}_${state.chapter}`;
    if (!state.collected.has(collectKey)) {
      state.collected.add(collectKey);
      saveCollected();
      setTimeout(() => showCollectibleReveal(state.theme, state.chapter, isPerfect), 320);
    } else {
      // Already collected on a previous run — just show the next button
      _showNextBtn();
    }
  } else {
    state.wrongCount++;
    state.runMistakes++;
    state.streak = 0;
    playSound('wrong');
    input.classList.add('wrong');
    const msg = wrongMessages[(state.wrongCount - 1) % wrongMessages.length];
    feedback.textContent = msg;
    feedback.className   = 'feedback error';
    setTimeout(() => input.classList.remove('wrong'), 360);
    input.select();

    // Auto-open hint after 2 wrong answers
    if (state.wrongCount === 2 && !state.hintOpen) {
      state.hintOpen = true;
      document.getElementById('hint-section')?.classList.add('open');
      const hintBtn = document.getElementById('hint-btn');
      if (hintBtn) hintBtn.textContent = 'Skjul tænkevej';
    }
    // Show skip button after 4 wrong answers
    if (state.wrongCount >= 4) {
      document.getElementById('skip-btn')?.classList.add('visible');
    }
    updateStreakDisplay();
  }
}

// ── COLLECTIBLE REVEAL MODAL ──────────────────

function showCollectibleReveal(themeId, chapterIdx, isPerfect) {
  const theme = GAME_DATA[themeId];
  if (!theme?.collectibles) { _showNextBtn(); return; }
  const item = theme.collectibles[chapterIdx];
  if (!item) { _showNextBtn(); return; }

  // Deterministic "rare" check — Nørd always rare, else ~1 in 7
  const themeOrder = ['kpop','gaming','football','ronaldo','brawlstars','anime','jjk','geography'];
  const tIdx  = Math.max(0, themeOrder.indexOf(themeId));
  const isRare = state.selectedLevel === 3 || ((tIdx * 13 + chapterIdx * 7) % 7 === 0);

  playSound('collect');
  if (isRare || isPerfect) setTimeout(triggerConfetti, 200);

  const badgeText = isRare ? '✦ RARE DROP ✦' : isPerfect ? '⚡ FIRST-TRY DROP ⚡' : '✦ NEW DROP ✦';
  const modalClass = [isRare ? 'is-rare' : '', isPerfect ? 'is-perfect' : ''].filter(Boolean).join(' ');

  const cardNum   = String(chapterIdx + 1).padStart(2, '0');
  const setLabel  = `${theme.icon} ${theme.name.toUpperCase()} · DROP SET`;

  const overlay = document.createElement('div');
  overlay.className = `collect-overlay theme-${themeId}`;
  overlay.innerHTML = `
    <div class="collect-modal ${modalClass}">
      <div class="cm-badge">${badgeText}</div>
      <div class="cm-card" data-card-theme="${themeId}">
        <div class="cm-holo"      aria-hidden="true"></div>
        <div class="cm-shine"     aria-hidden="true"></div>
        <div class="cm-pattern"   aria-hidden="true"></div>
        <div class="cm-card-header">
          <span class="cm-card-set">${setLabel}</span>
          <span class="cm-card-number">${cardNum}<span class="cm-card-total">/10</span></span>
        </div>
        <div class="cm-card-photo">
          <div class="cm-photo-glow" aria-hidden="true"></div>
          <span class="cm-icon">${item.icon}</span>
        </div>
        <div class="cm-card-footer">
          <div class="cm-name">${item.name}</div>
          <div class="cm-desc">${item.desc}</div>
          ${isPerfect ? '<div class="cm-perfect-tag">⚡ First try</div>' : ''}
        </div>
      </div>
      <div class="cm-dismiss">Tap for at fortsætte</div>
    </div>
  `;
  document.body.appendChild(overlay);

  requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('visible')));

  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    overlay.classList.remove('visible');
    setTimeout(() => { overlay.remove(); _showNextBtn(); }, 380);
  };

  overlay.addEventListener('click', dismiss);
  setTimeout(dismiss, 6000); // auto-dismiss after 6s
}

function _showNextBtn() {
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.classList.add('visible');
    nextBtn.textContent = state.chapter === 9 ? 'Se finalen →' : 'Næste level →';
  }
}

function updateStreakDisplay() {
  const el = document.getElementById('streak-display');
  if (!el) return;
  el.textContent = `🔥 ${state.streak}`;
  if (state.streak >= 2) {
    el.classList.remove('hidden'); el.classList.add('active');
  } else {
    el.classList.remove('active'); el.classList.add('hidden');
  }
}

// ── LEVEL-SELECT SLIDESHOW ──────────────────────
let _configSlideshowTimer = null;
function startConfigSlideshow() {
  if (_configSlideshowTimer) clearInterval(_configSlideshowTimer);
  const slides = document.querySelectorAll('.config-bg-slide');
  if (slides.length <= 1) return; // single image — no rotation
  let idx = 0;
  _configSlideshowTimer = setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 4500);
}
function stopConfigSlideshow() {
  if (_configSlideshowTimer) {
    clearInterval(_configSlideshowTimer);
    _configSlideshowTimer = null;
  }
}

function showComboFlash(streak, mult) {
  // Big mid-screen multiplier banner that fades out fast.
  const existing = document.querySelector('.combo-flash');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.className = 'combo-flash';
  const multTxt = mult >= 1.5 ? '×1.5' : (mult >= 1.25 ? '×1.25' : `×${mult}`);
  el.innerHTML = `
    <div class="combo-flash-inner">
      <div class="combo-flash-streak">🔥 ${streak}× COMBO</div>
      <div class="combo-flash-mult">${multTxt} POINTS</div>
    </div>`;
  document.body.appendChild(el);
  // Trigger animation then auto-remove
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 320);
  }, 850);
}

function bumpScoreChip() {
  const chip = document.getElementById('score-chip');
  if (!chip) return;
  // Update value first
  const strong = chip.querySelector('strong');
  if (strong) strong.textContent = String(state.sessionScore);
  // Re-trigger CSS animation
  chip.classList.remove('bump');
  // force reflow so the class re-add restarts the transition
  void chip.offsetWidth;
  chip.classList.add('bump');
  setTimeout(() => chip.classList.remove('bump'), 320);

  // Update highscore-beat indicator if applicable
  const hi = document.querySelector('.ch-highscore-chip');
  if (hi && state.previousHighscore > 0) {
    if (state.sessionScore > state.previousHighscore) hi.classList.add('beat');
    else hi.classList.remove('beat');
  }
}

function skipChapter() {
  if (state.answered) return;
  state.answered = true; state.streak = 0;
  const ch       = GAME_DATA[state.theme].chapters[state.chapter];
  const lvlData  = resolveLvlData(state.chapter, ch);
  const mathData = MATH[lvlData][state.selectedLevel][getVariantIdx(state.theme, state.chapter)];
  const input    = document.getElementById('answer-input');
  const feedback = document.getElementById('feedback');
  if (input) { input.readOnly = true; input.value = mathData.ans; input.classList.add('correct'); }
  if (feedback) {
    feedback.textContent = `Svaret var ${mathData.ans}. Næste runde er din.`;
    feedback.className   = 'feedback skip-msg';
  }
  document.querySelector('.submit-btn')?.setAttribute('disabled', '');
  updateStreakDisplay();
  _showNextBtn();
}

// ── EVENT DELEGATION ──────────────────────────

document.getElementById('app').addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const { action, payload } = btn.dataset;
  if      (action === 'select-theme')       selectTheme(payload);
  else if (action === 'select-level')       selectLevel(payload);
  else if (action === 'select-story-level') selectStoryLevel(payload);
  else if (action === 'select-math-type')   selectMathType(payload);
  else if (action === 'start-adventure')    startAdventure();
  else if (action === 'go-home')            goHome();
  else if (action === 'next-chapter')       nextChapter();
  else if (action === 'read-story-done')    readStoryDone();
  else if (action === 'back-to-story')      backToStory();
  else if (action === 'toggle-hint')        toggleHint();
  else if (action === 'skip-chapter')       skipChapter();
  else if (action === 'toggle-sound')       toggleSound();
  else if (action === 'replay-theme')       replayTheme();
});

document.getElementById('app').addEventListener('submit', e => {
  if (e.target.id === 'answer-form') { e.preventDefault(); handleAnswerSubmit(); }
});

// ── KEYBOARD SHORTCUTS ────────────────────────

document.addEventListener('keydown', e => {
  // Enter/Space dismisses collectible overlay
  const overlay = document.querySelector('.collect-overlay');
  if (overlay && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault(); overlay.click(); return;
  }
  // Enter in story phase advances to math
  if (e.key === 'Enter' && state.screen === 'chapter' && state.chapterPhase === 'story') {
    e.preventDefault(); readStoryDone(); return;
  }
  // Enter advances to next chapter when answered
  if (e.key === 'Enter' && state.screen === 'chapter' && state.answered) {
    const nb = document.getElementById('next-btn');
    if (nb?.classList.contains('visible')) { e.preventDefault(); nextChapter(); }
  }
});

// ── INIT ──────────────────────────────────────
render();
