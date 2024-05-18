import puppeteer from 'puppeteer-core'

export async function GET(request: Request) {
  const browser = await puppeteer.launch({
    channel: 'chrome',
    headless: true,
  })
  const page = await browser.newPage()
  await page.goto('https://www.youtube.com/')

  const subtitleElement = await page.waitForSelector('#subtitle-container')
  const subtitle = await subtitleElement?.evaluate((el) =>
    el.textContent?.trim(),
  )

  return new Response(JSON.stringify({ subtitle }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
