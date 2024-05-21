import puppeteer from 'puppeteer-core'

import youtubeFeed from '@/src/automation/youtubeFeed'
import youtubeLogin from '@/src/automation/youtubeLogin'

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

  const isLoggedIn = await youtubeLogin({ page, password, username })
  if (!isLoggedIn) {
    await browser.close()
    throw new Error('Login failed')
  }

  const youtubeFeedLinks = await youtubeFeed({ page })

  await browser.close()

  return new Response(JSON.stringify({ youtubeFeed: youtubeFeedLinks }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
