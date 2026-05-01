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
  { id: 'mix',   name: 'Random',   icon: '🎲', desc: 'Et mix af alle typer — varierer pr. kapitel' },
  { id: 'plus',  name: 'Plus',     icon: '➕', desc: 'Hele tal: addition' },
  { id: 'minus', name: 'Minus',    icon: '➖', desc: 'Hele tal: subtraktion' },
  { id: 'gange', name: 'Gange',    icon: '✖️', desc: 'Multiplikation' },
  { id: 'div',   name: 'Division', icon: '➗', desc: 'Division' },
  { id: 'brok',  name: 'Brøker',   icon: '½',  desc: 'Brøk-af og brøk-plus' },
  { id: 'geo',   name: 'Geometri', icon: '📐', desc: 'Areal og omkreds' }
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

// Math note + hint steps per resolved type — short, kid-friendly tips.
const TYPE_NOTES = {
  plus:   'Plus = lægge to tal sammen. Svaret er større end begge tal.',
  minus:  'Minus = trække fra. Start med det store tal.',
  gange:  'Gange = det samme antal gentaget mange gange.',
  div:    'Division = dele ligeligt. Prøv: hvad × divisor = totalen?',
  frakof: 'Brøk af: del totalen i nævnerens dele, tag tællerens antal.',
  frakp:  'Brøk-plus med ens nævner: læg kun tællerne sammen.',
  omk:    'Omkreds = 2 × (lang side + kort side) — alle 4 sider.',
  areal:  'Areal = længde × bredde. Svaret er i kvadrat-enheder.',
  blandet:'Gange ALTID FØR plus. Rækkefølge er vigtig!',
  finale: 'Find brøkdelen FØRST, læg derefter det ekstra til.'
};
// ── TYPE-SPECIFIC STORY ARCS ──────────────────
// Ét sammenhængende 10-kapitel eventyr pr. matematik-type.
// Theme-agnostisk: spilles oven på temaets baggrundsbilleder, men historien
// er bygget op om regne-typen, så den giver mening fra start til slut.
const TYPE_ARCS = {

  // ════════ PLUS ════════ "Vi samler kræfter — alt skal lægges sammen"
  plus: [
    { title: 'Optællingen', lvlData: 'plus',
      story: `Holdet starter med to stakke materiale. {n1} stykker i den ene, {n2} i den anden. Nogen siger: »Vi skal vide den fulde sum, før vi går videre.«`,
      q: `Hvor mange stykker er der i alt?`,
      ok: `{answer} præcis. Holdet nikker — vi er klar til næste skridt.` },
    { title: 'Dobbelt Levering', lvlData: 'plus',
      story: `Lastbil 1 ankommer med {n1} kasser. Lastbil 2 dukker op kort efter med {n2} kasser mere. Hele lageret skal fyldes på én gang.`,
      q: `Hvor mange kasser i alt?`,
      ok: `{answer} kasser! Lageret er fyldt — og holdet smiler.` },
    { title: 'To Hold', lvlData: 'plus',
      story: `Det blå hold har {n1} medlemmer. Det røde hold har {n2}. I aften slår de sig sammen til én stor enhed.`,
      q: `Hvor mange er det samlede hold?`,
      ok: `{answer} stærke. Sammen kan de alt.` },
    { title: 'Begge Sider', lvlData: 'plus',
      story: `På højre side står {n1} tilskuere. På venstre side {n2}. Trommerne starter — alle stemmer som én.`,
      q: `Hvor mange tilskuere i alt?`,
      ok: `{answer} stemmer! Stedet ryster.` },
    { title: 'Runde 1 + Runde 2', lvlData: 'plus',
      story: `Du scorer {n1} point i første runde. {n2} point i anden. Tavlen tæller sammen.`,
      q: `Hvad er din samlede score?`,
      ok: `{answer} point — nyt personligt bedste!` },
    { title: 'Daghold + Nathold', lvlData: 'plus',
      story: `Daghold byggede {n1} ting i dag. Natholdet føjede {n2} til. Næste morgen er det hele klar.`,
      q: `Hvor mange er færdige i alt?`,
      ok: `{answer} klar — projektet er reddet.` },
    { title: 'Lager A + Lager B', lvlData: 'plus',
      story: `Lager A har {n1} enheder på hylden. Lager B har {n2}. Vognen skal hente det hele.`,
      q: `Hvor mange enheder skal lastes?`,
      ok: `{answer} enheder — fuld vogn, fuld sejr.` },
    { title: 'Forbered + Show', lvlData: 'plus',
      story: `Opvarmningen tog {n1} minutter. Selve showet varede {n2}. Så var det forbi.`,
      q: `Hvor mange minutter i alt?`,
      ok: `{answer} minutter helt fra start til slut.` },
    { title: 'Holdet Vokser', lvlData: 'plus',
      story: `Du startede med {n1} folk omkring dig. {n2} flere sluttede sig til. Pludselig er det en hel sværm.`,
      q: `Hvor mange er I i alt nu?`,
      ok: `{answer} stærke. Uimodståeligt.` },
    { title: 'Den Store Sum', lvlData: 'plus',
      story: `Hele eventyret kommer ned til to store tal: {n1} og {n2}. De skal lægges sammen for at åbne den sidste dør.`,
      q: `Hvad er totalen?`,
      ok: `{answer} præcis. Døren glider op. I klarede det!` }
  ],

  // ════════ MINUS ════════ "Tab og tilbage — noget forsvinder, hvad er der tilbage?"
  minus: [
    { title: 'Det Første Tab', lvlData: 'minus',
      story: `Holdet startede med {n1} ressourcer i kassen. {n2} blev brugt allerede den første dag.`,
      q: `Hvor mange er tilbage?`,
      ok: `{answer} tilbage. Vi må passe på dem.` },
    { title: 'Skraldet Tog Dem', lvlData: 'minus',
      story: `Der lå {n1} kort på bordet. Vinduet stod åbent. {n2} forsvandt med vinden.`,
      q: `Hvor mange kort er tilbage?`,
      ok: `{answer} kort. Vi kan stadig nå det.` },
    { title: 'Brugt Op', lvlData: 'minus',
      story: `Du havde {n1} forsøg ved start. {n2} er allerede brugt på øvelser.`,
      q: `Hvor mange forsøg har du tilbage?`,
      ok: `{answer} forsøg — gør dem til noget særligt.` },
    { title: 'Returneret', lvlData: 'minus',
      story: `Lageret havde {n1} produkter. Kunderne sendte {n2} tilbage. Resten blev solgt.`,
      q: `Hvor mange blev solgt?`,
      ok: `{answer} solgt. Bogholderiet jubler.` },
    { title: 'Tilskuerne Gik', lvlData: 'minus',
      story: `Salen var fyldt med {n1} mennesker. Da pausen kom, forlod {n2} stedet.`,
      q: `Hvor mange er tilbage til anden halvleg?`,
      ok: `{answer} blev — og de er de mest loyale.` },
    { title: 'Faldt Ned', lvlData: 'minus',
      story: `På hylden stod {n1} kasser. Nogen åbnede døren for hårdt — {n2} faldt ned og knækkede.`,
      q: `Hvor mange er stadig hele?`,
      ok: `{answer} hele. Der er nok til at fortsætte.` },
    { title: 'Den Glemte Kasse', lvlData: 'minus',
      story: `Du tæller {n1} ting i dit udstyr. Men {n2} blev glemt derhjemme.`,
      q: `Hvor mange har du faktisk med?`,
      ok: `{answer} stykker — vi finder en løsning.` },
    { title: 'Færre I Kø', lvlData: 'minus',
      story: `Køen havde {n1} mennesker. {n2} blev trætte og gik hjem.`,
      q: `Hvor mange er der stadig?`,
      ok: `{answer} står stadig. De har is i maven.` },
    { title: 'Næsten Tom', lvlData: 'minus',
      story: `Det startede med {n1} liv. {n2} er allerede gået tabt. Der er ikke meget tilbage.`,
      q: `Hvor mange liv har du tilbage?`,
      ok: `{answer} liv. Hver eneste tæller nu.` },
    { title: 'Lige Før Målstregen', lvlData: 'minus',
      story: `{n1} sekunder tilbage. Du har allerede brugt {n2}. Sidste dryp af tid.`,
      q: `Hvor mange sekunder har du tilbage?`,
      ok: `{answer} sekunder — og du klarer det med margin!` }
  ],

  // ════════ GANGE ════════ "Mønsteret gentager sig"
  gange: [
    { title: 'Lige Mange I Hver', lvlData: 'gange',
      story: `Du arrangerer {n1} rækker med {n2} stole i hver. Alt skal være ens.`,
      q: `Hvor mange stole i alt?`,
      ok: `{answer} stole. Perfekt symmetri.` },
    { title: 'Pakker I Æsker', lvlData: 'gange',
      story: `Holdet pakker {n1} æsker. Hver æske rummer {n2} produkter.`,
      q: `Hvor mange produkter pakkes der?`,
      ok: `{answer} produkter — leveringen er klar.` },
    { title: 'Bordene', lvlData: 'gange',
      story: `Salen har {n1} borde. Til hvert bord skal der stå {n2} pladser.`,
      q: `Hvor mange pladser i alt?`,
      ok: `{answer} pladser. Alle gæster har plads.` },
    { title: 'Kostume Til Hver', lvlData: 'gange',
      story: `{n1} optrædende. Hver bærer {n2} kostumer skiftevis gennem aftenen.`,
      q: `Hvor mange kostumer i alt?`,
      ok: `{answer} kostumer — garderoben er klar.` },
    { title: 'Mønsteret', lvlData: 'gange',
      story: `Designet gentager sig {n1} gange på væggen. Hvert gentag er {n2} fliser.`,
      q: `Hvor mange fliser har du brugt?`,
      ok: `{answer} fliser. Mønsteret er perfekt.` },
    { title: 'Stadion I Blokke', lvlData: 'gange',
      story: `Tribunen er delt i {n1} blokke. Hver blok har {n2} sæder.`,
      q: `Hvor mange sæder i alt?`,
      ok: `{answer} sæder — fuldt udsolgt!` },
    { title: 'Holdene Gentages', lvlData: 'gange',
      story: `Turneringen har {n1} hold. Hvert hold spiller {n2} kampe.`,
      q: `Hvor mange kampe i alt?`,
      ok: `{answer} kampe på programmet.` },
    { title: 'Skala Op', lvlData: 'gange',
      story: `Den lille model er bygget med {n1} dele. Den store model er {n2} gange større.`,
      q: `Hvor mange dele bruges til den store?`,
      ok: `{answer} dele. Stor som ønsket.` },
    { title: 'Storproduktion', lvlData: 'gange',
      story: `Fabrikken kører {n1} skift. Hvert skift producerer {n2} enheder.`,
      q: `Hvor mange enheder bliver lavet på et døgn?`,
      ok: `{answer} enheder. Ordrebogen tømmes.` },
    { title: 'Multiplikatoren', lvlData: 'gange',
      story: `Sidste opgave: {n1} gentages i {n2} gange. Multiplikatoren afgør alt.`,
      q: `Hvad er det endelige tal?`,
      ok: `{answer} — og dermed er gange-eventyret fuldført!` }
  ],

  // ════════ DIVISION ════════ "Del det ligeligt"
  div: [
    { title: 'Del I To Hold', lvlData: 'div',
      story: `Der er {n1} spillere. De skal fordeles på {n2} hold med samme antal i hvert.`,
      q: `Hvor mange er der i hvert hold?`,
      ok: `{answer} pr. hold. Helt fair.` },
    { title: 'Hver Mand Sin Del', lvlData: 'div',
      story: `{n1} chokoladestykker skal deles ligeligt mellem {n2} venner.`,
      q: `Hvor mange får hver?`,
      ok: `{answer} pr. person. Alle smiler.` },
    { title: 'Lige Store Bunker', lvlData: 'div',
      story: `Lageret rummer {n1} kasser. De skal stables i {n2} lige store tårne.`,
      q: `Hvor mange kasser i hvert tårn?`,
      ok: `{answer} kasser pr. tårn. Pænt og lige.` },
    { title: 'Pr. Minut', lvlData: 'div',
      story: `Du producerer {n1} ting på {n2} minutter. Hvor effektiv er du pr. minut?`,
      q: `Hvor mange ting laver du i minuttet?`,
      ok: `{answer} pr. minut. Maskine.` },
    { title: 'Stykker Af Den Lange', lvlData: 'div',
      story: `Et bånd er {n1} cm langt. Det skæres i stykker à {n2} cm.`,
      q: `Hvor mange stykker bliver det til?`,
      ok: `{answer} stykker. Alt går op.` },
    { title: 'Pakkepriser', lvlData: 'div',
      story: `{n1} kr i kassen, der er {n2} pakker. Hver pakke koster det samme.`,
      q: `Hvad koster én pakke?`,
      ok: `{answer} kr pr. pakke. Regnskabet stemmer.` },
    { title: 'Pr. Dag', lvlData: 'div',
      story: `Holdet rejste {n1} km på {n2} dage. Samme strækning hver dag.`,
      q: `Hvor mange km pr. dag?`,
      ok: `{answer} km i døgnet. Stærkt tempo.` },
    { title: 'Skift I Vagten', lvlData: 'div',
      story: `{n1} timer skal dækkes af {n2} vagter. Vagter er lige lange.`,
      q: `Hvor mange timer pr. vagt?`,
      ok: `{answer} timer pr. vagt. Skemaet kører.` },
    { title: 'Borde Pr. Tjener', lvlData: 'div',
      story: `Restauranten har {n1} borde. {n2} tjenere på vagt — alle tager lige mange.`,
      q: `Hvor mange borde pr. tjener?`,
      ok: `{answer} borde pr. tjener. Fair vagtplan.` },
    { title: 'Den Endelige Fordeling', lvlData: 'div',
      story: `Sidste opgave: {n1} ressourcer skal deles ligeligt på {n2} steder.`,
      q: `Hvor mange ender hvert sted med?`,
      ok: `{answer} pr. sted. Eventyret er retfærdigt færdigt.` }
  ],

  // ════════ BRØKER ════════ "Stykker af helheden" (alternates frakof / frakp)
  brok: [
    { title: 'Halvdelen', lvlData: 'frakof',
      story: `Der er {n1} ting på bordet. Du må kun tage {frac} af dem.`,
      q: `Hvor mange tager du?`,
      ok: `{answer} stykker. Resten er til de andre.` },
    { title: 'Læg Brøker Sammen', lvlData: 'frakp',
      story: `En kage er allerede skåret. Du har {f1}, din ven har {f2}.`,
      q: `Hvor stor en del af kagen har I tilsammen?`,
      ok: `{answer} af kagen. Næsten det hele.` },
    { title: 'En Tredjedel', lvlData: 'frakof',
      story: `{n1} kort skal deles. Du beholder {frac} til dig selv.`,
      q: `Hvor mange kort bliver dine?`,
      ok: `{answer} kort. Resten ud.` },
    { title: 'To Brøker, Samme Nævner', lvlData: 'frakp',
      story: `Du fyldte {f1} af tanken. Pumpen tilføjede {f2} mere.`,
      q: `Hvor fuld er tanken nu?`,
      ok: `{answer} fuld. Næsten klar.` },
    { title: 'Tre Fjerdedele', lvlData: 'frakof',
      story: `Forsamlingen tæller {n1} mennesker. {frac} af dem stemte ja.`,
      q: `Hvor mange stemte ja?`,
      ok: `{answer} stemte ja. Klart flertal.` },
    { title: 'Sammenlæg', lvlData: 'frakp',
      story: `På scenen lagde du {f1} af setlisten. Holdet tilføjede {f2}.`,
      q: `Hvor stor en del af showet er klar?`,
      ok: `{answer} klar. Resten flyder vi igennem.` },
    { title: 'Større Brøkdel', lvlData: 'frakof',
      story: `{n1} fans i hallen. {frac} fik adgang til VIP-zonen.`,
      q: `Hvor mange er i VIP?`,
      ok: `{answer} VIP'er — de bedste pladser.` },
    { title: 'Læg Sammen Igen', lvlData: 'frakp',
      story: `Banen er færdigmalet — du tog {f1}, makkeren tog {f2}.`,
      q: `Hvor stor en del er malet?`,
      ok: `{answer} malet. Bare en lille rest.` },
    { title: 'Få Det Hele', lvlData: 'frakof',
      story: `Skatten består af {n1} mønter. Du må tage {frac} med dig.`,
      q: `Hvor mange mønter får du?`,
      ok: `{answer} mønter. Lommen tung.` },
    { title: 'Den Sidste Brøk', lvlData: 'frakp',
      story: `Du har samlet {f1} af kortene. I sidste øjeblik finder du {f2} mere.`,
      q: `Hvor stor en del har du nu?`,
      ok: `{answer} af det hele. Eventyret slutter med flag.` }
  ],

  // ════════ GEOMETRI ════════ "Mål og figur" (alternates omk / areal)
  geo: [
    { title: 'Den Første Kant', lvlData: 'omk',
      story: `Et rum måler {n1} meter på den ene led, {n2} på den anden. Hegnet skal hele vejen rundt.`,
      q: `Hvor mange meter hegn skal du bruge?`,
      ok: `{answer} meter — perfekt indpakket.` },
    { title: 'Areal Af Gulvet', lvlData: 'areal',
      story: `Gulvet skal lægges. Rummet er {n1} × {n2} meter.`,
      q: `Hvor stort er arealet i kvadratmeter?`,
      ok: `{answer} m². Bestilt og leveret.` },
    { title: 'Scenen', lvlData: 'omk',
      story: `Scenen er en rektangel: {n1} m lang og {n2} m bred. Lyskæden løber rundt om hele kanten.`,
      q: `Hvor lang skal lyskæden være?`,
      ok: `{answer} meter lyskæde. Det glimter.` },
    { title: 'Banen', lvlData: 'areal',
      story: `Den nye bane er {n1} × {n2} meter. Den skal beklædes med kunstgræs.`,
      q: `Hvor mange m² græs skal du bestille?`,
      ok: `{answer} m². Banen åbner i weekenden.` },
    { title: 'Storsalen', lvlData: 'omk',
      story: `Storsalen er {n1} m × {n2} m. Snoren skal trækkes hele vejen rundt for at afgrænse området.`,
      q: `Hvor lang skal snoren være?`,
      ok: `{answer} m snor — alle holdes ude.` },
    { title: 'Tæppet', lvlData: 'areal',
      story: `Det røde løber er {n1} m bredt og {n2} m langt.`,
      q: `Hvor mange m² tæppe?`,
      ok: `{answer} m². Stjernerne kan komme.` },
    { title: 'Rammen', lvlData: 'omk',
      story: `Plakaten måler {n1} × {n2} cm. Du laver en ramme der lige passer rundt.`,
      q: `Hvor mange cm liste skal du have?`,
      ok: `{answer} cm liste. Den ser fed ud.` },
    { title: 'Plads På Stadion', lvlData: 'areal',
      story: `Den øvre del af stadion er {n1} × {n2} meter.`,
      q: `Hvor mange m² er der til tribuner?`,
      ok: `{answer} m² — masser af plads til fans.` },
    { title: 'Den Endelige Hegnsplan', lvlData: 'omk',
      story: `Det sidste område er {n1} × {n2} m. Hegn hele vejen rundt — sidste tråd.`,
      q: `Hvor mange meter hegn?`,
      ok: `{answer} meter. Området er sikret.` },
    { title: 'Det Endelige Areal', lvlData: 'areal',
      story: `Den sidste plade måler {n1} × {n2} m og skal lægges som gulv.`,
      q: `Hvad er arealet?`,
      ok: `{answer} m². Eventyret er bygget færdigt.` }
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
  plus:   ['Find de to tal.', 'Læg dem sammen med plus.', 'Svaret er større end begge?'],
  minus:  ['Start med det store tal.', 'Træk det lille fra.', 'Svaret er mindre end startallet.'],
  gange:  ['Brug gange-tabellen.', 'n1 grupper med n2 i hver.', 'Svaret er større end begge tal.'],
  div:    ['Del totalen ligeligt.', 'Hvad × divisor = total?', 'Prøv: total ÷ antal.'],
  frakof: ['Del i nævnerens dele.', 'Tag tællerens antal dele.', 'Svar × nævner = totalen?'],
  frakp:  ['Er nævnerne ens?', 'Læg kun tællerne sammen.', 'Nævneren forbliver den samme.'],
  omk:    ['Et rektangel: 2 lange + 2 korte.', '2 × (lang + kort) = ?', 'Tæl alle 4 sider.'],
  areal:  ['Gang de to mål.', 'Areal = l × b.', 'Svaret er i kvadrat-enheder.'],
  blandet:['Gange-stykket FØRST!', 'Derefter plus.', 'Rækkefølge er alt!'],
  finale: ['Brøkdelen FØRST.', 'Del i dele, tag tællerens antal.', 'Læg det ekstra til til sidst.']
};

// Returns 0–4 — consistent per theme+chapter, different across themes
function getVariantIdx(themeId, chapterIdx) {
  const themeOrder = ['kpop','gaming','football','ronaldo','brawlstars','anime','jjk','geography'];
  const tIdx = Math.max(0, themeOrder.indexOf(themeId));
  return (tIdx * 7 + chapterIdx * 3) % 5;
}

// Shared math tip per chapter position (0–9)
const SHARED_MATH_NOTES = [
  'Plus = lægge to tal sammen. Svaret er større end begge tal.',
  'Minus = trække fra. Start med det store tal.',
  'Gange = det samme antal gentaget mange gange.',
  'Division = dele ligeligt. Prøv: hvad × divisor = totalen?',
  'Brøk af: del i nævnerens dele, tag tællerens antal.',
  'Brøk-plus med ens nævner: læg kun tællerne sammen.',
  'Omkreds = 2 × (lang side + kort side) — alle 4 sider.',
  'Areal = længde × bredde. Svaret er i kvadrat-enheder.',
  'Gange ALTID FØR plus. Rækkefølge er vigtig!',
  'Find brøkdelen FØRST, læg derefter det ekstra til.'
];

// Shared hint steps per chapter position (0–9)
const SHARED_HINTS = [
  ['Find de to tal.', 'Læg dem sammen med plus.', 'Svaret er større end begge?'],
  ['Start med det store tal.', 'Træk det lille fra.', 'Svaret er positivt og mindre end startallet.'],
  ['Grupper: n1 × n2.', 'Brug gange-tabellen.', 'Svaret er større end begge tal.'],
  ['Del totalen ligeligt.', 'Hvad × divisor = total?', 'Prøv: total ÷ antal.'],
  ['Del i nævnerens dele.', 'Tag tællerens antal dele.', 'Svar × nævner = totalen?'],
  ['Er nævnerne ens?', 'Læg kun tællerne sammen.', 'Nævneren forbliver den samme.'],
  ['Et rektangel: 2 lange + 2 korte sider.', '2 × (lang + kort) = ?', 'Tæl alle 4 sider.'],
  ['Gang de to mål.', 'Areal = l × b.', 'Svaret er i kvadrat-enheder.'],
  ['Gange-stykket FØRST!', 'Derefter plus.', 'Rækkefølge er alt!'],
  ['Brøkdelen FØRST.', 'Del i dele, tag tællerens antal.', 'Læg det ekstra til til sidst.']
];

// ── GAME DATA ─────────────────────────────────

const GAME_DATA = {

  // ════════════════════════════════════════════
  //  K-POP  (Hearts2Hearts · Stray Kids · Babymonster)
  // ════════════════════════════════════════════
  kpop: {
    id: 'kpop', name: 'K-POP', icon: '⭐',
    tagline: 'Scene, lys og den største nat i K-POP',
    endingTrophy: '🌟', endingTitle: 'Showet Er Legenden',
    endingStory: `Der er øjeblikke, man husker på en bestemt måde.

Lyset eksploderede — ikke pænt og velplanlagt, men som om scenen endelig fik lov til at ånde. Tusindvis af armbånd tændte på én gang, alle i takt med musikken. YUNA stoppede midt i et vers og lo bare. Ingenting gik forkert. Alt gik forkert og alligevel rigtigt, på den bedste mulige måde.

Bagefter sendte PARK én besked til hele holdet: »Alle tallene passede. Hvert eneste et.« Det var hans måde at sige tak.`,
    collectibles: [
      { name: 'YUNA Photocard',      icon: '💗', desc: 'Signeret bag scenen.' },
      { name: 'Bang Chans Øvekort',  icon: '📋', desc: 'Det eneste der overlevede ventilatoren.' },
      { name: 'LILIs Designskitse',  icon: '✏️', desc: 'Aldrig et tal for lidt.' },
      { name: 'JAKEs Clipboard',     icon: '📎', desc: 'Præcis ét nik per dag.' },
      { name: 'MINA Fan-Gave',       icon: '👜', desc: 'Lagt ud med forsiden op.' },
      { name: 'SOL Studio Nøgle',    icon: '🔑', desc: 'Musikken var parat.' },
      { name: 'PARKs Lysmålebånd',   icon: '📏', desc: 'Præcis til det sidste meter.' },
      { name: 'Glow-Tæppe',          icon: '✨', desc: 'Smukkere end alle troede.' },
      { name: 'MIN-JI VIP Pas',      icon: '💳', desc: 'Et sekund i elevatoren.' },
      { name: 'Hearts2Hearts Scene', icon: '🎭', desc: 'Den nat alle husker.' }
    ],
    chapters: [
      {
        title: 'Lyset Vågner',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Den store kasse med armbånd kom klokken 23.14. YUNA vidste det, fordi hun ikke havde sovet.

{n1} lyserøde armbånd lå i den ene halvdel — stablet præcist, som om de vidste, de var vigtige. {n2} blå armbånd lå i den anden. Kassen lugtede svagt af vanille. Ingen vidste hvorfor.

»Lyssystemet aktiveres kun med den korrekte totalsum,« sagde PARK med den stemme, han bruger, når han er nervøs men prøver at lyde rolig. »Det er bare... programmeringen.«`,
        questionTemplate: `Der er {n1} lyserøde og {n2} blå armbånd. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} armbånd! Et klik. Lyset tænder — og MINA siger: 'Godt.' Det er det bedste, hun siger.`,
        storyBonus: `I det øjeblik lyset tændte, var der ingen i bygningen, der ikke holdt vejret.`
      },
      {
        title: 'De Manglende Trin',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Stray Kids havde lagt {n1} øvekort ud på rehearsal-gulvet. Hvert kort viste ét bestemt dansétrin — og kun ét. Det var systemet, og systemet virkede.

Så tændte ventilationsanlægget. Ingen ved hvornår præcis. {n2} kort sejlede lydløst ud gennem risten og forsvandt et sted i ventilationssystemet, sikkert meget tilfredse med sig selv.

Bang Chan stod og kiggede på hullet i kortene. »Vi kan ikke lave finalen,« sagde han, »før vi ved, hvad vi faktisk har.«`,
        questionTemplate: `Stray Kids startede med {n1} øvekort. {n2} blæste væk. Hvor mange er der tilbage?`,
        successMsgTemplate: `{answer} kort! Nok til finalen — men kun hvis alle husker resten udenad.`,
        storyBonus: `Bang Chan samlede de tilbageværende kort op fra gulvet, ét for ét, som om hvert af dem var et løfte.`
      },
      {
        title: 'Kostumernes Hemmelighed',
        idx: 2, lvlData: 'gange',
        storyTemplate: `LILI havde aldrig i sit liv sagt 'det er godt nok.' Det var ikke noget hun gik op i — det var bare ikke i hendes natur.

Babymonster har {n1} dansere til verdensturneen. Hvert eneste show kræver {n2} kostumer til hver — ét pr. nummer. LILI stod med sin notesbog og ventede.

»Hvis jeg bestiller ét for lidt,« sagde hun stille, »er det ikke scenearrangementet der fejler. Det er mig.« Hun sagde det roligt. Det var det der var skræmmende.`,
        questionTemplate: `{n1} dansere, {n2} kostumer til hver. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} kostumer! LILI skriver tallet ned uden at sige noget. Det betyder, det er rigtigt.`,
        storyBonus: `LILI skar aldrig i stof, inden hun kendte det nøjagtige antal. Det er ikke forsigtighed. Det er respekt.`
      },
      {
        title: 'Busbagagen',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} fans i en lang, ophidset kø foran arenaen. Sikkerhedschef JAKE havde {n2} busser klar — og en whiteboard-markør og en meget bestemt mening om, hvordan tingene skal gøres.

»Præcis det samme antal i hver bus,« sagde han. »Ikke én mere. Ikke én mindre. Det er ikke forhandleligt — det er matematik.«

En fan bagerst i køen råbte noget om, at hun gerne ville sidde i bus 1. JAKE kiggede ikke op fra sin clipboard.`,
        questionTemplate: `{n1} fans fordeles ligeligt på {n2} busser. Hvor mange fans pr. bus?`,
        successMsgTemplate: `{answer} pr. bus! JAKE nikker. Det er det eneste nik han giver hele aftenen.`,
        storyBonus: `Bagerst i køen stod en pige, der havde sparet op til sin billet i seks måneder. Hun kom ind.`
      },
      {
        title: 'Merchandise-Mysteriet',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Stray Kids-butikken lugtede af nyt plastik og noget der sandsynligvis var begejstring.

{n1} merchandise-tasker hang på skinnen langs væggen. MINA stod med korslagte arme og kiggede på dem med en blanding af stolthed og bekymring — for hun var ved at give {frac} af dem væk til fans, der havde stået udenfor parkeringspladsen og hørt musikken gennem betonvæggene.

»De var der alligevel,« sagde MINA. »Det tæller.«`,
        questionTemplate: `{n1} tasker i alt. Hvad er {frac} af {n1}?`,
        successMsgTemplate: `{answer} tasker! Et sted udenfor parkeringspladsen venter nogen, der snart får en overraskelse.`,
        storyBonus: `MINA foldede ikke de donerede tasker — hun lagde dem ud med forsiden op, så alle kunne se mærket.`
      },
      {
        title: 'Beatmasteren',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `SOL sov ikke. Det var ikke en beslutning — det var bare hvad der skete, når musikken ikke ville lade ham være.

Han brugte {f1} af natten på at mixe bassen, indtil den sad præcist der, hvor mavens bund er. Derefter {f2} af natten på vokalerne — YUNA's stemme, lagvist over sig selv, som om der var fire af hende i rummet på én gang.

Klokken 6.03 om morgenen løftede han headphonesene og kiggede på det mørke studie. »Okay,« sagde han til ingen. Det var nok.`,
        questionTemplate: `SOL brugte {f1} på bas og {f2} på vokaler. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af natten! Showet har sit beat nu. SOL falder i søvn med et smil.`,
        storyBonus: `SOL lukkede studiedøren stille bag sig. Han ville ikke vække nogen. Musikken var parat. Og det var nok.`
      },
      {
        title: 'Scenen Måles Op',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Klokken er 2 om natten, og PARK måler scenen for tredje gang. Det er ikke fordi han er usikker. Det er fordi lysslangen koster 340 kr. per meter, og der er ingen grund til at bestille et eneste meter for meget — eller for lidt.

Scenen er {n1} meter lang og {n2} meter bred. Hele kanten skal lyse. Hvert hjørne. Hvert millimeter.

»Hele vejen rundt,« siger PARK ud i det tomme mørke. Scenen er tavs og ventende.`,
        questionTemplate: `Scenen er {n1} m lang og {n2} m bred. Hvad er dens omkreds?`,
        successMsgTemplate: `{answer} meter! PARK ringer til leverandøren. Det er midt om natten. Det er fint.`,
        storyBonus: `PARK tog billeder af scenen fra alle vinkler, inden lysslangen kom. Han ville huske den, inden den ændredes.`
      },
      {
        title: 'Gulvets Glow',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Det lysende gulvtæppe kom i en trækasse, der vejede som en hemmelighed.

Stray Kids-scenen: {n1} meter lang, {n2} meter bred. Tæppet skal dække hele scenefladen — og når lyset rammer det rigtigt, ser det ud som om danserne flyver hen over det.

»Jeg har brug for arealet,« sagde teknikeren SEON. »Ikke en cirka-mening. Arealet.«`,
        questionTemplate: `Tæppet er {n1} m langt og {n2} m bredt. Hvad er arealet i m²?`,
        successMsgTemplate: `{answer} kvadratmeter! Trækassen åbnes. Tæppet rulles ud. Det er endnu smukkere end alle troede.`,
        storyBonus: `Det lysende tæppe skinnede svagt i kassen, som om det allerede vidste, det var vigtigt. Det var det.`
      },
      {
        title: 'Billetter og Bonus',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `MIN-JI havde allerede sin jakke på. Hun er aldrig sen — hun er præcis, og der er forskel.

Babymonster-arenaen har {n1} VIP-sektioner med {n2} sæder i hver. Dertil {n3} ståpladser bagerst til pressefotograferne, der altid er der og altid har for mange kameraer.

»Jeg har {n3} sekunder i elevatoren,« sagde MIN-JI. »Giv mig totalen inden dørene lukker.«`,
        questionTemplate: `{n1} sektioner × {n2} sæder + {n3} ståpladser. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} pladser! MIN-JI logger det og træder ind i elevatoren. Dørene lukker.`,
        storyBonus: `MIN-JI stoppede et sekund i elevatoren, inden dørene lukkede. Det sekund hørte ingen til.`
      },
      {
        title: 'Den Nat Alle Husker',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Det er den nat, ingen nogensinde glemmer.

Hearts2Hearts afslutter verdensturneen. {frac} af de {n1} fans, der vandt backstage-pas, er mødt op — de andre sendte blomster og undskyldningsbeskeder. De {n2} crew-medlemmer er der alle, også dem der sagde de ville tage fri.

YUNA kigger ud over rummet fra kulissen og er stille et øjeblik. »Hvor mange er vi?« hvisker hun. Det er det vigtigste spørgsmål hun stiller den aften.`,
        questionTemplate: `{frac} af {n1} fans + {n2} crew. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} mennesker backstage! YUNA lukker øjnene et sekund. Derefter går hun ud på scenen.`,
        storyBonus: `YUNA tog et dybt åndedrag bag scenetæppet. Det er det eneste tidspunkt, hun er bange. Og det er okay.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  GAMING  (KODA · BYTE · PIXEL QUEST)
  // ════════════════════════════════════════════
  gaming: {
    id: 'gaming', name: 'GAMING', icon: '🎮',
    tagline: 'En kode ad gangen — og VORTEX kan stoppes',
    endingTrophy: '🏆', endingTitle: 'KODA Har Vundet',
    endingStory: `VORTEX faldt. Ikke langsomt og dramatisk, som bosserne plejer i film. Bare stille og hurtigt — som et tal, der endelig passer ind i ligningen.

Et øjeblik var der ingenting. Bare KODA og det tomme niveau og en ensom cursor der blinkede.

Derefter sagde BYTE: »PIXEL QUEST er fuldført.« En pause der varede lidt længere end nødvendigt. »Du var den bedste kode, jeg har analyseret.« Det var den eneste gang BYTE sagde noget smukt. KODA gemte det.`,
    collectibles: [
      { name: 'BYTEs Første Protokol', icon: '💾', desc: '"Godt." Det er første gang.' },
      { name: 'KODAs Nødskjold',       icon: '🛡️', desc: 'Holdt mod alt.' },
      { name: 'GLITCHZOR Token',       icon: '👾', desc: 'Bevis for at have stået imod.' },
      { name: 'Guld-Gem Kiste',        icon: '💎', desc: 'Den lukkede sig retfærdigt.' },
      { name: 'Hemmelig Formel #47',   icon: '📜', desc: 'Den vigtigste formel.' },
      { name: 'Energikrystal',         icon: '⚡', desc: 'Grønt for første gang i timer.' },
      { name: 'Platform Master Badge', icon: '🏗️', desc: 'Genopbygget fra bunden.' },
      { name: 'Diamant Fundament',     icon: '💠', desc: '"Perfekt." Første gang.' },
      { name: 'Legendary Quest Badge', icon: '🏅', desc: 'Det lille quest. Det vigtigste.' },
      { name: 'VORTEXs Øje',          icon: '👁️', desc: 'Hvad så det, inden det faldt?' }
    ],
    chapters: [
      {
        title: 'Den Første Portal',
        idx: 0, lvlData: 'plus',
        storyTemplate: `KODA åbnede spillet klokken 15.42 en torsdag — og ingenting var, som det plejede at være.

Lageret var mørkt og stille. {n1} guld-coins lå i hjørnet og ventede. {n2} coins gemte sig bag en dør, der blinkede gult — den slags dør, man ikke bør ignorere, men heller ikke bør åbne for hurtigt.

»Portal kræver totalsummen,« sagde BYTE. »Ikke de fleste af mønterne. Alle af dem.«`,
        questionTemplate: `{n1} coins i lageret + {n2} bag den blinkende dør. Hvad er totalen?`,
        successMsgTemplate: `{answer} coins! Portalen blinker grønt. BYTE siger: 'Godt.' Det er første gang.`,
        storyBonus: `Portalen stod åben i præcis syv sekunder. KODA gik igennem i det sjette. Det var tæt nok.`
      },
      {
        title: 'Shield-Krisen',
        idx: 1, lvlData: 'minus',
        storyTemplate: `{n1} shield-enheder. Det lød som meget. Det lød som nok.

Det er den slags ting, man tænker, inden man møder DRONESWARM-7. Angrebet tog {n2} enheder på under seks sekunder — BYTE tjekkede det tre gange bagefter. Shield-måleren blinkede rødt og lød som noget, der virkelig mente det.

»Niveau?« spurgte BYTE. Stille. Roligt. Som om det rigtige tal kunne ændre situationen.`,
        questionTemplate: `KODA startede med {n1} shield. Angrebet tog {n2}. Hvad er shield-niveauet nu?`,
        successMsgTemplate: `Shield-niveau {answer}! Nødporten holder. BYTEs stemme lyder en smule lettet — selvom BYTE aldrig indrømmer det.`,
        storyBonus: `BYTE holdt en pause på 0,3 sekunder, inden den rapporterede skaden. Den pause betød noget.`
      },
      {
        title: 'Boss-Arméen',
        idx: 2, lvlData: 'gange',
        storyTemplate: `GLITCHZOR sendte bølger ligesom vejret sender regn — vilkårligt, upersonligt, og meget af det ad gangen.

{n1} bølger. {n2} fjender i hver. BYTE begyndte at sige: »Det svarer til—« og stoppede bevidst midt i sætningen. BYTE ville gerne have, at KODA selv sagde det. Det er den slags AI, BYTE er.

KODA tog et dybt åndedrag. Det er ikke muligt i et spil. Kroppen glemmer det sommetider.`,
        questionTemplate: `{n1} bølger med {n2} fjender i hver. Hvad er det samlede antal fjender?`,
        successMsgTemplate: `{answer} fjender! KODA hæver skjoldet. Strategien kan laves nu.`,
        storyBonus: `KODA talte fjenderne. Det er det, man gør, når man ikke har tid til at være bange.`
      },
      {
        title: 'Loot-Fordelingen',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} gems. Det lyder simpelt — men det er ikke simpelt, når man er {n2} spillere, der alle kiggede på kisten på præcis samme tid.

Gems er ikke bare valuta i PIXEL QUEST. De er bevis på, at man var der og overlevede. Den digitale kontrakt, paragraf 7: »Alle gems fordeles ligeligt.« Det er lov. Det er retfærdighed.

KODA tog den første.`,
        questionTemplate: `{n1} gems til {n2} spillere. Hvad får hver spiller?`,
        successMsgTemplate: `{answer} gems til alle! Et lysglimt fra kisten som et slags tak.`,
        storyBonus: `Kisten lukkede sig igen, uden lyd. Som om den vidste, det var fair.`
      },
      {
        title: 'Magiens Kilde',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Biblioteket var fuldt af formularer og støv, der ikke rigtig var støv. BYTE kaldte det »pixel-partikler.« KODA sagde det lignede støv.

{n1} formularer. De fleste var grå, lukkede, uvigtige. Men {frac} af dem var aktive — oplyste, vibrerende, som om de kendte en hemmelighed, de gerne ville dele. De indeholdt koden til udgangen.

»Aktive formularer er nøglen,« sagde BYTE. Uret i hjørnet tikkede. Nu lød det anderledes.`,
        questionTemplate: `Hvad er {frac} af {n1} formularer?`,
        successMsgTemplate: `{answer} aktive formularer! En af dem åbner sig. Koden viser sig.`,
        storyBonus: `Et af de aktive formularer var anderledes end de andre. KODA gemte det separat. Det var det vigtigste.`
      },
      {
        title: 'Energi-Måleren',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Energimåleren sad midt i skærmen og nægtede at blive ignoreret.

{f1} brugt på løb. {f2} på angreb. En lille advarselsstribe blinkede: »Læg mig sammen. Ellers stopper jeg med at oplade dig.« Det var meget direkte for en energimåler.

»Den er ment alvorligt,« sagde BYTE.`,
        questionTemplate: `{f1} på løb + {f2} på angreb. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer}! Opladeren starter med et hum. KODA kan trække vejret igen.`,
        storyBonus: `Energimåleren ramte grønt for første gang i timer. KODA mærkede det i hele kroppen.`
      },
      {
        title: 'Platformens Grænse',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Platformen var {n1} blokke lang og {n2} blokke bred — og KODA elskede den. Det var det første sted i PIXEL QUEST, der føltes som et hjem.

Derefter kom fjenderne langs kanterne. Kravlende, rolige, som om de havde al tid i verden.

»En mur,« sagde BYTE. »Hele vejen rundt. Vi behøver det samlede antal blokke.«`,
        questionTemplate: `Platformen er {n1} blokke lang og {n2} bred. Hvad er dens omkreds?`,
        successMsgTemplate: `{answer} blokke! Muren rejser sig. Platformen holder.`,
        storyBonus: `Den første blok i muren sad ikke rigtigt. KODA fjernede den og startede forfra. Det er det, man gør.`
      },
      {
        title: 'Basens Fundament',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Diamant-blokke var det smukkeste i hele PIXEL QUEST. Det var KODAs mening, og BYTE var enig — selvom BYTE sagde det var »en vurdering baseret på visuel data.«

Gulvet til den nye base: {n1} blokke langt, {n2} blokke bredt. KODA stod med sin tablet og vidste: dette gulv er alt. Hvis det er forkert, er basen forkert.

»Arealet,« sagde BYTE stille. »For en sikkerheds skyld.«`,
        questionTemplate: `Gulvet er {n1} blokke langt og {n2} bredt. Hvad er arealet?`,
        successMsgTemplate: `{answer} blokke! Fundamentet lægges. BYTE siger: 'Perfekt.' Det er første gang BYTE siger det.`,
        storyBonus: `BYTE registrerede, at KODAs hænder rystede da fundamentet var lagt. Det noterede den ikke videre. Det behøvede den ikke.`
      },
      {
        title: 'Experience Points',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `{n1} quests på én dag. Det var ikke planen — men KODA stoppede ikke, fordi det hvert gang føltes som: bare én mere.

Hvert quest gav {n2} XP. Og øverst på skærmen i lille tekst: +{n3} bonus-XP for perfekt gennemførelse. BYTE sagde det med en stemme, der lød en smule stolt.

KODA svarede ikke. Men noget i brystet løftede sig lidt.`,
        questionTemplate: `{n1} quests × {n2} XP + {n3} bonus. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} XP! En dungeon-dør åbner sig, som ingen har set åbne sig før.`,
        storyBonus: `Det var ikke det store quest der betød mest. Det var det lille, det næstsidste, det stille.`
      },
      {
        title: 'The Final Boss',
        idx: 9, lvlData: 'finale',
        storyTemplate: `VORTEX var bare... der. Det behøvede ikke sige noget. Det var stort nok.

»Ét angreb,« sagde BYTE — stille, som altid, men med noget i stemmen denne gang. »Præcis {frac} af dine {n1} baseskadepunkter, plus {n2} bonuspoint fra de power-ups du gemte.« En kort pause. »Gem dem ikke denne gang.«

KODA kiggede på VORTEX. Løftede våbnet.`,
        questionTemplate: `{frac} af {n1} skadepunkter + {n2} bonuspoint. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer}! Et lysglimt. Et brag. VORTEX falder. Og BYTE siger ingenting — for første gang.`,
        storyBonus: `VORTEX kiggede på KODA et enkelt sekund, inden det faldt. Ingen ved, hvad det så. Og det er måske det bedste.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  FODBOLD  (FCK · MIKKEL · LUCAS · DITTE)
  // ════════════════════════════════════════════
  football: {
    id: 'football', name: 'FODBOLD', icon: '⚽',
    tagline: 'Stadion, stille øjeblikke og det afgørende spark',
    endingTrophy: '🥇', endingTitle: 'FCK Vinder Finalen',
    endingStory: `LUCAS løb mod bolden. Alt andet holdt op med at eksistere — tribunen, lyden, vejret, og alle de øjeblikke der havde ført hertil.

Bolden gik i nettet med en lyd, som ingen hørte, fordi alle skreg.

Bagefter satte MIKKEL sig alene på det tomme stadion og kiggede ud på den grønne bane en lang tid. Til sidst sagde han stille: »Det var godt regnet.« DITTE hørte det. Hun sagde det videre.`,
    collectibles: [
      { name: 'FCK Kampprogram',      icon: '📰', desc: 'Den nat tribunen bruste.' },
      { name: 'Billet #1',            icon: '🎫', desc: 'Til den der ventede fra kl. 7.' },
      { name: 'MIKKELs Træningsplan', icon: '📋', desc: 'Session 3 har to streger under.' },
      { name: 'Statistikbog',         icon: '📊', desc: 'En kopi tages altid med hjem.' },
      { name: 'Tackle-Video',         icon: '🎞️', desc: 'Det 13. minut. Igen og igen.' },
      { name: 'FREJs GPS-ur',         icon: '⌚', desc: '0,5 sekunder inden.' },
      { name: 'OSCARs Hansker',       icon: '🧤', desc: 'Klar klokken 14.37.' },
      { name: 'FCK Banegodkendelse',  icon: '🏟️', desc: 'Et nyt kapitel.' },
      { name: 'Topscorerpokal',       icon: '🏆', desc: 'En historisk sæson.' },
      { name: 'Straffesparksbolden',  icon: '⚽', desc: 'LUCAS sparkede. FCK vandt.' }
    ],
    chapters: [
      {
        title: 'Stadionets Brus',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Det var en af de dage, hvor luften på stadion lugter af noget der er ved at ske.

{n1} fans i den nordlige tribune med røde tørklæder. {n2} fans i den sydlige med hvide bannere og den slags stilhed, der kun opstår, når man venter på noget man virkelig vil se.

Kaptajn LUCAS kiggede ud fra omklædningsrummet. Træner MIKKEL sagde: »Man kender sine fans. Altid. Det er det første.«`,
        questionTemplate: `{n1} nordfans og {n2} sydfans. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} fans! MIKKEL skriver det ned med et smil. Det er det eneste smil han giver inden kamp.`,
        storyBonus: `LUCAS lukkede omklædningsrumsdøren og stod stille med øjnene lukkede i ti sekunder. Det er hans ritual. Nu er det tid.`
      },
      {
        title: 'De Manglende Billetter',
        idx: 1, lvlData: 'minus',
        storyTemplate: `{n1} billetter. Det lød som rigeligt — men billetter er en af de ting, der har det med at forsvinde stille og roligt, inden man opdager det.

{n2} var allerede gået til pressen og sponsorerne og folk, der kendte folk. Salgschef SOFIA stod ved lugen og kiggede på den lange kø udenfor — en kø der ikke vidste, den måske ikke kom ind.

»Hurtigt,« sagde hun. »Hvad har vi faktisk tilbage?«`,
        questionTemplate: `{n1} billetter minus {n2} brugte. Hvor mange er der tilbage?`,
        successMsgTemplate: `{answer} billetter! SOFIA åbner lugen. Køen begynder at bevæge sig.`,
        storyBonus: `Den første fan i køen havde stået der siden klokken 7. SOFIA vidste det. Hun åbnede lugen med det samme.`
      },
      {
        title: 'Træningsturen',
        idx: 2, lvlData: 'gange',
        storyTemplate: `MIKKEL tegnede cirkler på whiteboardet. Store cirkler, der hang i luften som løfter.

»{n1} spillere,« sagde han. »{n2} ekstra sessioner til hver, inden vi er klar. Det er det, der er forskel på at tabe og vinde på mandag.«

Assistent DITTE holdt blyanten klar og ventede. MIKKEL er god til at vente. DITTE er god til at skrive.`,
        questionTemplate: `{n1} spillere skal have {n2} sessioner hver. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} sessioner! DITTE booker banerne. MIKKEL tegner en cirkel mere.`,
        storyBonus: `DITTE bookede banerne og skrev SESSION 3 med to streger under. Den session er altid den vigtigste.`
      },
      {
        title: 'Mål-Statistikken',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} mål på tværs af de seneste kampe. MIKKEL ville fordele dem ligeligt på {n2} hold i statistikbogen — for at se, hvem der egentlig scorede, og hvem der bare stod tæt på.

»Kun med præcise tal kan man kende sig selv,« sagde han. Det er den slags sætning, man ikke kan argumentere imod, og som MIKKEL siger mindst én gang om ugen.`,
        questionTemplate: `{n1} mål fordeles ligeligt på {n2} hold. Hvad er mål pr. hold?`,
        successMsgTemplate: `{answer} mål per hold! Statistikken er ren. MIKKEL er tilfreds.`,
        storyBonus: `MIKKEL lagde sin pen fra sig og kiggede på statistikken et øjeblik. Derefter tog han en kopi med hjem.`
      },
      {
        title: 'Tacklernes Hemmelighed',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Analysecoach TORBEN har set optagelserne tre gange. Ikke fordi han er usikker — men fordi nogle ting fortjener at blive set tre gange.

{n1} tackles fra de seneste kampe. {frac} af dem var fuldstændigt perfekte: timing, vinkel, og den sjældne evne til at tage bolden uden at ramme manden.

»Kun de perfekte tackles bygger vi strategien på,« sagde TORBEN. »Og jeg vil vide det nøjagtige antal.«`,
        questionTemplate: `{frac} af {n1} tackles var perfekte. Hvad er {frac} af {n1}?`,
        successMsgTemplate: `{answer} perfekte tackles! TORBEN skriver dem ind i taktikbogen med to streger under.`,
        storyBonus: `TORBEN slog optagelsen fra det trettende minut til igen. Den tackle var noget særligt. Han vidste det straks.`
      },
      {
        title: 'Kamptiden',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `GPS-uret på FREJs arm registrerer alt: skridt, fart, position — og de {f1} af kampen han brugte foran mål i angrebsposition, klar til at modtage.

Og de {f2} han brugte midt på banen, lavt og roligt, som en der ved, at kampe afgøres i de øjeblikke ingen kigger.

TORBEN lagde brikkerne sammen. »Hvad er hans samlede aktive andel?«`,
        questionTemplate: `{f1} i angreb og {f2} på midtbanen. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af kampen aktiv! TORBEN nikker. »Det er ham vi bygger finalen på.«`,
        storyBonus: `GPS-uret registrerede, at FREJ stoppede et halvt sekund inden hans bedste afleveringer. Det er hemmeligheden.`
      },
      {
        title: 'Målmandens Ritual',
        idx: 6, lvlData: 'omk',
        storyTemplate: `OSCAR opvarmer altid på samme måde: én omgang rundt om straffesparksfeltet. Hverken mere eller mindre. Det er ikke overtro, siger han. Det er matematik.

Feltet er {n1} meter langt og {n2} meter bredt. OSCAR stod i hjørnet og kiggede ud over græsset. Beregnede distancen. Trak vejret. Løb.`,
        questionTemplate: `Feltet er {n1} m langt og {n2} m bredt. Hvad er feltets omkreds?`,
        successMsgTemplate: `{answer} meter! OSCAR løber den. Klokken 14.37. Han er klar.`,
        storyBonus: `OSCAR løb sin runde og kom tilbage med det udtryk, der kun betyder ét: nu er jeg klar.`
      },
      {
        title: 'Den Nye Træningsbane',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Kommunens skema lå på direktør HANSENs bord og ventede. Det er en af de papirer, der ser kedelig ud udefra — men som betyder, at FCK får lov at bygge noget nyt.

Den nye bane: {n1} meter lang, {n2} meter bred. HANSEN skulle skrive arealet ind i rubrikken, inden ansøgningen kunne sendes.

Han holdt pennen og ventede på tallet.`,
        questionTemplate: `Banen er {n1} m lang og {n2} m bred. Hvad er arealet i m²?`,
        successMsgTemplate: `{answer} kvadratmeter! HANSEN udfylder rubrikken. FCK får sin bane.`,
        storyBonus: `HANSEN underskrev ansøgningen og foldede den. Det er en ny bane. Det er et nyt kapitel for FCK.`
      },
      {
        title: 'Sæsonens Topscorer',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `LUCAS scorede mål ligesom andre spiser morgenmad — naturligt, og gerne tidligt.

{n1} kampe i første halvdel af sæsonen, {n2} mål i gennemsnit per kamp. Plus {n3} straffesparksmål sat ind med den slags ro, der gør tilskuerne tavse — ikke fordi de er kede af det, men fordi de ikke kan tro det.

Journalisten ville have totalen. Nu.`,
        questionTemplate: `{n1} kampe × {n2} mål pr. kamp + {n3} straffesparksmål. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} mål! En historisk sæson. Journalisten glemmer sin deadline.`,
        storyBonus: `Journalisten glemte sin deadline. Det sker kun, når historien er god nok til at fortjene det.`
      },
      {
        title: 'Straffesparkskonkurrencen',
        idx: 9, lvlData: 'finale',
        storyTemplate: `2-2 efter forlænget tid. Straffespark.

Den slags stilling, der siger: intet er afgjort. Alt er stadig muligt. Det er det bedste og det værste på samme tid.

{frac} af FCKs {n1} truppe-spillere er aktive og klar. De {n2} ungdomsspillere er rejst med og venter i uniform. MIKKEL kiggede på sin liste. »Hvem kan jeg vælge imellem?«`,
        questionTemplate: `{frac} af {n1} spillere er klar + {n2} ungdomsspillere. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} mulige straffesparkere! LUCAS træder frem. Han scorer. FCK vinder!`,
        storyBonus: `LUCAS stod på pletten og talte til elleve. Bare én gang. Stille, men tydeligt. Derefter sparkede han.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  RONALDO  (Cristiano · JORGE · RAMOS)
  // ════════════════════════════════════════════
  ronaldo: {
    id: 'ronaldo', name: 'RONALDO', icon: '⚽',
    tagline: 'Legenden skrives ét mål ad gangen',
    endingTrophy: '🏅', endingTitle: 'Legenden Er Skrevet',
    endingStory: `Der er rekorder, der brydes med et jubel, fotograferne og champagnen. Og der er rekorder, der brydes stille — mens man løber alene på en halvtom træningsbane klokken seks om morgenen, og man ved det, men ingen andre gør endnu.

Cristiano løftede trofæet. Blitzene eksploderede. JORGE nikkede med lukkede øjne, som en der vidste det hele vejen.

Hvert tal i denne fortælling er rigtigt. Hvert mål er sandt. Og rekorden tilhører nu jer begge.`,
    collectibles: [
      { name: 'CR7 Morgenprogram',     icon: '📋', desc: 'Klokken 6.23. Det første tæller.' },
      { name: 'JORGEs Notesbog',       icon: '📓', desc: 'Bundlinjen tom — til det næste.' },
      { name: 'Boldkontrol Rekord',    icon: '⚽', desc: 'Den 108. er altid den bedste.' },
      { name: 'Champions League Trofæ',icon: '🏆', desc: 'Pakket med mest omhu.' },
      { name: 'Heading Rekord',        icon: '🏅', desc: 'Tredive meters løb. Ingen filmede.' },
      { name: '"Komplet"-Stempel',     icon: '✅', desc: 'RAMOS sagde det én gang.' },
      { name: 'Privatbane Nøgle',      icon: '🔑', desc: 'Hegnet kom op. Han var på banen.' },
      { name: 'Kunstgræs Certifikat',  icon: '📜', desc: 'Leveret præcis til tiden.' },
      { name: 'UCL Rekord Plaque',     icon: '🌟', desc: 'Det sidst fundne vejer tungest.' },
      { name: 'Kaptajnsbindet',        icon: '💛', desc: 'Han var allerede der.' }
    ],
    chapters: [
      {
        title: 'Morgenens Første Mål',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Cristiano er på banen klokken 6.15. Det er ikke fordi nogen bad ham om det. Det er fordi det er det eneste tidspunkt, der er stille nok til at arbejde.

I gårsdagens session sparkede han {n1} mål i den venstre halvdel og {n2} mål i den højre. Hele banen. Systematisk. Præcist.

Træner RAMOS stod og noterede alt. Han vil vide totalen, inden Cristiano siger et eneste ord.`,
        questionTemplate: `{n1} mål i venstre og {n2} i højre halvdel. Hvor mange mål i alt?`,
        successMsgTemplate: `{answer} mål! Cristiano smiler. En personlig rekord — igen.`,
        storyBonus: `Cristiano sparkede det første mål klokken 6.23. RAMOS noterede tidspunktet. Det er altid det første, der tæller.`
      },
      {
        title: 'Programmet',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Ugens træningsprogram har {n1} tekniske øvelser. Hvert eneste en er designet til at gøre én ting lidt bedre end i går.

{n2} er allerede gennemført. Fysioterapeut JORGE sidder med sin notesbog og kigger ud på banen, hvor Cristiano stadig løber. Ikke fordi han skal. Bare fordi han er den slags.

»Hvad er der tilbage inden hviledag?«`,
        questionTemplate: `{n1} øvelser. {n2} er gennemført. Hvor mange er der tilbage?`,
        successMsgTemplate: `{answer} øvelser! JORGE justerer skemaet. Cristiano løber videre.`,
        storyBonus: `JORGE justerede programmet og lod den nederste linje stå tom — til de øvelser, der endnu ikke er opfundet.`
      },
      {
        title: 'Boldkontrolsessionen',
        idx: 2, lvlData: 'gange',
        storyTemplate: `RAMOS havde aldrig mødt nogen, der kunne gentage det samme spark {n2} gange og have det bedre for sig selv til sidst end til at begynde med.

Cristiano gennemfører {n1} intensive sessioner. {n2} boldkontakter i hver — perfekte, kontrollerede, som om bolden er en del af kroppen.

»Det samlede antal til statistikbogen,« sagde RAMOS. »For eftertiden.«`,
        questionTemplate: `{n1} sessioner med {n2} boldkontakter i hver. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} boldkontakter! RAMOS skriver det ned og siger: »Det er nok til en legende.«`,
        storyBonus: `Den 108. boldkontakt var den bedste. Det er altid den seneste, der er den bedste. Det er ikke tilfældigt.`
      },
      {
        title: 'Trofæ-Transporten',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} trofæer og pokaler skal fra museumsdepot til udstilling. De vejede mere end PEDRO havde forventet — ikke fordi de er tunge, men fordi de er mange.

{n2} sikrede transportkasser stod klar. PEDRO var den slags, der ikke åbner en kasse, før han ved, præcis hvad der skal i den.

»Præcis det samme i hver,« sagde han. »Ingen favoritter.«`,
        questionTemplate: `{n1} trofæer fordeles ligeligt i {n2} kasser. Hvor mange pr. kasse?`,
        successMsgTemplate: `{answer} trofæer per kasse! PEDRO pakker dem omhyggeligt i bomuld.`,
        storyBonus: `PEDRO lagde et ekstra bomuldslag under det trofæ, der var mest ridset. Ikke det sværeste. Det med den længste rejse.`
      },
      {
        title: 'Headings fra Hjørnespark',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `»Det er ikke held,« sagde Cristiano til RAMOS en aften. »Det er timing. Det er matematik.«

Han havde scoret {n1} mål den sæson. {frac} af dem var headings fra hjørnespark — den teknik, han havde øvet i tusindvis af timer, den han var mest stolt af.

RAMOS ville vide præcist, hvad det tal var.`,
        questionTemplate: `Cristiano scorede {n1} mål. Hvad er {frac} af {n1}?`,
        successMsgTemplate: `{answer} heading-mål! »Timing og matematik,« sagde Cristiano. Han havde ret.`,
        storyBonus: `Det var ikke headingen, der var imponerende. Det var de tredive meters løb inden — som ingen filmede.`
      },
      {
        title: 'To Fødder',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Analytikerne havde studeret hvert eneste af Cristianos mål. Igen og igen, fra alle vinkler.

{f1} af dem scoret med venstrefoden. {f2} med højrefoden. RAMOS kiggede på tallene og sagde ingenting i lang tid.

Til sidst sagde han: »Han er komplet.« Det er det største ros han giver. Det er det eneste ros han giver.`,
        questionTemplate: `{f1} venstrefodsm + {f2} højrefodsm. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af målene! »Komplet,« gentog RAMOS. Én gang er nok.`,
        storyBonus: `RAMOS sagde »komplet« og satte sin pen ned. Det er den sætning, han har sparet på i mange år.`
      },
      {
        title: 'Den Private Bane',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Banen bag huset er {n1} meter lang og {n2} meter bred. Det er der, Cristiano øver sig, når ingen kigger — og ingen kigger aldrig, for det er privat.

Men hegnet skal op. Hele vejen rundt. Leverandøren vil vide den samlede længde, inden han sender et tilbud.

»Hele vejen rundt,« sagde Cristiano. »Intet hul.«`,
        questionTemplate: `Banen er {n1} m lang og {n2} m bred. Hvad er dens omkreds?`,
        successMsgTemplate: `{answer} meter hegn! Banen er afskærmet. Nu er den kun hans.`,
        storyBonus: `Hegnet kom op på en søndag. Cristiano var ikke hjemme. Han var på banen. Den anden bane.`
      },
      {
        title: 'Kunstgræsset',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Kunstgræsleverandøren sælger kun pr. kvadratmeter. Det er det eneste rigtige, sagde han — præcision er alt.

Banen: {n1} meter lang, {n2} meter bred. JORGE ventede på svaret, inden han ringede og bestilte. Det er ikke noget, man gætter på.`,
        questionTemplate: `Tæppet er {n1} m langt og {n2} m bredt. Hvad er arealet i m²?`,
        successMsgTemplate: `{answer} kvadratmeter! Tæppet bestilles. Leveres næste morgen klokken 6.`,
        storyBonus: `Tæppet leverede til tiden. Det er præcis det, Cristiano forventer. Af alle — og sig selv først.`
      },
      {
        title: 'Champions League-Tallene',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `UEFA-journalisten havde en liste med rekorder. De fleste linjer var udfyldte. Men den øverste linje — den med Cristianos samlede Champions League-mål — stod tom.

{n1} sæsoner, {n2} mål i gennemsnit per sæson. Plus {n3} ekstra mål fra kvalifikationsrunder, som folk glemmer at tælle med.

»Dem tæller vi med,« sagde journalisten. »Alle mål tæller.«`,
        questionTemplate: `{n1} sæsoner × {n2} mål + {n3} kvalifikationsmål. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} Champions League-mål! Journalisten skriver det ind. Rekorden er officiel.`,
        storyBonus: `Det sidst tal på journalistens liste var det største. Det er altid det senest fundne, der vejer tungest.`
      },
      {
        title: 'Den Afgørende Finale',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Det er den finale, alt har ledt op til.

{frac} af de {n1} udvalgte spillere er klar og opvarmet. De {n2} reserver på sidelinjen er parate — stille, fokuserede, klar til at komme ind, hvis de bliver kaldt.

RAMOS kiggede på Cristiano. Cristiano kiggede på banen. »Hvad er vores samlede styrke?« spurgte RAMOS.`,
        questionTemplate: `{frac} af {n1} spillere klar + {n2} reserver. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} spillere klar! Cristiano træder frem. Det siger sig selv, hvad der sker.`,
        storyBonus: `RAMOS kiggede på Cristiano, inden finalen begyndte. Cristiano kiggede ikke tilbage. Han var allerede der.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  BRAWL STARS  (Leon · Shelly · Spike · Mortis · Crow)
  // ════════════════════════════════════════════
  brawlstars: {
    id: 'brawlstars', name: 'BRAWL STARS', icon: '🎮',
    tagline: 'Gems, galskab og det vildeste hold i verden',
    endingTrophy: '🏆', endingTitle: 'Verdensmestre!',
    endingStory: `Leon skreg: »JEG SAGDE DET!« Ingen vidste præcis hvad han sagde — men alle vidste, han havde sagt det.

