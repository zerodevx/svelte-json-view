import { expect, test } from '@playwright/test'

test('depth=0', async ({ page }) => {
  await page.goto('/')
  const list = await page.locator('#basic ._jsonList ._jsonBkt').allTextContents()
  for (const i of list) expect(i).toBe('{...}')
})

test('depth=infinity', async ({ page }) => {
  await page.goto('/')
  await page.locator('#btn_i').click()
  await expect(page.getByText('nest0').locator('..').getByText('...')).toHaveCount(0)
})

test('default depth=1', async ({ page }) => {
  await page.goto('/')
  const list = await page.locator('#depth_1').getByText('{...}').allTextContents()
  expect(list.length).toBe(3)
})

test('special types', async ({ page }) => {
  await page.goto('/')
  const list = await page.locator('#special_types li ._jsonVal').allTextContents()
  const asserts = [
    '"Test special types"',
    'f () {...}',
    'Symbol(bar)',
    'null',
    'undefined',
    '""',
    '"\\""'
  ]
  for (let a = 0; a < list.length; a++) {
    expect(list[a]).toStrictEqual(asserts[a])
  }
})

test('red square brackets', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#red_square ._jsonBkt').first()).toHaveCSS('color', 'rgb(0, 0, 255)')
  await expect(page.locator('#red_square ._jsonBkt.isArray').first()).toHaveCSS(
    'color',
    'rgb(255, 0, 0)'
  )
})
