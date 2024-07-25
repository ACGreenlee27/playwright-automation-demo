import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.biomerieux.com/corp/en.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'YouTube' }).click();
  const page1 = await page1Promise;
  await page1.locator('#icon-button').getByLabel('Search').click();
  await page1.locator('input[name="query"]').click();
  await page1.locator('input[name="query"]').fill('webinar');
  await page1.locator('input[name="query"]').press('Enter');
});