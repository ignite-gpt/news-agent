import { Page } from 'puppeteer-core'

export default async function youtubeFeed({ page }: { page: Page }) {
  await page.waitForSelector('#contents.ytd-rich-grid-renderer')

  const links = await page.evaluate(() => {
    const elements = document.querySelectorAll(
      '#contents.ytd-rich-grid-renderer ytd-rich-item-renderer a#thumbnail',
    )
    return Array.from(elements).map((el) => (el as HTMLAnchorElement).href)
  })

  const filteredLinks = links.filter((link) =>
    link.startsWith('https://www.youtube.com/watch?v='),
  )

  return filteredLinks
}
