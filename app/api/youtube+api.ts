import puppeteer from 'puppeteer-core'

export async function GET(request: Request) {
  const browser = await puppeteer.launch({
    channel: 'chrome',
    headless: true,
  })
  const page = await browser.newPage()
  await page.goto('https://developer.chrome.com/')
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

  // Close the browser
  await browser.close()

  return new Response(
    JSON.stringify({ title: `The title of this blog post is ${fullTitle}` }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )
}
