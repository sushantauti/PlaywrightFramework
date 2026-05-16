import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('OrangeHRM Login', () => {
  test('Verify Title', async ({ page }) => {

    await expect(page).toHaveTitle('OrangeHRM');
  });

  test('Login User is on Login page', async ({ page }) => {
  await expect(page.locator("xpath=//h5[text()='Login']")).toHaveText('Login');
 });

 test('Login with invalid credentials', async ({ page }) => {
     await expect(page.locator("xpath=//input[@name='username']")).toHaveAttribute('placeholder', 'Username');
     await expect(page.locator("xpath=//input[@name='password']")).toHaveAttribute('placeholder', 'Password');
 });


});