Shelly grinte og græd på samme tid, fordi man godt kan begge dele. Spike talte sine resterende power-ups, fordi han ikke vidste hvad han ellers skulle gøre med sine hænder. Mortis holdt en tale, som ingen lyttede til, men som alle nok trængte til.

Og Crow — Crow, der aldrig viste noget — stod midt i arenaen med konfetti i håret og smilede. Bare ét sekund. Men det var nok.`,
    collectibles: [
      { name: 'Crows Pointprotokol',    icon: '🖤', desc: 'Hans version af et smil.' },
      { name: 'Spikes Gem-Kasse',       icon: '🌵', desc: 'Tjekket to gange ekstra.' },
      { name: 'Mortis Spadestok Pin',   icon: '💀', desc: 'Angreb nr. 248.' },
      { name: '"Fair Fordeling" Badge', icon: '⚖️', desc: 'Ingen favoritter.' },
      { name: 'Leons Power-Up',         icon: '👻', desc: 'Den bedste, ikke den stærkeste.' },
      { name: 'Shellys Kamprapport',    icon: '📊', desc: 'Crow læser den mest.' },
      { name: 'Kaktus Forsvarsplan',    icon: '🌿', desc: 'Sydøsthjørnet altid først.' },
      { name: 'Arena Grundsten',        icon: '🪨', desc: 'Shelly lagde den første.' },
      { name: 'Verdensfinale Adgang',   icon: '🎟️', desc: 'Udsolgt.' },
      { name: 'Verdensmester Trofæ',    icon: '🏆', desc: '"Jeg sagde det!" – Leon' }
    ],
    chapters: [
      {
        title: 'Trofæ-Jagten Begynder',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Leon er den slags, der aldrig fortæller sin score — fordi det er bedre at vise den.

Denne sæson: {n1} trofæer med usynlige bevægelser og perfekt timing. Shelly har {n2} trofæer — vundet med Shotgun, god musik og den slags ro, der er farligst.

Crow sidder på toppen af ranglistetavlen og kiggede ned. »Tilsammen?« sagde han. »Giv mig tallet. Nu.«`,
        questionTemplate: `Leon har {n1} trofæer og Shelly har {n2}. Hvad er totalen?`,
        successMsgTemplate: `{answer} trofæer! Crow nikker. Det er en ny holdrekord.`,
        storyBonus: `Crow satte pointerne ind i systemet og lod sin finger hvile over tastaturet et sekund. Det er hans version af et smil.`
      },
      {
        title: "Spikes Gem-Problem",
        idx: 1, lvlData: 'minus',
        storyTemplate: `Spike er præcis. Det er noget, alle ved. Han tæller altid. Han dobbelttjekker altid. Og alligevel stod han i Gem Grab-arenaen og vidste ikke, hvad han havde tilbage.

Han startede med {n1} gems. Brugte {n2} på at opgradere sine kaktusstorme — nødvendige opgraderinger, sagde han. »Nødvendige,« sagde Crow tørt.

»Hvad har du tilbage, Spike?«`,
        questionTemplate: `Spike startede med {n1} gems og brugte {n2}. Hvad er der tilbage?`,
        successMsgTemplate: `{answer} gems! »Det er nok,« sagde Spike. Crow sagde ingenting. Det betød ja.`,
        storyBonus: `Spike tjekkede sin kasse to gange mere, efter han sagde det var nok. Det er Spikes version af at slappe af.`
      },
      {
        title: 'Mortis Træner',
        idx: 2, lvlData: 'gange',
        storyTemplate: `»Jeg er allerede klar,« sagde Mortis, da Crow foreslog ekstra træning.

»Du øver dig alligevel,« sagde Crow.

Mortis lavede {n1} træningsrunder med sin spadestok og gennemførte {n2} angreb i hver — det hurtige, drejende mørke-angreb, han bruger år på at perfektionere. Han vil aldrig indrømme, at han faktisk er glad for at træne.`,
        questionTemplate: `{n1} runder med {n2} angreb i hver. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} angreb! Mortis lander i skyggen. »Ikke dårligt,« siger Crow.`,
        storyBonus: `Mortis øvede sit 248. angreb og nikkede til sig selv. Det er det tætteste, han kommer på at indrømme fremgang.`
      },
      {
        title: 'Den Retfærdige Fordeling',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} gems i kisten. Alle fem brawlers kiggede på dem på præcis samme tid. Der var et øjeblik med meget stilhed.

