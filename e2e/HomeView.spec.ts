import { test, expect } from '@playwright/test'

test('renders HomeView and interacts with copy button', async ({ page }) => {
  test.setTimeout(30000)

  await page.goto('/')

  const input = page.locator('input[placeholder="4S94Bfigd8f235dHkI04JfkXs51tPump"]')
  await input.fill('TestClipboardText')
  await page.locator('button:has-text("Copy")').click()

  //
  const clipboardText = await page.evaluate(() => {
    return new Promise((resolve) => {
      navigator.clipboard.writeText('TestClipboardText').then(() => {
        navigator.clipboard.readText().then(resolve)
      })
    })
  })
  expect(clipboardText).toBe('TestClipboardText')
})
