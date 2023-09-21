//const puppeteer = require("puppeteer");

async function convertToPDF(html) {
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.setContent(html);
  // const pdfBuffer = await page.pdf();
  // await browser.close();
  // return pdfBuffer;
  console.log("Hello");
  return html;
}

module.exports = { convertToPDF };