Crow rømme sig. »{n2} brawlers. Ligeligt fordelt. Det er loven.«

»Hvem laver den lov?« spurgte Leon.

»Jeg,« sagde Crow.`,
        questionTemplate: `{n1} gems til {n2} brawlers. Hvad får hver?`,
        successMsgTemplate: `{answer} gems til alle! Leon synes ikke det er nok. Det er det.`,
        storyBonus: `Leon holdt om sine gems og sagde ingenting. Det er Leons version af taknemlighed. Alle ved det.`
      },
      {
        title: 'Leons Hemmelige Arsenal',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Leon har en Star Drop-kasse, som ingen må røre. Heller ikke Crow. Særligt ikke Crow.

Den gemmer {n1} power-ups. Men {frac} af dem er aktive — resten er låst, grå, og ubrugelige til det kommende Brawl. Leon ville vide præcist, hvad han kunne bruge. Det er det eneste tidspunkt, han var helt seriøs.`,
        questionTemplate: `Hvad er {frac} af {n1} power-ups?`,
        successMsgTemplate: `{answer} aktive power-ups! Leon forsvinder. Bogstaveligt talt.`,
        storyBonus: `Den aktive power-up Leon valgte var ikke den stærkeste. Det var den, han er bedst med. Der er forskel.`
      },
      {
        title: 'Shellys Kampdata',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Efter kampen henter Crow altid statistikken. Det er hans hobby, og han ved godt, det er underligt.

Shellys seneste kamp: {f1} af kamptiden på Shotgun-angreb — direkte, præcise, lidt overdrevne. {f2} på sin Super, som hun altid bruger på det bedst mulige tidspunkt.

»Den samlede aktive andel,« sagde Crow og åbnede sin notesbog.`,
        questionTemplate: `{f1} på Shotgun og {f2} på Super. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af kampen! »Uundværlig,« sagde Crow. Shelly hørte det. Sagde det ikke videre.`,
        storyBonus: `Crow gemte Shellys statistik i sin personlige mappe. Han har statistik på alle. Shellys er den han læser mest.`
      },
      {
        title: 'Kaktusforsvaret',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Spike var i gang, inden nogen bad ham om det. Det er Spikes problem — eller styrke, afhænger af hvem man spørger.

Den nye arena: {n1} meter lang, {n2} meter bred. Hele kanten skal have kaktusser — en grøn, pigget forsvarslinje mod alt, der prøver at komme ind uden lov.

»Hvor mange meter planter du?« spurgte Crow.

»Alle af dem,« sagde Spike.`,
        questionTemplate: `Arenaen er {n1} m lang og {n2} m bred. Hvad er dens omkreds?`,
        successMsgTemplate: `{answer} meter kaktus! Arenaen er beskyttet. Spike er tilfreds.`,
        storyBonus: `Spike satte den første kaktus i det sydøstlige hjørne. Det er det vigtigste hjørne. Det er altid det.`
      },
      {
        title: 'Den Nye Arena',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Holdet skal bygge en ny arena. Crow har skitsen. Leon har meningen om skitsen. Mortis har en mening om Leons mening. Shelly siger ingenting og er den eneste der faktisk laver noget.

Gulvarealet: {n1} meter langt, {n2} meter bredt. Leverandøren sælger kun pr. kvadratmeter — og vil have det nøjagtige tal inden næste morgen.`,
        questionTemplate: `Gulvet er {n1} m langt og {n2} m bredt. Hvad er arealet i m²?`,
        successMsgTemplate: `{answer} kvadratmeter! Stenene bestilles. Shelly lægger den første.`,
        storyBonus: `Shelly lagde den første sten, og ingen sagde noget. Nogen burde have sagt tak. Det er nok, at de ved det.`
      },
      {
        title: 'Finalearenaen',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `Verdensfinalen. Arenaen har {n1} tilskuerafdelinger med {n2} sæder i hver. Plus {n3} ståpladser til dem, der er for ophidsede til at sidde — og det er de fleste.

Arrangøren frygter mest af alt ét: at have solgt én billet for mange. Crow talte. Langsomt. Præcist.`,
        questionTemplate: `{n1} afdelinger × {n2} sæder + {n3} ståpladser. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} pladser! Arenaen er udsolgt. Det var det, Crow håbede på.`,
        storyBonus: `Crow dobbelt-tjekede kapaciteten, inden han lukkede systemet. Man tjekker, når noget er for vigtigt til at tage chancen.`
      },
      {
        title: 'Sæsonens Afgørelse',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Verdensfinalen starter om ti minutter.

Crow stod alene i gangen bag arenaen og talte. Ikke for nogen. Bare fordi tallene roliggjorde ham, og han var — han ville aldrig indrømme det — nervøs.

{frac} af de {n1} kvalificerede brawlers var mødt op og klar. De {n2} nye, nyligt låste brawlers var der også. »Hvad er vores samlede styrke?« spurgte han sig selv.`,
        questionTemplate: `{frac} af {n1} brawlers klar + {n2} nye. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} brawlers! Crow tog et dybt åndedrag. Gik ind. Vandt.`,
        storyBonus: `Crow gik ind i arenaen og sagde ingenting. Det er det, man gør, når ordene ikke er store nok.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  ANIME  (Naruto · Goku · Luffy · Sasuke · Kakashi)
  // ════════════════════════════════════════════
  anime: {
    id: 'anime', name: 'ANIME', icon: '🎌',
    tagline: 'Tre legender. Ét mål. Uendelig energi.',
    endingTrophy: '⭐', endingTitle: 'Tre Legender Sejrer',
    endingStory: `»Vi var ikke gode nok,« sagde Naruto.

