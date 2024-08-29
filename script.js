const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true, // Facultatif: exécuter en mode non-headless pour déboguer
  });
  const page = await browser.newPage();
  await page.goto('https://forum.hardware.fr');
  console.log(await page.title()); // Affiche le titre de la page pour tester
  await browser.close();
})();
