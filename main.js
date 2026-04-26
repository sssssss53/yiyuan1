:root {
  --ink: #1b1b1b;
  --ink-soft: #4d4742;
  --paper: rgba(255, 252, 245, 0.84);
  --paper-solid: #fffaf0;
  --line: rgba(34, 31, 28, 0.14);
  --accent: #8b3f20;
  --accent-dark: #652a15;
  --shadow: 0 24px 70px rgba(19, 16, 13, 0.18);
}

* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  font-family: "Noto Serif SC", "Songti SC", "Microsoft YaHei", serif;
  color: var(--ink);
  background:
    radial-gradient(circle at 18% 12%, rgba(30, 29, 28, 0.24), transparent 16%),
    radial-gradient(circle at 82% 18%, rgba(0, 0, 0, 0.18), transparent 15%),
    radial-gradient(circle at 70% 85%, rgba(139, 63, 32, 0.16), transparent 20%),
    linear-gradient(125deg, rgba(252, 248, 236, 0.96), rgba(240, 233, 219, 0.95)),
    url("data:image/svg+xml,%3Csvg width='900' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.015' numOctaves='3' seed='8'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='table' tableValues='0 .28'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3Cpath d='M120 420 C260 300 340 350 460 220 S720 70 820 140' stroke='%232b2924' stroke-opacity='.22' stroke-width='48' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='195' cy='160' r='70' fill='%232b2924' fill-opacity='.08'/%3E%3C/svg%3E");
  background-size: cover, cover, cover, cover, 1200px 800px;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent), repeating-linear-gradient(90deg, rgba(40, 35, 30, .025) 0 1px, transparent 1px 8px);
  mix-blend-mode: multiply;
}

.shell {
  width: min(1160px, calc(100% - 32px));
  min-height: 100vh;
  margin: 0 auto;
  padding: 48px 0;
  display: grid;
  align-items: center;
}

.admin-shell { align-items: start; }
.glass {
  background: var(--paper);
  backdrop-filter: blur(16px);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  border-radius: 28px;
}

.auth-card {
  width: min(470px, 100%);
  margin: 0 auto;
  padding: 36px;
}

.brand-mark {
  width: 62px;
  height: 62px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--paper-solid);
  background: radial-gradient(circle at 30% 28%, #4a4944, #151514 65%);
  font-size: 28px;
  margin-bottom: 18px;
  box-shadow: inset 0 0 16px rgba(255,255,255,.12);
}

h1, h2, p { margin-top: 0; }
h1 { font-size: clamp(36px, 7vw, 72px); letter-spacing: .08em; margin-bottom: 8px; }
h2 { font-size: 24px; margin-bottom: 12px; }
.muted, .subtitle { color: var(--ink-soft); line-height: 1.7; }
.eyebrow { letter-spacing: .28em; color: var(--accent); font-size: 13px; font-weight: 700; }

.tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 28px 0 18px;
  padding: 6px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255,255,255,.36);
}
.tab, button, input, textarea { font: inherit; }
.tab, .ghost, .primary {
  border: 0;
  border-radius: 14px;
  cursor: pointer;
  transition: transform .16s ease, box-shadow .16s ease, background .16s ease;
}
.tab { padding: 11px 12px; background: transparent; color: var(--ink-soft); }
.tab.active { background: var(--ink); color: #fffdf6; }

.form-panel { display: none; }
.form-panel.active { display: block; }
label { display: block; margin: 14px 0 8px; color: var(--ink-soft); font-size: 14px; }
input, textarea {
  width: 100%;
  border: 1px solid rgba(32, 26, 22, 0.18);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.68);
  padding: 14px 16px;
  color: var(--ink);
  outline: none;
}
textarea { min-height: 120px; resize: vertical; }
input:focus, textarea:focus { border-color: rgba(139,63,32,.68); box-shadow: 0 0 0 4px rgba(139,63,32,.12); }
.primary {
  width: 100%;
  margin-top: 18px;
  padding: 14px 18px;
  color: #fffdf6;
  background: linear-gradient(135deg, var(--accent), var(--accent-dark));
  box-shadow: 0 12px 30px rgba(139, 63, 32, 0.24);
}
.primary:hover, .ghost:hover { transform: translateY(-1px); }
.ghost {
  padding: 11px 15px;
  color: var(--ink);
  background: rgba(255, 255, 255, .48);
  border: 1px solid var(--line);
}
.message { min-height: 22px; color: var(--accent-dark); margin: 16px 0 0; line-height: 1.6; }
.hidden { display: none !important; }