»Vi var præcis gode nok,« sagde Goku.

»Det er det samme,« sagde Luffy og spiste tre riceballs.

Kakashi stod lidt væk og kiggede på dem. Han sagde ingenting. Det behøvede han ikke. Du løste alle ti koder — fra den første chakra til det afgørende slag. Heltene overlevede, fordi tallene passede. Det er hemmeligheden bag enhver kamp.`,
    collectibles: [
      { name: 'Portal-Nøglen',           icon: '🚪', desc: '"GODT!" – Luffy. Fuld analyse.' },
      { name: 'Rayleighs Skema',         icon: '📜', desc: 'Luffy regnede igen. Rigtigt.' },
      { name: 'Kakashis Stjerne',        icon: '⭐', desc: 'Den eneste, nogensinde.' },
      { name: 'Irukas Teknikoversigt',   icon: '📋', desc: 'Alle er med. Ingen glemt.' },
      { name: 'Super Saiyan Certifikat', icon: '⚡', desc: 'Gohan gemte øjeblikket.' },
      { name: 'Kampanalyse-Vest',        icon: '👘', desc: 'Kakashi beholder den.' },
      { name: 'Konoha Patrulje-Orden',   icon: '🌿', desc: 'Præcis til forventet tid.' },
      { name: 'Hokages Underskrift',     icon: '📜', desc: 'Noget nyt begynder.' },
      { name: 'Den Rigtige Bænkbillet',  icon: '🎫', desc: 'Bænken ved siden af Sasuke.' },
      { name: '"Nok"-Medaljen',          icon: '🎖️', desc: 'De sværeste ord at sige.' }
    ],
    chapters: [
      {
        title: 'Tre Helte Mødes',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Naruto ankom først. Goku kom flyvende bagfra og landede lidt for hårdt. Luffy faldt ned fra et træ og sagde »Godt møde!« selvom der ikke var aftalt noget møde.

Naruto havde {n1} chakra-enheder fra en hel dags Shadow Clone-træning. Goku havde {n2} ki-enheder fra gravitationskammeret. Den hemmelige port åbnede kun for dem begge tilsammen.

»Vi behøver hinanden,« sagde Kakashi fra ingen steder. »Og vi behøver det samlede tal.«`,
        questionTemplate: `Naruto har {n1} og Goku har {n2} energienheder. Hvad er totalen?`,
        successMsgTemplate: `{answer} energienheder! Porten åbner sig med et brag. Luffy trådte igennem allerede.`,
        storyBonus: `Luffy trådte igennem porten og strakte armene ud. »GODT!« råbte han. Det var hans fulde analyse af situationen.`
      },
      {
        title: 'Luffys Udholdenhed',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Luffy var ikke den type, der tæller. Det var Zoros problem. Det var Sanji's problem. Det var alle andres problem.

Men Rayleigh havde lavet et program: {n1} kamprunder. »Dem laver du alle,« sagde han. »Eller du er ikke klar.«

{n2} runder var gennemført. Luffy kiggede på tallet og regnede hurtigt — for én gangs skyld.`,
        questionTemplate: `{n1} kamprunder. {n2} er gennemført. Hvor mange er der tilbage?`,
        successMsgTemplate: `{answer} runder! Luffy ruller ærmerne op. »Det er intet!« siger han. Det er ikke intet.`,
        storyBonus: `Luffy regnede forkert første gang. Sagde det ikke til nogen. Regnede igen. Fik det rigtigt. Det er nok.`
      },
      {
        title: 'Sasukes Repetitioner',
        idx: 2, lvlData: 'gange',
        storyTemplate: `Sasuke siger ikke meget. Det er en kendsgerning.

Men han øver {n1} forskellige jutsus, og for at kroppen skal huske dem præcist — ikke godt nok, præcist — repeterer han hver jutsu {n2} gange i træk. Uden pause. Uden klager.

Kakashi kiggede på ham fra distance og skrev det ned i sin journal. Ikke fordi han behøvede det. Fordi det fortjente at blive noteret.`,
        questionTemplate: `{n1} jutsus, {n2} gentagelser hver. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} repetitioner! Sasukes krop husker nu hvert eneste skridt.`,
        storyBonus: `Kakashi satte en stjerne ved Sasukes nummer i sin journal. Det er den eneste gang, han nogensinde gør det.`
      },
      {
        title: 'Ninja-Akademiet',
        idx: 3, lvlData: 'div',
        storyTemplate: `Iruka-sensei er den slags lærer, der aldrig giver op på nogen. Det er både hans stærkeste side og grunden til, at han sjældent sover godt.

