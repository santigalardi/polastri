/*
  Genera la imagen Open Graph (public/og-image.png, 1200×630) que se muestra al
  compartir el sitio por WhatsApp, Instagram, etc. Usa la paleta y tipografías
  de marca, el logo y el retrato de la abogada.

  Regenerar (p. ej. tras cambiar el copy o el retrato):
    npm i -D playwright && npx playwright install chromium
    node scripts/gen-og-image.mjs
    npm uninstall playwright   # opcional: es un dep pesado, solo se usa acá
*/
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const logo = fs.readFileSync(path.join(ROOT, 'public/logo-nobg.png')).toString('base64');
const retrato = fs.readFileSync(path.join(ROOT, 'public/maria-laura-retrato.webp')).toString('base64');

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { width:1200px; height:630px; }
  .canvas {
    width:1200px; height:630px; position:relative; overflow:hidden;
    background:
      radial-gradient(circle at 78% 18%, rgba(237,208,171,0.18), transparent 42%),
      linear-gradient(135deg, #481717 0%, #631f1f 55%, #7e2828 100%);
    font-family:'Libre Baskerville', Georgia, serif; color:#fbf8f4;
    display:flex; align-items:stretch;
  }
  /* hairline marco interior */
  .frame { position:absolute; inset:34px; border:1px solid rgba(237,208,171,0.28); border-radius:8px; }
  .left { flex:1; padding:78px 0 78px 80px; display:flex; flex-direction:column; justify-content:space-between; z-index:2; }
  .brand { display:flex; align-items:center; gap:18px; }
  .brand img { height:78px; width:auto; filter:brightness(0) invert(1); }
  .brand .id { border-left:1px solid rgba(237,208,171,0.4); padding-left:18px; display:flex; flex-direction:column; }
  .brand .name { font-family:'Lora',serif; font-weight:600; font-size:30px; letter-spacing:-0.01em; line-height:1; }
  .brand .role { font-family:'Lora',serif; font-size:14px; text-transform:uppercase; letter-spacing:0.28em; color:#edd0ab; margin-top:8px; }
  .eyebrow { font-family:'Lora',serif; font-size:16px; text-transform:uppercase; letter-spacing:0.26em; color:#edd0ab; margin-bottom:22px; }
  h1 { font-family:'Lora',serif; font-weight:600; font-size:62px; line-height:1.08; letter-spacing:-0.02em; max-width:620px; }
  h1 .accent { color:#edd0ab; }
  .sub { font-size:21px; line-height:1.5; color:rgba(249,238,221,0.82); max-width:540px; margin-top:24px; }
  .foot { display:flex; align-items:center; gap:14px; font-size:17px; color:rgba(249,238,221,0.78); }
  .foot .dot { width:5px; height:5px; border-radius:50%; background:#edd0ab; }
  .right { width:430px; position:relative; z-index:2; display:flex; align-items:flex-end; justify-content:center; }
  .portrait-wrap { position:relative; margin:64px 56px 0 0; }
  .portrait-wrap::before { content:''; position:absolute; inset:-14px -14px 26px 14px; border:1px solid rgba(237,208,171,0.45); border-radius:14px; transform:rotate(2.5deg); }
  .portrait-wrap img { position:relative; width:320px; height:466px; object-fit:cover; border-radius:14px; box-shadow:0 24px 60px rgba(0,0,0,0.4); }
</style></head>
<body>
  <div class="canvas">
    <div class="frame"></div>
    <div class="left">
      <div class="brand">
        <img src="data:image/png;base64,${logo}" alt="">
        <div class="id">
          <span class="name">María Laura Polastri</span>
          <span class="role">Abogada</span>
        </div>
      </div>
      <div>
        <p class="eyebrow">24 años de ejercicio profesional</p>
        <h1>Soluciones jurídicas<br><span class="accent">con criterio y cercanía</span></h1>
        <p class="sub">Sucesiones, despidos y derecho de familia. Trato cercano y continuidad del caso hasta su efectiva resolución.</p>
      </div>
      <div class="foot">
        <span>Santos Lugares · Tigre</span><span class="dot"></span>
        <span>Presencial y online</span><span class="dot"></span>
        <span>studiopolastri.com.ar</span>
      </div>
    </div>
    <div class="right">
      <div class="portrait-wrap">
        <img src="data:image/webp;base64,${retrato}" alt="">
      </div>
    </div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.waitForTimeout(600); // asegurar render de fuentes
await page.locator('.canvas').screenshot({ path: path.join(ROOT, 'public/og-image.png') });
await browser.close();
console.log('OK -> public/og-image.png');