.app-grid, .admin-dashboard {
  display: grid;
  gap: 22px;
}
.hero {
  padding: 36px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
}
.hero h1 { margin-bottom: 4px; }
.user-tools { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; justify-content: flex-end; }
.chip {
  display: inline-flex;
  padding: 10px 14px;
  background: rgba(255,255,255,.58);
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--ink-soft);
}
.plans {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}
.plan-card { padding: 30px; position: relative; overflow: hidden; }
.plan-card::after {
  content: "";
  position: absolute;
  right: -40px;
  top: -40px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(20,20,20,.06);
}
.seal {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(139,63,32,.12);
  color: var(--accent-dark);
  margin-bottom: 16px;
}
.big { font-size: 22px; color: var(--ink-soft); }
.price { font-size: 52px; font-weight: 800; letter-spacing: -.03em; margin: 18px 0 8px; }
.price small { font-size: 17px; color: var(--ink-soft); font-weight: 400; }

.payment {
  padding: 28px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;
  align-items: center;
}
.notice {
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(139,63,32,.10);
  color: var(--accent-dark);
  line-height: 1.7;
}
.qr-frame {
  border-radius: 24px;
  padding: 14px;
  background: rgba(255,255,255,.82);
  border: 1px solid var(--line);
  position: relative;
}
.qr-frame img { width: 100%; display: block; border-radius: 18px; }
.amount-badge {
  position: absolute;
  right: 24px;
  bottom: 24px;
  padding: 8px 13px;
  border-radius: 999px;
  background: var(--ink);
  color: #fff;
  font-weight: 700;
}
.orders { padding: 28px; }
.section-head { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
.orders-list { display: grid; gap: 12px; }
.order-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  background: rgba(255,255,255,.46);
  border: 1px solid var(--line);
}
.status { font-weight: 700; color: var(--accent-dark); }
.table-card { padding: 28px; }
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; }
th, td { text-align: left; padding: 12px; border-bottom: 1px solid var(--line); vertical-align: top; }
th { color: var(--ink-soft); font-weight: 700; }
.admin-orders { display: grid; gap: 18px; }
.admin-order-card {
  display: grid;
  grid-template-columns: minmax(260px, 1fr) minmax(320px, 1.2fr);
  gap: 18px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(255,255,255,.46);
}
.meta p { margin: 0 0 8px; line-height: 1.55; }
.tiny { font-size: 13px; color: var(--ink-soft); }

@media (max-width: 820px) {
  .shell { width: min(100% - 20px, 1160px); padding: 20px 0; }
  .auth-card, .hero, .plan-card, .payment, .orders, .table-card { padding: 22px; }
  .hero, .payment, .admin-order-card { grid-template-columns: 1fr; display: grid; }
  .plans { grid-template-columns: 1fr; }
  .payment { grid-template-columns: 1fr; }
  h1 { font-size: 40px; }
}

.node-box {
  max-width: 680px;
  margin-top: 12px;
  padding: 12px;
  border: 1px solid rgba(38, 52, 68, 0.18);
  background: rgba(255, 255, 255, 0.72);
  white-space: pre-wrap;
  word-break: break-word;
  border-radius: 12px;
  font-size: 13px;
  line-height: 1.6;
}