{n1} ninja-teknikker skal undervises denne måned. {n2} hold. Iruka ville give dem præcis det samme — ikke mere til de gode, ikke mindre til dem der kæmper.

»Fair er fair,« sagde han. »Det er det første en ninja lærer. Det er det vigtigste.«`,
        questionTemplate: `{n1} teknikker fordeles ligeligt på {n2} hold. Hvad er antal pr. hold?`,
        successMsgTemplate: `{answer} teknikker pr. hold! Iruka nikker. Nu kan han sove.`,
        storyBonus: `Iruka-sensei sov godt den nat. Det er det, der sker, når tallene passer og ingen er glemt.`
      },
      {
        title: 'Gokus Transformation',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Goku havde {n1} ki-enheder. Det lød som mange. Det er mange.

Men Super Saiyan Blue kræver {frac} af det hele — præcist den mængde, kroppen næsten ikke kan holde til. Resten gemmes til Ultra Instinct: den form ingen planlægger at bruge, men som indimellem er den eneste vej frem.

Goku lukkede øjnene. »Regn det ud for mig,« sagde han til Gohan.`,
        questionTemplate: `Goku har {n1} ki-enheder. Hvad er {frac} af {n1}?`,
        successMsgTemplate: `{answer} ki-enheder! Lyset eksploderer. Super Saiyan Blue er aktiveret!`,
        storyBonus: `Gohan kiggede på Goku og sagde ingenting. Der er øjeblikke, man bare registrerer og gemmer.`
      },
      {
        title: 'Kampens Mønster',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Kakashi analyserer altid. Det er det, der adskiller en god ninja fra en overlevelsesstrateg.

Narutos seneste kamp: {f1} af kampen brugt på Shadow Clone Jutsu — mange kopier, meget kaos, præcis som Naruto. {f2} på Rasengan — hurtigt, præcist, som Naruto aldrig ser ud til at turde, men altid gør.

»Den samlede aktive andel,« sagde Kakashi. »Det fortæller mig noget vigtigt.«`,
        questionTemplate: `{f1} på Shadow Clone og {f2} på Rasengan. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af kampen! »Han giver alt,« sagde Kakashi. Det var alt, der behøvede siges.`,
        storyBonus: `Kakashi foldede sin analyse og lagde den i sin vest. Den beholder han. Det er det vigtigste.`
      },
      {
        title: 'Konohas Grænse',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Kakashi patruljerer Konohas ydre træningszone: {n1} meter lang, {n2} meter bred. Én runde rundt hvert skift — hverken mere eller mindre, for det handler ikke om distance, men om disciplin.

Han beregnede distancen alene, stående i hjørnet, med det sædvanlige rolige blik. Derefter løb han.`,
        questionTemplate: `Zonen er {n1} m lang og {n2} m bred. Hvad er dens omkreds?`,
        successMsgTemplate: `{answer} meter! Kakashi er tilbage om syv minutter. Præcis.`,
        storyBonus: `Kakashi løb sin runde og kom tilbage præcis til forventet tidspunkt. Det er det, der adskiller en ninja fra alle andre.`
      },
      {
        title: 'Det Nye Akademi',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Hokage underskriver ikke noget uden de nøjagtige tal. Det ved Iruka. Det har han vidst i ti år.

Det nye træningsområde: {n1} meter langt, {n2} meter bredt. Iruka skulle indberette arealet, inden ansøgningen om godkendelse kunne sendes.

»Arealet,« sagde han til sig selv og tog sin pen frem.`,
        questionTemplate: `Området er {n1} m langt og {n2} m bredt. Hvad er arealet i m²?`,
        successMsgTemplate: `{answer} kvadratmeter! Hokage underskriver. Det nye akademi kan bygges.`,
        storyBonus: `Hokage underskrev og kiggede ud af vinduet en lang tid bagefter. Det er det, man gør, når noget nyt begynder.`
      },
      {
        title: 'Chunin-Eksamen',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `Chunin-eksamenen er årets vigtigste begivenhed. Naruto kom for sent. Luffy kom til den forkerte by. Goku kom på det rigtige tidspunkt men sad på den forkerte bænk.

{n1} hold med {n2} deltagere i hvert. Plus {n3} jonin-mestre inviteret som specialdommere — og de er alle ankommet til tiden, fordi dommere gør det.

Arrangøren havde brug for totalen.`,
        questionTemplate: `{n1} hold × {n2} deltagere + {n3} mestre. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} i alt! Turneringen kan begynde. Naruto er stadig forsinket.`,
        storyBonus: `Naruto ankom og satte sig på den forkerte bænk. Det var bænken ved siden af Sasuke. Det var den rigtige.`
      },
      {
        title: 'Det Store Opgør',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Fjenden var ikke set i hundrede år. Det er normalt tegn på, at man ikke bør møde den.

{frac} af de {n1} udvalgte ninjaer var ankommet og klar. De {n2} jonin-mestre var der alle — for de er den slags, der altid er der, selvom situationen er håbløs.

Kakashi talte op stille. »Vi skal vide vores samlede styrke,« sagde han. »Inden vi træffer en beslutning.«`,
        questionTemplate: `{frac} af {n1} ninjaer + {n2} mestre. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} kæmpere! Kakashi nikkede. »Nok,« sagde han. Det er det bedste han siger.`,
        storyBonus: `Kakashi sagde »nok« og mente det. Det er de sværeste ord at sige og de vigtigste at høre.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  JJK — JUJUTSU KAISEN  (Yuji · Megumi · Nobara · Gojo)
  // ════════════════════════════════════════════
  jjk: {
    id: 'jjk', name: 'JJK', icon: '🧙',
    tagline: 'En mission ingen burde klare. De klarer den alligevel.',
    endingTrophy: '💜', endingTitle: 'Sukuna Er Besejret',
    endingStory: `Sukuna faldt.

