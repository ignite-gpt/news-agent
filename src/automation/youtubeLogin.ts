import { setTimeout } from 'node:timers/promises'
import { Page } from 'puppeteer-core'

export default async function youtubeLogin({
  page,
  password,
  username,
}: {
  page: Page
  password: string
  username: string
}) {
  await page.goto('https://www.youtube.com/')

  // Click "Sign in"
  await page.locator('a[aria-label="Sign in"').click()
  // Enter email
  await page.locator('input[type="email"]').fill(username)
  // Click "Next"
  await page.locator('#identifierNext').click()

  try {
    await setTimeout(1000)
    // Click "Google Workspace account"
    await page.locator('#shadowDisambiguateSubmitOrganizational').click()
  } catch {
    console.log('No account disambiguation needed')
  }

  // Enter password
  await page.locator('input[type="password"]').fill(password)
  await setTimeout(1000)
  // Click "Next"
  await page.locator('#passwordNext').click()
  await page.waitForNavigation()

  // Check if login was successful by looking for known element
  const isLoggedIn = await page.evaluate(() => {
    return !!document.querySelector('#avatar-btn')
  })

  return isLoggedIn
}
