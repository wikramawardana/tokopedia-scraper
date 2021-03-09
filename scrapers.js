const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
    });
    await page.goto('https://www.tokopedia.com/seagate/seagate-new-backup-plus-slim-hardisk-eksternal-1tb-usb3-0-pcpn-hitam');
    const judul = await page.evaluate(() => {
        return document.querySelector('.css-v7vvdw').textContent;
    });
    const deskripsi = await page.evaluate(() => {
        return document.querySelector('.css-1gp8p6u').textContent;
    });
    
    console.log(`Title : ${judul}`);
    console.log('----------');
    console.log(`Deskripsi : ${deskripsi}`);
    // console.log("Title : " + JSON.stringify(judul));
    // console.log('----------');
    // console.log("Deskripsi : " + JSON.stringify(deskripsi));

    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();