import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.biomerieux.com/corp/en.html');
  await page.getByLabel('Main navigation').getByRole('link', { name: 'Who we are' }).click();
  await page.frameLocator('iframe[title="youtube video"]').getByLabel('Play', { exact: true }).click();
  await page.frameLocator('iframe[title="youtube video"]').getByLabel('Pause keyboard shortcut k').click();
  await page.getByRole('link', { name: 'Read more' }).click();
  await page.locator('#navigation-80f943e400').getByText('Our legacy 1963 to 2023, the').click();
  await page.getByRole('link', { name: 'Our legacy' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('input').click();
  await page.getByLabel('input').fill('webinar');
  await page.getByLabel('button search').click();
  await page.getByRole('link', { name: 'Adopt Revolutionary Mycoplasma Testing with Next Gen PCR', exact: true }).click();
 
});