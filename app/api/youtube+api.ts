import puppeteer from 'puppeteer'

export async function GET(request: Request) {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Navigate the page to a URL
  await page.goto('https://developer.chrome.com/')

  // Set screen size
  await page.setViewport({ height: 1024, width: 1080 })

  // Type into search box
  await page.type('.devsite-search-field', 'automate beyond recorder')

  // Wait and click on first result
  const searchResultSelector = '.devsite-result-item-link'
  await page.waitForSelector(searchResultSelector)
  await page.click(searchResultSelector)

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector('text/Customize and automate')
  const fullTitle = await textSelector?.evaluate((el) => el.textContent)

  // await browser.close()
  browser.close()

  return Response.json({ title: `The title of this blog post is ${fullTitle}` })
}
