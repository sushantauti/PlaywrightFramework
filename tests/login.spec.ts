import { test, expect } from "../fixures/base-test.js"

test.describe('OrangeHRM Login UI Test', async () => {

  test('Verify Login ', async ({ page }) => {
    await expect(page).toHaveTitle('OrangeHRM');
    await expect(page.locator("xpath=//h5[text()='Login']")).toHaveText('Login');
    await page.locator("xpath=//input[@name='username']").fill('Admin');
    await page.locator("xpath=//input[@name='password']").fill('admin123');
    await page.locator("xpath=//button[@type='submit']").click();
    await expect(page.locator("xpath=//h6")).toHaveText('Dashboard');

  });

    test('Verify Invalid Login ', async ({ page }) => {
    await expect(page).toHaveTitle('OrangeHRM');
    await page.locator("xpath=//input[@name='username']").fill('Sushant');
    await page.locator("xpath=//input[@name='password']").fill('admin123');
    await page.locator("xpath=//button[@type='submit']").click();
    await expect(page.locator("xpath=//div[@class='orangehrm-login-form']//p[contains(@class,'oxd-alert-content-text')]"))
      .toHaveText('Invalid credentials');
  });

});