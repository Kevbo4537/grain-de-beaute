import { chromium } from 'playwright';
const url = 'https://kevbo4537.github.io/grain-de-beaute/';
const sizes = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 1000 },
];
const browser = await chromium.launch({ headless: true });
for (const size of sizes) {
  const page = await browser.newPage({ viewport: { width: size.width, height: size.height }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle' });
  const metrics = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    bodyScrollWidth: document.body.scrollWidth,
    docScrollWidth: document.documentElement.scrollWidth,
    hasOverflow: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) > window.innerWidth + 1,
    brokenImages: [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src),
    navLinks: [...document.querySelectorAll('nav a')].map(a => a.textContent?.trim()),
    mobileBarVisible: getComputedStyle(document.querySelector('.mobile-bar')).display !== 'none',
  }));
  await page.screenshot({ path: `tmp-${size.name}.png`, fullPage: false });
  console.log(size.name, JSON.stringify(metrics));
  await page.close();
}
await browser.close();
