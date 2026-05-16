import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Login', () => {
  test('Verify Title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('OrangeHRM');
  });

  test('Login with valid credentials', async ({ page }) => {
  
  await page.goto('/');
  await expect(page.locator("xpath=//h5[text()='Login']")).toHaveText('Login');
 });

 test('Login with invalid credentials', async ({ page }) => {
     await page.goto('/');
     await expect(page.locator("xpath=//input[@name='username']")).toHaveAttribute('placeholder', 'Username');
     await expect(page.locator("xpath=//input[@name='password']")).toHaveAttribute('placeholder', 'Password');
 });


});