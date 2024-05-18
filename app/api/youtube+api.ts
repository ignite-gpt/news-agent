import { setTimeout } from 'node:timers/promises'
import puppeteer from 'puppeteer-core'

const username = process.env.EXPO_PUBLIC_YOUTUBE_USER ?? ''
const password = process.env.EXPO_PUBLIC_YOUTUBE_PASSWORD ?? ''

export async function GET(request: Request) {
  const browser = await puppeteer.launch({
    channel: 'chrome',
    headless: false,
  })
  const page = await browser.newPage()
  page.setDefaultTimeout(5000)
  page.setDefaultNavigationTimeout(10000)
  await page.goto('https://www.youtube.com/')

  const searchResultSelector = 'a[aria-label="Sign in"'
  await page.waitForSelector(searchResultSelector)
  await page.click(searchResultSelector)
  await page.waitForSelector('input[type="email"]')
  await page.type('input[type="email"]', username)
  await page.click('#identifierNext')

  // Wait for potential "Choose an account" case
  try {
    const workspaceAccountSelector = '#shadowDisambiguateSubmitOrganizational'
    await page.waitForSelector(workspaceAccountSelector, {
      timeout: 5000,
      visible: true,
    })
    await setTimeout(1000)
    await page.click(workspaceAccountSelector)
  } catch {
    console.log('No account disambiguation needed')
  }

  // Wait for password input to load and type password
  await page.waitForSelector('input[type="password"]', { visible: true })
  await page.type('input[type="password"]', password)
  await setTimeout(1000)
  await page.waitForSelector('#passwordNext', { visible: true })
  await page.click('#passwordNext')

  // Wait for navigation to complete
  await page.waitForNavigation()

  // Check if login was successful by looking for a known element on the homepage
  const isLoggedIn = await page.evaluate(() => {
    return !!document.querySelector('#avatar-btn')
  })

  await browser.close()

  return new Response(JSON.stringify({ isLoggedIn }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