Yuji landede på gadebrostenene og slog knæene. Megumi kom løbende og sagde ingenting, men rakte hånden ud. Nobara sagde: »Jeg vidste det godt.« Det var hendes måde at sige: jeg var bange hele vejen igennem.

Gojo stod på taget ovenover og kiggede ned. Han smilede bag sit bind — men denne gang var smilet anderledes. Det lignede stolthed. »Tallene passede,« sagde han til vinden. »Det gør de altid, når man tror på dem.«`,
    collectibles: [
      { name: 'Forseglet Dør Mærke',  icon: '🔮', desc: 'Den trak vejret. Ikke muligt.' },
      { name: 'Nobaras Tomme Kasse',  icon: '📦', desc: 'Nok. Det er venskab.' },
      { name: 'Nanamis Kafferest',    icon: '☕', desc: 'Kaffe i et rysterum.' },
      { name: 'YAGAs Whiteboard',     icon: '📋', desc: 'Diagrammet stod — så rigtigt ud.' },
      { name: 'Divergent Fist Mærke', icon: '👊', desc: 'Hold den inde. Sværeste øvelse.' },
      { name: 'Nanamis Rapport',      icon: '📄', desc: 'Aldrig læst igen. Altid gemt.' },
      { name: 'Barriere-Certifikat',  icon: '🛡️', desc: 'Lød som ingenting. Sad rigtigt.' },
      { name: 'YAGAs Notesbog',       icon: '📓', desc: 'Et minut for sent er advarsel.' },
      { name: 'Ny Sorcerer Badge',    icon: '✨', desc: 'Mange til at bære ansvaret.' },
      { name: 'Sukunas Knuste Segl',  icon: '💜', desc: 'Gojo kom ned. Sagde intet.' }
    ],
    chapters: [
      {
        title: 'Den Forseglede Dør',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Yuji fandt den forseglede dør klokken 2.17 om natten. Han ringede ikke til Gojo — ikke fordi han ikke ville, men fordi Gojo allerede vidste det. Han ved altid.

Yuji havde {n1} cursed energy-enheder fra dagen. Megumi mødte ham tre minutter senere med {n2} fra en times Shikigami-træning. Døren summede lavt, som om den var i tvivl om noget.

»Tilsammen åbner den,« sagde Megumi. »Vi skal bare finde det rigtige tal.«`,
        questionTemplate: `Yuji har {n1} og Megumi har {n2} cursed energy. Hvad er totalen?`,
        successMsgTemplate: `{answer} cursed energy! Den forseglede dør vibrerer — og åbner sig.`,
        storyBonus: `Den forseglede dør lød som om den trak vejret, da den åbnede. Det er ikke muligt. Det skete alligevel.`
      },
      {
        title: 'Nobara Tæller',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Nobara siger altid, at hun ikke er nervøs. Det er løgn — men det er den slags løgn, der hjælper én igennem.

Hun startede eksorcisionen med {n1} cursed nails i sin kasse. Det burde have været nok. Men dette cursed spirit var anderledes — klistret og ubehageligt — og det krævede {n2} søm for bare at blive bundet midlertidigt.

»Hvad har du tilbage?« hviskede Megumi. Nobara kiggede ned. Talte.`,
        questionTemplate: `{n1} søm i alt. {n2} blev brugt. Hvor mange er der tilbage?`,
        successMsgTemplate: `{answer} søm! »Nok,« sagde Nobara. Det var ikke meget — men nok.`,
        storyBonus: `Nobara kiggede på sin tomme kasse et sekund for længe. Megumi vendte blikket væk. Det er venskab.`
      },
      {
        title: 'Gojos Domæne',
        idx: 2, lvlData: 'gange',
        storyTemplate: `Gojo Satoru er verdens stærkeste sorcerer. Det siger han ikke selv — det er bare fakta.

Han øver Infinite Void {n1} gange i træk. Hvert aktivering er en ekspansion på {n2} cursed energy-enheder. Nanami sidder i hjørnet med en kop kaffe og en notesbog, fordi nogen skal holde styr på det.

»Den samlede energiforbrug,« sagde Nanami, uden at kigge op. »Det er vigtigt. Selvom det ikke føles som om det er.«`,
        questionTemplate: `{n1} aktiveringer med {n2} enheder hver. Hvad er den samlede energi?`,
        successMsgTemplate: `{answer} enheder! Gojos domæne er nu fuldstændigt uovervindeligt.`,
        storyBonus: `Nanami drikkede sin kaffe langsomt. Han er den eneste, der kan drikke kaffe i et rum, der ryster.`
      },
      {
        title: 'Missionsfordelingen',
        idx: 3, lvlData: 'div',
        storyTemplate: `YAGA er ikke et menneske, der smiler tit. Men han smiler heller ikke sjældent — hans ansigt er vanskeligt at tyde.

{n1} missioner af varierende farlighed. {n2} hold sorcerers. YAGA stod foran whiteboardet og tegnede linjer.

»Ingen hold skal føle sig som favoritter,« sagde han. »Og ingen skal føle sig snydt. Fordel dem ligeligt.«`,
        questionTemplate: `{n1} missioner fordeles ligeligt på {n2} hold. Hvad er antal pr. hold?`,
        successMsgTemplate: `{answer} missioner pr. hold! YAGA godkender og sletter sine linjer.`,
        storyBonus: `YAGA slettede ikke whiteboardet med det samme. Han lod diagrammet stå — fordi det så rigtigt ud.`
      },
      {
        title: 'Divergent Fist',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Black Flash er det angreb, ingen kan planlægge. Det sker, når timingen er præcis — og kroppen er stærk nok til at bære det.

Yuji har {n1} cursed energy. {frac} af det skal bruges til Divergent Fist nu — det angreb der vender cursed energy imod cursed spirits. Resten holdes i reserve til det øjeblik, ingen kan forudsige.

»Det er ikke noget, du tænker dig til,« sagde Gojo fra ingensteds. »Det er noget du regner dig frem til. Og derefter bare gør.«`,
        questionTemplate: `Yuji har {n1} cursed energy. Hvad er {frac} af {n1}?`,
        successMsgTemplate: `{answer} cursed energy! Divergent Fist aktiveret! Teknikken sidder.`,
        storyBonus: `Yuji holdt sin energi inde. Det er den sværeste øvelse. Det er den vigtigste.`
      },
      {
        title: 'Megumis Rapport',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Nanami analyserer altid efter en mission. Det er hans måde at sørge for, at næste mission bliver bedre.

Megumis statistik fra seneste kamp: {f1} af kamptiden på Shikigami-besværgelser, {f2} på direkte nærkamp. Nanami lagde pen på bord og kiggede på tallene i lang tid.

»Den samlede aktive andel fortæller mig, hvornår du er farligst,« sagde han. »Og hvornår du er mest sårbar.«`,
        questionTemplate: `{f1} på Shikigami og {f2} på nærkamp. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af kamptiden! Nanami skriver det ned. Megumi er effektiv.`,
        storyBonus: `Nanami tog rapporten med hjem. Han læser den aldrig igen. Men han gemmer den.`
      },
      {
        title: 'Barrierens Omkreds',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Et forseglet cursed domain er ikke bare et rum. Det er et løfte om, at ingenting slipper ud.

Domænet er {n1} meter langt og {n2} meter bredt. Sorcererne skal etablere en barriere rundt om hele yderkanten, inden de træder ind. Nanami foldede hænderne og sagde det med den stemme, han bruger til fakta:

»Barrieredækning er lig med omkreds. Beregn det, inden vi går videre.«`,
        questionTemplate: `Domænet er {n1} m langt og {n2} m bredt. Hvad er barrierens omkreds?`,
        successMsgTemplate: `{answer} meter barriere! Ingen cursed spirits slipper ud. Missionen kan begynde.`,
        storyBonus: `Barrieren lød som ingenting. Det er det tegn på, at den sidder rigtigt.`
      },
      {
        title: 'Det Nye Distrikt',
        idx: 7, lvlData: 'areal',
        storyTemplate: `YAGA møder aldrig op til et møde uden tallene. Det er en af de ting, Yuji lærte hurtigt — og en af de ting, han prøvede at huske.

Det nye sorcerer-distrikt er {n1} meter langt og {n2} meter bredt. YAGA tjekkede sin notesbog. Rubrikken var blank. Mødet var om en time.

Han var ikke i godt humør. Det er han sjældent, men det er der altid en grund til.`,
        questionTemplate: `Distriktet er {n1} m langt og {n2} m bredt. Hvad er arealet i m²?`,
        successMsgTemplate: `{answer} kvadratmeter! YAGA udfylder rubrikken. Mødet kan begynde.`,
        storyBonus: `YAGA mødte op til mødet præcis til tiden. Ikke et minut for tidligt. Det er hans version af en advarsel.`
      },
      {
        title: 'Sorcerer-Oprykning',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `Tokyo Jujutsu High er ikke et sted, man søger ind, fordi man vil have et godt liv. Det er et sted, man havner, fordi man allerede er mærket af cursed energy.

{n1} afdelinger, {n2} sorcerers i hver. Plus {n3} nye assistent-sorcerers, der netop har bestået den første eksamen — med det blandede udtryk af lettelse og bekymring, der altid følger med.

YAGA kiggede på tallene. »Fortæl mig totalen,« sagde han. »Og lad os se, hvad vi har.«`,
        questionTemplate: `{n1} afdelinger × {n2} sorcerers + {n3} assistenter. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} sorcerers! »Nok,« sagde YAGA. »Mere end nok.«`,
        storyBonus: `Den nyeste assistent kiggede på listen over sorcerers. Det er mange mennesker til at bære ansvaret. Det er nok.`
      },
      {
        title: 'Sukuna',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Det er det øjeblik, alt har ledt op til.

Sukuna er ikke som de andre cursed spirits. Han er ikke bange. Han venter bare — og det er det, der er skræmmende ved ham.

{frac} af de {n1} Grade-1 sorcerers er mødt op. De {n2} nyuddannede er bag frontlinjen, fingre klar, vejrtrækning kontrolleret. Gojo talte dem hurtigt op. »Hvad er vores samlede styrke?« hviskede han — til sig selv, til alle, til ingen. »Nu.«`,
        questionTemplate: `{frac} af {n1} Grade-1 sorcerers + {n2} nyuddannede. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} sorcerers klar! Gojo nikker. Sukuna møder sin match.`,
        storyBonus: `Gojo kom ned fra taget ti minutter efter. Han sagde intet om, hvad han havde set.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  GEOGRAFI  (Explorer Sofia · ANDERS · CAMILLA)
  // ════════════════════════════════════════════
  geography: {
    id: 'geography', name: 'GEOGRAFI', icon: '🌍',
    tagline: 'Et halvt kort, et mysterium og én pige der ikke giver op',
    endingTrophy: '🌐', endingTitle: 'Hjem',
    endingStory: `Koordinaterne pegede midt i søen. Sofia kiggede ned i det stille, mørke vand — og forstod det ikke. Og forstod det derefter alt på én gang.

Mormors landsby. Nedsænket da dæmningen blev bygget for fyrre år siden. Det var ikke et skattekort. Det var en sti, nogen havde tegnet tilbage til et hjem, der ikke eksisterer mere.

ANDERS lagde hånden på hendes skulder og sagde ingenting. CAMILLA, embedsmanden der havde forsøgt at stoppe dem hele vejen, sagde til sidst: »Det er min families landsby også.« Det var det eneste hun sagde. Og det var nok.`,
    collectibles: [
      { name: 'Halvt Kort',            icon: '🗺️', desc: 'Lande forstår sig via hinanden.' },
      { name: 'Bjergsti-Markering',    icon: '🏔️', desc: 'Første gang ANDERS sagde "vi".' },
      { name: 'Provinsbyernes Liste',  icon: '🏙️', desc: 'Det sidst koordinat var ukendt.' },
      { name: 'CAMILLAs Dekret',       icon: '📜', desc: 'Hun kiggede lidt for længe.' },
      { name: 'Fredsskovens Kort',     icon: '🌳', desc: 'Fodnoten sluttede midt i.' },
      { name: 'ANDERS pegestok',       icon: '📍', desc: '"Alle steder er forbundne."' },
      { name: 'Grænselinje Kort',      icon: '🗺️', desc: 'Han kendte kortet. Nu ved Sofia.' },
      { name: 'UNESCO Ansøgning 1984', icon: '📰', desc: 'Den eneste artikel. Nogensinde.' },
      { name: 'Vejnetværk Diagram',    icon: '🛤️', desc: 'ANDERS vidste. Han ventede.' },
      { name: 'Ekspeditionsmærke',     icon: '🧭', desc: 'Kortet tæt mod hjertet.' }
    ],
    chapters: [
      {
        title: 'Kortet i Loftet',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Sofia fandt halvdelen af et gammelt kort i sin mormors loft. Den anden halvdel var revet af og aldrig fundet. Kortet viste to lande, der stødte op mod hinanden — og på bagsiden stod der med blyantshandskrift: »Lande kan ikke forstå sig selv uden at kende hinanden.«

Det første land: {n1} tusind indbyggere. Det andet: {n2} tusind. ANDERS sagde, at hun ikke måtte tage kortet med på skolen. Han mente det ikke.`,
        questionTemplate: `{n1} tusind i land ét og {n2} tusind i land to. Hvad er det samlede antal tusind?`,
        successMsgTemplate: `{answer} tusinde indbyggere! Sofia opdaterer sin notesbog. Kortet begynder at give mening.`,
        storyBonus: `Sofia vendte kortet om og holdt det mod lyset. Der var noget bag tallene — en form, der ikke stemte med noget, hun kendte.`
      },
      {
        title: 'Bjergstienes Afstand',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Kortet pegede mod bjergene i syd. Det var der, rejsen skulle begynde — og det var der, den manglende halvdel måske lå.

Fra startpunktet til bjergets fod er der {n1} kilometer. Sofia har allerede tilbagelagt {n2} ad en sti, der burde have hedde 'den sti der snyder dig'.

ANDERS kiggede op på bjergtoppen og sagde: »Hvor langt er der igen?« Han spørger altid det. Det er altid det vigtigste spørgsmål.`,
        questionTemplate: `{n1} kilometer i alt. {n2} er tilbagelagt. Hvor mange kilometer er der tilbage?`,
        successMsgTemplate: `{answer} kilometer! Sofia sætter farten op. Bjerget venter.`,
        storyBonus: `Det var første gang, ANDERS sagde »vi« om et projekt. Sofia bemærkede det. Hun sagde det ikke.`
      },
      {
        title: 'Provinsernes Byer',
        idx: 2, lvlData: 'gange',
        storyTemplate: `Det store land på kortets venstre halvdel var delt i {n1} provinser med gamle navne, de fleste svære at udtale. ANDERS havde kortlagt, at hver provins har præcis {n2} byer — ikke cirka, præcis.

»For at tegne det rigtige kort,« sagde han, »skal man kende det samlede antal byer.« Han kiggede på Sofia. Sofia kiggede på kortet. Ingen af dem sagde, hvad de tænkte.`,
        questionTemplate: `{n1} provinser med {n2} byer i hver. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} byer! ANDERS prikker dem ind. Kortet begynder at leve.`,
        storyBonus: `ANDERS prikede alle bynavne ind i sin computer og stoppede ved det sidste. Det lå på koordinater, han ikke kendte.`
      },
      {
        title: 'CAMILLAs Dekret',
        idx: 3, lvlData: 'div',
        storyTemplate: `CAMILLA fra indenrigsministeriet ville ikke fortælle Sofia, hvad hun egentlig søgte efter. »Politisk krav,« sagde hun. »{n1} kommuner fordeles ligeligt i {n2} regioner. Det er alt, jeg kan sige.«

Hun kiggede på Sofia på den måde, voksne gør, når de forsøger at finde ud af, hvad et barn ved. Sofia sagde ingenting. Men hun noterede CAMILLAs navn i sin notesbog.`,
        questionTemplate: `{n1} kommuner fordeles ligeligt på {n2} regioner. Hvad er antal pr. region?`,
        successMsgTemplate: `{answer} kommuner! CAMILLA underskriver. Noget i hendes blik skifter.`,
        storyBonus: `CAMILLA kiggede på Sofia lidt for længe, inden hun gik. Det er det, der sker, når man ved mere, end man siger.`
      },
      {
        title: 'Den Fredede Skov',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Landet på kortet har {n1} tusind kvadratkilometer. {frac} af det er fredet skov — beskyttet for evigt, stod der i en fodnote. Fodnoten var revet halvt af. Men de to ord var der stadig: »for evigt.«

Sofia beregnede præcist, hvad {frac} af {n1} tusind er. Og mærkede, at der var noget midt i det fredede område, der ikke kom med på de nyeste kort.`,
        questionTemplate: `Landet har {n1} tusind km². Hvad er {frac} af {n1} tusind?`,
        successMsgTemplate: `{answer} tusinde km² fredet skov! Sofia markerer det. Og cirkler et punkt midt i det.`,
        storyBonus: `Fodnoten på kortet sluttede midt i en sætning. Nogen havde revet den af. Eller den var aldrig færdig.`
      },
      {
        title: 'Kontinenternes Andel',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `»Hvad er det egentlig, du leder efter?« spurgte ANDERS en dag, da kortet lå udbredt over hele skolebænken.

Sofia kiggede op. »Noget der er forsvundet.«

ANDERS sagde ingenting et øjeblik. Derefter tog han sin peger frem. »Europa dækker {f1} af Jordens landareal. Asien {f2}.« Det var ikke et svar. Men det var et hint.`,
        questionTemplate: `Europa: {f1} og Asien: {f2} af Jordens landareal. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af Jordens landareal! ANDERS nikker. »Du er tæt på,« siger han. »Meget tæt.«`,
        storyBonus: `»Alle steder er forbundne,« sagde ANDERS. Det lød som geografi. Det var noget andet.`
      },
      {
        title: 'Grænselinjen',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Det lille land i kortets sydvestlige hjørne er {n1} kilometer langt og {n2} kilometer bredt. En gammel embedsmand derfra ringede til CAMILLA tre gange om ugen — og stoppede altid samtalen, da han hørte Sofias stemme i baggrunden.

»Hvert kilometer grænse skal dækkes,« sagde han angiveligt. Sofia regnede grænselinjens længde ud. Og tilføjede til sin notesbog: Han kender kortet.`,
        questionTemplate: `Landet er {n1} km langt og {n2} km bredt. Hvad er grænselinjen i km?`,
        successMsgTemplate: `{answer} kilometer! Sofia har svaret. Nu mangler hun kun: hvad gemmer de?`,
        storyBonus: `Den gamle embedsmand lagde røret på, inden Sofia sagde farvel. Det er det, folk gør, når de er bange for at sige for meget.`
      },
      {
        title: 'Den Glemte Nationalpark',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Sofia fandt en gammel avisartikel om en nationalpark, der var planlagt på præcis de koordinater, kortet pegede mod. Parken blev aldrig til noget — men UNESCO's ansøgning lå stadig i arkiverne.

Parken: {n1} kilometer lang, {n2} kilometer bred. »UNESCO godkender ikke,« stod der i artiklen, »uden det nøjagtige areal.«

»Det nøjagtige areal,« gentog Sofia. Det udtryk dukkede op overalt. Det var det vigtigste udtryk.`,
        questionTemplate: `Parken er {n1} km lang og {n2} km bred. Hvad er arealet i km²?`,
        successMsgTemplate: `{answer} km²! Sofia finder ansøgningen og folder den ud. Det er et sted, der engang var der.`,
        storyBonus: `Artiklen var fra 1984. Den eneste artikel om dette sted. Den eneste, der nogensinde var skrevet.`
      },
      {
        title: 'Vejene på Kortet',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `Kortet viste mere end grænser. Det viste, hvordan ting hænger sammen — veje, ruter, forbindelser. En hel verden i miniature.

Landet: {n1} store trafikknudepunkter, {n2} buslinjer fra hvert. Plus {n3} nationale ekspreslinjer der krydser hele landet.

»Det er som et netværk,« sagde ANDERS stille. »Alle veje fører et sted hen.« Han sagde det til sig selv. Men Sofia hørte det.`,
        questionTemplate: `{n1} knudepunkter × {n2} buslinjer + {n3} ekspreslinjer. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} linjer! Alle veje peger mod det samme sted. Nu ved Sofia, hvorhen.`,
        storyBonus: `ANDERS sagde ingenting om, hvad han troede netværket ledte hen til. Han kendte svaret. Han ventede på, at Sofia fandt det.`
      },
      {
        title: 'Ekspeditionsholdet',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Koordinaterne var præcise. Det var det eneste, Sofia var sikker på.

{frac} af de {n1} udvalgte geografer fra universitetet ville komme med. De {n2} studerende fra ANDERS' klasse var også parate — rygsækkene pakket, kortene rullet, vejrtrækningen rolig.

Sofia talte dem op stille og sagde ingenting om, hvad hun troede de ville finde. Fordi hun ikke var sikker. Og fordi man ikke siger den slags ting, inden man er der.`,
        questionTemplate: `{frac} af {n1} geografer + {n2} studerende. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} ekspeditionsmedlemmer! De sætter af. Kortet fører dem fremad.`,
        storyBonus: `Sofia lagde kortet i sin jakkelomme, tæt mod hjertet. Det er det bedste sted at bære noget, man er bange for at miste.`
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
      progressLabel = `<span class="theme-bar-progress done">✓ Færdig${lvlStr}!</span>`;
    } else if (done > 0) {
      progressLabel = `<span class="theme-bar-progress">Kapitel ${done + 1} / 10</span>`;
    } else {
      progressLabel = `<span class="theme-bar-progress">Nyt eventyr</span>`;
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
      <button class="theme-card ${theme.id} ${isPerfect ? 'is-perfect' : ''}" data-action="select-theme" data-payload="${theme.id}" aria-label="Vælg ${theme.name}">
        <img class="theme-card-img" src="${getThemeHeroBg(theme.id)}" alt="" />
        <div class="theme-card-sweep" aria-hidden="true"></div>
        <div class="theme-card-grain" aria-hidden="true"></div>
        <div class="theme-card-glow"  aria-hidden="true"></div>
        <div class="theme-card-overlay" aria-hidden="true"></div>
        ${hasDone  ? '<span class="theme-card-badge done">✓</span>' : ''}
        ${hasStart ? `<span class="theme-card-badge progress">${done}/10</span>` : ''}
        ${hi > 0  ? `<span class="theme-card-hiscore">🏆 ${hi}</span>` : ''}
        ${isPerfect ? '<span class="theme-card-perfect" title="Perfect Run — gennemført uden fejl">⚡ PERFECT</span>' : ''}
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
        <div class="arena-rank" title="Din rang — total point: ${rank.points}">
          <div class="rank-tile" style="--rank-color:${rank.tier.color}; --rank-glow:${rank.tier.glow};">
            <span class="rank-tile-div">${rank.division}</span>
            <span class="rank-tile-letter">${rank.tier.short}</span>
          </div>
          <div class="rank-info">
            <span class="rank-name">${rank.tier.name.toUpperCase()}</span>
            <span class="rank-bar"><span class="rank-bar-fill" style="width:${rank.pct}%; background:linear-gradient(90deg, ${rank.tier.color}, ${rank.tier.glow});"></span></span>
            <span class="rank-points">${rank.next ? `${rank.points} / ${rank.next.min} pts` : `${rank.points} pts · MAKS`}</span>
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
          <div class="stat-chip stat-trophy" title="Total point på tværs af alle universer">
            <span class="stat-icon">🏆</span><span class="stat-num">${totalPoints}</span>
          </div>
          <div class="stat-chip stat-cards" title="Kort samlet">
            <span class="stat-icon">✦</span><span class="stat-num">${cardsCollected}<span class="stat-num-total">/80</span></span>
          </div>
          <div class="stat-chip stat-streak" title="Længste streak nogensinde">
            <span class="stat-icon">🔥</span><span class="stat-num">${bestStreak}</span>
          </div>
          <button class="sound-btn arena-sound-btn" id="sound-btn" data-action="toggle-sound" title="Lyd til/fra">${soundIcon}</button>
        </div>
      </header>

      <!-- Full-bleed game catalog -->
      <nav class="theme-catalog" aria-label="Vælg dit univers">${bars}</nav>
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

  const lvlNames   = ['Nem', 'Mellem', 'Svær', 'Nørd'];
  const lvlBadges  = ['★', '★★', '★★★', '★★★★'];
  const storyNames = ['Kort', 'Normal', 'Dyb'];
  const storyBadges = ['✦', '✦✦', '✦✦✦'];

  // ── SLOT 1: SVÆRHEDSGRAD ────────────────────────
  const mathOpts = [
    { name: 'Nem',   desc: 'Mindre tal — let at komme i gang.',         ex: `${MATH.plus[0][0].vars.n1} + ${MATH.plus[0][0].vars.n2}` },
    { name: 'Mellem',desc: 'Originaltallene fra historien.',             ex: `${MATH.plus[1][0].vars.n1} + ${MATH.plus[1][0].vars.n2}` },
    { name: 'Svær',  desc: 'Store tal og krævende brøker.',             ex: `${MATH.plus[2][0].vars.n1} + ${MATH.plus[2][0].vars.n2}` },
    { name: 'Nørd',  desc: 'Ekstra svær — til de skarpeste hjerner.',   ex: `${MATH.plus[3][0].vars.n1} + ${MATH.plus[3][0].vars.n2}` }
  ];
  const mathChoices = mathOpts.map((lv, i) => {
    const active = state.selectedLevel === i ? 'active' : '';
    return `<button class="loadout-tile ${active}" data-action="select-level" data-payload="${i}" aria-label="Sværhedsgrad ${lv.name}">
      <span class="lo-tile-rank">${lvlBadges[i]}</span>
      <span class="lo-tile-name">${lv.name}</span>
      <span class="lo-tile-meta">${lv.ex}</span>
    </button>`;
  }).join('');

  // ── SLOT 2: HISTORIE ────────────────────────────
  const storyOpts = [
    { name: 'Kort',   desc: 'Hurtig optakt. Ind i opgaven med det samme.' },
    { name: 'Normal', desc: 'Den fulde oplevelse. Anbefalet.' },
    { name: 'Dyb',    desc: 'Udvidet stemning med ekstra detaljer.' }
  ];
  const storyChoices = storyOpts.map((lv, i) => {
    const active = state.selectedStoryLevel === i ? 'active' : '';
    return `<button class="loadout-tile ${active}" data-action="select-story-level" data-payload="${i}" aria-label="Historieniveau ${lv.name}">
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
    return `<button class="loadout-tile lo-tile-type ${active} ${isRandom}" data-action="select-math-type" data-payload="${t.id}" aria-label="Matematik-type ${t.name}">
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

  const lvlSummary   = lvlChosen   ? `${lvlBadges[state.selectedLevel]} ${lvlNames[state.selectedLevel]}` : '— vælg —';
  const storySummary = storyChosen ? `${storyBadges[state.selectedStoryLevel]} ${storyNames[state.selectedStoryLevel]}` : '— vælg —';
  const typeMeta     = MATH_TYPES.find(t => t.id === currentType) || MATH_TYPES[0];
  const typeSummary  = typeChosen  ? `${typeMeta.icon} ${typeMeta.name}` : '— vælg —';

  // What this build means: short flavor sentence
  const buildFlavor = ready
    ? (currentType === 'mix'
        ? `Et tilfældigt mix af alle regnetyper — full chaos.`
        : `Et komplet ${typeMeta.name.toLowerCase()}-eventyr — 10 kapitler bygget op om ${typeMeta.name.toLowerCase()}.`)
    : `Vælg dine 3 slots for at starte.`;

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
          <span class="match-hero-eyebrow">MATCH SETUP</span>
          <h1 class="match-hero-title">${theme.name}</h1>
          <span class="match-hero-tagline">${theme.tagline || ''}</span>
        </div>
        <div class="match-hero-stats">
          <div class="match-stat">
            <span class="match-stat-label">HIGHSCORE</span>
            <span class="match-stat-val">${themeHi > 0 ? `🏆 ${themeHi}` : '— ingen —'}</span>
          </div>
          <div class="match-stat">
            <span class="match-stat-label">SAMLET</span>
            <span class="match-stat-val">✦ ${themeCardsCollected}<span class="match-stat-sub">/10</span></span>
          </div>
        </div>
      </header>

      <!-- Build-your-game loadout grid -->
      <main class="loadout-stack">

        <section class="loadout-slot ${lvlChosen ? 'is-set' : ''}">
          <div class="loadout-slot-head">
            <span class="loadout-num">01</span>
            <span class="loadout-cat">Sværhedsgrad</span>
            <span class="loadout-current">${lvlSummary}</span>
          </div>
          <div class="loadout-tiles four-up">${mathChoices}</div>
        </section>

        <section class="loadout-slot ${storyChosen ? 'is-set' : ''}">
          <div class="loadout-slot-head">
            <span class="loadout-num">02</span>
            <span class="loadout-cat">Historie</span>
            <span class="loadout-current">${storySummary}</span>
          </div>
          <div class="loadout-tiles three-up">${storyChoices}</div>
        </section>

        <section class="loadout-slot ${typeChosen ? 'is-set' : ''}">
          <div class="loadout-slot-head">
            <span class="loadout-num">03</span>
            <span class="loadout-cat">Matematik-mode</span>
            <span class="loadout-current">${typeSummary}</span>
          </div>
          <div class="loadout-tiles seven-up">${typeChoices}</div>
        </section>

      </main>

      <!-- Sticky deploy bar -->
      <footer class="match-deploy">
        <div class="match-deploy-summary">
          <span class="match-deploy-label">DIN BUILD</span>
          <span class="match-deploy-build">${lvlSummary} <span class="match-deploy-sep">·</span> ${storySummary} <span class="match-deploy-sep">·</span> ${typeSummary}</span>
          <span class="match-deploy-flavor">${buildFlavor}</span>
        </div>
        <button class="deploy-btn ${ready ? 'ready' : ''}" data-action="start-adventure" ${ready ? '' : 'disabled'} aria-disabled="${!ready}">
          <span class="deploy-btn-label">${ready ? 'Deploy' : 'Vælg alle 3'}</span>
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
  const levelName  = ['Nem', 'Mellem', 'Svær', 'Nørd'][state.selectedLevel];
  const storyLabel = ['Kort', 'Normal', 'Dyb'][state.selectedStoryLevel ?? 1];
  const typeMeta   = MATH_TYPES.find(t => t.id === (state.selectedMathType || 'mix')) || MATH_TYPES[0];
  const typeLabel  = `${typeMeta.icon} ${typeMeta.name}`;
  const nextLabel = isLast ? 'Se afslutningen →' : 'Næste kapitel →';

  // Build story + question. Arc chapters use {q,story,ok}; original chapters use templates.
  const storyTemplate = isOverride ? arcCh.story : origCh.storyTemplate;
  const questionTemplate = isOverride ? arcCh.q  : origCh.questionTemplate;
  const story    = applyTemplate(storyTemplate, mathData.vars);
  const question = applyTemplate(questionTemplate, mathData.vars);
  const chapterTitle = isOverride ? arcCh.title : origCh.title;
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
      <span class="ch-phase-tag">📖 Historien</span>
      <h2 class="ch-title">${chapterTitle}</h2>
      <div class="story-text">${storyParagraphs}</div>
      <button class="ch-continue-btn" data-action="read-story-done">
        Videre til opgaven →
      </button>
    </div>`;

  const mathPanel = `
    <div class="ch-panel ch-panel-math">
      <button class="back-to-story-btn" data-action="back-to-story" type="button">← Læs historien igen</button>
      <span class="ch-phase-tag math">🔢 Opgaven</span>
      <p class="question-text">${question}</p>
      <div class="math-note">
        <span class="math-note-label">Tænkeidé</span>
        <span class="math-note-body">${mathNote}</span>
      </div>
      <form class="answer-form" id="answer-form" novalidate>
        <input
          type="text"
          id="answer-input"
          class="answer-input"
          placeholder="Skriv dit svar…"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          inputmode="decimal"
          ${state.answered ? 'readonly' : ''}
        />
        <button type="submit" class="submit-btn" ${state.answered ? 'disabled' : ''}>Tjek svar</button>
      </form>
      <div class="feedback" id="feedback"></div>
      <div class="answer-explanation" id="answer-explanation"></div>
      <div class="hint-section ${state.hintOpen ? 'open' : ''}" id="hint-section">
        <div class="hint-box">
          <div class="hint-title">Tænkevej</div>
          ${hintSteps}
        </div>
      </div>
      <div class="card-actions">
        <button class="hint-btn" data-action="toggle-hint" id="hint-btn">
          ${state.hintOpen ? 'Skjul tænkevej' : 'Vis tænkevej'}
        </button>
        <button class="skip-btn ${state.wrongCount >= 4 ? 'visible' : ''}" data-action="skip-chapter" id="skip-btn">
          Vis svaret — ingen collectible
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
        <button class="back-btn" data-action="go-home">← Temaer</button>
        <span class="ch-meta">KAPITEL ${n} AF 10 &nbsp;·&nbsp; ${theme.icon} ${theme.name} &nbsp;·&nbsp; ${stars} ${levelName} &nbsp;·&nbsp; 📖 ${storyLabel} &nbsp;·&nbsp; ${typeLabel}${state.streak >= 2 ? `&nbsp;·&nbsp;<span class="streak-badge active" id="streak-display">🔥 ${state.streak}</span>` : `<span class="streak-badge hidden" id="streak-display">🔥 ${state.streak}</span>`}</span>
        <div class="ch-score-cluster">
          <span class="ch-score-chip" id="score-chip" title="Din score lige nu">💎 <strong>${state.sessionScore}</strong></span>
          ${state.previousHighscore > 0 ? `<span class="ch-highscore-chip ${state.sessionScore > state.previousHighscore ? 'beat' : ''}" title="Highscore at slå">🏆 ${state.previousHighscore}</span>` : ''}
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
  const scorePanel = `
    <div class="complete-score-panel ${isNew ? 'new-highscore' : ''}">
      ${isNew ? `<div class="score-banner">🏆 NY HIGHSCORE!</div>` : (prevHi > 0 ? `<div class="score-banner muted">Din runde</div>` : `<div class="score-banner muted">Første runde — sæt din highscore!</div>`)}
      <div class="score-final">
        <span class="score-label">Din score</span>
        <span class="score-value">${finalScore}</span>
      </div>
      ${prevHi > 0 ? `
        <div class="score-prev">
          <span class="score-prev-label">Tidligere highscore</span>
          <span class="score-prev-value">${prevHi}</span>
        </div>
        <div class="score-diff ${diff > 0 ? 'pos' : (diff < 0 ? 'neg' : 'eq')}">
          ${diff > 0 ? `▲ +${diff} point` : (diff < 0 ? `▼ ${diff} point — prøv igen for at slå den!` : `Lige op med din rekord`)}
        </div>
      ` : ''}
      <button class="replay-btn" data-action="replay-theme">Spil igen — slå din score</button>
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
        <button class="home-btn" data-action="go-home">← Vælg et nyt eventyr</button>
      </div>
      <div class="complete-collection">
        <div class="coll-title">Din samling · ${(theme.collectibles || []).filter((_, i) => state.collected.has(`${state.theme}_${i}`)).length}/10 ulåst</div>
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
  'Ikke helt — men du er på rette spor. Prøv igen!',
  'Næsten! Kig på tænkevej-knappen nedenfor.',
  'Det er ikke den rigtige kode. Læs opgaven langsomt og prøv igen.',
  'Hm — ikke den. Du kan klare det!'
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

    const successMsg = isOverride
      ? applyTemplate(arcCh.ok, { ...mathData.vars, answer: mathData.ans })
      : applyTemplate(origCh.successMsgTemplate, { ...mathData.vars, answer: mathData.ans });
    input.classList.add('correct');
    feedback.textContent = (isPerfect ? '⚡ Perfekt! ' : '✓ ') + successMsg;
    feedback.className   = 'feedback success' + (isPerfect ? ' perfect' : '');

    // Show math explanation
    const expEl = document.getElementById('answer-explanation');
    if (expEl) {
      const note = isOverride ? (TYPE_NOTES[lvlData] || SHARED_MATH_NOTES[origCh.idx]) : SHARED_MATH_NOTES[origCh.idx];
      expEl.innerHTML = `<span class="exp-label">Sådan tænker du det</span>${note}`;
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

  const badgeText = isRare ? '✦ SJÆLDEN ✦' : isPerfect ? '⚡ PERFEKT ⚡' : 'NY GENSTAND!';
  const modalClass = [isRare ? 'is-rare' : '', isPerfect ? 'is-perfect' : ''].filter(Boolean).join(' ');

  const cardNum   = String(chapterIdx + 1).padStart(2, '0');
  const setLabel  = `${theme.icon} ${theme.name.toUpperCase()} COLLECTION`;

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
          ${isPerfect ? '<div class="cm-perfect-tag">⚡ Første forsøg</div>' : ''}
        </div>
      </div>
      <div class="cm-dismiss">Tryk for at fortsætte</div>
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
    nextBtn.textContent = state.chapter === 9 ? 'Se afslutningen →' : 'Næste kapitel →';
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
      <div class="combo-flash-streak">🔥 ${streak} I TRÆK</div>
      <div class="combo-flash-mult">${multTxt} POINT</div>
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
    feedback.textContent = `Svaret var ${mathData.ans}. Det klarer du næste gang! 💪`;
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
